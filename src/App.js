import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProgressSteps from './components/Progress-steps/progress-step'
import Expending from './components/Expending-card/expending-card'
import RotatingNavigation from './components/Rotating-navigation/rotating-navigation'
import HiddenSearchWidget from './components/Hidden-search/hidden-search-widget'
import BlurryLoading from './components/Blurry-loading/blurry-loading'
import ScrollAnimation from './components/Scroll-animation/scroll-animation'

function App() {
  return (
    // <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/expending-card">
          <Expending />
        </Route>

        <Route path="/progress-step">
          <ProgressSteps />
        </Route>

        <Route path="/rotating-navigation">
          <RotatingNavigation />
        </Route>

        <Route path="/hidden-search-widget">
          <HiddenSearchWidget />
        </Route>

        <Route path="/blurry-loading">
          <BlurryLoading />
        </Route>

        <Route path="/scroll-animation">
          <ScrollAnimation />
        </Route>
      </Switch>
    </Router>
    // </div>
  )
}

export default App
