import React    from "react";
import './AddressList.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "isomorphic-fetch"
class AddressList extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      address:[],
    }
   
  }
  componentDidMount(){
    if(this.props.addressList!== undefined)
    this.setState({address : this.props.addressList});
  }
  componentWillReceiveProps(props){
    if (props.addressList !== this.state.address) {
      this.setState({ address: props.addressList });
    }
  }
 
  render() {
    return (
      <List listAddresses={this.state.address}/>
    );
  }
}

function List(props){
  const listAddresses = props.listAddresses;
  const listItems = listAddresses.map((address,i) => 
      <Row key={i}>
          <Col className="list-item" md={{ span: 6, offset: 3 }}><p>{address.address}</p><p>{address.address}</p></Col>
      </Row>
  );
  return (
    <Container>
      {listItems}
    </Container>
  );
}

export default AddressList;


