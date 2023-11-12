import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pm/flagmap.png";
import coat from "../../assets/img/pm/coat.svg";

function SaintPierreAndMiquelon() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Saint Pierre And Miquelon shaped flag"
        title="Saint Pierre And Miquelon"
        coat={coat}
        coatAlt="Coat of Arms of Saint Pierre And Miquelon"
      />
      <CountrySummary
        capital="Saint-Pierre"
        largestCities="Saint-Pierre, Miquelon-Langlade"
        lang="French"
        currencies="€ EUR, $ CAD"
        iso="pm"
        tld="pm"
        callingCode="508"
        drivingSide="R"
      />
    </>
  );
}

export default SaintPierreAndMiquelon;
