import Separator from "../../common/Separator";
import { Head, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import mapFR from "../../../assets/img/fr/location_map.png";
import generatePinpointableCards, { CityData } from "../../common/PinpointableCards";

function PinpointPref() {
  const prefData: CityData[] = [
    { cityName: "Paris", top: 25.238, left: 51.519 },
    { cityName: "Toulouse", top: 75.196, left: 45.847 },
  ];

  const cards = generatePinpointableCards(prefData, mapFR);

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Préfectures</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
        {/* <MapButton url="https://www.geoguessr.com/maps/604657abb3894900011da5bc" /> */}
      </Head>
      {/* <ImageMagnifier src={InternetDomainsImg} alt="World map of Internet domains" /> */}
    </Tip>
  );
}

export default PinpointPref;
