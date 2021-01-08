import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import TrendList from "./TrendList"

const types = [
  { level: "1" },
  { level: "2" },
  { level: "3" },
  { level: "4" }
];

class QuestionSearch extends React.Component {
  state = {
    value: ""
  }
  onChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      value: searchText
    })
  }
  render() {
    return (
      <Row>

        <Col sm="9">
          <div className="faq">
            <Row>
              {/*<Col lg="3" md="5" sm="12">*/}
              {/*  <TableContent />*/}
              {/*</Col>*/}
              <Col lg="12" md="12" sm="12" >
                <TrendList value={this.state.value} />
              </Col>
              <p> bla bla bla blaa bla</p>
            </Row>
          </div>
        </Col>

        <Col sm="3">
          <Card className="">
            <CardBody className="p-sm-2 p-2 rem-2">
              {/*<h1 className="white">Seearch</h1>*/}

              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Search"
                    bsSize="lg"
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                  <div className="form-control-position">
                    <Search size={14} />
                  </div>
                </FormGroup>
              </form>
              <div
              className={`vx-checkbox-con margin-onerem-zerorem ${
                this.props.className ? this.props.className : ""
              } vx-checkbox-${this.props.color}`}
            >
              <input
                type="checkbox"
                defaultChecked={this.props.defaultChecked}
                checked={this.props.checked}
                value={this.state.value}
                disabled={this.props.disabled}
                onClick={this.props.onClick ? this.props.onClick : null}
                onChange={this.onChange}
              />
              <span
                className={`vx-checkbox vx-checkbox-${
                  this.props.size ? this.props.size : "md"
                }`}
              >
          <span className="vx-checkbox--check">{this.props.icon}</span>
        </span>
              <span className="">Vibration</span>
            </div>

              <div
                className={`vx-checkbox-con margin-onerem-zerorem ${
                  this.props.className ? this.props.className : ""
                } vx-checkbox-${this.props.color}`}
              >
                <input
                  type="checkbox"
                  defaultChecked={this.props.defaultChecked}
                  checked={this.props.checked}
                  value={this.state.value}
                  disabled={this.props.disabled}
                  onClick={this.props.onClick ? this.props.onClick : null}
                  onChange={this.onChange}
                />
                <span
                  className={`vx-checkbox vx-checkbox-${
                    this.props.size ? this.props.size : "md"
                  }`}
                >
          <span className="vx-checkbox--check">{this.props.icon}</span>
        </span>
                <span className="">Temperature</span>
              </div>

            </CardBody>
          </Card>
        </Col>

      </Row>
    )
  }
}
export default QuestionSearch
