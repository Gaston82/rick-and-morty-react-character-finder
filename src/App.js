import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import QueryProvider from "./context/query";
import "./App.css";
import NotFound from "./components/not-found";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;
