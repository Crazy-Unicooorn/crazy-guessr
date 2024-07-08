import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ru/flagmap.png";
import coat from "../../assets/img/ru/coat.svg";

function Russia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Russia shaped flag"
        title="Russia (Россия)"
        coat={coat}
        coatAlt="Coat of Arms of Russia"
      />
      <CountrySummary
        capital="Moscow (Москва)"
        largestCities="Moscow (Москва), Saint Petersburg (Санкт-Петербург), Novosibirsk (Новосибирск), Yekaterinburg (Екатеринбург), Nizhny Novgorod (Нижний Новгород)"
        lang="Russian"
        currencies="₽ RUB"
        iso="ru"
        tld="ru | .рф"
        callingCode="7"
        drivingSide="R"
      />
    </>
  );
}

export default Russia;
