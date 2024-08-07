import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/do/flagmap.png";
import coat from "../../assets/img/do/coat.svg";

function DominicanRepublic() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Dominican Republic shaped flag"
        title="Dominican Republic (República Dominicana)"
        coat={coat}
        coatAlt="Coat of Arms of Dominican Republic"
      />
      <CountrySummary
        capital="Santo Domingo (Ciudad Trujillo)"
        largestCities="Santo Domingo, Santiago de los Caballeros"
        lang="Spanish"
        currencies="DOP"
        iso="DO"
        tld="do"
        callingCode="1-809, +1-829, +1-849"
        drivingSide="R"
      />
    </>
  );
}

export default DominicanRepublic;
