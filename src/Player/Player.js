import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default function Player() {
  
  // the style object
  const style = {
    minWidth: "100px",
    textAlign: "center",
    padding: "3px",
    margin: "10px",
    border: "1px solid black",
    boxShadow: "5px 5px rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  }

  //state variables
  const [currentRound, setCurrentRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [currentTrickGuess, setCurrentTrickGuess] = useState(null);
  const [currentBonus, setCurrentBonus] = useState(null);
  const [tricksWon, setTricksWon] = useState(null);
  const [previousScore, setPreviousScore] = useState(null);
  let currentScore;
  if (currentTrickGuess !== 0 && currentTrickGuess === tricksWon) {
    currentScore = currentTrickGuess * 20 + currentBonus;
  } else if (currentTrickGuess === 0 && currentTrickGuess === tricksWon) {
    currentScore = currentRound * 10 + currentBonus;
  } else if (currentTrickGuess === 0 && currentTrickGuess !== tricksWon) {
    currentScore = -(currentRound * 10)
  } else if (currentTrickGuess !== 0 && currentTrickGuess !== tricksWon) {
    currentScore = -(Math.abs(currentTrickGuess - tricksWon)*10)
  } else {
    currentScore = null;
  };
  

  //handling finish
  const [done, setDone] = useState(false);
  const finishHandler = () => {
    setDone(true);
    setCurrentRound("끝")
  }

  //handling reset
  const resetHandler = () => {
    setCurrentRound(1);
    setTotalScore(0);
    setDone(false);
  }


  return (
    <div style={style}>
      <input type="text" style={{fontWeight: "bold", textAlign: "center", fontSize: "1.6em", border: "none", width: "70%"}}></input>
      <hr />
      <p style={{fontWeight: "bold", fontSize: "1em", margin: "0"}}>총 점수: <p style={{fontSize:"2em", margin: "0"}}>{totalScore}</p></p>
      <hr />
      <p style={{fontWeight: "bold"}}> {currentRound} {currentRound !== "끝" ? "라운드" : null} </p>
      <hr />
      <p style={{fontSize: "0.8em", margin: "0"}}>예상 트릭:
        <Popup
          trigger={<div className="menu-item"> {currentTrickGuess} </div>}
          position="bottom"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >

          <div className="menu">
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 0 )}>0</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 1 )}>1</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 2 )}>2</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 3 )}>3</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 4 )}>4</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 5 )}>5</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 6 )}>6</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 7 )}>7</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 8 )}>8</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 9 )}>9</div>
            <div className="menu-item" onClick={() => setCurrentTrickGuess( 10 )}>10</div>
          </div>
        </Popup>
      </p>
      <p style={{fontSize: "0.8em", margin: "0"}}>보너스:
        <Popup
          trigger={<div className="menu-item"> {currentBonus} </div>}
          position="top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >

          <div className="menu bonus-menu">
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( -10 )}>-20</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( -10 )}>-10</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 0 )}>0</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 10 )}>10</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 20 )}>20</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 30 )}>30</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 40 )}>40</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 50 )}>50</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 60 )}>60</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 70 )}>70</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 80 )}>80</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 90 )}>90</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 100 )}>100</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 110 )}>110</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 120 )}>120</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 130 )}>130</div>
            <div className="menu-item bonus-menu-item" onClick={() => setCurrentBonus( 140 )}>140</div>
          </div>
        </Popup>
      </p>
      <p style={{fontSize: "0.8em", margin: "0"}}>실제 트릭:
        <Popup
          trigger={<div className="menu-item"> {tricksWon} </div>}
          position="top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >
          <div className="menu">
            <div className="menu-item" onClick={() => setTricksWon( 0 )}>0</div>
            <div className="menu-item" onClick={() => setTricksWon( 1 )}>1</div>
            <div className="menu-item" onClick={() => setTricksWon( 2 )}>2</div>
            <div className="menu-item" onClick={() => setTricksWon( 3 )}>3</div>
            <div className="menu-item" onClick={() => setTricksWon( 4 )}>4</div>
            <div className="menu-item" onClick={() => setTricksWon( 5 )}>5</div>
            <div className="menu-item" onClick={() => setTricksWon( 6 )}>6</div>
            <div className="menu-item" onClick={() => setTricksWon( 7 )}>7</div>
            <div className="menu-item" onClick={() => setTricksWon( 8 )}>8</div>
            <div className="menu-item" onClick={() => setTricksWon( 9 )}>9</div>
            <div className="menu-item" onClick={() => setTricksWon( 10 )}>10</div>
          </div>
        </Popup>
      </p>
      <p style={{fontSize: "0.8em", margin: "0"}}>획득 점수: 
        <p style={{fontSize: "2.5em", margin: "0"}}>{currentScore}</p>
      </p>
      <button 
        onClick={() => {
          setTotalScore(totalScore + currentScore);
          setPreviousScore(currentScore);
          currentScore = 0;
          setCurrentTrickGuess(null);
          setCurrentBonus(null);
          setTricksWon(null);
          if (currentRound < 10) {
            setCurrentRound(currentRound + 1);
          } else if (currentRound === 10) {
            finishHandler();
          } else if (currentRound === "끝") {
            resetHandler();
          }
        }
      }
      style={{fontSize: "1em", fontWeight: "bold", boxShadow: "2px 2px #eee"}}
      > 
        {done === false ? "적용" : "리셋"}
      </button>
      <button
        style={{fontSize: "1em", fontWeight: "bold", boxShadow: "2px 2px #eee"}}  
        onClick={() => {
            if (previousScore !== null) {
              setTotalScore(totalScore - previousScore);
              setPreviousScore(null);
              setCurrentRound(currentRound - 1);
            }
          }
        }
      >
        취소
      </button>
    </div>
  )
}
