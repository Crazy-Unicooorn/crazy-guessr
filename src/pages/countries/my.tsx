import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/my/flagmap.png";
import coat from "../../assets/img/my/coat.svg";
import MalaysiaStateFlags from "../../components/tips/my/MalaysiaStateFlags";

function Malaysia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Malaysia shaped flag"
        title="Malaysia"
        coat={coat}
        coatAlt="Coat of Arms of Malaysia"
      />
      <CountrySummary
        capital="Kuala Lumpur"
        largestCities="Kuala Lumpur, George Town, Ipoh, Shah Alam, Petaling Jaya"
        lang="Malay"
        currencies="MYR | RM"
        iso="my"
        tld="my"
        callingCode="60"
        drivingSide="L"
      />
      <MalaysiaStateFlags />
    </>
  );
}

export default Malaysia;
