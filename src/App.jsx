import Login from "./pages/login/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home";
import ProtectedRoute from "./components/feature/protected-route/protected-route";
import Contact from "./pages/contact/contact";
import Main from "./components/layout/main/main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route
        index={true}
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="books">
        <Route index={true} element={<Login />} />
        <Route path="hindi" element={<Login />} />
        <Route path="english" element={<Login />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route
        path="contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
