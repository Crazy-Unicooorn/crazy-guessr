import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/in/flagmap.png";
import coat from "../../assets/img/in/coat.svg";

function India() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="India shaped flag"
        title="India (भारत)"
        coat={coat}
        coatAlt="Coat of Arms of India"
      />
      <CountrySummary
        capital="New Delhi (नई दिल्ली)"
        largestCities="Mumbai (मुंबई), Delhi (दिल्ली), Bangalore (ಬೆಂಗಳೂರು), Hyderabad (హైదరాబాద్), Ahmedabad (અમદાવાદ)"
        lang="Hindi, English"
        currencies="₹INR"
        iso="in"
        tld="in"
        callingCode="91"
        drivingSide="L"
      />
    </>
  );
}

export default India;
