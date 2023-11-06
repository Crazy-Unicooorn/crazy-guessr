import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mc/flagmap.png";
import coat from "../../assets/img/mc/coat.svg";

function Monaco() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Monaco shaped flag"
        title="Monaco"
        coat={coat}
        coatAlt="Coat of Arms of Monaco"
      />
      <CountrySummary lang="French, Italian" currencies="€EUR" iso="mc" tld="mc" callingCode="377" drivingSide="R" />
    </>
  );
}

export default Monaco;
