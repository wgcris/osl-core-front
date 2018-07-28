import React  from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from '../components/App'

const Root = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>
);

export default Root