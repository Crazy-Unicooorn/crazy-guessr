import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import Footer from "../../components/common/Footer";
import flamap from "../../assets/img/af/flagmap.png";
import coat from "../../assets/img/af/coat.svg";

function Afghanistan() {
  return (
    <>
      <PageHeader
        flagmap={flamap}
        flagAlt="Afghanistan shaped flag"
        title="Afghanistan"
        coat={coat}
        coatAlt="Coat of Arms of Afghanistan"
      />
      <CountrySummary
        capital="Kabul"
        largestCities="Kabul"
        lang="Pashto & Dari"
        currencies="افغانی (AFN)"
        iso="AF"
        tld="af"
      />
      <Footer />
    </>
  );
}

export default Afghanistan;
