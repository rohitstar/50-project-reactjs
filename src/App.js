import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProgressSteps from './components/Progress-steps/progress-step'
import Expending from './components/Expending-card/expending-card'
import RotatingNavigation from './components/Rotating-navigation/rotating-navigation'
import HiddenSearchWidget from './components/Hidden-search/hidden-search-widget'
import BlurryLoading from './components/Blurry-loading/blurry-loading'
import ScrollAnimation from './components/Scroll-animation/scroll-animation'
import SplitLandingPage from './components/Split-landing-page/split-landing-page'
import FormWaveAnimation from './components/Form-wave-animation/form-wave-animation'
import SoundBoard from './components/Sound-board/sound-board'
import DadJokes from './components/Dad-jokes/dad-joke'
import EventKeyCode from './components/Event-key-codes/event-key-code'
import FAQCollapse from './components/FAQ-collapse/faq-collapse'
import RandomChoicePicker from './components/Random-choice-picker/random-choice-picker'

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

        <Route path="/split-landing-page">
          <SplitLandingPage />
        </Route>

        <Route path="/form-wave-animation">
          <FormWaveAnimation />
        </Route>

        <Route path="/sound-board">
          <SoundBoard />
        </Route>

        <Route path="/dad-joke">
          <DadJokes />
        </Route>

        <Route path="/event-key-code">
          <EventKeyCode />
        </Route>

        <Route path="/faq-collapse">
          <FAQCollapse />
        </Route>

        <Route path="/random-choice-picker">
          <RandomChoicePicker />
        </Route>
      </Switch>
    </Router>
    // </div>
  )
}

export default App
