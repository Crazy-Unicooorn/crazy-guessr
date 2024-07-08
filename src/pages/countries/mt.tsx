import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mt/flagmap.png";
import coat from "../../assets/img/mt/coat.svg";

function Malta() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Malta shaped flag"
        title="Malta"
        coat={coat}
        coatAlt="Coat of Arms of Malta"
      />
      <CountrySummary
        capital="Valletta"
        largestCities="Birkirkara, Qormi, Mosta, Żabbar, San Pawl il-Baħar"
        lang="Maltese, English"
        currencies="€ EUR"
        iso="mt"
        tld="mt"
        callingCode="356"
        drivingSide="L"
      />
    </>
  );
}

export default Malta;
