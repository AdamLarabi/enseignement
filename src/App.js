import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import CreateTest from "./pages/CreateTest";
import AnswerTest from "./pages/AnswerTest";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createTest" element={<CreateTest />} />
        <Route path="/AnswerTest" element={<AnswerTest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
