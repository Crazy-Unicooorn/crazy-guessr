import Separator from "../../common/Separator";
import { Card, Head, MapButton, Paragraph, Tip } from "../../common/TipsBuilder";
import KanjiMap from "../../../assets/img/jp/prefectures/kanji_map.svg";
import ImageMagnifier from "../../common/ImageMagnifier";
import TrainingModal from "../../common/TrainingModal";

const cards: Card[] = [
  { front: "北海道", back: "Hokkaido" },
  { front: "青森", back: "Aomori" },
  { front: "岩手", back: "Iwate" },
  { front: "宮城", back: "Miyagi" },
  { front: "秋田", back: "Akita" },
  { front: "山形", back: "Yamagata" },
  { front: "福島", back: "Fukushima" },
  { front: "茨城", back: "Ibaraki" },
  { front: "栃木", back: "Tochigi" },
  { front: "群馬", back: "Gunma" },
  { front: "埼玉", back: "Saitama" },
  { front: "千葉", back: "Chiba" },
  { front: "東京", back: "Tōkyō" },
  { front: "神奈川", back: "Kanagawa" },
  { front: "新潟", back: "Niigata" },
  { front: "富山", back: "Toyama" },
  { front: "石川", back: "Ishikawa" },
  { front: "福井", back: "Fukui" },
  { front: "山梨", back: "Yamanashi" },
  { front: "長野", back: "Nagano" },
  { front: "岐阜", back: "Gifu" },
  { front: "静岡", back: "Shizuoka" },
  { front: "愛知", back: "Aichi" },
  { front: "三重", back: "Mie" },
  { front: "滋賀", back: "Shiga" },
  { front: "京都", back: "Kyōto" },
  { front: "大阪", back: "Ōsaka" },
  { front: "兵庫", back: "Hyōgo" },
  { front: "奈良", back: "Nara" },
  { front: "和歌山", back: "Wakayama" },
  { front: "鳥取", back: "Tottori" },
  { front: "島根", back: "Shimane" },
  { front: "岡山", back: "Okayama" },
  { front: "広島", back: "Hiroshima" },
  { front: "山口", back: "Yamaguchi" },
  { front: "徳島", back: "Tokushima" },
  { front: "香川", back: "Kagawa" },
  { front: "愛媛", back: "Ehime" },
  { front: "高知", back: "Kōchi" },
  { front: "福岡", back: "Fukuoka" },
  { front: "佐賀", back: "Saga" },
  { front: "長崎", back: "Nagasaki" },
  { front: "熊本", back: "Kumamoto" },
  { front: "大分", back: "Ōita" },
  { front: "宮崎", back: "Miyazaki" },
  { front: "鹿児島", back: "Kagoshima" },
  { front: "沖縄", back: "Okinawa" },
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
      <Paragraph>
        <h3>Kanjis making up the prefectures by number of occurences</h3>
        <ul>
          <li>山 (yama) - 6</li>
          <li>島 (shima) - 5</li>
          <li>川 (kawa) - 3</li>
          <li>福 (Fuku) - 3</li>
          <li>岡 (oka) - 3</li>
          <li>京 (kyō) - 2</li>
          <li>知 (chi) - 2</li>
          <li>大 (Ō) - 2</li>
          <li>宮 (Miya) - 2</li>
          <li>崎 (saki) - 2</li>
          <li>奈 (na) - 2</li>
          <li>長 (Naga) - 2</li>
          <li>賀 (ga) - 2</li>
          <li>...</li>
        </ul>
      </Paragraph>
      <ImageMagnifier
        src={KanjiMap}
        alt="Map of Japan with prefectures written in Kanji"
        style={{ backgroundColor: "var(--purple-200)" }}
      />
    </Tip>
  );
}

export default KanjiPrefectures;
