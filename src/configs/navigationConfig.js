import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard"
  },

  {
    id: "summary",
    title: "Summary",
    type: "item",
    icon: <Icon.Info size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/summarytwo"
  },

  // {
  //   id: "trend",
  //   title: "Trend",
  //   type: "item",
  //   icon: <Icon.Activity size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/trend",
  // },

  {
    type: "groupHeader",
    groupTitle: "INCIDENT"
  },

  {
    id: "incident_dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Monitor size={20} />,
    permissions: ["admin"],
    navLink: "/pages/incident_dashboard"
  }

]

export default navigationConfig
