import React from "react"
import { Card, CardBody } from "reactstrap"
import { Award } from "react-feather"

import decorLeft from "../../assets/img/elements/decore-left.png"
import decorRight from "../../assets/img/elements/decore-right.png"

class SalesCard extends React.Component {
  render() {
    return (
      <Card className="bg-analytics text-white sales-card">
        <CardBody className="text-center">
         
          <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
            <div className="avatar-content">
              <Award className="text-white" size={32} />
            </div>
          </div>
          <div className="award-info text-center">
            <h1 className="mb-2 text-white">Under Construction</h1>
            <p className="m-auto mb-0 w-75">
             <strong> Sorry, we're doing some work on this section</strong>
            </p>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SalesCard
