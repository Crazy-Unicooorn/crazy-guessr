import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flamap from "../../assets/img/al/flagmap.png";
import coat from "../../assets/img/al/coat.svg";

function Albania() {
  return (
    <>
      <PageHeader
        flagmap={flamap}
        flagAlt="Albania shaped flag"
        title="Albania"
        coat={coat}
        coatAlt="Coat of Arms of Albania"
      />
      <CountrySummary
        capital="Tirana"
        largestCities="Tirana"
        lang="Albanian"
        currencies="Lek (ALL)"
        iso="AL"
        tld="al"
        callingCode={355}
        drivingSide="R"
      />
    </>
  );
}

export default Albania;
