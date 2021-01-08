import React from "react"
import {
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import img1 from "../../../../assets/img/pages/content-img-1.jpg"
import img2 from "../../../../assets/img/pages/content-img-2.jpg"
import img3 from "../../../../assets/img/pages/content-img-3.jpg"
import Iframe from 'react-iframe'

class iframe extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="6" md="12" sm="12">
          <Card>
          <CardHeader>
          <CardTitle>Live data</CardTitle>
        </CardHeader>
            <CardBody>
            <Iframe url="https://demo.elastic.co/app/kibana#/visualize/edit/Docker-CPU-usage-ecs?embed=true&_g=(filters:!(),refreshInterval:(value:2000),time:(from:now-15m,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:'event.module:docker%20AND%20metricset.name:cpu'),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total%20CPU%20time',field:docker.cpu.total.pct,percents:!(75)),schema:metric,type:percentiles),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:'@timestamp',interval:auto,min_doc_count:1,scaleMetricValues:!f,useNormalizedEsInterval:!t),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(customLabel:'Container%20name',field:container.name,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1.75',otherBucket:!f,otherBucketLabel:Other,size:5),schema:group,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),defaultYExtents:!f,grid:(categoryLines:!f,style:(color:%23eee)),interpolate:linear,labels:(),legendPosition:top,mode:stacked,scale:linear,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,interpolate:linear,mode:stacked,show:true,showCircles:!t,type:area,valueAxis:ValueAxis-1)),setYExtents:!f,shareYAxis:!t,smoothLines:!t,thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:area,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value)),yAxis:()),title:'CPU%20usage%20%5BMetricbeat%20Docker%5D%20ECS',type:area))" className="card" height="600" width="100%"></Iframe>
            </CardBody>




            
          </Card>
        </Col>
      </Row>
    )
  }
}
export default iframe
