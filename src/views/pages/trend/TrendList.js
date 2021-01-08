import React from "react"
import {Card, CardHeader, CardTitle, CardBody, Collapse, Col, Row} from "reactstrap"
import { Eye ,  Activity } from "react-feather"
import classnames from "classnames"
import {Link} from "react-router-dom";

const collapseItems = [
  {
    id: 1,
    icon: "BarChart2",
    title: "Vib JK1 | 1-A-Z03",
    level:"1",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z03"
  },
  {
    id: 2,
    title: "Vib JK1 | 1-A-Z04",
    level:"1",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z04"
  },
  {
    id: 3,
    title: "Vib JK1 | 1-A-Z05",
    level:"1",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z05"
  },
  {
    id: 4,
    title: "Vib JK1 | 1-A-Z09",
    level:"1",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z09"
  },
  {
    id: 5,
    title: "Vib JK1 | 1-A-Z10",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z10"
  },
  {
    id: 6,
    title:
      "Vib JK1 | 1-A-Z11",
    content:
      "/pages/trends/vibration/jk1/vib1-a-z11"
  },
  {
    id: 7,
    title: "Vib JK1 | 1-B-Z03",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z03"
  },
  {
    id: 8,
    title: "Vib JK1 | 1-B-Z04",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z04"
  },
  {
    id: 9,
    title: "Vib JK1 | 1-B-Z05",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z05"
  },
  {
    id: 10,
    title: "Vib JK1 | 1-B-Z08",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z08"
  },
  {
    id: 11,
    title: "Vib JK1 | 1-B-Z09",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z09"
  },
  {
    id: 12,
    title: "Vib JK1 | 1-B-Z10",
    content:
      "/pages/trends/vibration/jk1/vib1-b-z10"
  },
  {
    id: 13,
    title: "Vib JK1 | 2-B-Z02",
    level:"2",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z02"
  },

  {
    id: 14,
    title: "Vib JK1 | 2-B-Z03",
    level:"2",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z03"
  },


  {
    id: 15,
    title: "Vib JK1 | 2-B-Z04",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z04"
  },

  {
    id: 16,
    title: "Vib JK1 | 2-B-Z05",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z05"
  },

  {
    id: 18,
    title: "Vib JK1 | 2-B-Z07",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z07"
  },

  {
    id: 19,
    title: "Vib JK1 | 2-B-Z08",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z08"
  },

  {
    id: 20,
    title: "Vib JK1 | 2-B-Z09",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z09"
  },

  {
    id: 21,
    title: "Vib JK1 | 2-B-Z10",
    content:
      "/pages/trends/vibration/jk1/vib2-b-z10"
  },

  {
    id: 22,
    title: "Vib JK1 | 3-A-Z02",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z02"
  },

  {
    id: 23,
    title: "Vib JK1 | 3-A-Z03",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z03"
  },

  {
    id: 24,
    title: "Vib JK1 | 3-A-Z04",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z04"
  },
  {
    id: 25,
    title: "Vib JK1 | 3-A-Z05",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z05"
  },

  {
    id: 26,
    title: "Vib JK1 | 3-A-Z06",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z06"
  },
  {
    id: 27,
    title: "Vib JK1 | 3-A-Z07",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z07"
  },

  {
    id: 28,
    title: "Vib JK1 | 3-A-Z08",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z08"
  },
  {
    id: 29,
    title: "Vib JK1 | 3-A-Z09",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z09"
  },
  {
    id: 30,
    title: "Vib JK1 | 3-A-Z10",
    content:
      "/pages/trends/vibration/jk1/vib3-a-z10"
  },
  {
    id: 31,
    title: "Vib JK1 | 3-B-Z02",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z02"
  },

  {
    id: 32,
    title: "Vib JK1 | 3-B-Z03",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z03."
  },

  {
    id: 33,
    title: "Vib JK1 | 3-B-Z04",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z04."
  },

  {
    id: 34,
    title: "Vib JK1 | 3-B-Z05",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z05."
  },

  {
    id: 35,
    title: "Vib JK1 | 3-B-Z06",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z06"
  },

  {
    id: 36,
    title: "Vib JK1 | 3-B-Z07",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z07"
  },

  {
    id: 37,
    title: "Vib JK1 | 3-B-Z08",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z08"
  },

  {
    id: 38,
    title: "Vib JK1 | 3-B-Z09",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z09"
  },

  {
    id: 39,
    title: "Vib JK1 | 3-B-Z10",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z10"
  },

  {
    id: 40,
    title: "Vib JK1 | 3-B-Z11",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z1"
  },

  {
    id: 41,
    title: "Vib JK1 | 3-B-Z12",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z12"
  },

  {
    id: 42,
    title: "Vib JK1 | 3-B-Z13",
    content:
      "/pages/trends/vibration/jk1/vib3-b-z13"
  },

  {
    id: 43,
    icon: "BarChart2",
    title: "Temp JK1 | 1-A-Z03",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z03"
  },
  {
    id: 44,
    title: "Temp JK1 | 1-A-Z04",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z04"
  },
  {
    id: 45,
    title: "Temp JK1 | 1-A-Z05",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z05"
  },
  {
    id: 46,
    title: "Temp JK1 | 1-A-Z09",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z09"
  },
  {
    id: 47,
    title: "Temp JK1 | 1-A-Z10",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z10"
  },
  {
    id: 48,
    title:
      "Temp JK1 | 1-A-Z11",
    content:
      "/pages/trends/temperature/jk1/temp1-a-z11"
  },
  {
    id: 49,
    title: "Temp JK1 | 1-B-Z03",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z03"
  },
  {
    id: 50,
    title: "Temp JK1 | 1-B-Z04",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z04"
  },
  {
    id: 51,
    title: "Temp JK1 | 1-B-Z05",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z05"
  },
  {
    id: 52,
    title: "Temp JK1 | 1-B-Z08",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z08"
  },
  {
    id: 53,
    title: "Temp JK1 | 1-B-Z09",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z09"
  },
  {
    id: 54,
    title: "Temp JK1 | 1-B-Z10",
    content:
      "/pages/trends/temperature/jk1/temp1-b-z10"
  },
  {
    id: 56,
    title: "Temp JK1 | 2-B-Z02",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z02"
  },

  {
    id: 57,
    title: "Temp JK1 | 2-B-Z03",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z03"
  },


  {
    id: 58,
    title: "Temp JK1 | 2-B-Z04",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z04"
  },

  {
    id: 59,
    title: "Temp JK1 | 2-B-Z05",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z05"
  },

  {
    id: 60,
    title: "Temp JK1 | 2-B-Z07",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z07"
  },

  {
    id: 61,
    title: "Temp JK1 | 2-B-Z08",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z08"
  },

  {
    id: 62,
    title: "Temp JK1 | 2-B-Z09",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z09"
  },

  {
    id: 63,
    title: "Temp JK1 | 2-B-Z10",
    content:
      "/pages/trends/temperature/jk1/temp2-b-z10"
  },

  {
    id: 64,
    title: "Temp JK1 | 3-A-Z02",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z02"
  },

  {
    id: 65,
    title: "Temp JK1 | 3-A-Z03",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z03"
  },

  {
    id: 66,
    title: "Temp JK1 | 3-A-Z04",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z04"
  },
  {
    id: 67,
    title: "Temp JK1 | 3-A-Z05",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z05"
  },

  {
    id: 68,
    title: "Temp JK1 | 3-A-Z06",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z06"
  },
  {
    id: 69,
    title: "Temp JK1 | 3-A-Z07",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z07"
  },

  {
    id: 70,
    title: "Temp JK1 | 3-A-Z08",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z08"
  },
  {
    id: 71,
    title: "Temp JK1 | 3-A-Z09",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z09"
  },
  {
    id: 72,
    title: "Temp JK1 | 3-A-Z10",
    content:
      "/pages/trends/temperature/jk1/temp3-a-z10"
  },
  {
    id: 73,
    title: "Temp JK1 | 3-B-Z02",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z02"
  },

  {
    id: 74,
    title: "Temp JK1 | 3-B-Z03",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z03."
  },

  {
    id: 75,
    title: "Temp JK1 | 3-B-Z04",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z04."
  },

  {
    id: 76,
    title: "Temp JK1 | 3-B-Z05",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z05."
  },

  {
    id: 77,
    title: "Temp JK1 | 3-B-Z06",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z06"
  },

  {
    id: 78,
    title: "Temp JK1 | 3-B-Z07",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z07"
  },

  {
    id: 79,
    title: "Temp JK1 | 3-B-Z08",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z08"
  },

  {
    id: 80,
    title: "Temp JK1 | 3-B-Z09",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z09"
  },

  {
    id: 81,
    title: "Temp JK1 | 3-B-Z10",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z10"
  },

  {
    id: 82,
    title: "Temp JK1 | 3-B-Z11",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z1"
  },

  {
    id: 83,
    title: "Temp JK1 | 3-B-Z12",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z12"
  },

  {
    id: 84,
    title: "Temp JK1 | 3-B-Z13",
    content:
      "/pages/trends/temperature/jk1/temp3-b-z13"
  }







]

class TrendList extends React.Component {
  state = {
    collapseID: "",
    status: "Closed"
  }

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" })
  }
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." })
  }

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" })
  }

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." })
  }

  render() {
    const accordionMarginItems = collapseItems.map(collapseItem => {
      if (this.props.value > 0) {
        return (
          <Col lg="4" md="12" sm="12">
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed text-truncate w-75">
                  {collapseItem.title}
                </CardTitle>
                <Eye className="collapse-icon" size={15} />
              </CardHeader>

            </Card>
          </div>
          </Col>
        )
      } else if (collapseItem.title.toLowerCase().includes(this.props.value)) {
        return (

          <Col lg="4" md="12" sm="12" className="yrw">
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >

            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <Activity className="collapse-icon" size={15} />
                <CardTitle className="trendz lead collapse-title collapsed text-truncate w-75 bg-white">
                  {collapseItem.title}
                </CardTitle>
                <Link to={collapseItem.content}>
                <Eye className="collapse-icon" size={15} />
                </Link>
              </CardHeader>

            </Card>
          </div>
          </Col>
        )
      }else{
        return null
      }

    })
    return <div> {accordionMarginItems}</div>
  }
}
export default TrendList
