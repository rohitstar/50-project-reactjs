import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CustomCounter from './components/custom-hooks-counter/custom-counter'

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
import AnimatedNavigation from './components/Animated-navigation/animation-navigation'
import IncrementingCounter from './components/Incrementing-counter/incrementing-counter'
import DrinkWater from './components/Drink-water/drink-water'
// import MovieApp from './components/Movie-app/movie-app'
import SliderBackground from './components/Background-slider/background-slider'
import ClockTheme from './components/Clock-theme/clock-theme'
import ButtonRippleEffect from './components/Button-ripple-effect/button-ripple-effect'
import DragNDrop from './components/Drag-n-drop/drag-n-drop'
import DrawingApp from './components/Drawing-app/drawing-app'
import KineticLoader from './components/kinetic-loader/kinetic-loader'
import ContentPlaceholder from './components/Content-placeholder/content-placeholder'
import StickyNavbar from './components/Sticky-navbar/sticky-navbar'
import DoubleVertical from './components/double-vertical/double-vertical-slider'
import GithubProfile from './components/github-profile/github-profile'
import ToastsNotification from './components/Toast-notification/toast-notification'

import AutoTextEffect from './components/Auto-text-effect/auto-text-effect'
import PasswordGenerator from './components/Password-generator/password-generator'
import Checkboxes from './components/Checkboxes/checkboxes'
import NoteApp from './components/Note-app/note-app'
import AnimationCountdown from './components/Animation-countdown/animation-countdown'
import ImageCarosual from './components/Image-carousal/image-carousal'
import Hoverboard from './components/Hoverboard/hoverboard'
import Pokedex from './components/Pokedex/pokedex'
import MobileAppNavigation from './components/Mobile-tab-navigation/mobile-app-navigation'
import PasswordStrength from './components/Password-strength-background/password-strength'
import BackgroundBoxes from './components/3d-background-boxes/3d-background'
import VerifyAccount from './components/Verify-account/verify-account'
import LiveUserFilter from './components/Live-user-filter/live-user-filter'
import FeedbackUIDesign from './components/Feedback-ui-design/feedback-ui-design'
import CustomRangeSlider from './components/Custom-Range-slider/custom-range-slider'
import NetflixNavigation from './components/Netflix-navigation/netflix-navigation'
import QuizApp from './components/Quiz-app/quiz-app'
import TestimonialBox from './components/Testimonial-box/testimonial-box'
import RandomImageFeed from './components/Random-image-feed/random-image-feed'
import TodoList from './components/Todo-list/todo-list'
// import InsectCatchGame from './components/insect-catch-game/insect-catch-game'
import Card from './card-projects/card-project'

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

        <Route path="/custom-counter">
          <CustomCounter />
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

        <Route path="/animated-navigation">
          <AnimatedNavigation />
        </Route>

        <Route path="/incrementing-counter">
          <IncrementingCounter />
        </Route>

        <Route path="/drink-water">
          <DrinkWater />
        </Route>

        {/* <Route path="/movie-app">
          <MovieApp />
        </Route> */}

        <Route path="/background-slider">
          <SliderBackground />
        </Route>

        <Route path="/clock-theme">
          <ClockTheme />
        </Route>

        <Route path="/button-ripple-effect">
          <ButtonRippleEffect />
        </Route>

        <Route path="/drag-n-drop">
          <DragNDrop />
        </Route>

        <Route path="/drawing-app">
          <DrawingApp />
        </Route>

        <Route path="/kinetic-loader">
          <KineticLoader />
        </Route>

        <Route path="/content-placeholder">
          <ContentPlaceholder />
        </Route>

        <Route path="/sticky-navbar">
          <StickyNavbar />
        </Route>

        <Route path="/double-vertical">
          <DoubleVertical />
        </Route>

        <Route path="/github-profile">
          <GithubProfile />
        </Route>

        <Route path="/toast-notification">
          <ToastsNotification />
        </Route>

        <Route path="/auto-text-effect">
          <AutoTextEffect />
        </Route>

        <Route path="/password-generator">
          <PasswordGenerator />
        </Route>

        <Route path="/checkboxes">
          <Checkboxes />
        </Route>

        <Route path="/note-app">
          <NoteApp />
        </Route>

        <Route path="/count-down">
          <AnimationCountdown />
        </Route>

        <Route path="/image-carousal">
          <ImageCarosual />
        </Route>

        <Route path="/hoverboard">
          <Hoverboard />
        </Route>

        <Route path="/pokedex">
          <Pokedex />
        </Route>

        <Route path="/mobile-app-navigation">
          <MobileAppNavigation />
        </Route>

        <Route path="/password-strength">
          <PasswordStrength />
        </Route>

        <Route path="/3d-background-boxes">
          <BackgroundBoxes />
        </Route>

        <Route path="/verify-account">
          <VerifyAccount />
        </Route>

        <Route path="/live-user-filter">
          <LiveUserFilter />
        </Route>

        <Route path="/feedback-ui-design">
          <FeedbackUIDesign />
        </Route>

        <Route path="/custom-range-slider">
          <CustomRangeSlider />
        </Route>

        <Route path="/netflix-navigation">
          <NetflixNavigation />
        </Route>

        <Route path="/quiz-app">
          <QuizApp />
        </Route>

        <Route path="/testimonial-box">
          <TestimonialBox />
        </Route>

        <Route path="/random-image-feed">
          <RandomImageFeed />
        </Route>

        <Route path="/todo-list">
          <TodoList />
        </Route>

        {/* <Route path="/insect-catch-game">
          <InsectCatchGame />
        </Route> */}

        <Route path="/card-project">
          <Card />
        </Route>
      </Switch>
    </Router>
    // </div>
  )
}

export default App
