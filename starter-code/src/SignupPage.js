import React, { Component } from "react";

// Create a SignupPage component with the following elements:
class SignupPage extends Component {
  state = {
    lang: ["en", "de", "fr"],
    children: ["Hello🏈", "Hallo🐻", "Bonjour❣️"],
    value: ["en", "de", "fr"]
  };

  setLanguage = () => {
    console.log(this.state.value[1]);
    if (this.state.value === "en") {
      this.setState({ lang: this.state.lang[0] });
      this.setState({ children: this.state.children[0] });
    }
    if (this.state.value === "fr") {
      this.setState({ lang: this.state.lang[2] });
      this.setState({ children: this.state.children[2] });
    }
    if (this.state.value === "de") {
      this.setState({ lang: this.state.lang[1] });
      this.setState({ children: this.state.children[1] });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form type>
          <label for="email">email:</label>
          <input type="email" id="email"></input>
          <label for="pwd">Password:</label>
          <input type="password" id="pwd"></input>
          <label for="nationality">nationality:</label>
          <select id="language" onChange={this.setLanguage}>
            <option onChange={this.setLanguage} value={this.state.value[0]}>
              en{" "}
            </option>
            <option onChange={this.setLanguage} value={this.state.value[1]}>
              de
            </option>
            <option onChange={this.setLanguage} value={this.state.value[2]}>
              fr
            </option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>

        <h3>
          lang={this.state.lang[0]} : children={this.state.children[0]}
        </h3>
        <p>Your e-mail is </p>
      </React.Fragment>
    );
  }
}
// A input "email" (bonus: make the input green/red when the email is valid/invalid)
// A input "password" (bonus: make the input green/red when the password is strong/weak)
// A select input "nationality" (possible values: "en","de","fr")
// A text "Hello", "Hallo" or "Bonjour" based on the selected nationality
// A text "Your email is john@doe.com"
// For this, you will need 3 states:

// email
// password
// nationality

export default SignupPage;
