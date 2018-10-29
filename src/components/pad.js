import React, { Component } from "react";
import AudioButton from "./button";

class Pad extends Component {
  render() {
    const { power, audioList,volume,handleDisplayValue } = this.props;

    return (
      <div className="pad ">
        {audioList.map(item => {
          return (
            <AudioButton
              key={item.id}
              id={item.id}
              className="btn btn-shawdow drum-pad"
              source={item.sourceUrl}
              audioID={item.key}
              value={item.key}
             
              power={power}
              volume={volume}
              handleDisplayValue={handleDisplayValue}
              
            />
          );
        })}
      </div>
    );
  }
}

export default Pad;
