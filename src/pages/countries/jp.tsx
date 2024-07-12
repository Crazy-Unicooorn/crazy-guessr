import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/jp/flagmap.png";
import coat from "../../assets/img/jp/coat.svg";
import PrefecturesJP from "../../components/tips/jp/prefectures";
import AreaCodesJP from "../../components/tips/jp/AreaCodes";
import KanjiPrefectures from "../../components/tips/jp/KanjiPrefectures";

function Japan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Japan shaped flag"
        title="Japan (日本)"
        coat={coat}
        coatAlt="Coat of Arms of Japan"
      />
      <CountrySummary
        capital="Tokyo (東京都)"
        largestCities="Tokyo (東京都), Yokohama (横浜市), Osaka (大阪市), Nagoya (名古屋市), Sapporo (札幌市)"
        lang="Japanese"
        currencies="¥ JPY"
        iso="jp"
        tld="jp"
        callingCode="81"
        drivingSide="L"
      />
      <PrefecturesJP />
      <KanjiPrefectures />
      <AreaCodesJP />
    </>
  );
}

export default Japan;
