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

class iframe2 extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="12" md="12" sm="12">
          <Card>
          <CardHeader>
          <CardTitle>Iframe Example</CardTitle>
        </CardHeader>
            <CardBody>
            <Iframe src="https://demo.elastic.co/app/kibana#/visualize/edit/fec4c5c0-139a-11e8-8c94-a3d8d0cfd62b?embed=true&_g=(filters:!(),refreshInterval:(value:2000),time:(from:now-15m,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!(),params:(axis_formatter:number,axis_position:left,axis_scale:normal,background_color_rules:!((id:'26beab20-bd73-11ea-a190-397c785e8358')),default_index_pattern:'filebeat-*',default_timefield:'@timestamp',filter:(language:lucene,query:'azure.group:activity_log%20AND%20azure.category:Administrative%20AND%20_exists_:identity.claims.name'),gauge_color_rules:!((id:'23596010-bd73-11ea-a190-397c785e8358')),gauge_inner_width:10,gauge_style:half,gauge_width:10,id:'61ca57f0-469d-11e7-af02-69e470af7417',index_pattern:'azure-*',interval:auto,isModelInvalid:!f,series:!((axis_position:right,chart_type:bar,color:'rgba(142,157,220,1)',fill:'0.4',filter:'',formatter:number,hide_in_legend:0,id:'61ca57f1-469d-11e7-af02-69e470af7417',label:Actions,line_width:1,metrics:!((id:'61ca57f2-469d-11e7-af02-69e470af7417',type:count)),point_size:1,seperate_axis:0,split_filters:!((color:'rgba(244,78,59,1)',filter:(language:lucene,query:'_exists_:identity.claims.name'),id:a5302500-1399-11e8-a699-f390e75f4dd5,label:'')),split_mode:everything,stacked:none)),show_grid:1,show_legend:0,time_field:'@timestamp',type:timeseries),title:'User%20Activity%20Overview%20%5BAzure%20Monitor%5D%5BActivity%20Log%5D',type:metrics))" className="card" height="420" width="100%"></Iframe>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default iframe2
