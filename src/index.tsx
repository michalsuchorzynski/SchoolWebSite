import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

const app = (
    <HashRouter>
        <App />
    </HashRouter>
)

ReactDOM.render(app, document.getElementById('root'))