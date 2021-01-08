import React, {Component, useEffect, useState} from "react"
import axios from 'axios';
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component";
import Spinner from "../.././components/@vuexy/spinner/Fallback-spinner";
import "./custom/dashboard1.css";
import {
  Card,
  CardFooter,
  Button,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Progress
} from "reactstrap"


const CustomLoader = () => (
  <div style={{ padding: '2px' }}>
    <Spinner />
  </div>
);


const columns = [
  {
    name: "Sensor Name",
    selector: "nm",
    sortable: false,
    grow:5,
    wrap : true

  },
  {
    name: "Value (℃)",
    selector: "val",
    sortable: false,
    center:true,
    grow:5,
    maxWidth:'10px'


  }
];



// class TemperatureTable extends Component {
//
//   state = {
//     data: [],
//     loading: false,
//     totalRows: 0,
//     perPage: 10,
//
//   };
//
//   async componentDidMount() {
//
//     this.setState({ loading: true });
//
//     const response = await axios.get(
//       `https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable?interval=10&groupId=205`,
//     );
//
//     this.setState({
//       data: response.data.rows,
//       totalRows: response.data.total,
//       loading: false,
//     });
//   }
//
//
//
//
//   render() {
//     const { loading, data, pending } = this.state;






function TemperatureTable(props,index) {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      fetch("https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable?interval=50&groupId=205")
        .then(res => res.json())
        .then(res => setData(res.rows));
    }, 5000);


  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);














  return (
      <div className="App" >




        <Card className="test">

          <DataTable title="Top 5 Temperature" columns={columns} data={data}  pagination paginationPerPage="5"  striped  defaultSortField="val" defaultSortAsc={false}  progressPending={pending} progressComponent={<CustomLoader />}  />
          <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
            <p><Link to='/table/temperature'>See More..</Link></p>
          </CardFooter>
        </Card>

      </div>);
  }



export default TemperatureTable





