import React, { useContext } from 'react'
import './Info.css'
import { ColorBlindModeContext, DarkModeContext, TabContext } from './App'

const InfoPage = () => {

  const {setTabData} = useContext(TabContext);
  const {darkMode} = useContext(DarkModeContext);
  const {colorBlindMode} = useContext(ColorBlindModeContext);

  const handleClose = () => {
    setTabData('');
  }

  return (
    <div className={`infopage ${darkMode?'dark':''}`}>
      <button className={`closebutton ${darkMode?'dark':''}`} onClick={()=>handleClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </button>
      <div className={`heading ${darkMode?'dark':''}`}>How to Play</div>
      <div className='info'>
        <p>Guess the <span>WORDLE</span> in 6 tries</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
        <p><span>Each guess must be a word with the same number of letters as the number of squares horizontally.The example below is 5 letters.</span></p>
        <p>In addition, you can set the number of letters you want to play in the settings.</p>
        <p>To start the game, just enter any word, for example:</p>
      </div>
      <div className='imageshowcase'>
        <p className={`wordle-letters incorrect ${colorBlindMode?'colorblind':''}`}>F</p>
        <p className={`wordle-letters incorrect ${colorBlindMode?'colorblind':''}`}>L</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>I</p>
        <p className={`wordle-letters letter-correct ${colorBlindMode?'colorblind':''}`}>E</p>
        <p className={`wordle-letters letter-correct ${colorBlindMode?'colorblind':''}`}>S</p>
      </div>
      <div className={`explanation ${darkMode?'dark':''}`}>
      <p>The letter <span className={`letters  position-correct ${colorBlindMode?'colorblind':''}`}>I</span> is in the word and in the correct spot.</p>
        <p>The letters <span className={`letters incorrect ${colorBlindMode?'colorblind':''}`}>F</span> , <span className={`letters incorrect ${colorBlindMode?'colorblind':''}`}>L</span> aren't in the word at all.</p>
        <p>The letters <span className={`letters letter-correct ${colorBlindMode?'colorblind':''}`}>E</span> , <span className={`letters letter-correct ${colorBlindMode?'colorblind':''}`}>S</span> are in the word but in the wrong spot.</p>
      </div>
      <div className='info'>
        <p>Another try to find matching letters in the target word.</p>
      </div>
      <div className='imageshowcase'>
      <p className={`wordle-letters incorrect ${colorBlindMode?'colorblind':''}`}>P</p>
        <p className={`wordle-letters incorrect ${colorBlindMode?'colorblind':''}`}>R</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>I</p>
        <p className={`wordle-letters letter-correct ${colorBlindMode?'colorblind':''}`}>E</p>
        <p className={`wordle-letters letter-correct ${colorBlindMode?'colorblind':''}`}>S</p>
      </div>
      <div className={`explanation ${darkMode?'dark':''}`}>
        <p>The letter <span className={`letters  position-correct ${colorBlindMode?'colorblind':''}`}>I</span> is in the word and in the correct spot.</p>
        <p>The letters <span className={`letters incorrect ${colorBlindMode?'colorblind':''}`}>P</span> , <span className={`letters incorrect ${colorBlindMode?'colorblind':''}`}>R</span> aren't in the word at all.</p>
        <p>The letters <span className={`letters letter-correct ${colorBlindMode?'colorblind':''}`}>E</span> , <span className={`letters letter-correct ${colorBlindMode?'colorblind':''}`}>S</span> are in the word but in the wrong spot.</p>
      </div>
      <div className='info'>
        <p>Another try to find matching letters in the target word.</p>
      </div>
      <div className='imageshowcase'>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>S</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>P</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>I</p>
        <p className={`wordle-letters incorrect ${colorBlindMode?'colorblind':''}`}>R</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>E</p>
      </div>
      <div className='info'>
        <p>You are so close!!</p>
      </div>
      <div className='imageshowcase'>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>S</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>P</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>I</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>C</p>
        <p className={`wordle-letters position-correct ${colorBlindMode?'colorblind':''}`}>E</p>
      </div>
      <div className='info'>
        <p style={{fontWeight: 'bold'}}>Got it.</p>
      </div>
    </div>
  )
}

export default InfoPage