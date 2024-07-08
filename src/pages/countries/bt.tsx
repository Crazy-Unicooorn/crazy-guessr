import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bt/flagmap.png";
import coat from "../../assets/img/bt/coat.svg";

function Bhutan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Bhutan shaped flag"
        title="Bhutan (འབྲུག་ཡུལ་)"
        coat={coat}
        coatAlt="Coat of Arms of Bhutan"
      />
      <CountrySummary
        capital="Thimphu (ཐིམ་ཕུ་)"
        largestCities="Thimphu"
        lang="Dzongkha"
        currencies="Nu BTN & ₹ INR"
        iso="bt"
        tld="bt"
        callingCode="975"
        drivingSide="L"
      />
    </>
  );
}

export default Bhutan;
