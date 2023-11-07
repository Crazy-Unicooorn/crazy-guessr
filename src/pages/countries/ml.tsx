import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ml/flagmap.png";
import coat from "../../assets/img/ml/coat.svg";

function Mali() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Mali shaped flag"
        title="Mali"
        coat={coat}
        coatAlt="Coat of Arms of Mali"
      />
      <CountrySummary
        capital="Bamako"
        largestCities="Bamako, Sikasso, Mopti, Koutiala, Ségou"
        lang="French"
        currencies="₣ XOF"
        iso="ml"
        tld="ml"
        callingCode="223"
        drivingSide="R"
      />
    </>
  );
}

export default Mali;
