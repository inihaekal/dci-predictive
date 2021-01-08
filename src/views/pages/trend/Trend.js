import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import TrendSearch from "./TrendSearch"

import "../../../assets/scss/pages/faq.scss"

class Trend extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Row>
          <Col sm="12">
            <TrendSearch />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Trend
