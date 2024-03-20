import ReactDOM from 'react-dom/client';
import './script'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'

import App from './App';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import Thanks from './components/pages/Thanks.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
       {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Thanks',
        element: <Thanks />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
