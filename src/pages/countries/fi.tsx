import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/fi/flagmap.png";
import coat from "../../assets/img/fi/coat.svg";

function Finland() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Finland shaped flag"
        title="Finland (Suomi)"
        coat={coat}
        coatAlt="Coat of Arms of Finland"
      />
      <CountrySummary
        capital="Helsinki (Helsingfors)"
        largestCities="Helsinki, Espoo, Tampere"
        lang="Finnish, Swedish"
        currencies="€ EUR"
        iso="fi"
        tld="fi"
        callingCode="358"
        drivingSide="R"
      />
    </>
  );
}

export default Finland;
