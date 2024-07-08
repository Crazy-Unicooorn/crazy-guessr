import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/xv/flagmap.png";
import coat from "../../assets/img/xv/coat.svg";

function Svalbard() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Svalbard shaped flag"
        title="Svalbard"
        coat={coat}
        coatAlt="Coat of Arms of Svalbard"
      />
      <CountrySummary
        capital="Longyearbyen"
        largestCities="Longyearbyen, Barentsburg, Ny-Ålesund, Sveagruva, Hornsund"
        lang="Norwegian, Russian"
        currencies="NOK"
        iso="sj"
        tld="xv | .sj | .no"
        callingCode="47"
        drivingSide="R"
      />
    </>
  );
}

export default Svalbard;
