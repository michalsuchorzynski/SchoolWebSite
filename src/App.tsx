import { library } from '@fortawesome/fontawesome-svg-core'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Documents from './containers/About/Documents'
import History from './containers/About/History'
import Sport from './containers/About/Sport'
import Teachers from './containers/About/Teachers'
import Contact from './containers/Contact/Contact'
import Home from './containers/Home/Home'
import Parents from './containers/Parents/Parents'
import SchoolLive from './containers/SchoolLive/SchoolLive'
import Council from './containers/Students/Council'
import GlobalEducation from './containers/Students/GlobalEducation'
import Library from './containers/Students/Library'
import Students from './containers/Students/Students'
import Volunteering from './containers/Students/Volunteering'
import Layout from './hoc/Layout'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/students" component={Students} />
          <Route path="/schoolLive" component={SchoolLive} />
          <Route path="/contact" component={Contact} />
          <Route path="/parents" component={Parents} />
          <Route path="/documents" component={Documents} />
          <Route path="/sport" component={Sport} />
          <Route path="/council" component={Council} />
          <Route path="/globalEducation" component={GlobalEducation} />
          <Route path="/volunteering" component={Volunteering} />
          <Route path="/library" component={Library} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    )
  }
}

export default App