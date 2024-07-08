import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/is/flagmap.png";
import coat from "../../assets/img/is/coat.svg";

function Iceland() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Iceland shaped flag"
        title="Iceland (Ísland)"
        coat={coat}
        coatAlt="Coat of Arms of Iceland"
      />
      <CountrySummary
        capital="Reykjavík"
        largestCities="Reykjavík, Kópavogur, Hafnarfjörður, Akureyri, Reykjanesbær"
        lang="Icelandic"
        currencies="ISK"
        iso="is"
        tld="is"
        callingCode="354"
        drivingSide="R"
      />
    </>
  );
}

export default Iceland;
