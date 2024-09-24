import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//pages
import News from "./Pages/News.jsx";
import About from "./Pages/About.jsx";
import Signin from "./Pages/SingIn.jsx";
import Contact from "./Pages/Contact.jsx";

//Components

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<News />} />
      <Route path="contact" element={<Contact />} />
      <Route path="About" element={<About />} />
      <Route path="signIn" element={<Signin />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
