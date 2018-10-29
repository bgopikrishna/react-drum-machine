import React, { Component } from "react";
import "./App.css";
import { bankOne, bankTwo } from "./constants/index";
import Switcher from "./components/switcher";
import Display from "./components/display";
import InputSlider from "./components/volumeSlider";
import Pad from "./components/pad";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      bankState: false,
      displayValue: "Welcome",
      volume: "0.5"
    };

    this.handlePower = this.handlePower.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleDisplayValue = this.handleDisplayValue.bind(this);
  }
  //Handle Power on/of
  handlePower() {
    const { power } = this.state;
    this.setState({
      power: !power
    });
    power
      ? this.setState({ displayValue: "Power Off" })
      : this.setState({ displayValue: "Power On" });
  }
  //Hadles BankState bankOne (or) bankTwo
  handleBank() {
    const { bankState } = this.state;
    this.setState({
      bankState: !bankState
    });

    bankState
      ? this.setState({ displayValue: "Bank One" })
      : this.setState({ displayValue: "Bank Two" });
  }
  handleVolume(value) {
    this.setState({
      volume: value,
      displayValue: parseFloat(value) * 100
    });
  }
  handleDisplayValue(value) {
    this.setState({
      displayValue: value
    })
  }

  render() {
    const { bankState, displayValue, power, volume } = this.state;
    const audioList = bankState ? bankOne : bankTwo;
    return (
      <div className="App">
        <div className="box" id="drum-machine">
          <Pad
            power={power}
            bankState={bankState}
            audioList={audioList}
            volume={volume}
            handleDisplayValue={this.handleDisplayValue}
          />
          {/*Controller Section for power, bankState, Volume , Display */}
          <div className="controller">
            {/*Power Switcher */}

            <Switcher
              className={"power-controller"}
              value={"Power"}
              onChange={this.handlePower}
              checked={power}
            />

            {/* Display Box*/}

            <Display value={displayValue} id={"display"} />

            {/*Volume Slider */}

            <InputSlider
              className={"volume"}
              id={"vol"}
              value={volume}
              onChange={this.handleVolume}
            />

            {/*BankState Changer */}

            <Switcher
              className={"bank"}
              value={"Bank"}
              onChange={this.handleBank}
              checked={bankState}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
