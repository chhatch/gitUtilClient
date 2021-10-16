import React from 'react'
import logo from './logo.svg'
import './App.css'
import { RepoInfoFetcher } from './features/gitHub/components'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App d-flex flex-column align-items-center">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <RepoInfoFetcher />
        </div>
    )
}

export default App
