import React from 'react'
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { data } from "./helper/data";

console.log(data)

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  )
}

export default App