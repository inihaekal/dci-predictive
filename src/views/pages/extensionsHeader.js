import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
// import { Star } from "react-feather"

class ExtensionsHeader extends React.Component {
  render() {
    return (
      <Row className="col-md-12">
        <Col md="12" className="col-md-12" >
          <p
            className="font-medium-5 extension-title"
            data-tour="extension-title"
          >
            {this.props.title}
          </p>
          <Link to='/bar/M'>
           <p
            className=" extension-title kananr"
            data-tour="extension-title" >See More..</p> </Link>
        </Col>
      </Row>
    )
  }
}
export default ExtensionsHeader
