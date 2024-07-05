import { HashRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { lazy, ReactNode, Suspense, useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
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

const createPage = (path: string, title: string) => {
  return {
    path,
    title,
    component: () => import(`./pages/countries/${path}` /* @vite-ignore */),
  };
};

const arrayPages = [
  createPage("ad", "Andorra"),
  createPage("ae", "United Arab Emirates"),
  createPage("af", "Afghanistan"),
  createPage("al", "Albania"),
  createPage("aq", "Antarctica"),
  createPage("ar", "Argentina"),
  createPage("as", "American Samoa"),
  createPage("at", "Austria"),
  createPage("au", "Australia"),
  createPage("bd", "Bangladesh"),
  createPage("be", "Belgium"),
  createPage("pe", "Peru"),
  createPage("by", "Belarus"),
  createPage("pk", "Pakistan"),
  createPage("mg", "Madagascar"),
  createPage("bo", "Bolivia"),
  createPage("rs", "Serbia"),
  createPage("ch", "Switzerland"),
  createPage("mk", "North Macedonia"),
  createPage("bw", "Botswana"),
  createPage("ke", "Kenya"),
  createPage("jo", "Jordan"),
  createPage("id", "Indonesia"),
  createPage("br", "Brazil"),
  createPage("ml", "Mali"),
  createPage("it", "Italy"),
  createPage("do", "Dominican Republic"),
  createPage("gh", "Ghana"),
  createPage("se", "Sweden"),
  createPage("tr", "Turkey"),
  createPage("ug", "Uganda"),
  createPage("jp", "Japan"),
  createPage("nz", "New Zealand"),
  createPage("pt", "Portugal"),
  createPage("co", "Colombia"),
  createPage("de", "Germany"),
  createPage("th", "Thailand"),
  createPage("iq", "Iraq"),
  createPage("hr", "Croatia"),
  createPage("gl", "Greenland"),
  createPage("dk", "Denmark"),
  createPage("lv", "Latvia"),
  createPage("ro", "Romania"),
  createPage("gt", "Guatemala"),
  createPage("mx", "Mexico"),
  createPage("cz", "Czech Republic"),
  createPage("fi", "Finland"),
  createPage("sy", "Syria"),
  createPage("kg", "Kyrgyzstan"),
  createPage("pa", "Panama"),
  createPage("uk", "United Kingdom"),
  createPage("cr", "Costa Rica"),
  createPage("ie", "Ireland"),
  createPage("ng", "Nigeria"),
  createPage("tn", "Tunisia"),
  createPage("pl", "Poland"),
  createPage("na", "Namibia"),
  createPage("za", "South Africa"),
  createPage("eg", "Egypt"),
  createPage("tz", "Tanzania"),
  createPage("vn", "Vietnam"),
  createPage("ru", "Russia"),
  createPage("in", "India"),
  createPage("ca", "Canada"),
  createPage("ls", "Lesotho"),
  createPage("bg", "Bulgaria"),
  createPage("my", "Malaysia"),
  createPage("ph", "Philippines"),
  createPage("uy", "Uruguay"),
  createPage("ee", "Estonia"),
  createPage("rw", "Rwanda"),
  createPage("sn", "Senegal"),
  createPage("es", "Spain"),
  createPage("hu", "Hungary"),
  createPage("kh", "Cambodia"),
  createPage("kr", "South Korea"),
  createPage("is", "Iceland"),
  createPage("cl", "Chile"),
  createPage("sk", "Slovakia"),
  createPage("lt", "Lithuania"),
  createPage("lk", "Sri Lanka"),
  createPage("il", "Israel"),
  createPage("la", "Laos"),
  createPage("gr", "Greece"),
  createPage("ec", "Ecuador"),
  createPage("si", "Slovenia"),
  createPage("xv", "Svalbard"),
  createPage("no", "Norway"),
  createPage("ua", "Ukraine"),
  createPage("np", "Nepal"),
  createPage("us", "United States"),
  createPage("mn", "Mongolia"),
  createPage("bt", "Bhutan"),
  createPage("cn", "China"),
  createPage("hk", "Hong Kong"),
  createPage("mo", "Macau"),
  createPage("tw", "Taiwan"),
  createPage("fr", "France"),
  createPage("mq", "Martinique"),
  createPage("re", "Reunion"),
  createPage("nl", "Netherlands"),
  createPage("lb", "Lebanon"),
  createPage("me", "Montenegro"),
  createPage("sz", "Eswatini"),
  createPage("vu", "Vanuatu"),
  createPage("fk", "Falkland Islands"),
  createPage("gs", "South Georgia"),
  createPage("qa", "Qatar"),
  createPage("pr", "Puerto Rico"),
  createPage("lu", "Luxembourg"),
  createPage("fo", "Faroe Islands"),
  createPage("vi", "US Virgin Islands"),
  createPage("cw", "Curaçao"),
  createPage("mp", "Nothern Mariana Islands"),
  createPage("io", "British Idian Ocean Territory"),
  createPage("mt", "Malta"),
  createPage("pm", "Saint Pierre and Miquelon"),
  createPage("je", "Jersey"),
  createPage("sm", "San Marino"),
  createPage("bm", "Bermuda"),
  createPage("gi", "Gibraltar"),
  createPage("pn", "Pitcairn Islands"),
  createPage("mc", "Monaco"),
  createPage("im", "Isle of Man"),
  createPage("gu", "Guam"),
  createPage("sg", "Singapore"),
  createPage("kz", "Kazakhstan"),
];

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  return (
    <>
      <Header />
      <ContentContainer>
        <MainContent>
          <Routes>
            {arrayPages.map((page) => {
              const Component = lazy(page.component);
              return (
                <Route
                  key={page.path}
                  path={page.path}
                  element={
                    <Suspense fallback={<Loading />}>
                      <Page title={page.title}>
                        <Component />
                      </Page>
                    </Suspense>
                  }
                />
              );
            })}
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
