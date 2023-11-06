import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gh/flagmap.png";
import coat from "../../assets/img/gh/coat.svg";

function Ghana() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Ghana shaped flag"
        title="Ghana (Gaana)"
        coat={coat}
        coatAlt="Coat of Arms of Ghana"
      />
      <CountrySummary
        capital="Accra"
        largestCities="Accra, Kumasi, Tamale, Sekondi-Takoradi, Ashiaman"
        lang="English"
        currencies="₵GHS"
        iso="gh"
        tld="gh"
        callingCode="233"
        drivingSide="R"
      />
    </>
  );
}

export default Ghana;
