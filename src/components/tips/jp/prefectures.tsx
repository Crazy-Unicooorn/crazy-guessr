import ImageMagnifier from "../../common/ImageMagnifier";
import Separator from "../../common/Separator";
import { Card, Head, Paragraph, Tip } from "../../common/TipsBuilder";
import labelledPrefectures from "../../../assets/img/jp/prefectures/labelled_prefectures.png";
import emptyMap from "../../../assets/img/jp/prefectures/blank_map.svg";
import TrainingModal from "../../common/TrainingModal";
import hokkaido from "../../../assets/img/jp/prefectures/hokkaido.svg";
import aomori from "../../../assets/img/jp/prefectures/aomori.svg";
import iwate from "../../../assets/img/jp/prefectures/iwate.svg";
import miyagi from "../../../assets/img/jp/prefectures/miyagi.svg";
import akita from "../../../assets/img/jp/prefectures/akita.svg";
import yamagata from "../../../assets/img/jp/prefectures/yamagata.svg";
import fukushima from "../../../assets/img/jp/prefectures/fukushima.svg";
import ibaraki from "../../../assets/img/jp/prefectures/ibaraki.svg";
import tochigi from "../../../assets/img/jp/prefectures/tochigi.svg";
import gunma from "../../../assets/img/jp/prefectures/gunma.svg";
import saitama from "../../../assets/img/jp/prefectures/saitama.svg";
import chiba from "../../../assets/img/jp/prefectures/chiba.svg";
import tokyo from "../../../assets/img/jp/prefectures/tokyo.svg";
import kanagawa from "../../../assets/img/jp/prefectures/kanagawa.svg";
import niigata from "../../../assets/img/jp/prefectures/niigata.svg";
import toyama from "../../../assets/img/jp/prefectures/toyama.svg";
import ishikawa from "../../../assets/img/jp/prefectures/ishikawa.svg";
import fukui from "../../../assets/img/jp/prefectures/fukui.svg";
import yamanashi from "../../../assets/img/jp/prefectures/yamanashi.svg";
import nagano from "../../../assets/img/jp/prefectures/nagano.svg";
import gifu from "../../../assets/img/jp/prefectures/gifu.svg";
import shizuoka from "../../../assets/img/jp/prefectures/shizuoka.svg";
import aichi from "../../../assets/img/jp/prefectures/aichi.svg";
import mie from "../../../assets/img/jp/prefectures/mie.svg";
import shiga from "../../../assets/img/jp/prefectures/shiga.svg";
import kyoto from "../../../assets/img/jp/prefectures/kyoto.svg";
import osaka from "../../../assets/img/jp/prefectures/osaka.svg";
import hyogo from "../../../assets/img/jp/prefectures/hyogo.svg";
import nara from "../../../assets/img/jp/prefectures/nara.svg";
import wakayama from "../../../assets/img/jp/prefectures/wakayama.svg";
import tottori from "../../../assets/img/jp/prefectures/tottori.svg";
import shimane from "../../../assets/img/jp/prefectures/shimane.svg";
import okayama from "../../../assets/img/jp/prefectures/okayama.svg";
import hiroshima from "../../../assets/img/jp/prefectures/hiroshima.svg";
import yamaguchi from "../../../assets/img/jp/prefectures/yamaguchi.svg";
import tokushima from "../../../assets/img/jp/prefectures/tokushima.svg";
import kagawa from "../../../assets/img/jp/prefectures/kagawa.svg";
import ehime from "../../../assets/img/jp/prefectures/ehime.svg";
import kochi from "../../../assets/img/jp/prefectures/kochi.svg";
import fukuoka from "../../../assets/img/jp/prefectures/fukuoka.svg";
import saga from "../../../assets/img/jp/prefectures/saga.svg";
import nagasaki from "../../../assets/img/jp/prefectures/nagasaki.svg";
import kumamoto from "../../../assets/img/jp/prefectures/kumamoto.svg";
import oita from "../../../assets/img/jp/prefectures/oita.svg";
import miyazaki from "../../../assets/img/jp/prefectures/miyazaki.svg";
import kagoshima from "../../../assets/img/jp/prefectures/kagoshima.svg";
import okinawa from "../../../assets/img/jp/prefectures/okinawa.svg";

const styleImage = { maxHeight: "100%", minHeight: "0", borderRadius: "0.5rem" };

function createBack(prefecture: string, image: string) {
  return <img src={image} alt={`Map of ${prefecture}`} style={styleImage} />;
}

