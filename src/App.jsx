import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Style dla wersji 2 (Pomarańczowy motyw)
  const containerStyle = {
    backgroundColor: '#fff3e0', // Jasny pomarańcz
    color: '#e65100',           // Ciemny pomarańczowy tekst
    border: '4px solid #ff9800', // Pomarańczowa ramka
    borderRadius: '20px',
    padding: '40px',
    margin: '20px auto',
    maxWidth: '500px',
    fontFamily: 'Arial, sans-serif'
  }

  const buttonStyle = {
    backgroundColor: '#ff9800',
    color: 'black',
    border: 'none',
    padding: '15px 30px', // Większy przycisk
    borderRadius: '50px', // Okrągły przycisk
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }

  return (
    <div style={containerStyle}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" width="80" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" width="80" />
        </a>
      </div>
      
      <h1>🔥 Wersja 2.0</h1>
      <h2>UPDATED! Nowy Wygląd</h2>
      
      <div className="card">
        <p>To jest zaktualizowana aplikacja. Zauważ zmianę kolorów!</p>
        <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
          SUPER LICZNIK: {count}
        </button>
      </div>
      
      <p style={{marginTop: '30px', fontSize: '12px'}}>
        ID Obrazu: <strong>v2-orange</strong>
      </p>
    </div>
  )
}

export default App