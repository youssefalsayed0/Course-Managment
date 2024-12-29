
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './views/Layout/Layout'
import Courses from './views/Courses/Courses';
import CourseForm from './Components/CourseForm/CourseForm';
import CourseCard from './Components/CourseCard/CourseCard';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Dashboard from './views/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
  path:"/", element: <Layout />, children: [
    {
      path: "" , element : <Dashboard/>
    },
      {
        path: "courses", element: <Courses />, children: [
          {
            path: "add", element: <CourseForm />
          },
          {
            path: "", element: <CourseCard />
          },
          {
            path: "course-details", element: <CourseDetails />
          }
        ]
      },
   
    ]
  },

]);



function App() {

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
