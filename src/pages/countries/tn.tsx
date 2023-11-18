import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/tn/flagmap.png";
import coat from "../../assets/img/tn/coat.svg";

function Tunisia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Tunisia shaped flag"
        title="Tunisia (تونس)"
        coat={coat}
        coatAlt="Coat of Arms of Tunisia"
      />
      <CountrySummary
        capital="Tunis (تونس)"
        largestCities="Tunis (تونس), Sfax (صفاقس), Sousse (سوسة), Kairouan (القيروان), Bizerte (بنزرت)"
        lang="Arabic, French"
        currencies="TND"
        iso="tn"
        tld="tn | تونس."
        callingCode="216"
        drivingSide="R"
      />
    </>
  );
}

export default Tunisia;
