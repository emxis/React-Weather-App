import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import axios from 'axios'
import Page from './pages/Page'

function App() {
  const [weather, setWeather] = useState(null)
  const [yer, setYer] = useState("")
  const apiKey = "buraya api keyinizi yazın"
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${yer}&appid=${apiKey}`;
  const btnClick = ()=>{
    axios.get(api)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios
    .get("")
  }, []);
  return (
    <>
    <Page
    yer={yer}
    setYer={setYer}
    btnClick={btnClick}
    weather={weather}
    />
    </>
    )
}

export default App;
