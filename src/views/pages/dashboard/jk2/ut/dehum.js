import React from "react"
import {Card, CardBody, Row, Col, CardTitle, Button} from "reactstrap"

import axios from "axios"
import {Link} from "react-router-dom";

class DehumJk1L1 extends React.Component {
  state = {
    item_1:[],
    item_2:[],
    item_3:[],
    item_4:[],
    item_5:[],
    item_6:[],


  };


  componentDidMount() {
    this.getCpos();
    this.interval = setInterval(() => {
      this.getCpos();
    }, 10000);
  }


  getCpos() {
    let url = `http://10.2.222.129:9010/api/CRAC/dashboard
`;
    axios
      .get(url)
      .then(response => {
        const item_1 = response.data.row[0];
        const item_2 = response.data.row[1];
        const item_3 = response.data.row[2];
        const item_4 = response.data.row[3];
        const item_5 = response.data.row[5];
        const item_6 = response.data.row[6];





        this.setState({item_1});
        this.setState({item_2});
        this.setState({item_3});
        this.setState({item_4});
        this.setState({item_5});
        this.setState({item_6});




      })
      .catch((e) =>
      {
        url = e.response;
      });
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {item_1,item_2,item_3,item_4,item_5,item_6} = this.state;
    return (
      <Row>

        <Col lg="2" md="6" sm="12" className="text-center pl0" >
          <p className="fonthalfrem font-title-left">DEHUM</p>
        </Col>
        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <p className="fonthalfrem font-normal">0 </p>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <p className="fonthalfrem font-normal">0 </p>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <p className="fonthalfrem font-normal">0 </p>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <p className="fonthalfrem font-normal">0 </p>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <p className="fonthalfrem font-normal">0 </p>
        </Col>
      </Row>
    )
  }
}

export default DehumJk1L1
