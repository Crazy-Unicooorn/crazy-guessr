import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flamap from "../../assets/img/af/flagmap.png";
import coat from "../../assets/img/af/coat.svg";

function Afghanistan() {
  return (
    <>
      <CountryHeader
        flagmap={flamap}
        flagAlt="Afghanistan shaped flag"
        title="Afghanistan (افغانستان)"
        coat={coat}
        coatAlt="Coat of Arms of Afghanistan"
      />
      <CountrySummary
        capital="Kabul (کابل)"
        largestCities="Kabul"
        lang="Pashto, Dari"
        currencies="افغانی (AFN)"
        iso="AF"
        tld="af"
      />
    </>
  );
}

export default Afghanistan;
