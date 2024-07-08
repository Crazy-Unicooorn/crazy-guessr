import Separator from "../../common/Separator";
import { Tip, Head, Card } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import image from "../../../assets/img/ca/Political_map_of_Canada.png";
import image2 from "../../../assets/img/ca/caWorldAtlas.jpg";
import ImageMagnifier from "../../common/ImageMagnifier";
import emptyMap from "../../../assets/img/ca/ProvinceAndTerritory/empty.png";
import alberta from "../../../assets/img/ca/ProvinceAndTerritory/alberta.png";
import bColumbia from "../../../assets/img/ca/ProvinceAndTerritory/british_columbia.png";
import manitoba from "../../../assets/img/ca/ProvinceAndTerritory/manitoba.png";
import nBrunswick from "../../../assets/img/ca/ProvinceAndTerritory/new_brunswick.png";
import nFoundland from "../../../assets/img/ca/ProvinceAndTerritory/newfoundland_and_labrador.png";
import novaScotia from "../../../assets/img/ca/ProvinceAndTerritory/nova_scotia.png";
import ontario from "../../../assets/img/ca/ProvinceAndTerritory/ontario.png";
import pei from "../../../assets/img/ca/ProvinceAndTerritory/PEI.png";
import quebec from "../../../assets/img/ca/ProvinceAndTerritory/québec.png";
import saskatchewan from "../../../assets/img/ca/ProvinceAndTerritory/saskatchewan.png";
import nTerritories from "../../../assets/img/ca/ProvinceAndTerritory/northwest_territories.png";
import nunavut from "../../../assets/img/ca/ProvinceAndTerritory/nunavut.png";
import yukon from "../../../assets/img/ca/ProvinceAndTerritory/yukon.png";

function ProvinceAndTerritoryName() {
  const styleImage = { maxHeight: "100%", minHeight: "0", borderRadius: "0.5rem" };
  const alt = "Map of Canada with one province or territory highlighted";

  const unstandardizedCards: Card[] = [
    {
      front: "Alberta",
      back: <img src={alberta} alt={alt} style={styleImage} />,
    },
    {
      front: "British Columbia",
      back: <img src={bColumbia} alt={alt} style={styleImage} />,
    },
    {
      front: "Manitoba",
      back: <img src={manitoba} alt={alt} style={styleImage} />,
    },
    {
      front: "New Brunswick",
      back: <img src={nBrunswick} alt={alt} style={styleImage} />,
    },
    {
      front: "Newfoundland and Labrador",
      back: <img src={nFoundland} alt={alt} style={styleImage} />,
    },
    {
      front: "Nova Scotia",
      back: <img src={novaScotia} alt={alt} style={styleImage} />,
    },
    {
      front: "Ontario",
      back: <img src={ontario} alt={alt} style={styleImage} />,
    },
    {
      front: "Prince Edward Island",
      back: <img src={pei} alt={alt} style={styleImage} />,
    },
    {
      front: "Quebec",
      back: <img src={quebec} alt={alt} style={styleImage} />,
    },
    {
      front: "Saskatchewan",
      back: <img src={saskatchewan} alt={alt} style={styleImage} />,
    },
    {
      front: "Northwest Territories",
      back: <img src={nTerritories} alt={alt} style={styleImage} />,
    },
    {
      front: "Nunavut",
      back: <img src={nunavut} alt={alt} style={styleImage} />,
    },
    {
      front: "Yukon",
      back: <img src={yukon} alt={alt} style={styleImage} />,
    },
  ];

  const cards: Card[] = unstandardizedCards.map((card) => {
    return {
      front: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={emptyMap} alt="Map of Canada with provinces and territories" style={styleImage} />
          Where is {card.front}?
        </div>
      ),
      back: (
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {card.back}
        </div>
      ),
    };
  });

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Provinces and Territories</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
      </Head>
      <ImageMagnifier
        src={image}
        alt="Map of Canada with provinces and territories"
        style={{ backgroundColor: "var(--pastel-yellow)", maxWidth: "1000px" }}
      />
      <ImageMagnifier src={image2} alt="Map of Canada with provinces and territories" />
    </Tip>
  );
}

export default ProvinceAndTerritoryName;
