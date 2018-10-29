import React, { Component } from "react";

class AudioButton extends Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handlePlayClick(myButton, myAudio, myVolume, id) {
    this.props.handleDisplayValue(id);
    if (this.props.power) {
      playAudio(myButton, myAudio, myVolume);
    }
  }
  handleKeyDown(e) {
    const myVolume = this.props.volume;
    const id = this.props.id
   
    if (e.key.toUpperCase() === this.props.value) {
      playAudio(this.button, this.audio, myVolume);
      this.props.handleDisplayValue(id);

      
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { volume, className, id, audioID, source, value } = this.props;

    return (
      <button
        className={className}
        id={id}
        onClick={() => {
          this.handlePlayClick(this.button, this.audio, volume, id);
        }}
        ref={el => (this.button = el)}
        onKeyDown={this.handleKeyDown}

      >
        <audio
          className="clip"
          id={audioID}
          ref={el => (this.audio = el)}
          src={source}
          type="audio/mp3"
        >
          Your Browser doesnt support audio
        </audio>
        {value}
      </button>
    );
  }
}

const playAudio = (myButton, myAudio, myVolume) => {
  myButton.style.background = "orange";

  myAudio.volume = parseFloat(myVolume);
  myAudio.play();

  setTimeout(() => {
    myButton.style.background = "#054364";
  }, 300);
};

export default AudioButton;
