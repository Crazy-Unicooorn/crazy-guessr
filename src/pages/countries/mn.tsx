import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mn/flagmap.png";
import coat from "../../assets/img/mn/coat.svg";

function Mongolia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Mongolia shaped flag"
        title="Mongolia (Монгол улс)"
        coat={coat}
        coatAlt="Coat of Arms of Mongolia"
      />
      <CountrySummary
        capital="Ulaanbaatar (Улаанбаатар)"
        largestCities="Ulaanbaatar, Erdenet, Darkhan, Choibalsan, Khovd"
        lang="Mongolian"
        currencies="₮ MNT"
        iso="mn"
        tld="mn | .мон"
        callingCode="976"
        drivingSide="R"
      />
    </>
  );
}

export default Mongolia;
