import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/br/flagmap.png";
import coat from "../../assets/img/br/coat.svg";

function Brazil() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Brazil shaped flag"
        title="Brazil"
        coat={coat}
        coatAlt="Coat of Arms of Brazil"
      />
      <CountrySummary
        capital="Brasília"
        largestCities="São Paulo, Rio de Janeiro, Brasília, Fortaleza, Salvador"
        lang="Portuguese"
        currencies="R$ BRL"
        iso="br"
        tld="br"
        callingCode="55"
        drivingSide="R"
      />
    </>
  );
}

export default Brazil;
