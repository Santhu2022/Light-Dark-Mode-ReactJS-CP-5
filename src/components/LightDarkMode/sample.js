import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state: {darkMode: true, bgColor: 'dark-mode', textColor: 'dark-mode-text'}

  changeMode = () => {
    const {darkMode} = this.state
    let mode = 'true'
    let bgColor = 'dark-mode'
    let textColor = 'dark-mode-text'
    if (darkMode === true) {
      mode = 'false'
      bgColor = 'light-mode'
      textColor = 'light-mode-text'
    }
    this.setState({darkMode: mode, bgColor, textColor})
  }

  render() {
    const {bgColor, textColor} = this.state
    return (
      <div className="main-bg-container">
        <div className={`${bgColor} app-container`}>
          <h1 className={`${textColor} change-text`}>Click To change Mode</h1>
          <button type="submit" onClick={this.changeMode} className="button">
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
