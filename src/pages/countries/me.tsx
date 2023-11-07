import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/me/flagmap.png";
import coat from "../../assets/img/me/coat.svg";

function Montenegro() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Montenegro shaped flag"
        title="Montenegro (Црна Гора)"
        coat={coat}
        coatAlt="Coat of Arms of Montenegro"
      />
      <CountrySummary
        capital="Podgorica (Подгорица)"
        largestCities="Podgorica, Nikšić, Pljevlja, Bijelo Polje, Cetinje"
        lang="Montenegrin"
        currencies="€ EUR"
        iso="me"
        tld="me"
        callingCode="382"
        drivingSide="R"
      />
    </>
  );
}

export default Montenegro;
