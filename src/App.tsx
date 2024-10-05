import HomePage from './pages/home/Page.tsx'
// import { PopupContextProvider } from './context/PopupContext.tsx'
import './App.css'

function App() {

  return (
    // <PopupContextProvider>
      <div className='app'>
        <HomePage />
      </div>
    // </PopupContextProvider>
  )
}

export default App
