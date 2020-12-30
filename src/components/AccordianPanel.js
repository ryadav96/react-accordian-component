import React, { Component } from "react";

class AccordianPanel extends Component {
  toggleTab(e) {
    this.props.onTabClick(e);
  }
  render() {
    return (
      <div>
        <button
          onClick={e => this.toggleTab(e)}
          className={
            this.props?.tabDetail?.active === true
              ? "accordian-panel accordian-panel--active"
              : "accordian-panel"
          }
        >
          <div className="accordian-panel__icon">
            {this.props?.tabDetail?.active !== true ? (
              <span className="icon">&#x25B6;</span>
            ) : (
              <span className="icon">&#x25BC;</span>
            )}
          </div>
          <div className="accordian-panel__title">
            {this.props?.tabDetail?.title}
          </div>
        </button>
        {this.props?.tabDetail?.active === true ? (
          <div className="accordian-panel__content">
            {this.props.children ? (
              this.props.children
            ) : (
              <p>No Content Defined</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AccordianPanel;

AccordianPanel.defaultProps = {
  title: "",
  children: <p>No Content Defined</p>,
  index: 0,
  active: false
};
