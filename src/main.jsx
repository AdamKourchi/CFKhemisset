import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EtaMap from './EtaMap.jsx'
import Secteurs from './Secteurs.jsx'
import Chiffres from './Chiffres.jsx'
import Details from './Details.jsx'
import FooterWithLogo from './FooterWithLogo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <EtaMap/>
    <Secteurs/>
    <Chiffres/>
    <Details/>
    <FooterWithLogo/>
  </React.StrictMode>
)
