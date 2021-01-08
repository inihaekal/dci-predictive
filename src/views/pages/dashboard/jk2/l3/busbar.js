import React from "react"
import {Card, CardBody, Row, Col, CardTitle, Button} from "reactstrap"
import {Badge} from "reactstrap"
import axios from "axios"

class BusbarJk2L3 extends React.Component {
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
    }, 20000);
  }


  getCpos() {
    let url = `http://10.2.222.129:9006/api/busbar/jk/2/level/l3
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

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <div className={item_1.alert === true ? ' font-alert fonthalfrem ' : 'font-normal fonthalfrem '}>
            <Badge pill color="danger" className={item_1.alert === true ? ' badge-up badge-counter ' : 'hilang '}>
              {item_1.count}
            </Badge>
            <p className="dalem  ">{item_1.variableName}</p>
          </div>
        </Col>


        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <div className={item_2.alert === true ? ' font-alert fonthalfrem ' : 'font-normal fonthalfrem '}>
            <Badge pill color="danger" className={item_2.alert === true ? ' badge-up badge-counter ' : 'hilang '}>
              {item_2.count}
            </Badge>
            <p className="dalem  ">{item_2.variableName}</p>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <div className={item_3.alert === true ? ' font-alert fonthalfrem ' : 'font-normal fonthalfrem '}>
            <Badge pill color="danger" className={item_3.alert === true ? ' badge-up badge-counter ' : 'hilang '}>
              {item_3.count}
            </Badge>
            <p className="dalem  ">{item_3.variableName}</p>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <div className={item_4.alert === true ? ' font-alert fonthalfrem ' : 'font-normal fonthalfrem '}>
            <Badge pill color="danger" className={item_4.alert === true ? ' badge-up badge-counter ' : 'hilang '}>
              {item_4.count}
            </Badge>
            <p className="dalem  ">{item_4.variableName}</p>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12" className="text-center pl0">
          <div className={item_5.alert === true ? ' font-alert fonthalfrem ' : 'font-normal fonthalfrem '}>
            <Badge pill color="danger" className={item_5.alert === true ? ' badge-up badge-counter ' : 'hilang '}>
              {item_5.count}
            </Badge>
            <p className="dalem  ">{item_5.variableName}</p>
          </div>
        </Col>

      <Col lg="2" md="6" sm="12" className="text-center pl0">
      <p className="fonthalfrem font-normal">{item_6.variableName}</p>
  </Col>
  </Row>
    )
  }
}

export default BusbarJk2L3
