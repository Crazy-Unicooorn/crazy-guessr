import Separator from "../../common/Separator";
import { Card, Head, MapButton, Tip } from "../../common/TipsBuilder";
import KanjiMap from "../../../assets/img/jp/prefectures/kanji_map.svg";
import ImageMagnifier from "../../common/ImageMagnifier";
import TrainingModal from "../../common/TrainingModal";

const cards: Card[] = [
  { front: "北海道", back: "Hokkaido" },
  { front: "青森県", back: "Aomori" },
  { front: "岩手県", back: "Iwate" },
  { front: "宮城県", back: "Miyagi" },
  { front: "秋田県", back: "Akita" },
  { front: "山形県", back: "Yamagata" },
  { front: "福島県", back: "Fukushima" },
  { front: "茨城県", back: "Ibaraki" },
  { front: "栃木県", back: "Tochigi" },
  { front: "群馬県", back: "Gunma" },
  { front: "埼玉県", back: "Saitama" },
  { front: "千葉県", back: "Chiba" },
  { front: "東京都", back: "Tokyo" },
  { front: "神奈川県", back: "Kanagawa" },
  { front: "新潟県", back: "Niigata" },
  { front: "富山県", back: "Toyama" },
  { front: "石川県", back: "Ishikawa" },
  { front: "福井県", back: "Fukui" },
  { front: "山梨県", back: "Yamanashi" },
  { front: "長野県", back: "Nagano" },
  { front: "岐阜県", back: "Gifu" },
  { front: "静岡県", back: "Shizuoka" },
  { front: "愛知県", back: "Aichi" },
  { front: "三重県", back: "Mie" },
  { front: "滋賀県", back: "Shiga" },
  { front: "京都府", back: "Kyoto" },
  { front: "大阪府", back: "Osaka" },
  { front: "兵庫県", back: "Hyogo" },
  { front: "奈良県", back: "Nara" },
  { front: "和歌山県", back: "Wakayama" },
  { front: "鳥取県", back: "Tottori" },
  { front: "島根県", back: "Shimane" },
  { front: "岡山県", back: "Okayama" },
  { front: "広島県", back: "Hiroshima" },
  { front: "山口県", back: "Yamaguchi" },
  { front: "徳島県", back: "Tokushima" },
  { front: "香川県", back: "Kagawa" },
  { front: "愛媛県", back: "Ehime" },
  { front: "高知県", back: "Kochi" },
  { front: "福岡県", back: "Fukuoka" },
  { front: "佐賀県", back: "Saga" },
  { front: "長崎県", back: "Nagasaki" },
  { front: "熊本県", back: "Kumamoto" },
  { front: "大分県", back: "Oita" },
  { front: "宮崎県", back: "Miyazaki" },
  { front: "鹿児島県", back: "Kagoshima" },
  { front: "沖縄県", back: "Okinawa" },
];

function KanjiPrefectures() {
  return (
    <Tip>
      <Head>
        <h1>Read Kanji Prefectures</h1>
        <Separator />
        <TrainingModal cards={cards} />
        <MapButton url="https://www.geoguessr.com/maps/63ed81746c30242786232048/play" />
      </Head>
      <ImageMagnifier src={KanjiMap} alt="Map of Japan with prefectures written in Kanji" />
    </Tip>
  );
}

export default KanjiPrefectures;
