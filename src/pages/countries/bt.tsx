import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bt/flagmap.png";
import coat from "../../assets/img/bt/coat.svg";

function Bhutan() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Bhutan shaped flag"
        title="Bhutan"
        coat={coat}
        coatAlt="Coat of Arms of Bhutan"
      />
      <CountrySummary
        capital="Thimphu"
        largestCities="Thimphu"
        lang="Dzongkha"
        currencies="NuBTN & ₹INR"
        iso="bt"
        tld="bt"
        callingCode="975"
        drivingSide="L"
      />
    </>
  );
}

export default Bhutan;
