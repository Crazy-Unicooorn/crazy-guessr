import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/rw/flagmap.png";
import coat from "../../assets/img/rw/coat.svg";

function Rwanda() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Rwanda shaped flag"
        title="Rwanda"
        coat={coat}
        coatAlt="Coat of Arms of Rwanda"
      />
      <CountrySummary
        capital="Kigali"
        largestCities="Kigali, Butare, Gitarama, Ruhengeri, Gisenyi"
        lang="Kinyarwanda, English, French, Swahili"
        currencies="RWF"
        iso="rw"
        tld="rw"
        callingCode="250"
        drivingSide="R"
      />
    </>
  );
}

export default Rwanda;
