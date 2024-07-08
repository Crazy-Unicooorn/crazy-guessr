import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/tw/flagmap.png";
import coat from "../../assets/img/tw/coat.svg";

function Taiwan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Taiwan shaped flag"
        title="Taiwan (臺灣 / 台湾)"
        coat={coat}
        coatAlt="Coat of Arms of Taiwan"
      />
      <CountrySummary
        capital="Taipei (臺北市)"
        largestCities="Taipei (臺北市), Kaohsiung (高雄市), Taichung (臺中市), Tainan (臺南市), Banqiao (板橋區)"
        lang="Traditional Chinese"
        currencies="$ TWD"
        iso="tw"
        tld="tw | .台灣 | .台湾"
        callingCode="886"
        drivingSide="R"
      />
    </>
  );
}

export default Taiwan;
