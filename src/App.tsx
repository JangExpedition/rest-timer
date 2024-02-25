import React, { useEffect } from 'react';
import Timer from './components/Timer/Timer';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {

  const isTimeOver = useSelector((state: RootState)=>state.time.isTimeOver);

  useEffect(()=>{
    console.log(isTimeOver);
  }, [isTimeOver])

  return <div className='App' 
              style={isTimeOver ? {color: "black", background: "white"} : {color: "white", backgroundColor: "black"}}>
    <Timer/>
    <Footer/>
  </div>
}

export default App;
