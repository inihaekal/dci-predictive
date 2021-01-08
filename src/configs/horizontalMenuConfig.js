import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },

  {
    id: "trend",
    title: "Trend",
    type: "item",
    icon: <Icon.Activity size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/trend",
  },
  {
    id: "page2",
    title: "Page 2",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2",
  }  ,
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard",
  }
]

export default horizontalMenuConfig
