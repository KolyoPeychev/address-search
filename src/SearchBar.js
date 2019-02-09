import React from "react";
import './SearchBar.css';
import { Form, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
const API_SUGGESTIONS_URL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest';
const API_RESULTS_URL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates';
const LANGUAGE = 'bg';
const CATEGORIES= 'POI,Address'
const FIELDS ="Place_addr";
const FORMAT = 'pjson'
library.add(faSearch);

const AsyncTypeahead = asyncContainer(Typeahead);

class SearchBar extends React.Component {
  
  state = {
    isLoading: false,
    query: '',
    options: [],
    results: [],
  }
  getSuggestions = (query) => {
    this.setState({isLoading: true});
    axios.get(API_SUGGESTIONS_URL,
      {
        params: {
          countryCode: LANGUAGE,
          category: CATEGORIES,
          f: FORMAT,
          text: query
        }
      })
      .then(res => {
        const searchResult = res.data;
        this.setState({isLoading: false, options: searchResult.suggestions });
      })
  }
  getResults = () => {
    axios.get(API_RESULTS_URL,
      {
        params: {
          countryCode: LANGUAGE,
          langCode: LANGUAGE,
          category: CATEGORIES,
          outFields : FIELDS,
          f: FORMAT,
          SingleLine: this.state.query
        }
      })
      .then(res => {
        const searchResult = res.data;
        this.setState({
          results: searchResult.candidates
        });
        this.props.onResult(searchResult.candidates);
      })
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.getResults();
  }

  render() {
    return (
      <Form className="SearchBar" onSubmit={this.onFormSubmit}>
        <AsyncTypeahead
          className="mr-sm-2 asynctypeahead-flex"
          placeholder="Search" 
          isLoading={this.state.isLoading}
          onChange={(selected) => {
            if (selected.length > 0)
              this.setState({
                query: selected[0].text
              });
          }}
          onInputChange={value => {
            this.setState({
              query: value
            });
          }}
          onSearch={query => {
            this.getSuggestions(query);
          }}
          labelKey={option => option.text}
          options={this.state.options}> 
        </AsyncTypeahead>
        <Button variant="primary" onClick={this.onFormSubmit}>
            <FontAwesomeIcon icon="search" />
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
