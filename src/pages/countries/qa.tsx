import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/qa/flagmap.png";
import coat from "../../assets/img/qa/coat.svg";

function Qatar() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Qatar shaped flag"
        title="Qatar (قطر)"
        coat={coat}
        coatAlt="Coat of Arms of Qatar"
      />
      <CountrySummary
        capital="Doha (الدوحة)"
        largestCities="Doha (الدوحة), Al Rayyan (الريان), Umm Salal Muḩammad (أم صلال محمد), Al Wakrah (الوكرة), Al Khor (الخور)"
        lang="Arabic, English"
        currencies="ر.ق QAR"
        iso="qa"
        tld="qa | قطر."
        callingCode="974"
        drivingSide="R"
      />
    </>
  );
}

export default Qatar;
