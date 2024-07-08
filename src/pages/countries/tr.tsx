import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/tr/flagmap.png";
import coat from "../../assets/img/tr/coat.svg";

function Turkey() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Turkey shaped flag"
        title="Turkey (Türkiye)"
        coat={coat}
        coatAlt="Coat of Arms of Turkey"
      />
      <CountrySummary
        capital="Ankara"
        largestCities="Istanbul, Ankara, İzmir, Bursa, Adana"
        lang="Turkish"
        currencies="TRY"
        iso="tr"
        tld="tr"
        callingCode="90"
        drivingSide="R"
      />
    </>
  );
}

export default Turkey;
