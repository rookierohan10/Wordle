import React, { createContext, useEffect, useState } from 'react'
import Gamescreen from './Gamescreen'
import InfoPage from './InfoPage';
import Setting from './Setting';
import Stat from './Stat';
import './App.css'

export const TabContext = createContext();
export const DarkModeContext = createContext();
export const ConfettiModeContext = createContext();
export const HardModeContext = createContext();
export const ColorBlindModeContext = createContext();

const App = () => {

    const [tabData, setTabData] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [hardMode, setHardMode] = useState(false);
    const [confettiMode, setConfettiMode] = useState(true);
    const [colorBlindMode, setColorBlindMode] = useState(false);

    const savedMode = () => {
        const savedMode = localStorage.getItem('hardMode');
        if(savedMode === 'hardmode') {
            setHardMode(true);
        } else {
            setHardMode(false);
        }
    }

    const savedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }

    const savedConfettiSettings = () => {
        const confetti = localStorage.getItem('confetti');
        if(confetti === 'confetti') {
            setConfettiMode(true);
        } else if(confetti === 'no-confetti'){
            setConfettiMode(false);
        } else {
            return;
        }
    }

    const savedColorBlind = () => {
        const colorBlind = localStorage.getItem('colorblind');
        if(colorBlind === 'colorblind') {
            setColorBlindMode(true);
        } else {
            setColorBlindMode(false);
        }
    }

    useEffect(()=>{
        savedMode();
        savedTheme();
        savedConfettiSettings();
        savedColorBlind();
    },[])

    const tabChange = () => {
        switch (tabData) {
            case 0:
                return <Gamescreen />
                break;
            case 1:
                return <Stat />
                break;
            case 2:
                return <Setting />
                break;
            case 3:
                return <InfoPage />
            default:
                return <Gamescreen />
                break;
        }
    }


    return (
        <TabContext.Provider value={{ tabData, setTabData }}>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <ConfettiModeContext.Provider value={{ confettiMode, setConfettiMode }}>
                    <HardModeContext.Provider value={{ hardMode, setHardMode }}>
                        <ColorBlindModeContext.Provider value={{ colorBlindMode, setColorBlindMode }}>
                            <div className={`app ${darkMode?'dark':''}`}>
                                {tabChange()}
                            </div>
                        </ColorBlindModeContext.Provider>
                    </HardModeContext.Provider>
                </ConfettiModeContext.Provider>
            </DarkModeContext.Provider>
        </TabContext.Provider>
    )
}

export default App