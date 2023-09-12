import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar 
    item1='Teste'
    item2={5}
    />

    <Footer
    titulo1='Naruto'
    titulo2='DragonBall'
    /> */}

    <Card
      
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
