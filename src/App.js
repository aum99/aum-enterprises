import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Categories from "./routes/all-products/categories.component";
import Auth from "./routes/authentication/auth.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="categories/*" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
