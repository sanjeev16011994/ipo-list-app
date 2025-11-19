import "./App.css";
import { IPODetailsPage } from "./components/IpoDetails/IpoDetailsPage";
import IPOListPage from "./components/IpoList/IpoListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPODetailsRouteWrapper from "./routes/IpoDetailsRouteWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IPOListPage />} />
          <Route path="/ipo/:ipoId" element={<IPODetailsRouteWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
