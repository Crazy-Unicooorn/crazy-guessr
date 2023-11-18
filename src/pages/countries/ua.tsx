import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ua/flagmap.png";
import coat from "../../assets/img/ua/coat.svg";

function Ukraine() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Ukraine shaped flag"
        title="Ukraine (Україна)"
        coat={coat}
        coatAlt="Coat of Arms of Ukraine"
      />
      <CountrySummary
        capital="Kyiv (Київ)"
        largestCities="Kyiv (Київ), Kharkiv (Харків), Odesa (Одеса), Dnipro (Дніпро), Donetsk (Донецьк)"
        lang="Ukrainian"
        currencies="₴ UAH"
        iso="ua"
        tld="ua | .укр"
        callingCode="380"
        drivingSide="R"
      />
    </>
  );
}

export default Ukraine;
