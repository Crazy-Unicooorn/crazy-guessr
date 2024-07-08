import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ec/flagmap.png";
import coat from "../../assets/img/ec/coat.svg";

function Ecuador() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Ecuador shaped flag"
        title="Ecuador"
        coat={coat}
        coatAlt="Coat of Arms of Ecuador"
      />
      <CountrySummary
        capital="Quito"
        largestCities="Guayaquil, Quito, Cuenca"
        lang="Spanish"
        currencies="$ USD"
        iso="ec"
        tld="ec"
        callingCode="593"
        drivingSide="R"
      />
    </>
  );
}

export default Ecuador;
