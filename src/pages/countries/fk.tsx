import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/fk/flagmap.png";
import coat from "../../assets/img/fk/coat.svg";

function FalklandIslands() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Falkland Islands shaped flag"
        title="Falkland Islands (Islas Malvinas)"
        coat={coat}
        coatAlt="Coat of Arms of Falkland Islands"
      />
      <CountrySummary
        capital="Stanley"
        largestCities="Stanley, Mount Pleasant, Fox Bay, Port Howard, Port Stephens"
        lang="English"
        currencies="£ FKP"
        iso="FK"
        tld="fk"
        callingCode="500"
        drivingSide="L"
      />
    </>
  );
}

export default FalklandIslands;
