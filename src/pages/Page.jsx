import React from 'react'

function Page({yer,setYer,btnClick,weather}) {
  const inputValue =(event)=>{
    setYer(event.target.value)
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-lg px-4 py-1">
      <a class="navbar-brand" href="https://github.com/emxis" target='_blank'>EMXİS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section className='py-5 w-100 d-flex justify-content-center align-items-center'>
    <div>
      <h1 className='pt-3 fw-bold display-6'>EMXİS HAVA DURUMU</h1>
      <div className='d-flex'>
        <input type="text" className='form-control outline-dark-emxis me-1' placeholder='ülke/şehir giriniz...' onChange={inputValue} value={yer}/>
        <button className='ms-1 btn fw-bold btn-outline-dark' onClick={btnClick}>Gönder</button>
      </div>
      {
      weather&&(
        <div className='mt-3'>
          <h2>{weather.name}</h2>
          <p>Sıcaklık : {weather.main.temp}</p>
          <p>Minimum Sıcaklık : {weather.main.temp_min}</p>
          <p>Maximum Sıcaklık : {weather.main.temp_max}</p>
          <p>Hissedilen : {weather.main.feels_like}</p>
          <p>Ülke : {weather.sys.country}</p>
          <p></p>
        </div>
      )
    }
    </div>
  </section>
    </>
  )
}

export default Page