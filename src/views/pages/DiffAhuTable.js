import React, {Component, useEffect, useState} from "react"
import axios from 'axios';
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component";
import Spinner from "../.././components/@vuexy/spinner/Fallback-spinner";
import "./custom/dashboard1.css";
import ClipLoader from "react-spinners/ClipLoader";





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
    selector: "value",
    sortable: false,
    center:true,
    grow:5,
    maxWidth:'10px'


  }
];



// class DiffAhuTable extends Component {
//
//   state = {
//     data: [],
//     loading: true,
//     totalRows: 0,
//     perPage: 5,
//
//   };
//
//   componentDidMount() {
//     this.getData();
//     this.interval = setInterval(() => {
//       this.getData();
//
//     }, 30000);
//   }
//
//
//
//
//   getData() {
//
//     axios.get('https://api-iot.dci-indonesia.com/inrespredictive/json/ahu_differential.json')
//
//       .then(response => {
//         const data = response.data.rows;
//         this.setState({data})
//
//       })
//
//
//       .catch(function (error) {
//         if (error.response) {
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//
//
//   }





  // async componentDidMount() {
  //
  //   this.setState({ loading: true });
  //
  //   const response = await axios.get(
  //     `http://10.2.222.217/api/diff.json`,
  //   );
  //
  //   this.setState({
  //     data: response.data.rows,
  //     totalRows: response.data.total,
  //     loading: true,
  //   });
  // }









  // render() {
  //   const {  data, pending  } = this.state;







function DiffAhuTable(props,index) {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      fetch("https://api-iot.dci-indonesia.com/inrespredictive/json/ahu_differential.json")
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


      <div className="App" >







        <Card className="test">

          <DataTable title="Top 5 Differential Pressure AHU" columns={columns} data={data}  pagination paginationPerPage="5"  striped  defaultSortField="value" defaultSortAsc={false}  progressPending={pending} progressComponent={<CustomLoader />}


          />


          <CardFooter className="text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
            <p><Link to='/ahu/Differential_Pressure'>See More..</Link></p>
          </CardFooter>
        </Card>

      </div>);
  }



export default DiffAhuTable





