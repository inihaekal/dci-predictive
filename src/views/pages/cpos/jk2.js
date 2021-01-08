import React, {Component, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component";
import Spinner from "../../../components/@vuexy/spinner/Fallback-spinner";
import "../custom/dashboard1.css";

import axios from 'axios';
import {
  Card,
  CardFooter
} from "reactstrap"


const CustomLoader = () => (
  <div style={{ padding: '2px' }}>
    <Spinner />
  </div>
);


const columns = [
  {
    name: "Device Name",
    selector: "variableName",
    sortable: false,
    grow:5,
    wrap : true

  },
  {
    name: "Status",
    selector: "variableAttribute",
    sortable: false,
    center:true,
    grow:5,
    maxWidth:'10px'


  }
];

const conditionalRowStyles1 = [



  {
    when: row => row.variableAttribute === 'ON',
    style: {
      backgroundColor: '#43ea411f',
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },







];


// class TempAhuTable extends Component {
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
//       `https://api-iot.dci-indonesia.com/inrespredictive/json/ahu_supply.json`,
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
//




function Jktwo(props,index) {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      fetch("http://10.2.222.129:9988/api/CPOS/jk/2")
        .then(res => res.json())
        .then(res => setData(res.row));
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
    <div className="App" >




      <Card className="test">

        <DataTable title="JK 2" columns={columns} data={data} conditionalRowStyles={conditionalRowStyles1}  pagination paginationPerPage="5"  striped  defaultSortField="value" defaultSortAsc={false}  progressPending={pending} progressComponent={<CustomLoader />}  />
        <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
          <p><Link to='/cpos/jk2/'>See More..</Link></p>
        </CardFooter>
      </Card>

    </div>);
}



export default Jktwo





