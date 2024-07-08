import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/cl/flagmap.png";
import coat from "../../assets/img/cl/coat.svg";

function Chile() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Chile shaped flag"
        title="Chile"
        coat={coat}
        coatAlt="Coat of Arms of Chile"
      />
      <CountrySummary
        capital="Santiago"
        largestCities="Santiago"
        lang="Spanish"
        currencies="CLP"
        iso="cl"
        tld="cl"
        callingCode="56"
        drivingSide="R"
      />
    </>
  );
}

export default Chile;
