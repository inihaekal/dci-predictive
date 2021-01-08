import React from "react"
import {Row, Col, Card, CardBody, CardTitle, Progress, Button} from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../assets/scss/pages/dashboard-analytics.scss"

import Mainjkone from "./dashboard/mainjk1";
import Mainjktwo from "./dashboard/mainjk2"
import Mainjkthree from "./dashboard/mainjk3"







class summaryDashboardTwo extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }


  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Summary "
          breadCrumbParent="Summary Dashboard"
        />






        <Col lg="4" md="6" sm="12" className="ib prl5">
<Mainjkone />
        </Col>


        <Col lg="4" md="6" sm="12" className="ib prl5">
          <Mainjktwo />
        </Col>

        <Col lg="4" md="6" sm="12" className="ib prl5">
<Mainjkthree />
        </Col>






      </React.Fragment>
    )
  }
}



export default summaryDashboardTwo
