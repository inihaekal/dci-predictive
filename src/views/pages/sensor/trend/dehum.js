import React from "react"
import Iframe from "react-iframe"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../../assets/scss/pages/dashboard-analytics.scss"

let base64 = require('base-64');

let url = 'https://10.2.222.216:5601/login';
let username = 'elastic';
let password = 'edwinkeren';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));


class TrendDehum extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Trend"
          breadCrumbParent="Dehumidifier"
        />
        <Row className="match-height">

          <Col mb="0" lg="12" sm="12" className="custom-scroll">
            <Card  >
                <Iframe id="Iframe-Pad-15" url="https://10.2.222.216:5601/app/dashboards#/view/cf7f3850-3e02-11eb-9be2-f3024b9a5b67?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true"
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



export default TrendDehum
