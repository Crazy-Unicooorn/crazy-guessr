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
import Lesotho from "./pages/countries/ls";
import Bulgaria from "./pages/countries/bg";
import Malaysia from "./pages/countries/my";
import Philippines from "./pages/countries/ph";
import Uruguay from "./pages/countries/uy";
import Estonia from "./pages/countries/ee";
import Rwanda from "./pages/countries/rw";
import Senegal from "./pages/countries/sn";
import Spain from "./pages/countries/es";
import Hungary from "./pages/countries/hu";
import Cambodia from "./pages/countries/kh";
import SouthKorea from "./pages/countries/kr";
import Iceland from "./pages/countries/is";
import Chile from "./pages/countries/cl";
import Slovakia from "./pages/countries/sk";
import Lithuania from "./pages/countries/lt";
import SriLanka from "./pages/countries/lk";
import Israel from "./pages/countries/il";
import Laos from "./pages/countries/la";
import Greece from "./pages/countries/gr";
import Ecuador from "./pages/countries/ec";
import Slovenia from "./pages/countries/si";
import Svalbard from "./pages/countries/xv";
import Norway from "./pages/countries/no";
import Ukraine from "./pages/countries/ua";
import Nepal from "./pages/countries/np";
import UnitedStates from "./pages/countries/us";
import Antarctica from "./pages/countries/aq";
import Mongolia from "./pages/countries/mn";
import Bhutan from "./pages/countries/bt";
import Australia from "./pages/countries/au";
import China from "./pages/countries/cn";
import HongKong from "./pages/countries/hk";
import Macao from "./pages/countries/mo";
import Taiwan from "./pages/countries/tw";
import France from "./pages/countries/fr";
import Martinique from "./pages/countries/mq";
import Reunion from "./pages/countries/re";
import Netherlands from "./pages/countries/nl";
import Lebanon from "./pages/countries/lb";
import Montenegro from "./pages/countries/me";
import Swaziland from "./pages/countries/sz";
import Vanuatu from "./pages/countries/vu";
import FalklandIslands from "./pages/countries/fk";
import SouthGeorgia from "./pages/countries/gs";
import Qatar from "./pages/countries/qa";
import PuertoRico from "./pages/countries/pr";
import Luxembourg from "./pages/countries/lu";
import FaroeIslands from "./pages/countries/fo";
import USVirginIslands from "./pages/countries/vi";
import Curaçao from "./pages/countries/cw";
import Andorra from "./pages/countries/ad";
import NothernMarianaIslands from "./pages/countries/mp";
import BritishIdianOceanTerritory from "./pages/countries/io";
import Malta from "./pages/countries/mt";

