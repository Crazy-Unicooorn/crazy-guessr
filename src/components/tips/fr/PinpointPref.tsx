import Separator from "../../common/Separator";
import { Card, Head, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import mapFR from "../../../assets/img/fr/location_map.png";

interface Data {
  cityName: string;
  top: number;
  left: number;
}

interface MapProps {
  map: string;
  country: string;
}

function Map({ map, country }: MapProps) {
  return (
    <img
      src={map}
      alt={`Map of ${country}`}
      style={{
        maxHeight: "100%",
        minHeight: "0",
        maxWidth: "100%",
        minWidth: "0",
        borderRadius: "0.5rem",
      }}
    />
  );
}

function PinpointPref() {
  const prefData: Data[] = [
    { cityName: "Paris", top: 25.238, left: 51.519 },
    { cityName: "Toulouse", top: 75.196, left: 45.847 },
  ];

  function generatePinpointableCards(data: Data[]) {
    const cards: Card[] = [];

    data.forEach((d) => {
      function myFront() {
        return (
          <>
            Where is <strong>{d.cityName}</strong>?
            <Map map={mapFR} country="France" />
          </>
        );
      }

      function myBack() {
        return (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="18"
                height="18"
                style={{
                  position: "absolute",
                  top: `${d.top}%`,
                  left: `${d.left}%`,
                }}
              >
                <defs>
                  <radialGradient id="Red" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#DD3333" />
                    <stop offset="75%" stopColor="#990000" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>
                </defs>
                <circle r="6" cx="9" cy="9" fill="url(#Red)" />
              </svg>
            </div>
            <Map map={mapFR} country="France" />
          </>
        );
      }

      cards.push({
        front: myFront(),
        back: myBack(),
      });
    });
    return cards;
  }

  const cards = generatePinpointableCards(prefData);

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
