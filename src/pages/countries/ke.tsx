import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ke/flagmap.png";
import coat from "../../assets/img/ke/coat.svg";

function Kenya() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Kenya shaped flag"
        title="Kenya"
        coat={coat}
        coatAlt="Coat of Arms of Kenya"
      />
      <CountrySummary
        capital="Nairobi"
        largestCities="Nairobi, Mombasa, Nakuru, Eldoret, Kisumu"
        lang="English, Swahili"
        currencies="KES"
        iso="ke"
        tld="ke"
        callingCode="254"
        drivingSide="L"
      />
    </>
  );
}

export default Kenya;
