import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Hero />
      <About />
      <Blog />
      <Footer />
  </React.StrictMode>,
)
