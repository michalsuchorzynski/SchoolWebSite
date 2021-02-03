import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import About from './containers/About/About'
import History from './containers/About/History'
import Contact from './containers/Contact/Contact'
import Home from './containers/Home/Home'
import Parents from './containers/Parents/Parents'
import SchoolLive from './containers/SchoolLive/SchoolLive'
import Layout from './hoc/Layout/Layout'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/history" component={History} />
          <Route path="/schoolLive" component={SchoolLive} />
          <Route path="/contact" component={Contact} />
          <Route path="/parents" component={Parents} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    )
  }
}

export default App