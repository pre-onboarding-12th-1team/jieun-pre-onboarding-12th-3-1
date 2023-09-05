import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Search />,
      errorElement: <NotFound />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
