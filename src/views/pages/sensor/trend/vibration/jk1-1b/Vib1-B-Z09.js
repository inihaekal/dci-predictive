import React from "react"
import Iframe from "react-iframe"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Breadcrumbs from "../../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../../../../assets/scss/pages/dashboard-analytics.scss"





class TrendVib1BZ09 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Trend"
          breadCrumbParent="Vibration 1-B-Z09"
        />
        <Row className="match-height">

          <Col mb="0" lg="12" sm="12" className="custom-scroll">
            <Card  >
              <Iframe id="Iframe-Pad-15" url="http://10.2.222.216:5601/app/kibana#/visualize/edit/3bd86b20-f7bd-11ea-b0f6-3f4538b96285?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A10000)%2Ctime%3A(from%3Anow-6h%2Cto%3Anow))"
                      position="absolute"
                      width="100%"
                      id="myId"
                      className="myClassname"
                      height="100%"
                      frameBorder ='0'
                      scrolling="yes"
                      overflow ="hidden"
                      allow="fullscreen"
                      styles={{backgroundColor: "transparent", overflow: "hidden"}}
              />
            </Card>
          </Col>

        </Row>
      </React.Fragment>
    )
  }
}



export default TrendVib1BZ09
