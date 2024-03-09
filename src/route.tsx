import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Container } from "./components/Container";
import { Dashboard } from "./pages/dashboard";
export const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
