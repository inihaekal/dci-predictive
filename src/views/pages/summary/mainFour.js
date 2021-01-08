import React,{ useState, useEffect } from "react"
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import orderBy from 'lodash/orderBy';
import Spinner from "../../../components/@vuexy/spinner/Fallback-spinner";
import ".././custom/dashboard1.css";
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
  Progress, Col, CardBody, Row
} from "reactstrap"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import {
  Monitor,
  UserCheck,
  Mail,
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Smile,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from "react-feather"

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
    when: row => row.value < 1000,
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
    name: "Category",
    selector: "chiller_category",
    sortable: true,

  },
  {
    name: "Value",
    selector: "value",
    sortable: true,
    center:true,
    grow:1,
    maxWidth:'20px',
    sortServer: true



  }
];



function MainFour(props) {
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








  return (

      <Col lg="3" sm="6" className="ib">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="primary"
          icon={<AlertOctagon className="danger" size={22} />}
          stat="N/A"
          statTitle="Alert Equipments"
        />
      </Col>


  );

};


export default MainFour





