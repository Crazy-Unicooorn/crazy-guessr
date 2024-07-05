import Separator from "../../common/Separator";
import { Card, Head, MapButton, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import StateMap from "../../../assets/img/my/malaysia-map-provinces.jpg";
import ImageMagnifier from "../../common/ImageMagnifier";

import Johor from "../../../assets/img/my/StateFlags/Johor.png";
import Kedah from "../../../assets/img/my/StateFlags/Kedah.png";
import Kelantan from "../../../assets/img/my/StateFlags/Kelantan.png";
import Kuala_Lumpur from "../../../assets/img/my/StateFlags/Kuala_Lumpur.png";
import Labuan from "../../../assets/img/my/StateFlags/Labuan.png";
import Malacca from "../../../assets/img/my/StateFlags/Malacca.png";
import Negeri_Sembilan from "../../../assets/img/my/StateFlags/Negeri_Sembilan.png";
import Pahang from "../../../assets/img/my/StateFlags/Pahang.png";
import Penang from "../../../assets/img/my/StateFlags/Penang.png";
import Perak from "../../../assets/img/my/StateFlags/Perak.png";
import Perlis from "../../../assets/img/my/StateFlags/Perlis.png";
import Putrajaya from "../../../assets/img/my/StateFlags/Putrajaya.png";
import Sabah from "../../../assets/img/my/StateFlags/Sabah.png";
import Sarawak from "../../../assets/img/my/StateFlags/Sarawak.png";
import Selangor from "../../../assets/img/my/StateFlags/Selangor.png";
import Terengganu from "../../../assets/img/my/StateFlags/Terengganu.png";
import Federal_Territories from "../../../assets/img/my/StateFlags/the_Federal_Territories_of_Malaysia.png";

const myStateFlags = {
  Johor,
  Kedah,
  Kelantan,
  "Kuala Lumpur": Kuala_Lumpur,
  Labuan,
  Malacca,
  "Negeri Sembilan": Negeri_Sembilan,
  Pahang,
  Penang,
  Perak,
  Perlis,
  Putrajaya,
  Sabah,
  Sarawak,
  Selangor,
  Terengganu,
  "Federal Territories": Federal_Territories,
};

function MalaysiaStateFlags() {
  const imageStyle = { borderRadius: "0.5rem", maxHeight: "100%" };
  const imageAlt = "Flag of a state or Federal territory in Malaysia";

  const Cards: Card[] = Object.entries(myStateFlags).map(([state, path]) => ({
    front: <img src={path} alt={imageAlt} style={imageStyle} />,
    back: state,
  }));

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Flags of States and Federal Territories</h1>
        <Separator />
        <TrainingModal cards={Cards} />
        <MapButton url="https://www.geoguessr.com/maps/6339b2f6b9369bcb03114ec2" />
      </Head>
      <ImageMagnifier src={StateMap} alt="Map of Malaysian States" />
    </Tip>
  );
}

export default MalaysiaStateFlags;
