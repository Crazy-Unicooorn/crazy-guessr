import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ee/flagmap.png";
import coat from "../../assets/img/ee/coat.svg";

function Estonia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Estonia shaped flag"
        title="Estonia (Eesti)"
        coat={coat}
        coatAlt="Coat of Arms of Estonia"
      />
      <CountrySummary
        capital="Tallinn"
        largestCities="Tallinn, Tartu, Narva"
        lang="Estonian"
        currencies="€EUR"
        iso="ee"
        tld="ee"
        callingCode="372"
        drivingSide="R"
      />
    </>
  );
}

export default Estonia;