const data = [
  { front: "Hokkaidō", back: createBack("Hokkaido", hokkaido) },
  { front: "Aomori", back: createBack("Aomori", aomori) },
  { front: "Iwate", back: createBack("Iwate", iwate) },
  { front: "Miyagi", back: createBack("Miyagi", miyagi) },
  { front: "Akita", back: createBack("Akita", akita) },
  { front: "Yamagata", back: createBack("Yamagata", yamagata) },
  { front: "Fukushima", back: createBack("Fukushima", fukushima) },
  { front: "Ibaraki", back: createBack("Ibaraki", ibaraki) },
  { front: "Tochigi", back: createBack("Tochigi", tochigi) },
  { front: "Gunma", back: createBack("Gunma", gunma) },
  { front: "Saitama", back: createBack("Saitama", saitama) },
  { front: "Chiba", back: createBack("Chiba", chiba) },
  { front: "Tokyo", back: createBack("Tokyo", tokyo) },
  { front: "Kanagawa", back: createBack("Kanagawa", kanagawa) },
  { front: "Niigata", back: createBack("Niigata", niigata) },
  { front: "Toyama", back: createBack("Toyama", toyama) },
  { front: "Ishikawa", back: createBack("Ishikawa", ishikawa) },
  { front: "Fukui", back: createBack("Fukui", fukui) },
  { front: "Yamanashi", back: createBack("Yamanashi", yamanashi) },
  { front: "Nagano", back: createBack("Nagano", nagano) },
  { front: "Gifu", back: createBack("Gifu", gifu) },
  { front: "Shizuoka", back: createBack("Shizuoka", shizuoka) },
  { front: "Aichi", back: createBack("Aichi", aichi) },
  { front: "Mie", back: createBack("Mie", mie) },
  { front: "Shiga", back: createBack("Shiga", shiga) },
  { front: "Kyoto", back: createBack("Kyoto", kyoto) },
  { front: "Osaka", back: createBack("Osaka", osaka) },
  { front: "Hyōgo", back: createBack("Hyogo", hyogo) },
  { front: "Nara", back: createBack("Nara", nara) },
  { front: "Wakayama", back: createBack("Wakayama", wakayama) },
  { front: "Tottori", back: createBack("Tottori", tottori) },
  { front: "Shimane", back: createBack("Shimane", shimane) },
  { front: "Okayama", back: createBack("Okayama", okayama) },
  { front: "Hiroshima", back: createBack("Hiroshima", hiroshima) },
  { front: "Yamaguchi", back: createBack("Yamaguchi", yamaguchi) },
  { front: "Tokushima", back: createBack("Tokushima", tokushima) },
  { front: "Kagawa", back: createBack("Kagawa", kagawa) },
  { front: "Ehime", back: createBack("Ehime", ehime) },
  { front: "Kōchi", back: createBack("Kochi", kochi) },
  { front: "Fukuoka", back: createBack("Fukuoka", fukuoka) },
  { front: "Saga", back: createBack("Saga", saga) },
  { front: "Nagasaki", back: createBack("Nagasaki", nagasaki) },
  { front: "Kumamoto", back: createBack("Kumamoto", kumamoto) },
  { front: "Ōita", back: createBack("Oita", oita) },
  { front: "Miyazaki", back: createBack("Miyazaki", miyazaki) },
  { front: "Kagoshima", back: createBack("Kagoshima", kagoshima) },
  { front: "Okinawa", back: createBack("Okinawa", okinawa) },
];

function PrefecturesJP() {
  const cards: Card[] = data.map((card) => {
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
          <img src={emptyMap} alt="Map of Japan with prefectures" style={styleImage} />
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
        <h1>Prefectures</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
      </Head>
      <Paragraph>
        Japan is divided into eight regions, each comprising multiple prefectures:
        <br />
        <br />
        <li>
          <strong>Hokkaido</strong>, the northernmost region, consists solely of Hokkaido Prefecture.
        </li>
        <li>
          The <strong>Tohoku</strong> region includes <strong>6</strong> prefectures: Aomori, Iwate, Miyagi, Akita,
          Yamagata, and Fukushima.
        </li>
        <li>
          The <strong>Kanto</strong> region, encompassing Tokyo, has <strong>7</strong> prefectures: Ibaraki, Tochigi,
          Gunma, Saitama, Chiba, Tokyo, and Kanagawa.
        </li>
        <li>
          <strong>Chubu</strong>, a central region, consists of <strong>9</strong> prefectures: Niigata, Toyama,
          Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, and Aichi.
        </li>
        <li>
          The <strong>Kansai</strong> region includes <strong>7</strong> prefectures: Mie, Shiga, Kyoto, Osaka, Hyogo,
          Nara, and Wakayama.
        </li>
        <li>
          <strong>Chugoku</strong>, located to the west, has <strong>5</strong> prefectures: Tottori, Shimane, Okayama,
          Hiroshima, and Yamaguchi.
        </li>
        <li>
          <strong>Shikoku</strong>, an island region, consists of <strong>4</strong> prefectures: Tokushima, Kagawa,
          Ehime, and Kochi.
        </li>
        <li>
          Finally, the <strong>Kyushu</strong> region, which includes <strong>Okinawa</strong>, comprises{" "}
          <strong>8</strong> prefectures: Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima, and Okinawa.
        </li>
      </Paragraph>
      <ImageMagnifier
        src={labelledPrefectures}
        alt="Map of Japan with prefectures"
        style={{ backgroundColor: "var(--purple-200)" }}
      />
    </Tip>
  );
}

export default PrefecturesJP;
