import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pk/flagmap.png";
import coat from "../../assets/img/pk/coat.svg";

function Pakistan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Pakistan shaped flag"
        title="Pakistan (پَاکِسْتَان)"
        coat={coat}
        coatAlt="Coat of Arms of Pakistan"
      />
      <CountrySummary
        capital="Islamabad (اسلام آباد)"
        largestCities="Karachi (کراچی), Lahore (لاہور), Faisalabad (فیصل آباد), Rawalpindi (راولپنڈی), Gujranwala (گوجرانوالہ)"
        lang="Urdu, English"
        currencies="₨ PKR"
        iso="pk"
        tld="pk | پاکستان."
        callingCode="92"
        drivingSide="L"
      />
    </>
  );
}

export default Pakistan;
