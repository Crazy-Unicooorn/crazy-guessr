import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/sg/flagmap.png";
import coat from "../../assets/img/sg/coat.svg";

function Singapore() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Singapore shaped flag"
        title="Singapore (新加坡 / சிங்கப்பூர்)"
        coat={coat}
        coatAlt="Coat of Arms of Singapore"
      />
      <CountrySummary
        lang="English, Malay, Mandarin, Tamil"
        currencies="SGD"
        iso="sg"
        tld="sg"
        callingCode="65"
        drivingSide="L"
      />
    </>
  );
}

export default Singapore;
