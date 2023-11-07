import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/hk/flagmap.png";
import coat from "../../assets/img/hk/coat.svg";

function HongKong() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Hong Kong shaped flag"
        title="Hong Kong (香港)"
        coat={coat}
        coatAlt="Coat of Arms of Hong Kong"
      />
      <CountrySummary
        lang="English, Chinese, Cantonese"
        currencies="$ HKD"
        iso="hk"
        tld="hk | .香港"
        callingCode="852"
        drivingSide="L"
      />
    </>
  );
}

export default HongKong;
