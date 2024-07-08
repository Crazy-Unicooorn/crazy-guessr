import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/za/flagmap.png";
import coat from "../../assets/img/za/coat.svg";

function SouthAfrica() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="South Africa shaped flag"
        title="South Africa (Suid-Afrika)"
        coat={coat}
        coatAlt="Coat of Arms of South Africa"
      />
      <CountrySummary
        capital="Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)"
        largestCities="Johannesburg, Durban, Cape Town, Pretoria, Port Elizabeth"
        lang="Afrikaans, English, Ndebele, Sepedi, Sesotho, Setswana, Swazi, Tshivenda, Xhosa, Xitsonga, Zulu"
        currencies="ZAR"
        iso="za"
        tld="za"
        callingCode="27"
        drivingSide="L"
      />
    </>
  );
}

export default SouthAfrica;
