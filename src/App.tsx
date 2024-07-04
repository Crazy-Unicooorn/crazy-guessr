import { HashRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { ReactNode, useEffect } from "react";
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
import UnitedKingdom from "./pages/countries/uk";
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
import Macau from "./pages/countries/mo";
import Taiwan from "./pages/countries/tw";
import France from "./pages/countries/fr";
import Martinique from "./pages/countries/mq";
import Reunion from "./pages/countries/re";
import Netherlands from "./pages/countries/nl";
import Lebanon from "./pages/countries/lb";
import Montenegro from "./pages/countries/me";
import Eswatini from "./pages/countries/sz";
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
import SaintPierreAndMiquelon from "./pages/countries/pm";
import AmericanSamoa from "./pages/countries/as";
import Jersey from "./pages/countries/je";
import SanMarino from "./pages/countries/sm";
import Bermuda from "./pages/countries/bm";
import Gibraltar from "./pages/countries/gi";
import PitcairnIslands from "./pages/countries/pn";
import Monaco from "./pages/countries/mc";
import IsleOfMan from "./pages/countries/im";
import Guam from "./pages/countries/gu";
import Singapore from "./pages/countries/sg";
import Footer from "./components/common/Footer";

const ContentContainer = styled.div`
  position: fixed;
  content: " ";
  // top: var(--header-height);
  padding: calc(var(--header-height) + 24px) 48px;
  width: 100%;
  height: 100vh;
  z-index: -1;

  overflow-y: scroll;

  @media (max-width: 640px) {
    padding: calc(var(--header-height) + 8px) 8px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Page = (props: { children: ReactNode; title: string }) => {
  useEffect(() => {
    document.title = `CG | ${props.title}`;
  }, [props.title]);
  return props.children;
};

function App() {
  return (
    <>
      <Header />
      <ContentContainer>
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={
                <Page title="World">
                  <Home />
                </Page>
              }
            />
            <Route
              path="*"
              element={
                <Page title="Not Found">
                  <NotFound />
                </Page>
              }
            />
            <Route
              path="ad"
              element={
                <Page title="Andorra">
                  <Andorra />
                </Page>
              }
            />
            <Route
              path="ae"
              element={
                <Page title="United Arab Emirates">
                  <UnitedArabEmirates />
                </Page>
              }
            />
            <Route
              path="af"
              element={
                <Page title="Afghanistan">
                  <Afghanistan />
                </Page>
              }
            />
            <Route
              path="al"
              element={
                <Page title="Albania">
                  <Albania />
                </Page>
              }
            />
            <Route
              path="aq"
              element={
                <Page title="Antarctica">
                  <Antarctica />
                </Page>
              }
            />
            <Route
              path="ar"
              element={
                <Page title="Argentina">
                  <Argentina />
                </Page>
              }
            />
            <Route
              path="as"
              element={
                <Page title="American Samoa">
                  <AmericanSamoa />
                </Page>
              }
            />
            <Route
              path="at"
              element={
                <Page title="Austria">
                  <Austria />
                </Page>
              }
            />
            <Route
              path="au"
              element={
                <Page title="Australia">
                  <Australia />
                </Page>
              }
            />
            <Route
              path="bd"
              element={
                <Page title="Bangladesh">
                  <Bangladesh />
                </Page>
              }
            />
            <Route
              path="be"
              element={
                <Page title="Belgium">
                  <Belgium />
                </Page>
              }
            />
            <Route
              path="bg"
              element={
                <Page title="Bulgaria">
                  <Bulgaria />
                </Page>
              }
            />
            <Route
              path="bm"
              element={
                <Page title="Bermuda">
                  <Bermuda />
                </Page>
              }
            />
            <Route
              path="bo"
              element={
                <Page title="Bolivia">
                  <Bolivia />
                </Page>
              }
            />
            <Route
              path="br"
              element={
                <Page title="Brazil">
                  <Brazil />
                </Page>
              }
            />
            <Route
              path="bt"
              element={
                <Page title="Bhutan">
                  <Bhutan />
                </Page>
              }
            />
            <Route
              path="bw"
              element={
                <Page title="Botswana">
                  <Botswana />
                </Page>
              }
            />
            <Route
              path="by"
              element={
                <Page title="Belarus">
                  <Belarus />
                </Page>
              }
            />
            <Route
              path="ca"
              element={
                <Page title="Canada">
                  <Canada />
                </Page>
              }
            />
            <Route
              path="ch"
              element={
                <Page title="Switzerland">
                  <Switzerland />
                </Page>
              }
            />
            <Route
              path="cl"
              element={
                <Page title="Chile">
                  <Chile />
                </Page>
              }
            />
            <Route
              path="cn"
              element={
                <Page title="China">
                  <China />
                </Page>
              }
            />
            <Route
              path="co"
              element={
                <Page title="Colombia">
                  <Colombia />
                </Page>
              }
            />
            <Route
              path="cr"
              element={
                <Page title="Costa Rica">
                  <CostaRica />
                </Page>
              }
            />
            <Route
              path="cw"
              element={
                <Page title="Curaçao">
                  <Curaçao />
                </Page>
              }
            />
            <Route
              path="cz"
              element={
                <Page title="Czech Republic">
                  <CzechRepublic />
                </Page>
              }
            />
            <Route
              path="de"
              element={
                <Page title="Germany">
                  <Germany />
                </Page>
              }
            />
            <Route
              path="dk"
              element={
                <Page title="Denmark">
                  <Denmark />
                </Page>
              }
            />
            <Route
              path="do"
              element={
                <Page title="Dominican Republic">
                  <DominicanRepublic />
                </Page>
              }
            />
            <Route
              path="ec"
              element={
                <Page title="Ecuador">
                  <Ecuador />
                </Page>
              }
            />
            <Route
              path="ee"
              element={
                <Page title="Estonia">
                  <Estonia />
                </Page>
              }
            />
            <Route
              path="eg"
              element={
                <Page title="Egypt">
                  <Egypt />
                </Page>
              }
            />
            <Route
              path="es"
              element={
                <Page title="Spain">
                  <Spain />
                </Page>
              }
            />
            <Route
              path="fi"
              element={
                <Page title="Finland">
                  <Finland />
                </Page>
              }
            />
            <Route
              path="fk"
              element={
                <Page title="Falkland Islands">
                  <FalklandIslands />
                </Page>
              }
            />
            <Route
              path="fo"
              element={
                <Page title="Faroe Islands">
                  <FaroeIslands />
                </Page>
              }
            />
            <Route
              path="fr"
              element={
                <Page title="France">
                  <France />
                </Page>
              }
            />
            <Route
              path="uk"
              element={
                <Page title="United Kingdom">
                  <UnitedKingdom />
                </Page>
              }
            />
            <Route
              path="gh"
              element={
                <Page title="Ghana">
                  <Ghana />
                </Page>
              }
            />
            <Route
              path="gi"
              element={
                <Page title="Gibraltar">
                  <Gibraltar />
                </Page>
              }
            />
            <Route
              path="gl"
              element={
                <Page title="Greenland">
                  <Greenland />
                </Page>
              }
            />
            <Route
              path="gr"
              element={
                <Page title="Greece">
                  <Greece />
                </Page>
              }
            />
            <Route
              path="gs"
              element={
                <Page title="South Georgia">
                  <SouthGeorgia />
                </Page>
              }
            />
            <Route
              path="gt"
              element={
                <Page title="Guatemala">
                  <Guatemala />
                </Page>
              }
            />
            <Route
              path="gu"
              element={
                <Page title="Guam">
                  <Guam />
                </Page>
              }
            />
            <Route
              path="hk"
              element={
                <Page title="HongKong">
                  <HongKong />
                </Page>
              }
            />
            <Route
              path="hr"
              element={
                <Page title="Croatia">
                  <Croatia />
                </Page>
              }
            />
            <Route
              path="hu"
              element={
                <Page title="Hungary">
                  <Hungary />
                </Page>
              }
            />
            <Route
              path="id"
              element={
                <Page title="Indonesia">
                  <Indonesia />
                </Page>
              }
            />
            <Route
              path="ie"
              element={
                <Page title="Ireland">
                  <Ireland />
                </Page>
              }
            />
            <Route
              path="il"
              element={
                <Page title="Israel">
                  <Israel />
                </Page>
              }
            />
            <Route
              path="im"
              element={
                <Page title="Isle Of Man">
                  <IsleOfMan />
                </Page>
              }
            />
            <Route
              path="in"
              element={
                <Page title="India">
                  <India />
                </Page>
              }
            />
            <Route
              path="io"
              element={
                <Page title="British Idian Ocean Territory">
                  <BritishIdianOceanTerritory />
                </Page>
              }
            />
            <Route
              path="iq"
              element={
                <Page title="Iraq">
                  <Iraq />
                </Page>
              }
            />
            <Route
              path="is"
              element={
                <Page title="Iceland">
                  <Iceland />
                </Page>
              }
            />
            <Route
              path="it"
              element={
                <Page title="Italy">
                  <Italy />
                </Page>
              }
            />
            <Route
              path="je"
              element={
                <Page title="Jersey">
                  <Jersey />
                </Page>
              }
            />
            <Route
              path="jo"
              element={
                <Page title="Jordan">
                  <Jordan />
                </Page>
              }
            />
            <Route
              path="jp"
              element={
                <Page title="Japan">
                  <Japan />
                </Page>
              }
            />
            <Route
              path="ke"
              element={
                <Page title="Kenya">
                  <Kenya />
                </Page>
              }
            />
            <Route
              path="kg"
              element={
                <Page title="Kyrgyzstan">
                  <Kyrgyzstan />
                </Page>
              }
            />
            <Route
              path="kh"
              element={
                <Page title="Cambodia">
                  <Cambodia />
                </Page>
              }
            />
            <Route
              path="kr"
              element={
                <Page title="South Korea">
                  <SouthKorea />
                </Page>
              }
            />
            <Route
              path="la"
              element={
                <Page title="Laos">
                  <Laos />
                </Page>
              }
            />
            <Route
              path="lb"
              element={
                <Page title="Lebanon">
                  <Lebanon />
                </Page>
              }
            />
            <Route
              path="lk"
              element={
                <Page title="Sri Lanka">
                  <SriLanka />
                </Page>
              }
            />
            <Route
              path="ls"
              element={
                <Page title="Lesotho">
                  <Lesotho />
                </Page>
              }
            />
            <Route
              path="lt"
              element={
                <Page title="Lithuania">
                  <Lithuania />
                </Page>
              }
            />
            <Route
              path="lu"
              element={
                <Page title="Luxembourg">
                  <Luxembourg />
                </Page>
              }
            />
            <Route
              path="lv"
              element={
                <Page title="Latvia">
                  <Latvia />
                </Page>
              }
            />
            <Route
              path="mc"
              element={
                <Page title="Monaco">
                  <Monaco />
                </Page>
              }
            />
            <Route
              path="mg"
              element={
                <Page title="Madagascar">
                  <Madagascar />
                </Page>
              }
            />
            <Route
              path="me"
              element={
                <Page title="Montenegro">
                  <Montenegro />
                </Page>
              }
            />
            <Route
              path="mk"
              element={
                <Page title="North Macedonia">
                  <NorthMacedonia />
                </Page>
              }
            />
            <Route
              path="ml"
              element={
                <Page title="Mali">
                  <Mali />
                </Page>
              }
            />
            <Route
              path="mn"
              element={
                <Page title="Mongolia">
                  <Mongolia />
                </Page>
              }
            />
            <Route
              path="mo"
              element={
                <Page title="Macau">
                  <Macau />
                </Page>
              }
            />
            <Route
              path="mp"
              element={
                <Page title="Nothern Mariana Islands">
                  <NothernMarianaIslands />
                </Page>
              }
            />
            <Route
              path="mq"
              element={
                <Page title="Martinique">
                  <Martinique />
                </Page>
              }
            />
            <Route
              path="mt"
              element={
                <Page title="Malta">
                  <Malta />
                </Page>
              }
            />
            <Route
              path="mx"
              element={
                <Page title="Mexico">
                  <Mexico />
                </Page>
              }
            />
            <Route
              path="my"
              element={
                <Page title="Malaysia">
                  <Malaysia />
                </Page>
              }
            />
            <Route
              path="na"
              element={
                <Page title="Namibia">
                  <Namibia />
                </Page>
              }
            />
            <Route
              path="ng"
              element={
                <Page title="Nigeria">
                  <Nigeria />
                </Page>
              }
            />
            <Route
              path="nl"
              element={
                <Page title="Netherlands">
                  <Netherlands />
                </Page>
              }
            />
            <Route
              path="no"
              element={
                <Page title="Norway">
                  <Norway />
                </Page>
              }
            />
            <Route
              path="np"
              element={
                <Page title="Nepal">
                  <Nepal />
                </Page>
              }
            />
            <Route
              path="nz"
              element={
                <Page title="New Zealand">
                  <NewZealand />
                </Page>
              }
            />
            <Route
              path="pa"
              element={
                <Page title="Panama">
                  <Panama />
                </Page>
              }
            />
            <Route
              path="pe"
              element={
                <Page title="Peru">
                  <Peru />
                </Page>
              }
            />
            <Route
              path="ph"
              element={
                <Page title="Philippines">
                  <Philippines />
                </Page>
              }
            />
            <Route
              path="pk"
              element={
                <Page title="Pakistan">
                  <Pakistan />
                </Page>
              }
            />
            <Route
              path="pl"
              element={
                <Page title="Poland">
                  <Poland />
                </Page>
              }
            />
            <Route
              path="pm"
              element={
                <Page title="Saint Pierre And Miquelon">
                  <SaintPierreAndMiquelon />
                </Page>
              }
            />
            <Route
              path="pn"
              element={
                <Page title="Pitcairn Islands">
                  <PitcairnIslands />
                </Page>
              }
            />
            <Route
              path="pr"
              element={
                <Page title="Puerto Rico">
                  <PuertoRico />
                </Page>
              }
            />
            <Route
              path="pt"
              element={
                <Page title="Portugal">
                  <Portugal />
                </Page>
              }
            />
            <Route
              path="qa"
              element={
                <Page title="Qatar">
                  <Qatar />
                </Page>
              }
            />
            <Route
              path="re"
              element={
                <Page title="Reunion">
                  <Reunion />
                </Page>
              }
            />
            <Route
              path="ro"
              element={
                <Page title="Romania">
                  <Romania />
                </Page>
              }
            />
            <Route
              path="rs"
              element={
                <Page title="Serbia">
                  <Serbia />
                </Page>
              }
            />
            <Route
              path="ru"
              element={
                <Page title="Russia">
                  <Russia />
                </Page>
              }
            />
            <Route
              path="rw"
              element={
                <Page title="Rwanda">
                  <Rwanda />
                </Page>
              }
            />
            <Route
              path="se"
              element={
                <Page title="Sweden">
                  <Sweden />
                </Page>
              }
            />
            <Route
              path="sg"
              element={
                <Page title="Singapore">
                  <Singapore />
                </Page>
              }
            />
            <Route
              path="si"
              element={
                <Page title="Slovenia">
                  <Slovenia />
                </Page>
              }
            />
            <Route
              path="sk"
              element={
                <Page title="Slovakia">
                  <Slovakia />
                </Page>
              }
            />
            <Route
              path="sm"
              element={
                <Page title="San Marino">
                  <SanMarino />
                </Page>
              }
            />
            <Route
              path="sn"
              element={
                <Page title="Senegal">
                  <Senegal />
                </Page>
              }
            />
            <Route
              path="sy"
              element={
                <Page title="Syria">
                  <Syria />
                </Page>
              }
            />
            <Route
              path="sz"
              element={
                <Page title="Eswatini">
                  <Eswatini />
                </Page>
              }
            />
            <Route
              path="th"
              element={
                <Page title="Thailand">
                  <Thailand />
                </Page>
              }
            />
            <Route
              path="tn"
              element={
                <Page title="Tunisia">
                  <Tunisia />
                </Page>
              }
            />
            <Route
              path="tr"
              element={
                <Page title="Turkey">
                  <Turkey />
                </Page>
              }
            />
            <Route
              path="tw"
              element={
                <Page title="Taiwan">
                  <Taiwan />
                </Page>
              }
            />
            <Route
              path="tz"
              element={
                <Page title="Tanzania">
                  <Tanzania />
                </Page>
              }
            />
            <Route
              path="ua"
              element={
                <Page title="Ukraine">
                  <Ukraine />
                </Page>
              }
            />
            <Route
              path="ug"
              element={
                <Page title="Uganda">
                  <Uganda />
                </Page>
              }
            />
            <Route
              path="us"
              element={
                <Page title="United States">
                  <UnitedStates />
                </Page>
              }
            />
            <Route
              path="uy"
              element={
                <Page title="Uruguay">
                  <Uruguay />
                </Page>
              }
            />
            <Route
              path="vi"
              element={
                <Page title="U.S. Virgin Islands">
                  <USVirginIslands />
                </Page>
              }
            />
            <Route
              path="vn"
              element={
                <Page title="Vietnam">
                  <Vietnam />
                </Page>
              }
            />
            <Route
              path="vu"
              element={
                <Page title="Vanuatu">
                  <Vanuatu />
                </Page>
              }
            />
            <Route
              path="xv"
              element={
                <Page title="Svalbard">
                  <Svalbard />
                </Page>
              }
            />
            <Route
              path="za"
              element={
                <Page title="South Africa">
                  <SouthAfrica />
                </Page>
              }
            />
          </Routes>
          <Footer />
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
