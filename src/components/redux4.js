import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'


export const Navbar = () => {
    return (
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>
  
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
    )
  }
function App2() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <h2>Welcome to the Redux Essentials example app!</h2>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App2


