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
import Panama from "./pages/countries/pa";
import Argentina from "./pages/countries/ar";
import UnitedKingdom from "./pages/countries/gb";
import CostaRica from "./pages/countries/cr";
import Ireland from "./pages/countries/ie";
import Nigeria from "./pages/countries/ng";
import Tunisia from "./pages/countries/tn";
import Poland from "./pages/countries/pl";
import Namibia from "./pages/countries/na";
import SouthAfrica from "./pages/countries/za";
import Egypt from "./pages/countries/eg";
import Tanzania from "./pages/countries/tz";
import Vietnam from "./pages/countries/vn";
import Russia from "./pages/countries/ru";
import India from "./pages/countries/in";
import Canada from "./pages/countries/ca";
import Belgium from "./pages/countries/be";

const MainContent = styled.div`
  position: fixed;
  content: " ";
  top: var(--header-height);
  width: 100%;
  height: calc(100vh - var(--header-height));
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
          <Route path="ar" element={<Argentina />} />
          <Route path="at" element={<Austria />} />
          <Route path="bd" element={<Bangladesh />} />
          <Route path="be" element={<Belgium />} />
          <Route path="bo" element={<Bolivia />} />
          <Route path="br" element={<Brazil />} />
          <Route path="bw" element={<Botswana />} />
          <Route path="by" element={<Belarus />} />
          <Route path="ca" element={<Canada />} />
          <Route path="ch" element={<Switzerland />} />
          <Route path="co" element={<Colombia />} />
          <Route path="cr" element={<CostaRica />} />
          <Route path="cz" element={<CzechRepublic />} />
          <Route path="de" element={<Germany />} />
          <Route path="dk" element={<Denmark />} />
          <Route path="do" element={<DominicanRepublic />} />
          <Route path="eg" element={<Egypt />} />
          <Route path="fi" element={<Finland />} />
          <Route path="gb" element={<UnitedKingdom />} />
          <Route path="gh" element={<Ghana />} />
          <Route path="gl" element={<Greenland />} />
          <Route path="gt" element={<Guatemala />} />
          <Route path="hr" element={<Croatia />} />
          <Route path="id" element={<Indonesia />} />
          <Route path="ie" element={<Ireland />} />
          <Route path="in" element={<India />} />
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
          <Route path="na" element={<Namibia />} />
          <Route path="ng" element={<Nigeria />} />
          <Route path="nz" element={<NewZealand />} />
          <Route path="pa" element={<Panama />} />
          <Route path="pe" element={<Peru />} />
          <Route path="pk" element={<Pakistan />} />
          <Route path="pl" element={<Poland />} />
          <Route path="pt" element={<Portugal />} />
          <Route path="ro" element={<Romania />} />
          <Route path="rs" element={<Serbia />} />
          <Route path="ru" element={<Russia />} />
          <Route path="se" element={<Sweden />} />
          <Route path="sy" element={<Syria />} />
          <Route path="th" element={<Thailand />} />
          <Route path="tn" element={<Tunisia />} />
          <Route path="tr" element={<Turkey />} />
          <Route path="tz" element={<Tanzania />} />
          <Route path="ug" element={<Uganda />} />
          <Route path="vn" element={<Vietnam />} />
          <Route path="za" element={<SouthAfrica />} />
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
