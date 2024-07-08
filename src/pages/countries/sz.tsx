import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sz/flagmap.png";
import coat from "../../assets/img/sz/coat.svg";

function Eswatini() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Eswatini shaped flag"
        title="Eswatini (Swaziland)"
        coat={coat}
        coatAlt="Coat of Arms of Eswatini"
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

export default Eswatini;
