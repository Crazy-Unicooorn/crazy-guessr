import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/si/flagmap.png";
import coat from "../../assets/img/si/coat.svg";

function Slovenia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Slovenia shaped flag"
        title="Slovenia"
        coat={coat}
        coatAlt="Coat of Arms of Slovenia"
      />
      <CountrySummary
        capital="Ljubljana"
        largestCities="Ljubljana, Maribor, Celje, Kranj, Velenje"
        lang="Slovene"
        currencies="€ EUR"
        iso="si"
        tld="si"
        callingCode="386"
        drivingSide="R"
      />
    </>
  );
}

export default Slovenia;
