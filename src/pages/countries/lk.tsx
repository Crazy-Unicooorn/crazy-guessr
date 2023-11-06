import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/lk/flagmap.png";
import coat from "../../assets/img/lk/coat.svg";

function SriLanka() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Sri Lanka shaped flag"
        title="Sri Lanka (ශ්‍රී ලංකාව)"
        coat={coat}
        coatAlt="Coat of Arms of Sri Lanka"
      />
      <CountrySummary
        capital="Sri Jayawardenepura Kotte (ශ්‍රී ජයවර්ධනපුර කෝට්ටේ)"
        largestCities="Colombo (කොළඹ), Gampaha (ගම්පහ), Kandy (මහනුවර)"
        lang="Sinhala, Tamil, English"
        currencies="RsLKR"
        iso="lk"
        tld="lk | .ලංකා | .இலங்கை"
        callingCode="94"
        drivingSide="L"
      />
    </>
  );
}

export default SriLanka;
