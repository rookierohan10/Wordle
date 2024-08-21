import React, { useContext } from 'react'
import './Setting.css'
import { TabContext } from './App';

const Setting = () => {

  const { setTabData } = useContext(TabContext);

  const handleClose = () => {
    setTabData('');
  }

  return (
    <div className='settingspage'>
      <button className='closebutton' onClick={() => handleClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
      </button>
      <div className='heading'>Settings</div>
      <div className='menu-options'>
        <div className='menu-option'>
          <div className='setting-info'>
            <div className='setting-heading'>Hard Mode</div>
            <div className='setting-description'>Any revealed hints must be used in subsequent guesses</div>
          </div>
          <div className='toggle-div'>
            <label className="switch">
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className='menu-option'>
          <div className='setting-info'>
            <div className='setting-heading'>Dark Mode</div>
            <div className='setting-description'>Change light and dark mode</div>
          </div>
          <div className='toggle-div'></div>
        </div>
        <div className='menu-option'>
          <div className='setting-info'>
            <div className='setting-heading'>Color Blind Mode</div>
            <div className='setting-description'>High contrast colors</div>
          </div>
          <div className='toggle-div'></div>
        </div>
        <div className='menu-option'>
          <div className='setting-info'>
            <div className='setting-heading'>Confetti Animations</div>
            <div className='setting-description'>Confetti animations when the game is won</div>
          </div>
          <div className='toggle-div'></div>
        </div>
      </div>
    </div>
  )
}

export default Setting