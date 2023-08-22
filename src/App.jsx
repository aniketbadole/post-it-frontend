import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";

const App = () => (
  <main className="relative">
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
        <Route path="/hello" Component={HelloWorld} />
      </Routes>
    </Router>
  </main>
);

export default App;

{
  /* Nav
    <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
    <section className="padding">PopularProducts</section>
    <section className="padding">SuperQuality</section>
    <section className="padding-x py-10">Services</section>
    <section className="padding">SpecialOffer</section> */
}
