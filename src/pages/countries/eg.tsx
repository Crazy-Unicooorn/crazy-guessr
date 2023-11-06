import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/eg/flagmap.png";
import coat from "../../assets/img/eg/coat.svg";

function Egypt() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Egypt shaped flag"
        title="Egypt (مصر)"
        coat={coat}
        coatAlt="Coat of Arms of Egypt"
      />
      <CountrySummary
        capital="Cairo (القاهرة)"
        largestCities="Cairo, Alexandria, Giza"
        lang="Arabic"
        currencies="E£EGP"
        iso="eg"
        tld="eg | مصر."
        callingCode="20"
        drivingSide="R"
      />
    </>
  );
}

export default Egypt;
