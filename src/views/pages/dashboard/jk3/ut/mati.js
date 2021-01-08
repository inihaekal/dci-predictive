import React from "react"
import {Card, CardBody, Row, Col, CardTitle, Button} from "reactstrap"
import {Badge} from "reactstrap"
import axios from "axios"

class CposJk1Ut extends React.Component {
  state = {
    item_1:[],
    item_2:[],
    item_3:[],
    item_4:[],
    item_5:[],
    item_6:[],
    item_7:[],
    item_8:[],
    item_9:[],
    item_10:[],
    item_11:[],
    item_12:[],


  };


    componentDidMount() {
      this.getCpos();
      this.interval = setInterval(() => {
        this.getCpos();
      }, 20000);
    }


    getCpos() {
      let url = `http://10.2.222.129:9006/api/cpos/jk/1/level/ut
  `;
      axios
        .get(url)
        .then(response => {
          const item_1 = response.data.row[0];
          const item_2 = response.data.row[1];
          const item_3 = response.data.row[2];
          const item_4 = response.data.row[3];
          const item_5 = response.data.row[4];
          const item_6 = response.data.row[5];
          const item_7 = response.data.row[6];
          const item_8 = response.data.row[7];
          const item_9 = response.data.row[8];
          const item_10 = response.data.row[9];
          const item_11 = response.data.row[10];
          const item_12 = response.data.row[11];






          this.setState({item_1});
          this.setState({item_2});
          this.setState({item_3});
          this.setState({item_4});
          this.setState({item_5});
          this.setState({item_6});
          this.setState({item_7});
          this.setState({item_8});
          this.setState({item_9});
          this.setState({item_10});
          this.setState({item_11});
          this.setState({item_12});




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
    let {item_1,item_2,item_3,item_4,item_5,item_6,item_7,item_8,item_9,item_10,item_11,item_12} = this.state;
    return (
      <Row>

        <Col lg="2" md="6" sm="12" className="text-center pl0" >
<div className="fonthalfrem font-title-left">
          <p className="">CPOS</p>
</div>
        </Col>
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
          <p className="fonthalfrem font-normal">{item_5.variableName}</p>
        </Col>
      </Row>
    )
  }
}

export default CposJk1Ut
