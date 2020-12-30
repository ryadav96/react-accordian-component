import React, { Component } from "react";
import AccordianPanel from "./AccordianPanel";
const tabDetails = [
  {
    title: "New Title",
    index: 0,
    active: false
  },
  {
    title: "New Title2",
    index: 0,
    active: false
  },
  {
    title: "New Title3",
    index: 0,
    active: false
  },
  {
    title: "New Title3",
    index: 0,
    active: false
  }
];

class Accordian extends Component {
  state = { mockData: tabDetails };
  togglePanel(e) {
    console.log(e);
    const accordianListKey = Object.keys(tabDetails);
    accordianListKey.forEach((listDetail, index) => {
      if (e !== index) {
        tabDetails[accordianListKey[index]].active = false;
      } else {
        tabDetails[accordianListKey[e]].active = !tabDetails[
          accordianListKey[e]
        ].active;
      }
    });
    this.setState({ mockData: tabDetails });
  }

  render() {
    const renderedList = tabDetails.map((tabDetail, i) => {
      return (
        <AccordianPanel
          id={tabDetail.title}
          tabDetail={tabDetail}
          onTabClick={e => {
            this.togglePanel(i);
          }}
        >
          <p>CONTENT OF ACCORDIAN</p>
        </AccordianPanel>
      );
    });
    return (
      <div>
        ACCORDIAN
        {renderedList}
      </div>
    );
  }
}

export default Accordian;
