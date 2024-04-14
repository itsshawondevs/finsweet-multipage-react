import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about us" element={<About/>}/>
      </Route>
    )
  );  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
