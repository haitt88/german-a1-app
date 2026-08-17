import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'
import AppLayout from './components/layout/AppLayout'
import { ProgressProvider } from './state/ProgressContext'

export default function App() {
  return (
    <ProgressProvider>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lektion/:id" element={<LessonPage />} />
          <Route path="/lektion/:id/:section" element={<LessonPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </ProgressProvider>
  )
}
