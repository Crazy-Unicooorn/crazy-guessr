import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { ReactNode, useEffect, useRef } from "react";
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
import Kazakhstan from "./pages/countries/kz";
import SaoTomeAndPrincipe from "./pages/countries/st";

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

// column-reverse could solve modal issue, but it would require ordering all components in reverse
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

const createPage = (path: string, title: string, component: ReactNode) => (
  <Route path={path} element={<Page title={title}>{component}</Page>} />
);

const arrayPages = [
  createPage("/", "World", <Home />),
  createPage("*", "404 · Not Found", <NotFound />),
  createPage("/ad", "Andorra", <Andorra />),
  createPage("/ae", "United Arab Emirates", <UnitedArabEmirates />),
  createPage("/af", "Afghanistan", <Afghanistan />),
  createPage("/al", "Albania", <Albania />),
  createPage("/aq", "Antarctica", <Antarctica />),
  createPage("/ar", "Argentina", <Argentina />),
  createPage("/as", "American Samoa", <AmericanSamoa />),
  createPage("/at", "Austria", <Austria />),
  createPage("/au", "Australia", <Australia />),
  createPage("/bd", "Bangladesh", <Bangladesh />),
  createPage("/be", "Belgium", <Belgium />),
  createPage("/bg", "Bulgaria", <Bulgaria />),
  createPage("/bm", "Bermuda", <Bermuda />),
  createPage("/bo", "Bolivia", <Bolivia />),
  createPage("/br", "Brazil", <Brazil />),
  createPage("/bt", "Bhutan", <Bhutan />),
  createPage("/bw", "Botswana", <Botswana />),
  createPage("/by", "Belarus", <Belarus />),
  createPage("/ca", "Canada", <Canada />),
  createPage("/ch", "Switzerland", <Switzerland />),
  createPage("/cl", "Chile", <Chile />),
  createPage("/cn", "China", <China />),
  createPage("/co", "Colombia", <Colombia />),
  createPage("/cr", "Costa Rica", <CostaRica />),
  createPage("/cw", "Curaçao", <Curaçao />),
  createPage("/cz", "Czech Republic", <CzechRepublic />),
  createPage("/de", "Germany", <Germany />),
  createPage("/dk", "Denmark", <Denmark />),
  createPage("/do", "Dominican Republic", <DominicanRepublic />),
  createPage("/ec", "Ecuador", <Ecuador />),
  createPage("/ee", "Estonia", <Estonia />),
  createPage("/eg", "Egypt", <Egypt />),
  createPage("/es", "Spain", <Spain />),
  createPage("/fi", "Finland", <Finland />),
  createPage("/fk", "Falkland Islands", <FalklandIslands />),
  createPage("/fo", "Faroe Islands", <FaroeIslands />),
  createPage("/fr", "France", <France />),
  createPage("/uk", "United Kingdom", <UnitedKingdom />),
  createPage("/gh", "Ghana", <Ghana />),
  createPage("/gi", "Gibraltar", <Gibraltar />),
  createPage("/gl", "Greenland", <Greenland />),
  createPage("/gr", "Greece", <Greece />),
  createPage("/gs", "South Georgia", <SouthGeorgia />),
  createPage("/gt", "Guatemala", <Guatemala />),
  createPage("/gu", "Guam", <Guam />),
  createPage("/hk", "HongKong", <HongKong />),
  createPage("/hr", "Croatia", <Croatia />),
  createPage("/hu", "Hungary", <Hungary />),
  createPage("/id", "Indonesia", <Indonesia />),
  createPage("/ie", "Ireland", <Ireland />),
  createPage("/il", "Israel", <Israel />),
  createPage("/im", "Isle of Man", <IsleOfMan />),
  createPage("/in", "India", <India />),
  createPage("/io", "British Indian Ocean Territory", <BritishIdianOceanTerritory />),
  createPage("/iq", "Iraq", <Iraq />),
  createPage("/is", "Iceland", <Iceland />),
  createPage("/it", "Italy", <Italy />),
  createPage("/je", "Jersey", <Jersey />),
  createPage("/jo", "Jordan", <Jordan />),
  createPage("/jp", "Japan", <Japan />),
  createPage("/ke", "Kenya", <Kenya />),
  createPage("/kg", "Kyrgyzstan", <Kyrgyzstan />),
  createPage("/kh", "Cambodia", <Cambodia />),
  createPage("/kr", "South Korea", <SouthKorea />),
  createPage("/kz", "Kazakhstan", <Kazakhstan />),
  createPage("/la", "Laos", <Laos />),
  createPage("/lb", "Lebanon", <Lebanon />),
  createPage("/lk", "Sri Lanka", <SriLanka />),
  createPage("/ls", "Lesotho", <Lesotho />),
  createPage("/lt", "Lithuania", <Lithuania />),
  createPage("/lu", "Luxembourg", <Luxembourg />),
  createPage("/lv", "Latvia", <Latvia />),
  createPage("/ma", "Morocco", <Madagascar />),
  createPage("/mc", "Monaco", <Monaco />),
  createPage("/me", "Montenegro", <Montenegro />),
  createPage("/mg", "Madagascar", <Madagascar />),
  createPage("/mk", "North Macedonia", <NorthMacedonia />),
  createPage("/ml", "Mali", <Mali />),
  createPage("/mn", "Mongolia", <Mongolia />),
  createPage("/mo", "Macau", <Macau />),
  createPage("/mp", "Northern Mariana Islands", <NothernMarianaIslands />),
  createPage("/mq", "Martinique", <Martinique />),
  createPage("/mt", "Malta", <Malta />),
  createPage("/mu", "Mauritius", <Madagascar />),
  createPage("/mv", "Maldives", <Madagascar />),
  createPage("/mx", "Mexico", <Mexico />),
  createPage("/my", "Malaysia", <Malaysia />),
  createPage("/na", "Namibia", <Namibia />),
  createPage("/ng", "Nigeria", <Nigeria />),
  createPage("/nl", "Netherlands", <Netherlands />),
  createPage("/no", "Norway", <Norway />),
  createPage("/np", "Nepal", <Nepal />),
  createPage("/nz", "New Zealand", <NewZealand />),
  createPage("/pa", "Panama", <Panama />),
  createPage("/pe", "Peru", <Peru />),
  createPage("/ph", "Philippines", <Philippines />),
  createPage("/pk", "Pakistan", <Pakistan />),
  createPage("/pl", "Poland", <Poland />),
  createPage("/pm", "Saint Pierre and Miquelon", <SaintPierreAndMiquelon />),
  createPage("/pn", "Pitcairn Islands", <PitcairnIslands />),
  createPage("/pr", "Puerto Rico", <PuertoRico />),
  createPage("/pt", "Portugal", <Portugal />),
  createPage("/qa", "Qatar", <Qatar />),
  createPage("/re", "Reunion", <Reunion />),
  createPage("/ro", "Romania", <Romania />),
  createPage("/rs", "Serbia", <Serbia />),
  createPage("/rw", "Rwanda", <Rwanda />),
  createPage("/ru", "Russia", <Russia />),
  createPage("/se", "Sweden", <Sweden />),
  createPage("/sg", "Singapore", <Singapore />),
  createPage("/si", "Slovenia", <Slovenia />),
  createPage("/sk", "Slovakia", <Slovakia />),
  createPage("/sm", "San Marino", <SanMarino />),
  createPage("/sn", "Senegal", <Senegal />),
  createPage("/st", "Sao Tome and Principe", <SaoTomeAndPrincipe />),
  createPage("/sy", "Syria", <Syria />),
  createPage("/sz", "Eswatini", <Eswatini />),
  createPage("/th", "Thailand", <Thailand />),
  createPage("/tn", "Tunisia", <Tunisia />),
  createPage("/tr", "Turkey", <Turkey />),
  createPage("/tw", "Taiwan", <Taiwan />),
  createPage("/tz", "Tanzania", <Tanzania />),
  createPage("/ua", "Ukraine", <Ukraine />),
  createPage("/ug", "Uganda", <Uganda />),
  createPage("/us", "United States", <UnitedStates />),
  createPage("/uy", "Uruguay", <Uruguay />),
  createPage("/va", "Vatican City", <Madagascar />),
  createPage("/vi", "US Virgin Islands", <USVirginIslands />),
  createPage("/vn", "Vietnam", <Vietnam />),
  createPage("/vu", "Vanuatu", <Vanuatu />),
  createPage("/xv", "Svalbard", <Svalbard />),
  createPage("/za", "South Africa", <SouthAfrica />),
];

function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const location = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector("#mainContent");
    if (mainContent) {
      const { children } = mainContent;
      Array.from(children).forEach((child, index) => {
        // Assert that child is an HTMLElement
        if (child.firstChild instanceof HTMLElement) {
          // eslint-disable-next-line no-param-reassign
          child.firstChild.style.zIndex = `${children.length - index}`;
          // eslint-disable-next-line no-param-reassign
          child.firstChild.style.scrollSnapAlign = "start";
        }
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Header onClick={handleScrollToTop} />
      <ContentContainer ref={contentRef}>
        <MainContent id="mainContent">
          <Routes>{arrayPages}</Routes>
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
