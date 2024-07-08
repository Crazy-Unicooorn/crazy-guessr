import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/uk/flagmap.png";
import coat from "../../assets/img/uk/coat.png";

function UnitedKingdom() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="United Kingdom shaped flag"
        title="United Kingdom"
        coat={coat}
        coatAlt="Coat of Arms of United Kingdom"
      />
      <CountrySummary
        capital="London"
        largestCities="London, Birmingham, Glasgow, Liverpool, Leeds"
        lang="English"
        currencies="£ GBP"
        iso="gb"
        tld="uk | .gb | .co.uk"
        callingCode="44"
        drivingSide="L"
      />
    </>
  );
}

export default UnitedKingdom;
