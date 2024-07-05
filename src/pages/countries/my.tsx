import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/my/flagmap.png";
import coat from "../../assets/img/my/coat.svg";

function Malaysia() {
  return (
    <>
      <PageHeader
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
    </>
  );
}

export default Malaysia;
