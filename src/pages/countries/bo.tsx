import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bo/flagmap.png";
import coat from "../../assets/img/bo/coat.svg";

function Bolivia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Bolivia shaped flag"
        title="Bolivia"
        coat={coat}
        coatAlt="Coat of Arms of Bolivia"
      />
      <CountrySummary
        capital="Sucre"
        largestCities="Santa Cruz de la Sierra, La Paz, Sucre"
        lang="Spanish, Quechua, Aymara, Guarani, ..."
        currencies="Bs BOB"
        iso="bo"
        tld="bo"
        callingCode="591"
        drivingSide="R"
      />
    </>
  );
}

export default Bolivia;
