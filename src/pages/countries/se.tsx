import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/se/flagmap.png";
import coat from "../../assets/img/se/coat.svg";

function Sweden() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Sweden shaped flag"
        title="Sweden (Sverige)"
        coat={coat}
        coatAlt="Coat of Arms of Sweden"
      />
      <CountrySummary
        capital="Stockholm"
        largestCities="Stockholm, Gothenburg, Malmö, Uppsala, Västerås"
        lang="Swedish"
        currencies="SEK"
        iso="se"
        tld="se"
        callingCode="46"
        drivingSide="R"
      />
    </>
  );
}

export default Sweden;
