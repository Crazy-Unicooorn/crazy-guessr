import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ug/flagmap.png";
import coat from "../../assets/img/ug/coat.svg";

function Uganda() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Uganda shaped flag"
        title="Uganda"
        coat={coat}
        coatAlt="Coat of Arms of Uganda"
      />
      <CountrySummary
        capital="Kampala"
        largestCities="Kampala, Gulu, Lira, Mbarara, Jinja"
        lang="English, Swahili"
        currencies="UGX"
        iso="ug"
        tld="ug"
        callingCode="256"
        drivingSide="L"
      />
    </>
  );
}

export default Uganda;
