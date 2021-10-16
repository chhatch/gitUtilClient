import React from 'react'
import logo from './logo.svg'
import './App.css'
import { RepoInfoFetcher } from './features/gitHub/components'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <RepoInfoFetcher />
        </div>
    )
}

export default App
