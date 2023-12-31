import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sz/flagmap.png";
import coat from "../../assets/img/sz/coat.svg";

function Swaziland() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Swaziland shaped flag"
        title="Swaziland (Eswatini)"
        coat={coat}
        coatAlt="Coat of Arms of Swaziland"
      />
      <CountrySummary
        capital="Mbabane (executive), Lobamba (legislative)"
        largestCities="Mbabane, Manzini, Lobamba, Big Bend, Malkerns"
        lang="English, Swazi"
        currencies="SZL, ZAR"
        iso="sz"
        tld="sz"
        callingCode="268"
        drivingSide="L"
      />
    </>
  );
}

export default Swaziland;
