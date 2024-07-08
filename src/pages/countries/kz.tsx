import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/kz/flagmap.png";
import coat from "../../assets/img/kz/coat.svg";

function Kazakhstan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Kazakhstan shaped flag"
        title="Kazakhstan (Қазақстан)"
        coat={coat}
        coatAlt="Coat of Arms of Kazakhstan"
      />
      <CountrySummary
        capital="Astana (Астана)"
        largestCities="Almaty (Алматы), Karaganda (Қарағанды), Shymkent (Шымкент), Taraz (Тараз), Astana (Астана)"
        lang="Kazakh, Russian"
        currencies="₸ KZT"
        iso="kz"
        tld="kz | .қаз"
        callingCode="7"
        drivingSide="R"
      />
    </>
  );
}

export default Kazakhstan;
