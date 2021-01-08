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
    name: "Value (BAR)",
    selector: "val",
    sortable: false,
    maxWidth:'10px',



  }
];



function EevTableHigh(props,index) {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      fetch("https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showPress?interval=20")
      .then(res => res.json())
      .then(res => setData(res.rows));
    }, 2000);


  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App" key={index.eevhigh}>
        <Card className="test">
      <DataTable  title="Top 5 Suc Pressure High" columns={columns} data={data} pagination paginationPerPage	="5"  striped  defaultSortField="val" defaultSortAsc={false}   progressPending={pending} progressComponent={<CustomLoader />} />
      <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>

              <p><Link to='/table/Suc_Pressure'>See More..</Link></p>

              </CardFooter>
      </Card>
    </div>
  );

};


export default EevTableHigh





