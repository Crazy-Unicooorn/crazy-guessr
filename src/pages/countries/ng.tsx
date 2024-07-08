import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ng/flagmap.png";
import coat from "../../assets/img/ng/coat.svg";

function Nigeria() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Nigeria shaped flag"
        title="Nigeria"
        coat={coat}
        coatAlt="Coat of Arms of Nigeria"
      />
      <CountrySummary
        capital="Abuja"
        largestCities="Lagos, Kano, Ibadan, Kaduna, Port Harcourt"
        lang="English, Hausa, Igbo, Yoruba"
        currencies="₦ NGN"
        iso="ng"
        tld="ng"
        callingCode="234"
        drivingSide="R"
      />
    </>
  );
}

export default Nigeria;
