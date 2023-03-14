import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import { ResultContextProvider } from './context/ResultContextProvider'
import App from './App'
import './styles/bootstrap.min.css'
import './styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ResultContextProvider>
    <Router>
        <App/>
    </Router>
</ResultContextProvider>
);