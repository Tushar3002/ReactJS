import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ReactForm from './ReactForm';
import FormwithZod from './FormwithZod';
import MainLayout from './MainLayout';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
      path:'/',
      element:<ReactForm/>
    },
    {
      path:'/zod',
      element:<FormwithZod/>
    }
      ]
    }
  ])
 return <RouterProvider router={router} />
}

export default App;
