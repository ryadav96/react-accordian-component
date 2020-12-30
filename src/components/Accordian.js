import React, { Component } from "react";
import AccordianPanel from "./AccordianPanel";
import RegistrationForm from "./RegistrationForm";
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
  togglePanel(e, event) {
    const element = event.target;
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
    element.scrollIntoView();
  }

  render() {
    const renderedList = tabDetails.map((tabDetail, i) => {
      return (
        <AccordianPanel
          id={tabDetail.title}
          tabDetail={tabDetail}
          onTabClick={e => {
            this.togglePanel(i, e);
          }}
        >
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
          <RegistrationForm />
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
