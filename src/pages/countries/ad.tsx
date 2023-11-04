import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import Footer from "../../components/common/Footer";
import flamap from "../../assets/img/ad/flagmap.png";
import coat from "../../assets/img/ad/coat.svg";

function Andorra() {
  return (
    <>
      <PageHeader
        flagmap={flamap}
        flagAlt="Andorra shaped flag"
        title="Andorra"
        coat={coat}
        coatAlt="Coat of Arms of Andorra"
      />
      <CountrySummary
        capital="Andorra la Vella"
        largestCities="Andorra la Vella"
        lang="Catalan"
        currencies="€EUR"
        iso="AD"
        tld="ad"
        callingCode={376}
        drivingSide="R"
      />
      <Footer />
    </>
  );
}

export default Andorra;
