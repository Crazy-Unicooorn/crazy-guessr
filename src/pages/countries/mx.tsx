import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mx/flagmap.png";
import coat from "../../assets/img/mx/coat.svg";

function Mexico() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Mexico shaped flag"
        title="Mexico"
        coat={coat}
        coatAlt="Coat of Arms of Mexico"
      />
      <CountrySummary
        capital="Mexico City (Ciudad de México)"
        largestCities="Mexico City, Ecatepec, Guadalajara, Puebla, Juárez"
        lang="Spanish"
        currencies="MXN"
        iso="mx"
        tld="mx"
        callingCode="52"
        drivingSide="R"
      />
    </>
  );
}

export default Mexico;
