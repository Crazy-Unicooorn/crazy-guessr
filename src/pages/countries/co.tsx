import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/co/flagmap.png";
import coat from "../../assets/img/co/coat.svg";

function Colombia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Colombia shaped flag"
        title="Colombia"
        coat={coat}
        coatAlt="Coat of Arms of Colombia"
      />
      <CountrySummary
        capital="Bogotá"
        largestCities="Bogotá, Medellín, Cali, Barranquilla, Cartagena"
        lang="Spanish"
        currencies="COP"
        iso="CO"
        tld="co"
        callingCode="57"
        drivingSide="R"
      />
    </>
  );
}

export default Colombia;
