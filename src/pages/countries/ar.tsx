import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ar/flagmap.png";
import coat from "../../assets/img/ar/coat.svg";

function Argentina() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Argentina shaped flag"
        title="Argentina"
        coat={coat}
        coatAlt="Coat of Arms of Argentina"
      />
      <CountrySummary
        capital="Buenos Aires"
        largestCities="Buenos Aires"
        lang="Spanish"
        currencies="$ ARS"
        iso="AR"
        tld="ar"
        callingCode={54}
        drivingSide="R"
      />
    </>
  );
}

export default Argentina;
