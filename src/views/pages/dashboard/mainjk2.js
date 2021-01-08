import React from "react"
import Iframe from "react-iframe"
import {Row, Col, Card, CardBody, CardTitle, Progress, Button, Badge} from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import classnames from "classnames"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import DehumJk2L1 from "../dashboard/jk2/l1/dehum"
import BusbarJk2L1 from "../dashboard/jk2/l1/busbar"
import CposJk2Ut from "../dashboard/jk2/ut/cpos"
import axios from "axios"





class Mainjktwo extends React.Component {

  state = {
    active: "1",
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
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }


  componentDidMount() {
    this.getCpos();
    this.interval = setInterval(() => {
      this.getCpos();
    }, 20000);
  }


  getCpos() {
    let urlDehumL1 = `http://10.2.222.129:9006/api/dehum/jk/2/level/l1`;
    let urlBusbarL1 = `http://10.2.222.129:9006/api/busbar/jk/2/level/l1`;

    let urlDehumL2 = `http://10.2.222.129:9006/api/dehum/jk/2/level/l2`;
    let urlBusbarL2 = `http://10.2.222.129:9006/api/busbar/jk/2/level/l2`;

    let urlDehumL3 = `http://10.2.222.129:9006/api/dehum/jk/2/level/l3`;
    let urlBusbarL3 = `http://10.2.222.129:9006/api/busbar/jk/2/level/l3`;

    let urlCpos = `http://10.2.222.129:9006/api/cpos/jk/2/level/ut`;

    const requestOne = axios.get(urlDehumL1);
    const requestTwo = axios.get(urlBusbarL1);
    const requestThree = axios.get(urlDehumL2);
    const requestFour = axios.get(urlBusbarL2);
    const requestFive = axios.get(urlDehumL3);
    const requestSix = axios.get(urlBusbarL3);
    const requestSeven = axios.get(urlCpos);


    axios
      .all([requestOne,requestTwo,requestThree,requestFour,requestFive,requestSix,requestSeven])
      .then(
        axios.spread(
          (...responses) => {

            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responesThree = responses[2];
            const responesFour = responses[3];
            const responesFive = responses[4];
            const responesSix = responses[5];
            const responesSeven = responses[6];



            const alertsOne = responseOne.data.row.filter(data => data.alert === true);
            const alertsTwo = responseTwo.data.row.filter(data => data.alert === true);

            const alertsThree = responesThree.data.row.filter(data => data.alert === true);
            const alertsFour = responesFour.data.row.filter(data => data.alert === true);

            const alertsFive = responesFive.data.row.filter(data => data.alert === true);
            const alertsSix = responesSix.data.row.filter(data => data.alert === true);

            const alertsSeven = responesSeven.data.row.filter(data => data.alert === true);

            const dataCountL1 = alertsOne.length+alertsTwo.length;
            const dataCountL2 = alertsThree.length+alertsFour.length;
            const dataCountL3 = alertsFive.length+alertsSix.length;
            const dataCountUt = alertsSeven.length;







            this.setState({dataCountL1});
            this.setState({dataCountL2});
            this.setState({dataCountL3});
            this.setState({dataCountUt});




          }))
      .catch((e) =>
      {
        urlDehumL1 = e.response;
      }) ;
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    let {dataCountL1,dataCountL2,dataCountL3,dataCountUt} = this.state;
    return (

      <Card>




        <CardTitle className={dataCountL1 + dataCountL2 + dataCountL3 + dataCountUt === 1 ? ' dashboard-warning' :
          dataCountL1 + dataCountL2 + dataCountL3 + dataCountUt > 1 ? ' dashboard-danger' :
            'dashboard-normal'}>JK-1</CardTitle>








        <CardBody className="pl5">


          <Nav tabs className="nav-justified">

            <NavItem>
              <Badge pill color="danger" className={dataCountL1 > 0 ? 'badge-up' : 'hilang' }>
                {dataCountL1}
              </Badge>
              <NavLink

                className={classnames({
                  active: this.state.active === "1"
                })}
                onClick={() => {
                  this.toggle("1")
                }}
              >
                L1
              </NavLink>

            </NavItem>
            <NavItem>
              <Badge pill color="danger" className={dataCountL2 > 0 ? 'badge-up' : 'hilang' }>
                {dataCountL2}
              </Badge>
              <NavLink
                className={classnames({
                  active: this.state.active === "2"
                })}
                onClick={() => {
                  this.toggle("2")
                }}
              >
                L2
              </NavLink>
            </NavItem>
            <NavItem>
              <Badge pill color="danger" className={dataCountL3 > 0 ? 'badge-up' : 'hilang' }>
                {dataCountL3}
              </Badge>
              <NavLink
                className={classnames({
                  active: this.state.active === "3"
                })}
                onClick={() => {
                  this.toggle("3")
                }}
              >
                L3
              </NavLink>
            </NavItem>
            <NavItem>
              <Badge pill color="danger" className={dataCountUt > 0 ? 'badge-up' : 'hilang' }>
                {dataCountUt}
              </Badge>
              <NavLink
                className={classnames({
                  active: this.state.active === "4"
                })}
                onClick={() => {
                  this.toggle("4")
                }}
              >
                UT
              </NavLink>
            </NavItem>
          </Nav>




          <TabContent activeTab={this.state.active}>
                <TabPane tabId="1">

                  <div>

                    <div>

                      <Col lg="12" md="6" sm="12" >
                        <Card className="mb-0">
                          {/*<CardTitle className="title-equipment-main">MECHANICAL</CardTitle>*/}
                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <DehumJk2L1 />



                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          {/*<CardTitle className="title-equipment-main">ELECTRICAL</CardTitle>*/}

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          <BusbarJk2L1 />


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>




                        </Card>
                      </Col>



                    </div>
                  </div>
                </TabPane>
              </TabContent>



              <TabContent activeTab={this.state.active}>
                <TabPane tabId="2">

                  <div>

                    <div>

                      <Col lg="12" md="6" sm="12" >
                        <Card className="mb-0">
                          {/*<CardTitle className="title-equipment-main">MECHANICAL</CardTitle>*/}
                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <DehumJk2L1 />



                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          {/*<CardTitle className="title-equipment-main">ELECTRICAL</CardTitle>*/}

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          <BusbarJk2L1 />


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>




                        </Card>
                      </Col>



                    </div>
                  </div>
                </TabPane>
              </TabContent>



              <TabContent activeTab={this.state.active}>
                <TabPane tabId="3">

                  <div>

                    <div>

                      <Col lg="12" md="6" sm="12" >
                        <Card className="mb-0">
                          {/*<CardTitle className="title-equipment-main">MECHANICAL</CardTitle>*/}
                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <DehumJk2L1 />



                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          {/*<CardTitle className="title-equipment-main">ELECTRICAL</CardTitle>*/}

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          <BusbarJk2L1 />


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>




                        </Card>
                      </Col>



                    </div>
                  </div>
                </TabPane>
              </TabContent>



              <TabContent activeTab={this.state.active}>
                <TabPane tabId="4">

                  <div>

                    <div>

                      <Col lg="12" md="6" sm="12" >
                        <Card className="mb-0">
                          {/*<CardTitle className="title-equipment-main">MECHANICAL</CardTitle>*/}
                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <CposJk2Ut />


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                            <p className="fonthalfrem font-mati">0 </p>
                          </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          {/*<CardTitle className="title-equipment-main">ELECTRICAL</CardTitle>*/}

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>

                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>



                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>


                          <Row>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>

                            <Col lg="2" md="6" sm="12" className="text-center pl0">
                              <p className="fonthalfrem font-mati">0 </p>
                            </Col>
                          </Row>




                        </Card>
                      </Col>



                    </div>
                  </div>
                </TabPane>
              </TabContent>


            </CardBody>
          </Card>



    )
  }
}



export default Mainjktwo
