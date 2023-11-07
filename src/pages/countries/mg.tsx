import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mg/flagmap.png";
import coat from "../../assets/img/mg/coat.svg";

function Madagascar() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Madagascar shaped flag"
        title="Madagascar (Repoblikan'i Madagasikara)"
        coat={coat}
        coatAlt="Coat of Arms of Madagascar"
      />
      <CountrySummary
        capital="Antananarivo"
        largestCities="Antananarivo, Toamasina, Antsirabe, Fianarantsoa, Mahajanga"
        lang="Malagasy, French"
        currencies="Ar MGA"
        iso="mg"
        tld="mg"
        callingCode="261"
        drivingSide="R"
      />
    </>
  );
}

export default Madagascar;
