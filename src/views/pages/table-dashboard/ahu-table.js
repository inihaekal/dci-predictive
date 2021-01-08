import React from "react"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"

import TempAhuTable from "../TempAhuTable"
import DiffAhuTable from "../DiffAhuTable"
import Loop from "../loop"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import ExtensionsHeader from "../extensionsHeader"






class AhuTableFront extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Row className="match-height">




          <Col lg="3" md="12">
            <TempAhuTable />
          </Col>

          <Col lg="3" md="12">
            <DiffAhuTable />
          </Col>




          {/* <Col lg="6" md="12">
<SalesCard />

          </Col> */}






          {/* <Col lg="3" md="12" sm="12">

<Loop />
  </Col>      */}


          {/* <Col lg="12" md="12">
<TabNav />
          </Col> */}


        </Row>
      </React.Fragment>
    )
  }
}



export default AhuTableFront
