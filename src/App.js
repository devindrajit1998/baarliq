import logo from "./logo.svg";
import "./App.css";
import "./style.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddBar,
  AddItem,
  AddSubCategory,
  BeerDashboard,
  BottleDashboard,
  LiquorDashboard,
  LoadBeer,
  LoadBottle,
  LoadLiquor,
  Login,
  StockEntry,
  Dashboard,
} from "./pages";
import Entry from "./pages/entry/Entry";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    {
      path: "master/add-bar",
      element: <AddBar />,
    },
    {
      path: "master/add-item",
      element: <AddItem />,
    },
    {
      path: "master/add-sub-category",
      element: <AddSubCategory />,
    },
    {
      path: "master/stock-entry",
      element: <StockEntry />,
    },
    {
      path: "auth/login",
      element: <Login />,
    },
    {
      path: "beer/dashboard",
      element: <BeerDashboard />,
    },
    {
      path: "beer/load",
      element: <LoadBeer />,
    },
    {
      path: "bottle/dashboard",
      element: <BottleDashboard />,
    },
    {
      path: "bottle/load",
      element: <LoadBottle />,
    },
    {
      path: "liquor/dashbaord",
      element: <LiquorDashboard />,
    },
    {
      path: "liquor/load",
      element: <LoadLiquor />,
    },
    {
      path: "entry/entry",
      element: <Entry />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
