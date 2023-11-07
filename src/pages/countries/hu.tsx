import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/hu/flagmap.png";
import coat from "../../assets/img/hu/coat.svg";

function Hungary() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Hungary shaped flag"
        title="Hungary (Magyarország)"
        coat={coat}
        coatAlt="Coat of Arms of Hungary"
      />
      <CountrySummary
        capital="Budapest"
        largestCities="Budapest, Debrecen, Szeged, Miskolc, Pécs"
        lang="Hungarian"
        currencies="Ft HUF"
        iso="hu"
        tld="hu"
        callingCode="36"
        drivingSide="R"
      />
    </>
  );
}

export default Hungary;
