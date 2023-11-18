import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sn/flagmap.png";
import coat from "../../assets/img/sn/coat.svg";

function Senegal() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Senegal shaped flag"
        title="Senegal"
        coat={coat}
        coatAlt="Coat of Arms of Senegal"
      />
      <CountrySummary
        capital="Dakar"
        largestCities="Dakar, Touba, Thiès, Rufisque, Kaolack"
        lang="French, Wolof"
        currencies="CFA"
        iso="sn"
        tld="sn"
        callingCode="221"
        drivingSide="R"
      />
    </>
  );
}

export default Senegal;
