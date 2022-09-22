import { Route, Routes } from "react-router-dom";
import DetailsUser from "./components/DetailsUser";
import Home from "./components/Home";
import ListUser from "./components/ListUser";
import Navigation from "./components/Navigation";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<ListUser />} />
        <Route path="details/:id" element={<DetailsUser />} />
      </Routes>
    </div>
  );
}