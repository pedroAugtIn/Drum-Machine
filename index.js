import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
  const [displayText, setDisplayText] = useState(""); // armazenar o conteúdo do display
  
  const playSound = (audioId, description) => {
    const audioElement = document.getElementById(audioId);
    audioElement.currentTime = 0; // reiniciar o aúdio
    audioElement.play(); // tocar o aúdio associado ao botão pressionado
    setDisplayText(description); // atualizar o texto de nosso display 
  };

  // Manipulador de eventos para teclas do teclado
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase(); // Convertendo a tecla para maiúsculas para comparar com os IDs dos botões
    const button = document.getElementById(key);
    if (button) {
      button.click(); 
    }
  };

  useEffect(() => {
    // Adicionando o manipulador de eventos ao documento quando o componente for montado
    document.addEventListener("keydown", handleKeyPress);
    // Removendo o manipulador de eventos ao desmontar o componente
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Passando um array vazio como segundo argumento para que o useEffect seja executado apenas uma vez

  return (
    <div id="drum-machine">
      <h1>Drum Machine 🥁</h1>
      <div id="display">{displayText}</div> 
      <div className="lineone">
        <button className="drum-pad" id="QQ" onClick={() => playSound("Q", "Heater 1")}>
          Q <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
        </button>
        {/* Add onClick handler to playSound function and pass description */}
        <button className="drum-pad" id="WW" onClick={() => playSound("W", "Heater 2")}>
          W <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
        </button>
        <button className="drum-pad" id="EE" onClick={() => playSound("E", "Heater 3")}>
          E <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
        </button>
      </div>
      <div className="linetwo">
        <button className="drum-pad" id="AA" onClick={() => playSound("A", "Heater 4")}>
          A <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
        </button>
        <button className="drum-pad" id="SS" onClick={() => playSound("S", "Heater 6")}>
          S <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
        </button>
        <button className="drum-pad" id="DD" onClick={() => playSound("D", "Dsc Oh")}>
          D <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
        </button>
      </div>
      <div className="linethree">
        <button className="drum-pad" id="ZZ" onClick={() => playSound("Z", "Kick n Hat")}>
          Z <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
        </button>
        <button className="drum-pad" id="XX" onClick={() => playSound("X", "RP4 Kick 1")}>
          X <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
        </button>
        <button className="drum-pad" id="CC" onClick={() => playSound("C", "Cev H2")}>
          C <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#box"));