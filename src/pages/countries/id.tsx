import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/id/flagmap.png";
import coat from "../../assets/img/id/coat.svg";

function Indonesia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Indonesia shaped flag"
        title="Indonesia"
        coat={coat}
        coatAlt="Coat of Arms of Indonesia"
      />
      <CountrySummary
        capital="Jakarta"
        largestCities="Jakarta, Surabaya, Bandung, Bekasi, Medan"
        lang="Indonesian"
        currencies="Rp IDR"
        iso="id"
        tld="id"
        callingCode="62"
        drivingSide="L"
      />
    </>
  );
}

export default Indonesia;
