import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { BlockDetailPage } from '@/pages/BlockDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/block/:id" element={<BlockDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
