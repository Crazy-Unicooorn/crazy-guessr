import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/kr/flagmap.png";
import coat from "../../assets/img/kr/coat.svg";

function SouthKorea() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="South Korea shaped flag"
        title="South Korea (대한민국)"
        coat={coat}
        coatAlt="Coat of Arms of South Korea"
      />
      <CountrySummary
        capital="Seoul (서울)"
        largestCities="Seoul (서울), Busan (부산), Incheon (인천), Daegu (대구)"
        lang="Korean"
        currencies="₩ KRW"
        iso="kr"
        tld="kr | .한국"
        callingCode="82"
        drivingSide="R"
      />
    </>
  );
}

export default SouthKorea;
