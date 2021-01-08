import React from "react"
import {Card, CardBody, Row, Col, CardTitle, Button} from "reactstrap"

import axios from "axios"
import {Link} from "react-router-dom";

class StatisticsCards extends React.Component {
  state = {
    alert_jk1:[],
    alert_jk2:[],
    alert_jk3:[],


  };


  componentDidMount() {
    this.getCpos();
    this.interval = setInterval(() => {
      this.getCpos();
    }, 10000);
  }


  getCpos() {
    let url = `http://10.2.222.129:9010/api/CRAC/dashboard
`;
    axios
      .get(url)
      .then(response => {
        const alert_jk1 = response.data.row[2];
        const alert_jk2 = response.data.row[1];
        const alert_jk3 = response.data.row[0];

        const all_alert = alert_jk1.totalAlert + alert_jk2.totalAlert + alert_jk3.totalAlert ;




        this.setState({alert_jk1});
        this.setState({alert_jk2});
        this.setState({alert_jk3});
        this.setState({all_alert});




      })
      .catch((e) =>
      {
        url = e.response;
      });
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {alert_jk1,alert_jk2,alert_jk3,all_alert} = this.state;
    return (
      <Col lg="3" md="6" sm="12" className="ib">
        <Card>

          <CardTitle className={all_alert === 0 ? 'dashboard-normal' : all_alert === 1 ? 'dashboard-warning': all_alert >1 ? 'dashboard-danger' :'dashboard-normal'}>CRAC</CardTitle>
          <CardBody>


            <div className="card-btns d-flex justify-content-between mt-1">
              <Link to='/bar/Level_1_B'>
                <Button.Ripple color=""  className={alert_jk1.totalAlert === 0 ? 'statusgreen' : alert_jk1.totalAlert === 1 ? 'statuswarning': alert_jk1.totalAlert >1 ? 'statusred' :'statusgreen'} outline>
                  JK-1
                </Button.Ripple>
              </Link>

              <Link to='/bar/Level_1_B'>
                <Button.Ripple color=""  className={alert_jk2.totalAlert === 0 ? 'statusgreen' : alert_jk2.totalAlert === 1 ? 'statuswarning': alert_jk2.totalAlert >1 ? 'statusred' :'statusgreen'} outline>
                  JK-2
                </Button.Ripple>
              </Link>
              <Link to='/bar/Level_1_B'>
                <Button.Ripple color=""  className={alert_jk3.totalAlert === 0 ? 'statusgreen' : alert_jk3.totalAlert === 1 ? 'statuswarning': alert_jk3.totalAlert > 1 ? 'statusred' :'statusgreen'} outline>
                  JK-3
                </Button.Ripple>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default StatisticsCards
