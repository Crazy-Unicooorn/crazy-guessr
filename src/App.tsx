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
import Turkey from "./pages/countries/tr";
import Uganda from "./pages/countries/ug";
import Japan from "./pages/countries/jp";
import NewZealand from "./pages/countries/nz";
import Portugal from "./pages/countries/pt";
import Colombia from "./pages/countries/co";
import Germany from "./pages/countries/de";
import Thailand from "./pages/countries/th";
import Iraq from "./pages/countries/iq";
import Croatia from "./pages/countries/hr";
import Greenland from "./pages/countries/gl";
import Denmark from "./pages/countries/dk";
import Latvia from "./pages/countries/lv";
import Romania from "./pages/countries/ro";
import Guatemala from "./pages/countries/gt";
import Mexico from "./pages/countries/mx";
import CzechRepublic from "./pages/countries/cz";
import Albania from "./pages/countries/al";
import Finland from "./pages/countries/fi";
import Syria from "./pages/countries/sy";
import Kyrgyzstan from "./pages/countries/kg";

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
          <Route path="al" element={<Albania />} />
          <Route path="at" element={<Austria />} />
          <Route path="bd" element={<Bangladesh />} />
          <Route path="bo" element={<Bolivia />} />
          <Route path="br" element={<Brazil />} />
          <Route path="bw" element={<Botswana />} />
          <Route path="by" element={<Belarus />} />
          <Route path="ch" element={<Switzerland />} />
          <Route path="co" element={<Colombia />} />
          <Route path="cz" element={<CzechRepublic />} />
          <Route path="de" element={<Germany />} />
          <Route path="dk" element={<Denmark />} />
          <Route path="do" element={<DominicanRepublic />} />
          <Route path="fi" element={<Finland />} />
          <Route path="gh" element={<Ghana />} />
          <Route path="gl" element={<Greenland />} />
          <Route path="gt" element={<Guatemala />} />
          <Route path="hr" element={<Croatia />} />
          <Route path="id" element={<Indonesia />} />
          <Route path="iq" element={<Iraq />} />
          <Route path="it" element={<Italy />} />
          <Route path="jo" element={<Jordan />} />
          <Route path="jp" element={<Japan />} />
          <Route path="ke" element={<Kenya />} />
          <Route path="kg" element={<Kyrgyzstan />} />
          <Route path="lv" element={<Latvia />} />
          <Route path="mg" element={<Madagascar />} />
          <Route path="mk" element={<NorthMacedonia />} />
          <Route path="ml" element={<Mali />} />
          <Route path="mx" element={<Mexico />} />
          <Route path="nz" element={<NewZealand />} />
          <Route path="pe" element={<Peru />} />
          <Route path="pk" element={<Pakistan />} />
          <Route path="pt" element={<Portugal />} />
          <Route path="ro" element={<Romania />} />
          <Route path="rs" element={<Serbia />} />
          <Route path="se" element={<Sweden />} />
          <Route path="sy" element={<Syria />} />
          <Route path="th" element={<Thailand />} />
          <Route path="tr" element={<Turkey />} />
          <Route path="ug" element={<Uganda />} />
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
