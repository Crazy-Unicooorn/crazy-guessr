import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/nl/flagmap.png";
import coat from "../../assets/img/nl/coat.svg";

function Netherlands() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Netherlands shaped flag"
        title="Netherlands"
        coat={coat}
        coatAlt="Coat of Arms of Netherlands"
      />
      <CountrySummary
        capital="Amsterdam"
        largestCities="Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven"
        lang="Dutch"
        currencies="€ EUR"
        iso="nl"
        tld="nl"
        callingCode="31"
        drivingSide="R"
      />
    </>
  );
}

export default Netherlands;
