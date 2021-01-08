import React from "react"
import { Row, Col } from "reactstrap";
import BelajarTableList from "./BelajarTableList";



class TableList extends React.Component {
  render() {
    return (
      <Row>
      <Col sm="12">
        <BelajarTableList />
      </Col>
    </Row>
    )
  }
}

export default TableList