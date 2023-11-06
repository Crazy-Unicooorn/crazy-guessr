import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/fo/flagmap.png";
import coat from "../../assets/img/fo/coat.svg";

function FaroeIslands() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Faroe Islands shaped flag"
        title="Faroe Islands (Føroyar)"
        coat={coat}
        coatAlt="Coat of Arms of Faroe Islands"
      />
      <CountrySummary
        capital="Tórshavn"
        largestCities="Tórshavn, Klaksvík, Runavík, Tvøroyri"
        lang="Faroese, Danish"
        currencies="krDKK"
        iso="fo"
        tld="fo"
        callingCode="298"
        drivingSide="R"
      />
    </>
  );
}

export default FaroeIslands;
