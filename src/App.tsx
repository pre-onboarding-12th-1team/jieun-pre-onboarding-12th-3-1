import NotFound from 'pages/NotFound'
import Search from 'pages/Search'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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
