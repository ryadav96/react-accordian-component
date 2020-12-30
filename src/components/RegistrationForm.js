import React, { Component } from "react";

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label for="radio1">Radio 1</label>
          <input name="radio1" type="radio" />
          <label for="radio1">Radio 1</label>
          <input name="radio1" type="radio" />
          <label for="radio1">Radio 1</label>
          <input name="radio1" type="radio" />
        </div>
        <div>
          <label for="radio1">Radio 1</label>
          <input name="radio1" type="radio" />
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
