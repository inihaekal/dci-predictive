import {Link} from "react-router-dom"
import React, {Component, Suspense} from 'react';
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
} from "reactstrap";
import Spinner from "../../components/@vuexy/spinner/Fallback-spinner";

const loader2Style =
  {
    position: "absolute",
    margin: "auto",
    width: "90%",
    zIndex: "1"
  }






const CustomLoader = () => (
  <div style={loader2Style}>
    <Spinner/>
  </div>
);

class Loop extends Component {

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

    this.interval = setInterval(() => {
      window.location.reload();
    }, 180000);

  }


  getBar() {

    axios.get('https://api-iot.dci-indonesia.com/inrespredictive/web/development/forgraph/showlimitdata?limit=8')

      .then(response => {
        const data = response.data.rows;
        this.setState({data})

      })


      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });


  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {


    return (

      <Row>


        {this.state.data.map((item, index) => <UserList key={index} {...item} />)}

      </Row>

    );
  }
}

const color = "success "
const statuscomp = "comphidup"
const blinkNotif = "blink-baik"
const UserList = (props) => (

  <Col lg="3" sm="12" className="">

    <Card className={props.statusC1 === 0 && props.statusC2 === 0 ? "compmati" : statuscomp}>
      <CardBody>{props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ?  <CustomLoader /> : props.c ==  null || props.d ==  null ?  <CustomLoader /> : ""}

        <div className={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "blur-bar" : props.c ==  null || props.d ==  null ?  "blur-bar" :  ""}>

          <CardTitle className={

            props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "pnullgone" : props.c ==  null || props.d ==  null ? "pnullgone" :

              props.statusC1 === 0 && props.statusC2 === 0 ? "blink-mati" :


                // eslint-disable-next-line no-mixed-operators
                props.a  >= 55 && props.statusC1 !== 0  ? "blink-bahaya" : props.b >= 55 && props.statusC2 !== 0 ? "blink-bahaya" : props.c < 3 && props.statusC1 !== 0  ||  props.c >= 8 && props.statusC1 !== 0 ? "blink-bahaya" :  props.d < 3 && props.statusC2 !== 0  ||  props.d  >= 8 && props.statusC2 !== 0 ? "blink-bahaya" :  props.e  >= 10  && props.statusC1 !== 0 ? "blink-bahaya" :props.f >= 10 && props.statusC2 === 1 ? "blink-bahaya" : blinkNotif



          }>{props.lvl}</CardTitle>


          <div className="text-center font-10">Comp 1 Temperature</div>

          <Progress  className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 2)  : props.c ==  null || props.d ==  null ?  Math.floor(Math.random() * 2) :  props.a + 2}
                     color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.statusC1 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : (props.a == null ) ? "pnullgone" : props.a >= 55 ? "danger" :  props.a >= 55 ? "danger" : color}>
            &nbsp;&nbsp;{ props.a == null  ? 'N/A' : props.a.toFixed(1)}°C
          </Progress>

          <div className="text-center font-10">Comp 2 Temperature</div>
          <Progress className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 2) : props.c ==  null || props.d ==  null ? Math.floor(Math.random() * 2) : props.b + 2}

                    color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.c ==  null || props.d ==  null ? "grey" : props.statusC2 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : (props.b == null) ? "pnullgone" : props.b >= 55 ? "danger" :  props.b >= 55 ? "danger" : color}>
            &nbsp;&nbsp;{props.b == null  ? 'N/A' : props.b.toFixed(1)}°C
          </Progress>

          <div className="text-center font-10">Suction Pressure 1</div>
          <Progress className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 70)+ 20 : props.c ==  null || props.d ==  null ? Math.floor(Math.random() * 70)+ 20 : props.c * 9 + 2}

                    color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.c ==  null || props.d ==  null ? "grey" : props.statusC1 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : props.c >= 8 || props.c <= 3 ? "danger" : props.c < 8 && props.c > 3 ? "success" : color}>
            &nbsp;&nbsp;{props.c == null  ? 'N/A' : props.c.toFixed(1)} BAR
          </Progress>

          <div className="text-center font-10">Suction Pressure 2</div>
          <Progress className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 70)+ 20 : props.c ==  null || props.d ==  null ? Math.floor(Math.random() * 70)+ 20 : props.d * 9 + 2}

                    color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.c ==  null || props.d ==  null ? "grey" : props.statusC2 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : props.d >= 8 || props.d <= 3 ? "danger" : props.d < 8 && props.d > 3 ? "success" : props.d >= 3 ? "danger" : color}>
            &nbsp;&nbsp;{props.d == null  ? 'N/A' : props.d.toFixed(1)} BAR
          </Progress>

          <div className="text-center font-10">Highest Vibration #1</div>
          <Progress className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 2) : props.c ==  null || props.d ==  null ? Math.floor(Math.random() * 2) : props.e * 10 + 2}

                    color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.c ==  null || props.d ==  null ? "grey" : props.statusC1 === 0 ? "pnull" : props.e == null ? "pnullgone" : color && props.e >= 10 ? "danger" : color && props.e >= 10 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp;{props.e == null  ? 'N/A' : props.e.toFixed(1)} mm/s
          </Progress>

          <div className="text-center font-10">Highest Vibration #2</div>
          <Progress className="progress-lg" value={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? Math.floor(Math.random() * 2) : props.c ==  null || props.d ==  null ? Math.floor(Math.random() * 2) : props.f * 10 + 2}

                    color={props.a == null && props.b ==  null && props.c ==  null&& props.d ==  null&& props.e ==  null&& props.f ==  null ? "grey" : props.c ==  null || props.d ==  null ? "grey" : props.statusC2 === 0 ? "pnull" : props.f == null ? "pnullgone" : color && props.f >= 10 ? "danger" : color && props.f >= 10 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.f == null  ? 'N/A' : props.f.toFixed(1)} mm/s
          </Progress>
        </div>
      </CardBody>
    </Card>
  </Col>

)

export default Loop
