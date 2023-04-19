import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    console.log(this.state)
    const bgColor = darkMode ? 'dark-mode' : 'light-mode'
    const textColor = darkMode ? 'dark-mode-text' : 'light-mode-text'
    const buttontext = darkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="main-bg-container">
        <div className={`${bgColor} app-container`}>
          <h1 className={`${textColor} change-text`}>Click To change Mode</h1>
          <button onClick={this.changeMode} type="submit" className="button">
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
