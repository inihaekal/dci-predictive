import React,{ useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component";
import Spinner from "../.././components/@vuexy/spinner/Fallback-spinner";
import "./custom/dashboard1.css";
import Substring from 'react-substring';




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
    name: "Value (%)",
    selector: "val",
    sortable: false,
    center:true,
    grow:5,
    maxWidth:'10px'


  }
];



function DehumTable(props,index) {

  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);


  useEffect(() => {

    const interval = setInterval(() => {
      const newLocal = "https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable/groupId=207?nm=all&lvl=all";
      fetch(newLocal)
      .then(res => res.json())
      .then(res => setData(res.rows));
    }, 5000);


  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);


  return (

    <div className="App" >

       <Card className="test">
      <DataTable title="Top 5 Humidity Dehumidifier" columns={columns} data={data}  pagination paginationPerPage	="5"  striped  defaultSortField="val" defaultSortAsc={false}  progressPending={pending} progressComponent={<CustomLoader />}  />

      <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
      <p><Link to='/dehum/Dehumidifier'>See More..</Link></p>
      </CardFooter>
      </Card>

    </div>

  );

};


export default DehumTable





