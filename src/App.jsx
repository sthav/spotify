import "./App.scss"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
// import AudioPlayer from "./components/audio/AudioPlayer";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        // {
        //   path: "/",
        //   element: <AudioPlayer />,
        // },

        // {
        //   path: "/search",
        //   element: <Search />,
        // },
      ],
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;