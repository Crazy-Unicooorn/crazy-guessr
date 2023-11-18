import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sy/flagmap.png";
import coat from "../../assets/img/sy/coat.svg";

function Syria() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Syria shaped flag"
        title="Syria (سوريا)"
        coat={coat}
        coatAlt="Coat of Arms of Syria"
      />
      <CountrySummary
        capital="Damascus (دِمَشق)"
        largestCities="Damascus (دِمَشق), Aleppo (حَلَب), Homs (حُمْص), Hama (حَمَاة), Latakia (الْلَاذِقِيَّة)"
        lang="Arabic"
        currencies="£ SYP"
        iso="sy"
        tld="sy | سوريا."
        callingCode="963"
        drivingSide="R"
      />
    </>
  );
}

export default Syria;
