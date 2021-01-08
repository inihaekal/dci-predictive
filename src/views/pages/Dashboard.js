import React from "react"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import Loop from "./loop"
import "../../assets/scss/pages/dashboard-analytics.scss"
import ExtensionsHeader from "./extensionsHeader"
import CracTableBase from "./table-dashboard/base/crac-table-base";





class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Breadcrumbs
          breadCrumbTitle="Dashboard"
          breadCrumbParent="Assets Overview"
        />
        <Row className="match-height">
          <Col lg="12" md="12">

          <CracTableBase />
          </Col>







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



export default Dashboard
