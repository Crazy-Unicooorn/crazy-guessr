import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/im/flagmap.png";
import coat from "../../assets/img/im/coat.svg";

function IsleOfMan() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Isle Of Man shaped flag"
        title="Isle Of Man (Ellan Vannin)"
        coat={coat}
        coatAlt="Coat of Arms of Isle Of Man"
      />
      <CountrySummary
        capital="Douglas"
        largestCities="Douglas, Ramsey, Peel, Castletown, Port Erin"
        lang="English, Manx"
        currencies="£ GBP"
        iso="im"
        tld="im"
        callingCode="44"
        drivingSide="L"
      />
    </>
  );
}

export default IsleOfMan;
