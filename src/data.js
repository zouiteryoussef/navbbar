import React from "react";
const Mylist = [
  {
    name: "  Home  ",
    link: "#",
    isActive: true
  },
  {
    name: "  Services  ",
    link: "#",
    isActive: false,
    children: [
      {
        name: "For entrepreneurs",
        link: "#",
        isActive: false
      },
      {
        name: "For students",
        link: "#",
        isActive: false
      },
      {
        name: "For hobbysts",
        link: "#",
        isActive: false
      }
    ]
  },
  {
    name: "  Contact  ",
    link: "#",
    isActive: false
  }
];
export default Mylist;
