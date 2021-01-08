  import React from "react"
  import {Card,CardBody, Row, Col } from "reactstrap"
  import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
  import {
    Thermometer,
    Power,
    Activity,
    Zap

  } from "react-feather"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTachometerAlt,
    faWater
  } from "@fortawesome/free-solid-svg-icons";
  import axios from "axios"

  import Spinner from "../../../../components/@vuexy/spinner/Fallback-spinner";

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
      data_evaporator:[],
      data_flow_condenser:[],
      data_flow_evaporator:[],
      data_cwp:[],
      data_temp_water_supply:[],
      data_chwpa1:[],
      data_chwpa2:[]

    };
    componentDidMount() {
      this.getCpos();
      this.interval = setInterval(() => {
        this.getCpos();
      }, 30000);
    }


    getCpos() {
      let url = `http://10.2.222.129:9988/api/CPOS/jk/2/category-chiller/1`;
      axios
        .get(url)
        .then(response => {
          const data_afd = response.data.row[0];
          const data_motor = response.data.row[1];
          const data_status = response.data.row[2];
          const data_chwpa1 = response.data.row[3];
          const data_chwpa2 = response.data.row[4];
          const data_approach = response.data.row[8];
          const data_refrigerant = response.data.row[9];
          const data_cwp = response.data.row[10];

          const data_evaporator = response.data.row[11];
          const data_flow_condenser=response.data.row[12];
          const data_flow_evaporator=response.data.row[13];
          const data_oiltank = response.data.row[15];
          const data_inboard = response.data.row[14];
          const data_outboard = response.data.row[16];
          const data_temp_water_supply = response.data.row[17];





          this.setState({data_status});
          this.setState({data_afd});
          this.setState({data_motor});
          this.setState({data_refrigerant});
          this.setState({data_inboard});
          this.setState({data_outboard});
          this.setState({data_oiltank});
          this.setState({data_approach});
          this.setState({data_evaporator});
          this.setState({data_flow_condenser});
          this.setState({data_flow_evaporator});
          this.setState({data_temp_water_supply});
          this.setState({data_cwp});
          this.setState({data_chwpa1});
          this.setState({data_chwpa2});



        })
        .catch((e) =>
        {
          console.error(e);
        });
    }

    render() {
      let {data_status,data_afd,data_motor,data_refrigerant,data_oiltank,data_approach,data_evaporator,data_flow_condenser,data_flow_evaporator,data_temp_water_supply,data_cwp,data_chwpa1,data_chwpa2} = this.state;
      return (
        <React.Fragment>

          <Row className="match-height">

            <Col xl="3" lg="3" sm="6">
              <Card className={data_status.value===0 ? 'bg-analytics text-white sales-card snowflakes' +
                ' refri-off-main-bg' : 'bg-analytics text-white sales-card snowflakes'} >
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❅</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❅</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}>  ❅</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}> ❄</p>
                <p className={data_status.value===1 ? 'snowflake' :'hilang'}>  ❅</p>

                <CardBody className="text-center">


                  <div className="avatar avatar-xl success shadow bg-white avatar-dashboard mt-0">
                    <div className="avatar-content">
                      <Power className={data_status.datetime === 0 ? 'N/A':  data_status.value===0 ? 'refri-off-icon' : 'success'} size={30} />
                    </div>
                  </div>
                  <div className="award-info text-center">
                    <h1 className="mb-1 text-white">{data_status.value===0 ? '0FF' : data_status.value===1 ? 'ON' : 'Loading..'}</h1>
                    <p className="m-auto mb-0 w-75">
                      Chiller Status
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl="3" lg="3" sm="6">
              <StatisticsCard
                className={data_refrigerant.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconBg="primary"
                icon={<FontAwesomeIcon icon={faTachometerAlt} className="primary f-s-22" size={22} />}
                stat={data_refrigerant.datetime === 0 ? 'N/A' : data_refrigerant.datetime === 0 ? 'N/A' : data_refrigerant.value >= 0 ? data_refrigerant.value.toFixed(2)+ ' psi' : data_refrigerant.value <= 0 ? data_refrigerant.value.toFixed(2) + ' psi' : '...'}

                statTitle="Refrigerant Pressure"

                classone = {data_refrigerant.alert === "1" ? ' color-white' : ''}

                classtwo ={data_refrigerant.alert === "1" ? ' color-white' : ''}
              />
            </Col>

            <Col xl="2" lg="4" sm="6">
              <StatisticsCard
                className={data_afd.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconBg="primary"
                icon={<Zap className="primary" size={22} />}
                stat={data_afd.datetime === 0 ? 'N/A' : data_afd.value >= 0 ? data_afd.value.toFixed(2)+' A' : '...'}
                statTitle="AFD Average Input Current"
                classone = {data_afd.alert === "1" ? ' color-white' : ''}

                classtwo ={data_afd.alert === "1" ? ' color-white' : ''}
              />
            </Col>


            <Col xl="2" lg="4" sm="6">
              <StatisticsCard
                className={data_motor.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconBg="primary"
                icon={<Zap className="primary" size={22} />}
                stat={data_motor.datetime === 0 ? 'N/A' : data_motor.value >= 0 ? data_motor.value.toFixed(2)+' A' : '...'}
                statTitle="Average Motor Current"

                classone = {data_motor.alert === "1" ? ' color-white' : ''}

                classtwo ={data_motor.alert === "1" ? ' color-white' : ''}
              />
            </Col>

            <Col xl="2" lg="4" sm="6">
              <StatisticsCard
                className={data_cwp.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconBg="primary"
                icon={<Activity className="primary" size={22} />}
                stat={data_cwp.datetime === 0 ? 'N/A' :data_cwp.value <= 0 ? data_cwp.value.toFixed(2) + ' Hz'  : data_cwp.value >= 0 ? data_cwp.value.toFixed(2) + ' Hz'  : '...'}
                statTitle="CWP Frequency"

                classone = {data_cwp.alert === "1" ? ' color-white' : ''}

                classtwo ={data_cwp.alert === "1" ? ' color-white' : ''}
              />
            </Col>



            <Col xl="3" lg="3" sm="6">
              <StatisticsCard
                className={data_temp_water_supply.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Thermometer className="primary" size={22} />}
                stat={data_temp_water_supply.datetime === 0 ? 'N/A' : data_temp_water_supply.value >= 0 ? data_temp_water_supply.value.toFixed(2) + ' °C'  : '...'}
                statTitle="Water Supply Temperature"
                classone = {data_temp_water_supply.alert === "1" ? ' color-white' : ''}

                classtwo ={data_temp_water_supply.alert === "1" ? ' color-white' : ''}
              />
            </Col>


            <Col xl="3" lg="3" sm="6">
              <StatisticsCard
                className={data_oiltank.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Thermometer className="primary" size={22} />}
                stat={data_oiltank.datetime === 0 ? 'N/A' : data_oiltank.value >= 0 ? data_oiltank.value.toFixed(2) + ' °C': '...'}
                statTitle="Oil Tank Temperature"
                classone = {data_oiltank.alert === "1" ? ' color-white' : ''}

                classtwo ={data_oiltank.alert === "1" ? ' color-white' : ''}
              />
            </Col>
            <Col xl="3" lg="3" sm="6">
              <StatisticsCard
                className={data_chwpa1.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Activity className="primary" size={22} />}
                stat={ data_chwpa1.datetime === 0 ? 'N/A': data_chwpa1.value >= 0 ? data_chwpa1.value.toFixed(2) + ' Hz' : data_chwpa1.value < 0 ? data_chwpa1.value.toFixed(2) + ' Hz' : '...'}
                statTitle="CHWP A1 Frequency"
                classone = {data_chwpa1.alert === "1" ? ' color-white' : ''}

                classtwo ={data_chwpa1.alert === "1" ? ' color-white' : ''}
              />
            </Col>
            <Col xl="3" lg="3" sm="6">
              <StatisticsCard
                className={data_chwpa2.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Activity className="primary" size={22} />}
                stat={ data_chwpa2.datetime === 0 ? 'N/A': data_chwpa2.value >= 0 ? data_chwpa2.value.toFixed(2) + ' Hz'  : '...'}
                statTitle="CHWP A2 Frequency"
                classone = {data_chwpa2.alert === "1" ? ' color-white' : ''}

                classtwo ={data_chwpa2.alert === "1" ? ' color-white' : ''}
              />
            </Col>


            <Col xl="3" lg="6" sm="6">
              <StatisticsCard
                className={data_approach.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Thermometer className="primary" size={22} />}
                stat={data_approach.datetime === 0 ? 'N/A' : data_approach.value >= 0 ? data_approach.value.toFixed(2) + ' °C' : data_approach.value <= 0 ? data_approach.value.toFixed(2) + ' °C' : '...'}
                statTitle="Condenser Approach Temp"

                classone = {data_approach.alert === "1" ? ' color-white' : ''}

                classtwo ={data_approach.alert === "1" ? ' color-white' : ''}
              />
            </Col>



            <Col xl="3" lg="6" sm="6">
              <StatisticsCard
                className={data_evaporator.alert === "1" ? 'thres-cpos' : '' }
                hideChart
                iconRight
                iconBg="primary"
                icon={<Thermometer className="primary" size={22} />}

                stat={data_evaporator.datetime === 0 ? 'N/A' : data_evaporator.value >= 0 ? data_evaporator.value.toFixed(2) + ' °C' : data_evaporator.value <= 0 ? data_evaporator.value.toFixed(2) + ' °C' : '...'}
                statTitle="Evaporator Approach Temp"

                classone = {data_evaporator.alert === "1" ? ' color-white' : ''}

                classtwo ={data_evaporator.alert === "1" ? ' color-white' : ''}
              />
            </Col>

            <Col xl="3" lg="6" sm="6">
              <StatisticsCard







                className={data_flow_condenser.value > 0 ? 'loader' : 'refri-off-main-bg'}
                hideChart
                iconRight
                iconBg="primary"
                icon={<FontAwesomeIcon icon={faWater} className="primary f-s-22 color-white" size={22} />}
                // stat={data_oiltank.value >= 0 ? data_oiltank.value + ' ℓ/m': '...'}
                stat={<h1 className="color-white">{data_flow_condenser.datetime === 0 ? 'N/A': data_flow_condenser.value >= 0 ? data_flow_condenser.value.toFixed(2) : data_flow_condenser.value <= 0 ? data_flow_condenser.value.toFixed(2)  : '...'} ℓ/m</h1>}
                statTitle={<p className="color-white">Condensor Waterflow</p>}
              />
            </Col>


            <Col xl="3" lg="6" sm="6">
              <StatisticsCard
                className={data_flow_evaporator.value > 0 ? 'loader' : 'refri-off-main-bg'}
                hideChart
                iconRight
                iconBg="primary"
                icon={<FontAwesomeIcon icon={faWater} className="primary f-s-22 color-white" size={22} />}
                // stat={data_oiltank.value >= 0 ? data_oiltank.value + ' ℓ/m': '...'}
                stat={<h1 className="color-white">{data_flow_evaporator.datetime === 0 ? 'N/A': data_flow_evaporator.value >= 0 ? data_flow_evaporator.value.toFixed(2) : data_flow_evaporator.value <= 0 ? data_flow_evaporator.value.toFixed(2)  : '...'} ℓ/m</h1>}
                statTitle={<p className="color-white">Evaporator Waterflow</p>}
              />
            </Col>




          </Row>
        </React.Fragment>
      )
    }
  }

  export default StatisticsCards
