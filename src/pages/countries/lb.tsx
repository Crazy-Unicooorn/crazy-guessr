import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/lb/flagmap.png";
import coat from "../../assets/img/lb/coat.svg";

function Lebanon() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Lebanon shaped flag"
        title="Lebanon (لبنان)"
        coat={coat}
        coatAlt="Coat of Arms of Lebanon"
      />
      <CountrySummary
        capital="Beirut (بيروت)"
        largestCities="Beirut (بيروت), Tripoli (طرابلس), Sidon (صيدا)"
        lang="Arabic, French"
        currencies="ل.ل LBP"
        iso="lb"
        tld="lb"
        callingCode="961"
        drivingSide="R"
      />
    </>
  );
}

export default Lebanon;
