import React from "react"
import {Row, Col, Card, CardBody, CardTitle, Progress, Button} from "reactstrap"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import classnames from "classnames"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import DehumJk1L1 from "../dashboard/jk1/l1/dehum"
import DehumJk1L3 from "../dashboard/jk1/l3/dehum"
import CracJk1L1 from "../dashboard/jk1/l1/crac"
import CracJk1L2 from "../dashboard/jk1/l2/crac"
import CracJk1L3 from "../dashboard/jk1/l3/crac"
import CposJk1Ut from "../dashboard/jk1/ut/cpos"
import axios from "axios"
import {Badge} from "reactstrap"





class Mainjkone extends React.Component {

  state = {
    active: "1",
    dataCountL1:[],
    dataCountL2:[],
    dataCountL3:[],
    dataCountUt:[],
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
    }, 9500);
  }



  getCpos() {
    let urlCracL1 = `http://10.2.222.129:9006/api/crac/jk/1/level/l1`;
    let urlDehumL1 = `http://10.2.222.129:9006/api/dehum/jk/1/level/l1`;

    let urlCracL2 = `http://10.2.222.129:9006/api/crac/jk/1/level/l2`;
    let urlDehumL2 = `http://10.2.222.129:9006/api/dehum/jk/1/level/l2`;

    let urlCracL3 = `http://10.2.222.129:9006/api/crac/jk/1/level/l3`;
    let urlDehumL3 = `http://10.2.222.129:9006/api/dehum/jk/1/level/l3`;

    let urlCpos = `http://10.2.222.129:9006/api/cpos/jk/1/level/ut`;

    const requestOne = axios.get(urlCracL1);
    const requestTwo = axios.get(urlDehumL1);
    const requestThree = axios.get(urlCracL2);
    const requestFour = axios.get(urlDehumL2);
    const requestFive = axios.get(urlCracL3);
    const requestSix = axios.get(urlDehumL3);
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
        urlCracL1 = e.response;
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

                    <Col lg="12" md="6" sm="12" >
                      <Card className="mb-0">
                        {/*<CardTitle className=" title-equipment-main">MECHANICAL</CardTitle>*/}

                        <CracJk1L1 />
                        <DehumJk1L1 />

                        <Row>

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">AHU</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">CPOS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">FUEL</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">WATER</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">UPS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">GEN</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BUSBR</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BATT</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">SWTCH</p>
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
                </TabPane>
              </TabContent>


              <TabContent activeTab={this.state.active}>
                <TabPane tabId="2">

                  <div>

                    <Col lg="12" md="6" sm="12" >
                      <Card className="mb-0">
                        {/*<CardTitle className=" title-equipment-main">MECHANICAL</CardTitle>*/}

                        <CracJk1L2 />
                        <DehumJk1L1 />

                        <Row>

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">AHU</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">FUEL</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">CPOS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">WATER</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">UPS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">GEN</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BUS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BATT</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">SWTCH</p>
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
                </TabPane>
              </TabContent>


              <TabContent activeTab={this.state.active}>
                <TabPane tabId="3">

                  <div>

                    <Col lg="12" md="6" sm="12" >
                      <Card className="mb-0">
                        {/*<CardTitle className=" title-equipment-main">MECHANICAL</CardTitle>*/}

                        <CracJk1L3 />
                        <DehumJk1L3 />

                        <Row>

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">AHU</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                              <p className="fonthalfrem font-title-left">CPOS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">FUEL</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">WATER</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">UPS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">GEN</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BUS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BATT</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">SWTCH</p>
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
                </TabPane>
              </TabContent>

              <TabContent activeTab={this.state.active}>
                <TabPane tabId="4">

                  <div>

                    <Col lg="12" md="6" sm="12" >
                      <Card className="mb-0">
                        {/*<CardTitle className=" title-equipment-main">MECHANICAL</CardTitle>*/}

                        <Row>

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">CRAC</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">DEHUM</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">AHU</p>
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

                        <CposJk1Ut />


                        <Row>

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">FUEL</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">WATER</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">UPS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">GEN</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BUS</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">BATT</p>
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

                          <Col lg="2" md="6" sm="12" className="text-center pl0" >
                            <p className="fonthalfrem font-title-left">SWTCH</p>
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
                </TabPane>
              </TabContent>


            </CardBody>
          </Card>



    )
  }
}



export default Mainjkone
