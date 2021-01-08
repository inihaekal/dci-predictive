import React from "react"
import {Row, Col, Card, CardBody, CardTitle, Progress, CardImg, Button} from "reactstrap"

import DehumTable from "../DehumTable"
import "../../../assets/scss/pages/dashboard-analytics.scss"




class DehumTableFront extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Row className="match-height">




          <Col lg="3" md="12">
            <DehumTable />
          </Col>







        </Row>



      </React.Fragment>
    )
  }
}



export default DehumTableFront
