import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sk/flagmap.png";
import coat from "../../assets/img/sk/coat.svg";

function Slovakia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Slovakia shaped flag"
        title="Slovakia (Slovensko)"
        coat={coat}
        coatAlt="Coat of Arms of Slovakia"
      />
      <CountrySummary
        capital="Bratislava"
        largestCities="Bratislava, Košice, Prešov, Žilina, Nitra"
        lang="Slovak"
        currencies="€ EUR"
        iso="sk"
        tld="sk"
        callingCode="421"
        drivingSide="R"
      />
    </>
  );
}

export default Slovakia;
