import { HashRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
import Peru from "./pages/countries/pe";
import Belarus from "./pages/countries/by";
import Pakistan from "./pages/countries/pk";
import Madagascar from "./pages/countries/mg";
import Bolivia from "./pages/countries/bo";
import Serbia from "./pages/countries/rs";
import Switzerland from "./pages/countries/ch";
import NorthMacedonia from "./pages/countries/mk";
import Botswana from "./pages/countries/bw";
import Kenya from "./pages/countries/ke";
import Jordan from "./pages/countries/jo";
import Indonesia from "./pages/countries/id";
import UnitedArabEmirates from "./pages/countries/ae";
import Brazil from "./pages/countries/br";
import Mali from "./pages/countries/ml";
import Italy from "./pages/countries/it";
import Afghanistan from "./pages/countries/af";
import Bangladesh from "./pages/countries/bd";
import DominicanRepublic from "./pages/countries/do";
import Ghana from "./pages/countries/gh";
import Austria from "./pages/countries/at";
import Sweden from "./pages/countries/se";

const MainContent = styled.div`
  position: fixed;
  content: " ";
  top: var(--header-height);
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 24px;

  overflow-y: scroll;
`;

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="ae" element={<UnitedArabEmirates />} />
          <Route path="af" element={<Afghanistan />} />
          <Route path="at" element={<Austria />} />
          <Route path="bd" element={<Bangladesh />} />
          <Route path="bo" element={<Bolivia />} />
          <Route path="br" element={<Brazil />} />
          <Route path="bw" element={<Botswana />} />
          <Route path="by" element={<Belarus />} />
          <Route path="ch" element={<Switzerland />} />
          <Route path="do" element={<DominicanRepublic />} />
          <Route path="gh" element={<Ghana />} />
          <Route path="id" element={<Indonesia />} />
          <Route path="it" element={<Italy />} />
          <Route path="jo" element={<Jordan />} />
          <Route path="ke" element={<Kenya />} />
          <Route path="mg" element={<Madagascar />} />
          <Route path="mk" element={<NorthMacedonia />} />
          <Route path="ml" element={<Mali />} />
          <Route path="pe" element={<Peru />} />
          <Route path="pk" element={<Pakistan />} />
          <Route path="rs" element={<Serbia />} />
          <Route path="se" element={<Sweden />} />
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
