import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import QueryProvider from "./context/query";
import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;
