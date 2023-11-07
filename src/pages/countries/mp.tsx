import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mp/flagmap.png";
import coat from "../../assets/img/mp/coat.svg";

function NorthernMarianaIslands() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Northern Mariana Islands shaped flag"
        title="Northern Mariana Islands"
        coat={coat}
        coatAlt="Coat of Arms of Northern Mariana Islands"
      />
      <CountrySummary
        capital="Saipan"
        largestCities="Saipan, Tinian, Rota, San Jose, Capitol Hill"
        lang="English, Chamorro, Carolinian"
        currencies="$ USD"
        iso="mp"
        tld="mp"
        callingCode="1-670"
        drivingSide="R"
      />
    </>
  );
}

export default NorthernMarianaIslands;
