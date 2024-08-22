import React, { useContext, useEffect } from 'react'
import './Setting.css'
import { ColorBlindModeContext, ConfettiModeContext, DarkModeContext, HardModeContext, TabContext } from './App';

const Setting = () => {

  const { setTabData } = useContext(TabContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { hardMode, setHardMode } = useContext(HardModeContext);
  const { confettiMode, setConfettiMode } = useContext(ConfettiModeContext);
  const { colorBlindMode, setColorBlindMode } = useContext(ColorBlindModeContext);

  const handleClose = () => {
    setTabData(0);
  }

  const handleOption = (e, option) => {
    e.target.classList.toggle('active')
    if(option === 'HARD MODE'){
      if(e.target.classList.contains('active')){
        setHardMode(true);
        localStorage.setItem('hardMode','hardmode');
      } else {
        setHardMode(false);
        localStorage.setItem('hardMode','nohardmode');
      }
    } else if(option === 'DARK MODE'){
      if(e.target.classList.contains('active')){
        setDarkMode(true);
        localStorage.setItem('theme','dark');
      } else {
        setDarkMode(false);
        localStorage.setItem('theme','light');
      }
    } else if(option === 'CONFETTI MODE'){
      if(e.target.classList.contains('active')){
        setConfettiMode(true);
        localStorage.setItem('confetti','confetti');
      } else {
        setConfettiMode(false);
        localStorage.setItem('confetti','no-confetti');
      }
    } else if(option === 'COLOR BLIND MODE') {
      if(e.target.classList.contains('active')){
        setColorBlindMode(true);
        localStorage.setItem('colorblind','colorblind');
      } else {
        setColorBlindMode(false);
        localStorage.setItem('colorblind','no-colorblind');
      }
    }
  }

  return (
    <div className='settingspage'>
      <button className={`closebutton ${darkMode?'dark':''}`} onClick={() => handleClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
      </button>
      <div className={`heading ${darkMode?'dark':''}`}>Settings</div>
      <div className={`menu-options ${darkMode?'dark':''}`}>
        <div className={`menu-option ${darkMode?'dark':''}`}>
          <div className={`setting-info ${darkMode?'dark':''}`}>
            <div className='setting-heading'>Hard Mode</div>
            <div className='setting-description'>Any revealed hints must be used in subsequent guesses</div>
          </div>
          <div className='toggle-div'>
            <label className='switch'  onClick={(event) => handleOption(event,'HARD MODE')}>
              <span className={`slider ${darkMode?'dark':''} round ${hardMode?'active':''}`}></span>
            </label>
          </div>
        </div>
        <div className={`menu-option ${darkMode?'dark':''}`}>
          <div className={`setting-info ${darkMode?'dark':''}`}>
            <div className='setting-heading'>Dark Mode</div>
            <div className='setting-description'>Change light and dark mode</div>
          </div>
          <div className='toggle-div'>
            <label className="switch" onClick={(event) => handleOption(event,'DARK MODE')}>
            <span className={`slider ${darkMode?'dark':''} round ${darkMode?'active':''}`}></span>
            </label>
          </div>
        </div>
        <div className={`menu-option ${darkMode?'dark':''}`}>
          <div className={`setting-info ${darkMode?'dark':''}`}>
            <div className='setting-heading'>Color Blind Mode</div>
            <div className='setting-description'>High contrast colors</div>
          </div>
          <div className='toggle-div'>
            <label className="switch" onClick={(event) => handleOption(event,'COLOR BLIND MODE')}>
            <span className={`slider ${darkMode?'dark':''} round ${colorBlindMode?'active':''}`}></span>
            </label>
          </div>
        </div>
        <div className={`menu-option ${darkMode?'dark':''}`}>
          <div className={`setting-info ${darkMode?'dark':''}`}>
            <div className='setting-heading'>Confetti Animations</div>
            <div className='setting-description'>Confetti animations when the game is won</div>
          </div>
          <div className='toggle-div'>
            <label className="switch" onClick={(event) => handleOption(event,'CONFETTI MODE')}>
            <span className={`slider ${darkMode?'dark':''} round ${confettiMode?'active':''}`}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting