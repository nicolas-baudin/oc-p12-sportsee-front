import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './layouts/Landing';
import Dashboard from './pages/Dashboard';
import "./App.scss"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;