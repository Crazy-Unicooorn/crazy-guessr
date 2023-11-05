import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bw/flagmap.png";
import coat from "../../assets/img/bw/coat.svg";

function Botswana() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Botswana shaped flag"
        title="Botswana"
        coat={coat}
        coatAlt="Coat of Arms of Botswana"
      />
      <CountrySummary
        capital="Gaborone"
        largestCities="Gaborone, Francistown, Molepolole"
        lang="English, Setswana"
        currencies="Pula (BWP)"
        iso="bw"
        tld="bw"
        callingCode="267"
        drivingSide="L"
      />
    </>
  );
}

export default Botswana;
