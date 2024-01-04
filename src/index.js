import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Aboutpage from './pages/aboutPage'; 
import PPage from './pages/projectPage';
import EPage from './pages/eventsPage' 
import TPage from './pages/teamPage'; 
import AchievePage from './pages/achievePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "aboutusPage",
    element: <Aboutpage/>,
  }, 
  {
    path: "projectPage",
    element: <PPage/>,
  },
  {
    path: "eventsPage",
    element: <EPage/>,
  },
  {
    path: "teamPage",
    element: <TPage/>,
  },
  {
    path: "achievePage",
    element: <AchievePage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

