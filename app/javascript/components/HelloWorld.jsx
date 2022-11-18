import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          <div className="form">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }

}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld


