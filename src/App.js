import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';




const imagens = [
  require('./src/img/dado1.png'),
  require('./src/img/dado2.png'),
  require('/src/img/dado3.png'),
  require('/src/img/dado4.png'),
  require('/src/img/dado5.png'),
  require('/src/img/dado6.png'),
  require('/src/logo.svg'),
];





function App() {
      const [index, setIndex] = useState(6); 
      const [index2, setIndex2] = useState(6); 
      const [suaVezPlayer1, setSuaVezPlayer1] = useState(false); 
      const [suaVezPlayer2, setSuaVezPlayer2] = useState(true); 
      const [Player1Jogou, setPlayer1Jogou] = useState(0);
      const [Player2Jogou, setPlayer2Jogou] = useState(0);
      const [player1Ganhou, setPlayer1Ganhou] = useState(0);
      const [player2Ganhou, setPlayer2Ganhou] = useState(0);
      const [eleGanhou, setEleGanhou] = useState(0); 
      const [rodada, setRodada] = useState(0); 
      const [girou, setGirou] = useState(0); 

      var r = "rodada";
  
      const girarDado = () => {
        setGirou(girou+1)
        setRodada(rodada + 1);        


        if(suaVezPlayer1){
          setIndex(Math.floor(Math.random() * (imagens.length - 1 )));
          setPlayer1Jogou(Player1Jogou + 1);        
        }
        else if(suaVezPlayer2){
          setIndex2(Math.floor(Math.random() * (imagens.length - 1)));
          setPlayer2Jogou(Player2Jogou + 1);
        }
        verificar()
        suaVez();
      };

      const verificar=() =>{
           if(girou==2){
            ganhou()
            setGirou(0)
           }
      }

      function suaVez() {
        if (suaVezPlayer1) {
          setSuaVezPlayer1(false); 
          setSuaVezPlayer2(true); 
        } else if(suaVezPlayer2){
          setSuaVezPlayer1(true); 
          setSuaVezPlayer2(false); 
        }
      }

      function ganhou(){
        if(index > index2  && Player1Jogou == Player2Jogou){
            setEleGanhou( "Player1 ganhou!")
            setPlayer1Ganhou(player1Ganhou+1)
        }
        else if(index2 > index  && Player1Jogou == Player2Jogou){
            setEleGanhou( "Player2 ganhou!")
            setPlayer2Ganhou(player2Ganhou+1)
       }
       else if(index == index2  && Player1Jogou == Player2Jogou){
        setEleGanhou( "Empate")

       }
      }

  return (
    <div className="App">
      <header className="App-header">
        <h1>rodada : {rodada}</h1>
        <h2>{eleGanhou}{verificar()}</h2>
        <h3>Placar</h3>
        <div id= "placar">
          <p id= "placar1"> Player1: {player1Ganhou}</p>
          <p id= "placar1"> Player2: {player2Ganhou}</p>
        </div>
        
       <div id ="dados">
          <div id='img'>
            <img src={imagens[index]} />

          </div>

          <div id='img2'>
            <img src={imagens[index2]} />

          </div>
      </div>
      <div id='botoes'>
        <div>
            <button className="primary-button"onClick={girarDado}  disabled={suaVezPlayer1}>girar</button>
  
          </div>
        <div>
          <button  className="primary-button" onClick={girarDado}  disabled={suaVezPlayer2}>girar</button>

        </div>
      </div>
      </header>
    </div>
  );
}
export default App;
