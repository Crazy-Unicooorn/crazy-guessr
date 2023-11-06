import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/kh/flagmap.png";
import coat from "../../assets/img/kh/coat.svg";

function Cambodia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Cambodia shaped flag"
        title="Cambodia (កម្ពុជា)"
        coat={coat}
        coatAlt="Coat of Arms of Cambodia"
      />
      <CountrySummary
        capital="Phnom Penh (ភ្នំពេញ)"
        largestCities="Phnom Penh, Siem Reap, Battambang, Sihanoukville, Poipet"
        lang="Khmer"
        currencies="៛KHR, $USD"
        iso="kh"
        tld="kh"
        callingCode="855"
        drivingSide="R"
      />
    </>
  );
}

export default Cambodia;
