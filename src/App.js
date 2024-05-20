import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

import SongDetails from "./components/SongDetails";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Subscription from "./components/Subscription";
import Podcast from "./components/Podcast";
import Header from "./components/Header";
import Footer from "./components/Footer";
let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/music",
        element: <MainContainer />,
      },
      {
        path: "/release",
        element: <MainContainer />,
      },
      {
        path: "/topPlaylist",
        element: <MainContainer />,
      },
      {
        path: "/topArtist",
        element: <MainContainer />,
      },
      {
        path: "/podcasts",
        element: <Podcast />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/songs/:id",
        element: <SongDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="">
          <Header />
          <Body />
          <Footer />{" "}
          {/* if i uncomment this the footer will show on main page  */}
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
