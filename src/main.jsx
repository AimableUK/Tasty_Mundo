import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Layout from "./Layout";
import Page404 from "./Components/Page404/Page404";
import Recipes from "./Components/Recipes/Recipes";
import RecipeDetails from "./Components/Recipes/RecipeDetails";
import ChatPage from "./Components/MainChat/ChatPage/ChatPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipedetails/:id" element={<RecipeDetails />} />
      <Route path="c" element={<ChatPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
