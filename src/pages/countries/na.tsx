import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/na/flagmap.png";
import coat from "../../assets/img/na/coat.svg";

function Namibia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Namibia shaped flag"
        title="Namibia"
        coat={coat}
        coatAlt="Coat of Arms of Namibia"
      />
      <CountrySummary
        capital="Windhoek"
        largestCities="Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund"
        lang="English, Afrikaans, German, Otjiherero, Khoekhoegowab, Oshiwambo, RuKwangali, Setswana, siLozi"
        currencies="NAD, ZAR"
        iso="na"
        tld="na"
        callingCode="264"
        drivingSide="L"
      />
    </>
  );
}

export default Namibia;
