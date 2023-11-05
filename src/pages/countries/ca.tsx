import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ca/flagmap.png";
import coat from "../../assets/img/ca/coat.svg";

function Canada() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Canada shaped flag"
        title="Canada"
        coat={coat}
        coatAlt="Coat of Arms of Canada"
      />
      <CountrySummary
        capital="Ottawa"
        largestCities="Toronto, Montreal, Vancouver, Calgary, Edmonton, Quebec City"
        lang="English, French"
        currencies="$CAD"
        iso="ca"
        tld="ca"
        callingCode="1"
        drivingSide="R"
      />
    </>
  );
}

export default Canada;
