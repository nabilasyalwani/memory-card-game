import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/Pages/home.jsx";
import ErrorPage from "./components/Pages/404.jsx";
import MenuPage from "./components/Pages/menu.jsx";
import GameWrapper from "./components/Pages/game.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/game",
    element: <GameWrapper />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
