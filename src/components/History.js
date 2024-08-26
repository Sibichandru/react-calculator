import React, { useContext, useState } from 'react'
import  historyIcon from './history_icon.svg'
import { HistoryContext } from '../context/HistoryContext'
export const History = () => {
  const toggleHistory = ()=>{
    if (historyMode === false) setHistoryMode(true) 
    else setHistoryMode(false)
  }
  const histortmode = useContext(HistoryContext)
  const [historyMode,setHistoryMode] = useState(histortmode)
  console.log(historyMode);
  
  return (      
      <div className='history-button' onClick={toggleHistory}><img src={historyIcon} width='20px'/></div>
  )
}
