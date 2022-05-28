import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/image' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
