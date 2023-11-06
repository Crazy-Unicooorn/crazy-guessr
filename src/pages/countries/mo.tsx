import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mo/flagmap.png";
import coat from "../../assets/img/mo/coat.svg";

function Macau() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Macau shaped flag"
        title="Macau (澳門)"
        coat={coat}
        coatAlt="Coat of Arms of Macau"
      />
      <CountrySummary
        lang="Portuguese, Cantonese, Mandarin"
        currencies="MOP"
        iso="mo"
        tld="mo | .澳門 | .澳门"
        callingCode="853"
        drivingSide="L"
      />
    </>
  );
}

export default Macau;
