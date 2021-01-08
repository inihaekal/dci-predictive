import {Link} from "react-router-dom"
import React, {Component} from 'react';
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
      <CardBody>{props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ?
        <CustomLoader/> : props.c == null || props.d == null ? <CustomLoader/> : ""}

        <div
          className={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "blur-bar" : props.c == null || props.d == null ? "blur-bar" : ""}>

          <CardTitle className={

            props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "pnullgone" : props.c == null || props.d == null ? "pnullgone" :

              props.statusC1 === 0 && props.statusC2 === 0 ? "blink-mati" :




                (props.a >= 39 && props.statusC1 === 1) ? "blink-bahaya" : (props.b >= 39 && props.statusC2 === 1) ? "blink-bahaya" : (props.c >= 3.8 && props.c <= 4.3) && props.statusC1 !== 0 ? "blink-bahaya" : (props.c >= 6 && props.c < 7) && props.statusC1 !== 0 ? "blink-bahaya" : (props.d >= 3.8 && props.d <= 4.3) && props.statusC2 !== 0 ? "blink-bahaya" : (props.d >= 6 && props.d < 7) && props.statusC2 !== 0 ? "blink-bahaya" : (props.e >= 7 && props.statusC1 === 1) ? "blink-bahaya" : (props.f >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.g >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.h >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.i >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.j >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.k >= 7 && props.statusC2 === 1) ? "blink-bahaya" : (props.l >= 7 && props.statusC2 === 1) ? "blink-bahaya" : blinkNotif


          }>{props.lvl}</CardTitle>


          <div className="text-center font-10">Comp 1 Temperature</div>

          <Progress className="progress-lg"
                    value={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.a + 2}
                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.statusC1 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : (props.a == null) ? "pnullgone" : props.a >= 40 ? "danger" : props.a >= 39 ? "danger" : color}>
            &nbsp;&nbsp;{props.a == null ? 'N/A' : props.a.toFixed(1)}°C
          </Progress>

          <div className="text-center font-10">Comp 2 Temperature</div>
          <Progress className="progress-lg"
                    value={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.b + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : (props.b == null) ? "pnullgone" : props.b >= 40 ? "danger" : props.b >= 39 ? "danger" : color}>
            &nbsp;&nbsp;{props.b == null ? 'N/A' : props.b.toFixed(1)}°C
          </Progress>

          <div className="text-center font-10">Suction Pressure 1</div>
          <Progress className="progress-lg"
                    value={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 70) + 20 : props.c == null || props.d == null ? Math.floor(Math.random() * 70) + 20 : props.c * 9 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC1 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : props.c >= 7 || props.c < 3.8 ? "danger" : props.c < 6 && props.c > 4.3 ? "success" : props.c >= 3.8 ? "danger" : props.c <= 4.3 ? "danger" : color}>
            &nbsp;&nbsp;{props.c == null ? 'N/A' : props.c.toFixed(1)} BAR
          </Progress>

          <div className="text-center font-10">Suction Pressure 2</div>
          <Progress className="progress-lg"
                    value={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 70) + 20 : props.c == null || props.d == null ? Math.floor(Math.random() * 70) + 20 : props.d * 9 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : props.d >= 7 || props.d < 3.8 ? "danger" : props.d < 6 && props.d > 4.3 ? "success" : props.d >= 3.8 ? "danger" : props.d <= 4.3 ? "danger" : color}>
            &nbsp;&nbsp;{props.d == null ? 'N/A' : props.d.toFixed(1)} BAR
          </Progress>

          <div className="text-center font-10">Vibration 1</div>
          <Progress animated={props.e == null } className="progress-lg"
                    value={props.e == null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && false && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.e * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.e == null ? "wait" : color && props.e >= 9 ? "danger" : color && props.e >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.e == null ? 'Please Wait...' : props.e.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 2</div>
          <Progress animated={props.f == null } className="progress-lg"
                    value={props.f== null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && false ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.f * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.f == null ? "wait" : color && props.f >= 9 ? "danger" : color && props.f >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.f == null ? 'Please Wait...' : props.f.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 3</div>
          <Progress animated={props.g == null } className="progress-lg"
                    value={props.g == null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.g * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.g == null ? "wait" : color && props.g >= 9 ? "danger" : color && props.g >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.g == null ? 'Please Wait...' : props.g.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 4</div>
          <Progress animated={props.h == null } className="progress-lg"
                    value={props.h== null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.h * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.h == null ? "wait" : color && props.h >= 9 ? "danger" : color && props.h >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.h == null ? 'Please Wait...' : props.h.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 5</div>
          <Progress animated={props.i == null } className="progress-lg"
                    value={props.i== null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.i * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.i == null ? "wait" : color && props.i >= 9 ? "danger" : color && props.i >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.i == null ? 'Please Wait...' : props.i.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 6</div>
          <Progress animated={props.j == null } className="progress-lg"
                    value={props.j== null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.j * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.j == null ? "wait" : color && props.j >= 9 ? "danger" : color && props.j >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.j == null ? 'Please Wait...' : props.j.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 7</div>
          <Progress animated={props.k == null } className="progress-lg"
                    value={props.k == null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.k * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.k == null ? "wait" : color && props.k >= 9 ? "danger" : color && props.k >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.k == null ? 'Please Wait...' : props.k.toFixed(1) + ' mm/s'}
          </Progress>

          <div className="text-center font-10">Vibration 8</div>
          <Progress animated={props.l == null } className="progress-lg"
                    value={props.l== null ? '100' : props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? Math.floor(Math.random() * 2) : props.c == null || props.d == null ? Math.floor(Math.random() * 2) : props.l * 10 + 2}

                    color={props.a == null && props.b == null && props.c == null && props.d == null && props.e == null && props.f == null ? "grey" : props.c == null || props.d == null ? "grey" : props.statusC2 === 0 ? "pnull" : props.l == null ? "wait" : color && props.l >= 9 ? "danger" : color && props.l >= 8 ? "danger" : color && props.statusC1 === 0 && props.statusC2 === 0 ? "pnull" : color}>
            &nbsp;&nbsp; {props.l == null ? 'Please Wait...' : props.l.toFixed(1) + ' mm/s'}
          </Progress>
        </div>
      </CardBody>
    </Card>
  </Col>

)

export default Loop
