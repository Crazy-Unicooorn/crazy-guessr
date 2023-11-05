import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/cn/flagmap.png";
import coat from "../../assets/img/cn/coat.svg";

function China() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="China shaped flag"
        title="China"
        coat={coat}
        coatAlt="Coat of Arms of China"
      />
      <CountrySummary
        capital="Beijing"
        largestCities="Shanghai, Beijing, Guangzhou, Shenzhen, Chengdu, Tianjin"
        lang="Standard Chinese"
        currencies="¥CNY"
        iso="cn"
        tld="cn | .中国 | .中國"
        callingCode="86"
        drivingSide="R"
      />
    </>
  );
}

export default China;
