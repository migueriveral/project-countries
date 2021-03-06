import React from "react"
import {Route, Switch} from "react-router-dom"

import './App.css'
import Counter from "./Components/Counter"
import CountryInfo from "./Components/CountryInfo"
import Footer from "./Components/Footer"
import Header from "./Components/Header"


function App() {
  return (
    <div>
      <Header />
      
      <div className="main">
        <Switch>
          <Route exact path="/">
            <CountryInfo />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
