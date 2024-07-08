import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/io/flagmap.png";
import coat from "../../assets/img/io/coat.svg";

function BritishIndianOceanTerritory() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="British Indian Ocean Territory shaped flag"
        title="British Indian Ocean Territory"
        coat={coat}
        coatAlt="Coat of Arms of British Indian Ocean Territory"
      />
      <CountrySummary
        capital="Diego Garcia"
        largestCities="Diego Garcia"
        lang="English"
        currencies="$ USD, £GBP"
        iso="io"
        tld="io"
        callingCode="246"
        drivingSide="R"
      />
    </>
  );
}

export default BritishIndianOceanTerritory;
