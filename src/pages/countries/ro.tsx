import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ro/flagmap.png";
import coat from "../../assets/img/ro/coat.svg";

function Romania() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Romania shaped flag"
        title="Romania"
        coat={coat}
        coatAlt="Coat of Arms of Romania"
      />
      <CountrySummary
        capital="Bucharest (București)"
        largestCities="Bucharest (București), Cluj-Napoca, Timișoara, Iași, Constanța"
        lang="Romanian"
        currencies="RON"
        iso="ro"
        tld="ro"
        callingCode="40"
        drivingSide="R"
      />
    </>
  );
}

export default Romania;
