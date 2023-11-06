import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/jp/flagmap.png";
import coat from "../../assets/img/jp/coat.svg";

function Japan() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Japan shaped flag"
        title="Japan (日本)"
        coat={coat}
        coatAlt="Coat of Arms of Japan"
      />
      <CountrySummary
        capital="Tokyo (東京都)"
        largestCities="Tokyo, Yokohama, Osaka, Nagoya, Sapporo"
        lang="Japanese"
        currencies="¥JPY"
        iso="jp"
        tld="jp"
        callingCode="81"
        drivingSide="L"
      />
    </>
  );
}

export default Japan;
