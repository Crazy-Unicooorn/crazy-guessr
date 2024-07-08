import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/vu/flagmap.png";
import coat from "../../assets/img/vu/coat.svg";

function Vanuatu() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Vanuatu shaped flag"
        title="Vanuatu"
        coat={coat}
        coatAlt="Coat of Arms of Vanuatu"
      />
      <CountrySummary
        capital="Port Vila"
        largestCities="Port Vila, Luganville, Norsup, Port-Olry, Isangel"
        lang="Bislama, English, French"
        currencies="VUV"
        iso="vu"
        tld="vu"
        callingCode="678"
        drivingSide="R"
      />
    </>
  );
}

export default Vanuatu;
