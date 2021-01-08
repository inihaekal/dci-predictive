import React,{ useState, useEffect } from "react"
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import orderBy from 'lodash/orderBy';
import Spinner from "../../../../components/@vuexy/spinner/Fallback-spinner";
import "../.././custom/dashboard1.css";
import styled from 'styled-components';
import axios from 'axios';
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


const TextField = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 22px 0 16px;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  padding: 0 22px 0 16px;
  margin: 20px ;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 22px;
  width: 22px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField id="search" type="text" placeholder="Filter By Sensor Name" value={filterText} onChange={onFilter} />
    {/* <ClearButton className="btn-primary" type="button" onClick={onClear}>X</ClearButton> */}
  </>
);



const customStyles = {

  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#d8d8d8'
      },
    },
  },
};


const conditionalRowStyles1 = [
  {
    when: row => row.val <= 3.8 || row.val >= 7,
    style: {
      backgroundColor: '#28c76f',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },


  {
    when: row => row.val <= 4.3 && row.val >= 3.8 || row.val >= 6 && row.val <= 6.9 ,
    style: {
      backgroundColor: '#ff9f43',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },



  {
    when: row => row.val > 4.3 && row.val < 6,
    style: {
      backgroundColor: '#28c76f',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },





];





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
    grow:8

  },
  {
    name: "Location",
    selector: "lvl",
    sortable: true,

  },
  {
    name: "Value (%)",
    selector: "val",
    sortable: true,
    center:true,
    grow:7,
    maxWidth:'10px'


  }
];



function DehumallJk3(props) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = React.useState('');
  const [pending, setPending,] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = data.filter(item => item.nm && item.nm.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);





  useEffect(() => {

    const interval = setInterval(() => {
      fetch("https://api-iot.dci-indonesia.com/inrespredictive/web/sensorlist/showOverviewVariable/groupId=207?nm=JK3&lvl=")
        .then(res => res.json())
        .then(res => setData(res.rows));
    }, 2000);


    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="App">
      <Card>
        <DataTable paginationResetDefaultPage={true} subHeader   subHeaderComponent={subHeaderComponentMemo} paginationResetDefaultPage={resetPaginationToggle} pagination  dense noHeader={true} customStyles={customStyles} columns={columns} data={filteredItems}  progressPending={pending}  progressComponent={<CustomLoader />}  conditionalRowStyles={conditionalRowStyles1} />
      </Card>

    </div>
  );

};


export default DehumallJk3





