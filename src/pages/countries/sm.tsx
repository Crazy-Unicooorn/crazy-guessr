import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sm/flagmap.png";
import coat from "../../assets/img/sm/coat.svg";

function SanMarino() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="San Marino shaped flag"
        title="San Marino"
        coat={coat}
        coatAlt="Coat of Arms of San Marino"
      />
      <CountrySummary lang="Italian" currencies="€ EUR" iso="sm" tld="sm" callingCode="378" drivingSide="R" />
    </>
  );
}

export default SanMarino;
