import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import MarketplaceCatalog from "./Pages/MarketplaceCatalog";
// import AirFreightPage from "./Pages/AirFreight";
// import AboutUsPage from "./Pages/AboutUsPage";
// import TrackingPage from "./Pages/TrackingPage";
// import SeaFreightPage from "./Pages/OceanFreight";
// import RoadFreightPage from "./Pages/RoadFreight";
// import TrainFreightPage from "./Pages/TrainFreight";
// import SmartWarehousingPage from "./Pages/SmartWarehousing";
// import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";
// import Dashboard from "./Pages/Dashboard";
// import ContactUsPage from "./Pages/ContactUsPage";
// import {authGuardLoader, dashboardLoader} from "./lib/loaders";
const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/marketplace",
          element: <MarketplaceCatalog/>
        }
      ]
    },
    // {
    //   path: "/",
    //   element: <RequireAuth/>,
    //   loader: authGuardLoader,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Dashboard/>,
    //       loader: dashboardLoader
    //     },
    //   ]
    // }
  ])
  return (
    <RouterProvider router={router}/>
  );
}
export default App;