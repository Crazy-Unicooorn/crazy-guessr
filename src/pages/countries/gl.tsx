import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gl/flagmap.png";
import coat from "../../assets/img/gl/coat.svg";

function Greenland() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Greenland shaped flag"
        title="Greenland (Kalaallit Nunaat)"
        coat={coat}
        coatAlt="Coat of Arms of Greenland"
      />
      <CountrySummary
        capital="Nuuk"
        largestCities="Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat"
        lang="Greenlandic, Danish"
        currencies="kr DKK"
        iso="gl"
        tld="gl"
        callingCode="299"
        drivingSide="R"
      />
    </>
  );
}

export default Greenland;
