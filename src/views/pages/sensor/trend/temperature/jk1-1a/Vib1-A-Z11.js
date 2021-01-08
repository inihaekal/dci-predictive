import React from "react"
import Iframe from "react-iframe"
import { Row, Col, Card,CardBody,CardTitle,Progress } from "reactstrap"
import Breadcrumbs from "../../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../../../../assets/scss/pages/dashboard-analytics.scss"




class TrendTemp1AZ11 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Trend"
          breadCrumbParent="Temperature 1-A-Z11"
        />
        <Row className="match-height">

          <Col mb="0" lg="12" sm="12" className="custom-scroll">
            <Card  >
              <Iframe id="Iframe-Pad-15" url="http://10.2.222.216:5601/app/kibana#/visualize/edit/a4a56240-00fd-11eb-89db-6d37d60afbc5?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-6h%2Cto%3Anow)),query:(language:kuery,query:''),timeRestore:!f,title:'',viewMode:edit)&show-top-menu=true&show-query-input=true&show-time-filter=true"
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



export default TrendTemp1AZ11
