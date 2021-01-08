import React,{ useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component";
import orderBy from 'lodash/orderBy';
import Spinner from "../../components/@vuexy/spinner/Fallback-spinner" ;
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
    name: "Value (mm/s)",
    selector: "val",
    sortable: false,
    center:true,
    grow:5,
    maxWidth:'10px'


  }
];



// function VibrationTable(props,index) {
//   const [data, setData] = useState([]);
//   const [pending, setPending] = React.useState(true);
//   const [rows, setRows] = React.useState([]);
//
//
//
//
//
//
//
//   useEffect(() => {
//
//
//
//
//     const interval = setInterval(() => {
//
//         fetch("https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable?interval=10000&groupId=206")
//       .then(res => res.json())
//       .then(res => setData(res.rows));
//     }, 2000);
//
//
//   }, []);
//
//   React.useEffect(() => {
//     const timeout = setTimeout(() => {
//       setRows(data);
//       setPending(false);
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, []);




function VibrationTable(props,index) {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      fetch("https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable?interval=5000&groupId=206")
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
    <div className="App">
       <Card className="test">
      <DataTable title="Top 5 Vibration " columns={columns} data={data} pagination paginationPerPage	="5"  striped  defaultSortField="val" defaultSortAsc={false}   progressPending={pending} progressComponent={<CustomLoader />} />
      <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>   <p><Link to='/table/Vibration'>See More..</Link></p></CardFooter>
      </Card>
    </div>
  );

};


export default VibrationTable





