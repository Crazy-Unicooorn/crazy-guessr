import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ls/flagmap.png";
import coat from "../../assets/img/ls/coat.svg";

function Lesotho() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Lesotho shaped flag"
        title="Lesotho"
        coat={coat}
        coatAlt="Coat of Arms of Lesotho"
      />
      <CountrySummary
        capital="Maseru"
        largestCities="Maseru, Mafeteng, Leribe, Maputsoe"
        lang="Sesotho, English"
        currencies="LSL, ZAR"
        iso="ls"
        tld="ls"
        callingCode="266"
        drivingSide="L"
      />
    </>
  );
}

export default Lesotho;
