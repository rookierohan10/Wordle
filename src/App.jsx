import React, { createContext, useEffect, useState } from 'react'
import Gamescreen from './Gamescreen'
import InfoPage from './InfoPage';
import Setting from './Setting';
import Stat from './Stat';
import './App.css'

export const TabContext = createContext();

const App = () => {

    const [tabData, setTabData] = useState(0);
    const [currentTab, setCurrentTab] = useState('');

    const tabChange = () => {
        switch(tabData){
            case 0:
                return <Gamescreen/>
                break;
            case 1:
                return <Stat/>
                break;
            case 2:
                return <Setting/>
                break;
            case 3:
                return <InfoPage/>
            default: 
                return <Gamescreen/>
                break;
        }
    }


    return (
        <TabContext.Provider value={{tabData, setTabData}}>
            <div className='app'>
            {tabChange()}
            </div>
        </TabContext.Provider>
    )
}

export default App