const ContentContainer = styled.div`
  position: fixed;
  content: " ";
  // top: var(--header-height);
  padding: calc(var(--header-height) + 24px) 32px;
  width: 100%;
  height: 100vh;
  z-index: -1;

  overflow-y: scroll;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

function App() {
  return (
    <>
      <Header />
      <ContentContainer>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="ad" element={<Andorra />} />
            <Route path="ae" element={<UnitedArabEmirates />} />
            <Route path="af" element={<Afghanistan />} />
            <Route path="al" element={<Albania />} />
            <Route path="aq" element={<Antarctica />} />
            <Route path="ar" element={<Argentina />} />
            <Route path="at" element={<Austria />} />
            <Route path="au" element={<Australia />} />
            <Route path="bd" element={<Bangladesh />} />
            <Route path="be" element={<Belgium />} />
            <Route path="bg" element={<Bulgaria />} />
            <Route path="bo" element={<Bolivia />} />
            <Route path="br" element={<Brazil />} />
            <Route path="bt" element={<Bhutan />} />
            <Route path="bw" element={<Botswana />} />
            <Route path="by" element={<Belarus />} />
            <Route path="ca" element={<Canada />} />
            <Route path="ch" element={<Switzerland />} />
            <Route path="cl" element={<Chile />} />
            <Route path="cn" element={<China />} />
            <Route path="co" element={<Colombia />} />
            <Route path="cr" element={<CostaRica />} />
            <Route path="cw" element={<Curaçao />} />
            <Route path="cz" element={<CzechRepublic />} />
            <Route path="de" element={<Germany />} />
            <Route path="dk" element={<Denmark />} />
            <Route path="do" element={<DominicanRepublic />} />
            <Route path="ec" element={<Ecuador />} />
            <Route path="ee" element={<Estonia />} />
            <Route path="eg" element={<Egypt />} />
            <Route path="es" element={<Spain />} />
            <Route path="fi" element={<Finland />} />
            <Route path="fk" element={<FalklandIslands />} />
            <Route path="fo" element={<FaroeIslands />} />
            <Route path="fr" element={<France />} />
            <Route path="gb" element={<UnitedKingdom />} />
            <Route path="gh" element={<Ghana />} />
            <Route path="gl" element={<Greenland />} />
            <Route path="gr" element={<Greece />} />
            <Route path="gs" element={<SouthGeorgia />} />
            <Route path="gt" element={<Guatemala />} />
            <Route path="hk" element={<HongKong />} />
            <Route path="hr" element={<Croatia />} />
            <Route path="hu" element={<Hungary />} />
            <Route path="id" element={<Indonesia />} />
            <Route path="ie" element={<Ireland />} />
            <Route path="il" element={<Israel />} />
            <Route path="in" element={<India />} />
            <Route path="io" element={<BritishIdianOceanTerritory />} />
            <Route path="iq" element={<Iraq />} />
            <Route path="is" element={<Iceland />} />
            <Route path="it" element={<Italy />} />
            <Route path="jo" element={<Jordan />} />
            <Route path="jp" element={<Japan />} />
            <Route path="ke" element={<Kenya />} />
            <Route path="kg" element={<Kyrgyzstan />} />
            <Route path="kh" element={<Cambodia />} />
            <Route path="kr" element={<SouthKorea />} />
            <Route path="la" element={<Laos />} />
            <Route path="lb" element={<Lebanon />} />
            <Route path="lk" element={<SriLanka />} />
            <Route path="ls" element={<Lesotho />} />
            <Route path="lt" element={<Lithuania />} />
            <Route path="lu" element={<Luxembourg />} />
            <Route path="lv" element={<Latvia />} />
            <Route path="mg" element={<Madagascar />} />
            <Route path="me" element={<Montenegro />} />
            <Route path="mk" element={<NorthMacedonia />} />
            <Route path="ml" element={<Mali />} />
            <Route path="mn" element={<Mongolia />} />
            <Route path="mo" element={<Macao />} />
            <Route path="mp" element={<NothernMarianaIslands />} />
            <Route path="mq" element={<Martinique />} />
            <Route path="mt" element={<Malta />} />
            <Route path="mx" element={<Mexico />} />
            <Route path="my" element={<Malaysia />} />
            <Route path="na" element={<Namibia />} />
            <Route path="ng" element={<Nigeria />} />
            <Route path="nl" element={<Netherlands />} />
            <Route path="no" element={<Norway />} />
            <Route path="np" element={<Nepal />} />
            <Route path="nz" element={<NewZealand />} />
            <Route path="pa" element={<Panama />} />
            <Route path="pe" element={<Peru />} />
            <Route path="ph" element={<Philippines />} />
            <Route path="pk" element={<Pakistan />} />
            <Route path="pl" element={<Poland />} />
            <Route path="pr" element={<PuertoRico />} />
            <Route path="pt" element={<Portugal />} />
            <Route path="qa" element={<Qatar />} />
            <Route path="re" element={<Reunion />} />
            <Route path="ro" element={<Romania />} />
            <Route path="rs" element={<Serbia />} />
            <Route path="ru" element={<Russia />} />
            <Route path="rw" element={<Rwanda />} />
            <Route path="se" element={<Sweden />} />
            <Route path="si" element={<Slovenia />} />
            <Route path="sk" element={<Slovakia />} />
            <Route path="sn" element={<Senegal />} />
            <Route path="sy" element={<Syria />} />
            <Route path="sz" element={<Swaziland />} />
            <Route path="th" element={<Thailand />} />
            <Route path="tn" element={<Tunisia />} />
            <Route path="tr" element={<Turkey />} />
            <Route path="tw" element={<Taiwan />} />
            <Route path="tz" element={<Tanzania />} />
            <Route path="ua" element={<Ukraine />} />
            <Route path="ug" element={<Uganda />} />
            <Route path="us" element={<UnitedStates />} />
            <Route path="uy" element={<Uruguay />} />
            <Route path="vi" element={<USVirginIslands />} />
            <Route path="vn" element={<Vietnam />} />
            <Route path="vu" element={<Vanuatu />} />
            <Route path="xv" element={<Svalbard />} />
            <Route path="za" element={<SouthAfrica />} />
          </Routes>
        </MainContent>
      </ContentContainer>
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
