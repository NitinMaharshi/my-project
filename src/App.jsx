import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Product } from "./Components/Product";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Login } from "./Components/Login";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/users/:userid"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Opps! 404 page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
