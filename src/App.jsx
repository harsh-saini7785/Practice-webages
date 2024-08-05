import { Suspense, useState } from 'react'
import './App.css'
import AppBar from './components/NavBar/NavBar.jsx'
import SideNav from './components/SideNav/SideNav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js'

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h1>loading</h1>}>
          <Routes>
            <Route path='/' element={
              <SideNav />
            }>
              {routes?.map((route, idx) => {
                return <Route key={idx} path={route.path} element={
                  <route.component />
                } />
              })}
            </Route>
          </Routes>
        </Suspense >
      </Router>
    </div>
  )
}

export default App
