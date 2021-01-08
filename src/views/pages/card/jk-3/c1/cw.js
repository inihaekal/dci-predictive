import React from "react"
import {Card,CardBody, Row, Col } from "reactstrap"
import StatisticsCard from "../../../../../components/@vuexy/statisticsCard/StatisticsCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios"

import Spinner from "../../../../../components/@vuexy/spinner/Fallback-spinner";

const loader2Style =
  {
    position: "absolute",
    margin: "auto",
    width: "90%",
    zIndex: "1"
  }






class StatisticsCards extends React.Component {
  state = {
    data_status:[],
    data_afd:[],
    data_motor:[],
    data_inboard:[],
    data_outboard:[],
    data_refrigerant:[],
    data_oiltank:[],
    data_approach:[],
    data_evaporator:[]
  };
  componentDidMount() {


    let url = `http://10.2.222.129:9988/api//CPOS/jk/3/chiller/1/object/0.212`;
    axios
      .get(url)
      .then(response => {

        const data_cw = response.data.row[0];

        this.setState({data_cw});




      })
      .catch((e) =>
      {
        console.error(e);
      });
  }

  render() {
    let {data_cw} = this.state;
    return (
      <React.Fragment>

          <Col xl="3" lg="6" sm="6">
            <StatisticsCard
              className="loader"
              hideChart
              iconRight
              iconBg="primary"
              icon={<FontAwesomeIcon icon={faWater} className="primary f-s-22 color-white" size={22} />}
              stat={<h1 className="color-white">{data_cw.value >= 0 ? data_cw.value.toFixed(2) + ' ℓ/m': '...'}</h1>}
              statTitle={<p className="color-white">Condensor Waterflow</p>}
            />
          </Col>


          <Col xl="3" lg="6" sm="6">
            <StatisticsCard
              className="loader"
              hideChart
              iconRight
              iconBg="primary"
              icon={<FontAwesomeIcon icon={faWater} className="primary f-s-22 color-white" size={22} />}
              // stat={data_oiltank.value >= 0 ? data_oiltank.value + ' ℓ/m': '...'}
              stat={<h1 className="color-white">.... ℓ/m</h1>}
              statTitle={<p className="color-white">Evaporator Waterflow</p>}
            />
          </Col>


      </React.Fragment>
    )
  }
}

export default StatisticsCards
