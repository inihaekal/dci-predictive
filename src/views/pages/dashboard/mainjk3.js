import React from "react"
import Iframe from "react-iframe"
import {Row, Col, Card, CardBody, CardTitle, Progress, Button} from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import classnames from "classnames"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import AhuJk3L1 from "./jk3/l1/ahu";
import AhuJk3L2 from "./jk3/l2/ahu";
import AhuJk3L3 from "./jk3/l3/ahu";
import DehumJk3l1 from "./jk3/l1/dehum";
import DehumJk3l2 from "./jk3/l2/dehum";
import DehumJk3l3 from "./jk3/l3/dehum";
import CposJk3Ut from "./jk3/ut/cpos"
import {Badge} from "reactstrap"
import axios from "axios";





class Mainjkthree extends React.Component {

  state = {
    active: "1" ,
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
    item_13:[],
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
    let url = `http://10.2.222.129:9006/api/summary/level
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

          <Card>




            <CardTitle className={item_9.alert + item_10.alert + item_11.alert + item_12.alert === 1 ? ' dashboard-warning' :
              item_9.alert + item_10.alert + item_11.alert + item_12.alert > 1 ? ' dashboard-danger' :
                'dashboard-normal'}>JK-3</CardTitle>








            <CardBody className="pl5">


              <Nav tabs className="nav-justified">

                <NavItem>
                  <Badge pill color="danger" className={item_9.alert > 0 ? 'badge-up' : 'hilang' }>
                    {item_9.alert}
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
                  <Badge pill color="danger" className={item_10.alert > 0 ? 'badge-up' : 'hilang' }>
                    {item_10.alert}
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
                  <Badge pill color="danger" className={item_11.alert > 0 ? 'badge-up' : 'hilang' }>
                    {item_11.alert}
                  </Badge>
                  <NavLink
                    className={classnames({
                      active: this.state.active === "3"
                    })}
                    onClick={() => {
                      this.toggle("3")
                    }}
                  >
                    L4
                  </NavLink>
                </NavItem>


                <NavItem>
                  <Badge pill color="danger" className={item_12.alert > 0 ? 'badge-up' : 'hilang' }>
                    {item_12.alert}
                  </Badge>
                  <NavLink
                    className={classnames({
                      active: this.state.active === "5"
                    })}
                    onClick={() => {
                      this.toggle("5")
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

                          <DehumJk3l1 />



                          <AhuJk3L1 />


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

                          <DehumJk3l2 />



                          <AhuJk3L2 />


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

                          <DehumJk3l3 />



                          <AhuJk3L3 />


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

              <TabContent activeTab={this.state.active}>
                <TabPane tabId="5">

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


                          <CposJk3Ut />


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



export default Mainjkthree
