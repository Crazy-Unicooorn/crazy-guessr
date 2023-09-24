import { HashRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";

const MainContent = styled.div`
  position: fixed;
  content: " ";
  top: var(--header-height);
  width: 100%;
  height: 100%;
  z-index: 0;
`;

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
    </>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
