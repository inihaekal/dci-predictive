import { Link } from "react-router-dom"
import React, { Component } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import Pagination from 'reactjs-hooks-pagination'


const pageLimit = 5;

class BarOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    this.getBar();
    this.interval = setInterval(() => {
      this.getBar();
    }, 30000);
  }


  getBar() {
   
    axios.get('https://api-iot.dci-indonesia.com/inrespredictive/web/forgraph/showleveldata?level=1-A')



    
    // axios.get('http://kopnaker.com/graph.json')
      .then(response => {
        const data = response.data.rows;
        this.setState({ data })
       
      })
      
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data.rows);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      })


    
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }




  render() {
 

    return (
      
        <Row>

         
        {this.state.data.map((item, index,props) => <UserList key={props.b} {...item} />)}
       
  
      </Row>
  
    );
  }
}
const color = "success "
const statuscomp = "comphidup"
const blinkNotif = "blink-baik"
const blinkNotif2 = "blink-baik"
const UserList = (props,error) => (
  
  <Col lg="3" sm="12" className="">

          <Card className={props.statusC1 == 0 && props.statusC2 == 0 ? "compmati" : statuscomp  }>
            <CardBody>{}

            {error.message}
       
<CardTitle className={



props.statusC1 == 0 && props.statusC2 == 0 ? "blink-mati" : 
  


  props.a  >= 40 && props.statusC1 != 0  ? "blink-bahaya" : props.b >= 40 && props.statusC2 != 0 ? "blink-bahaya" : props.c != null && props.c < 3.8 && props.statusC1 != 0  ||  props.c >= 7 && props.statusC1 != 0 ? "blink-bahaya" :  props.c != null &&  props.d < 3.8 && props.statusC2 != 0  ||  props.d  >= 7 && props.statusC2 != 0 ? "blink-bahaya" :  props.e  >= 9  && props.statusC1 != 0 ? "blink-bahaya" :props.f >= 9 && props.statusC2 == 1 ? "blink-bahaya" : blinkNotif &&
  
  (props.a >= 39 && props.statusC1 == 1) ? "blink-peringatan" : (props.b >= 39 && props.statusC2 == 1) ? "blink-peringatan" : ( props.c >= 3.8 && props.c <= 4.3)  && props.statusC1 != 0  ? "blink-peringatan" : ( props.c >= 6  && props.c < 7)  && props.statusC1 != 0  ? "blink-peringatan" : ( props.d  >= 3.8 && props.d <= 4.3) &&  props.statusC2 != 0 ? "blink-peringatan" :  ( props.d >= 6  && props.d < 7)  && props.statusC2 != 0  ? "blink-peringatan" : (props.e >=7  && props.statusC1 == 1) ? "blink-peringatan" : (props.f >=7  && props.statusC2 == 1) ? "blink-peringatan" : blinkNotif



}>{props.lvl}</CardTitle>


<div className="text-center font-10">Comp 1 Temperature</div>

<Progress className="progress-lg" value={props.a + 2} color={props.statusC1 == 0 ? "pnull" : props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : (props.a == null ) ? "pnullgone" : props.a >= 40 ? "danger" :  props.a >= 39 ? "warning" : color}>
          &nbsp;&nbsp;{props.a == null  ? 'N/A' : props.a.toFixed(2)}°C
        </Progress>
        <div className="text-center font-10">Comp 2 Temperature</div>
        <Progress className="progress-lg" value={props.b + 2}color={props.statusC2 == 0 ? "pnull" : props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : (props.b == null) ? "pnullgone" : props.b >= 40 ? "danger" :  props.b >= 39 ? "warning" : color}>
      &nbsp;&nbsp;{props.b == null  ? 'N/A' : props.b.toFixed(2)}°C
        </Progress>
        <div className="text-center font-10">Suction Pressure 1</div> 
        <Progress className="progress-lg" value={props.c * 9 + 2} color={props.statusC1 == 0 ? "pnull" : props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : (props.c == null) ? "pnullgone" : props.c >= 7 || props.c < 3.8 ? "danger" : props.c < 6 && props.c > 4.3 ? "success" : props.c >= 3.8 ? "warning" : props.c <= 4.3 ? "warning" : color}>
      &nbsp;&nbsp;{props.c == null  ? 'N/A' : props.c.toFixed(2)} BAR
        </Progress>
        <div className="text-center font-10">Suction Pressure 2</div>
        <Progress className="progress-lg" value={props.d * 9 + 2} color={props.statusC2 == 0 ? "pnull" : props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : (props.d == null) ? "pnullgone" : props.d >= 7 || props.d < 3.8 ? "danger" : props.d < 6 && props.d > 4.3 ? "success" : props.d >= 3.8 ? "warning" : props.d <= 4.3 ? "warning" : color}>
      &nbsp;&nbsp;{props.d == null  ? 'N/A' : props.d.toFixed(2)} BAR
        </Progress>
        <div className="text-center font-10">Average Vibration 1</div>
        <Progress className="progress-lg" value={props.e * 10 + 2} color={props.statusC1 == 0 ? "pnull" : props.e == null ? "pnullgone" : color && props.e >= 9 ? "danger" : color && props.e >= 8 ? "warning" : color && props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : color}>
                 &nbsp;&nbsp;{props.e == null  ? 'N/A' : props.e.toFixed(2)} mm/s
        </Progress>
        <div className="text-center font-10">Average Vibration 2</div>
        <Progress className="progress-lg" value={props.f * 10 + 2} color={props.statusC2 == 0 ? "pnull" : props.f == null ? "pnullgone" : color && props.f >= 9 ? "danger" : color && props.f >= 8 ? "warning" : color && props.statusC1 == 0 && props.statusC2 == 0 ? "pnull" : color}>
          &nbsp;&nbsp; {props.f == null  ? 'N/A' : props.f.toFixed(2)} mm/s
        </Progress>
             
            </CardBody>
          </Card>
          </Col>

)

export default BarOne