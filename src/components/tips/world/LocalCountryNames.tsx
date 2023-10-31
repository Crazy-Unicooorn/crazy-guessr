import Separator from "../../common/Separator";
import { Card, Head, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import nativeCountryNames from "../../../assets/img/world/native_country_names.webp";

function LocalCountryNames() {
  const localCountryNames: Card[] = [
    // Andorra: "Andorra",
    { front: "الإمارات العربيّة المتّحدة", back: "United Arab Emirates" },
    { front: "افغانستان", back: "Afghanistan" },
    { front: "Shqipëria", back: "Albania" },
    // aq: "Antarctica",
    // ar: "Argentina",
    // as: "American Samoa",
    { front: "Österreich", back: "Austria" },
    // au: "Australia",
    { front: "বাংলাদেশ", back: "Bangladesh" },
    { front: "België", back: "Belgium (Dutch)" },
    { front: "Belgique", back: "Belgium (French)" },
    { front: "Belgien", back: "Belgium (German)" },
    { front: "България", back: "Bulgaria" },
    // bm: "Bermuda",
    { front: "Wuliwya", back: "Bolivia (Aymara)" },
    { front: "Volívia", back: "Bolivia (Guarani)" },
    { front: "Buliwya", back: "Bolivia (Quechua)" },
    // br: "Brazil",
    { front: "Druk Yul", back: "Bhutan" },
    { front: "འབྲུག་ཡུལ", back: "Bhutan" },
    // bw: "Botswana",
    { front: "Беларусь", back: "Belarus" },
    // ca: "Canada",
    { front: "Suisse", back: "Switzerland (French)" },
    { front: "Schweiz", back: "Switzerland (German)" },
    { front: "Svizzera", back: "Switzerland (Italian)" },
    { front: "Svizra", back: "Switzerland (Romansh)" },
    // cl: "Chile",
    { front: "Zhōngguó", back: "China" },
    { front: "中国", back: "China" },
    // co: "Colombia",
    // cr: "Costa Rica",
    // cw: "Curaçao",
    { front: "Česko", back: "Czech Republic" },
    { front: "Deutschland", back: "Germany" },
    // dk: "Denmark",
    { front: "República Dominicana", back: "Dominican Republic" },
    // ec: "Ecuador",
    { front: "Eesti", back: "Estonia" },
    { front: "Misr", back: "Egypt" },
    { front: "مصر", back: "Egypt" },
    { front: "España", back: "Spain" },
    { front: "Espanya", back: "Spain (Catalan)" },
    { front: "Espainia", back: "Spain (Basque)" },
    { front: "Suomi", back: "Finland" },
    // fk: "Falkland Islands",
    // fo: "Faroe Islands",
    // fr: "France",
    { front: "Y Deyrnas Unedig", back: "United Kingdom (Welsh)" },
    { front: "Rìoghachd Aonaichte", back: "United Kingdom (Scottish Gaelic)" },
    { front: "Ríocht Aontaithe", back: "United Kingdom (Irish)" },
    { front: "Gaana", back: "Ghana (Akan)" },
    { front: "Gana", back: "Ghana (Ewe / Twi)" },
    // gi: "Gibraltar",
    // gl: "Greenland",
    { front: "Ελλάς", back: "Greece" },
    // gs: "South Georgia and the South Sandwich Islands",
    // gt: "Guatemala",
    // gu: "Guam",
    { front: "香港", back: "Hong Kong" },
    { front: "Hrvatska", back: "Croatia" },
    { front: "Magyarország", back: "Hungary" },
    // id: "Indonesia",
    { front: "Éire", back: "Ireland (Irish)" },
    { front: "إسرائيل", back: "Israel (Arabic)" },
    { front: "ישראל", back: "Israel (Hebrew)" },
    // im: "Isle of Man",
    { front: "ভাৰত", back: "India (Assamese)" },
    { front: "ভারত", back: "India (Bengali)" },
    { front: "ભારત", back: "India (Gujarati)" },
    { front: "भारत", back: "India (Hindi / Kannada / Malayalam / Marthi / Nepalese)" },
    { front: "ಭಾರತ", back: "India (Konkai)" },
    { front: "ഭാരതം", back: "India (Malayalam)" },
    { front: "ଭାରତ", back: "India (Oriya)" },
    { front: "ਭਾਰਤ", back: "India (Punjabi)" },
    { front: "भारतम्", back: "India (Sanskrit)" },
    { front: "பாரதம்", back: "India (Tamil)" },
    { front: "భారత దేశం", back: "India (Telugu)" },
    // io: "British Indian Ocean Territory",
    { front: "العراق", back: "Iraq" },
    { front: "Ísland", back: "Iceland" },
    { front: "Italia", back: "Italy" },
    // je: "Jersey",
    { front: "الأردن", back: "Jordan" },
    { front: "日本", back: "Japan" },
    // ke: "Kenya",
    { front: "Кыргызстан", back: "Kyrgyzstan (Kyrgyz)" },
    { front: "Киргизия", back: "Kyrgyzstan (Russian)" },
    { front: "កម្ពុជា", back: "Cambodia" },
    { front: "한국", back: "South Korea" },
    // 남한: "South Korea",
    { front: "ປະເທດລາວ", back: "Laos" },
    { front: "لبنان", back: "Lebanon (Arabic)" },
    { front: "Liban", back: "Lebanon (French)" },
    { front: "ශ්‍රී ලංකාව", back: "Sri Lanka (Sinhala)" },
    { front: "இலங்கை", back: "Sri Lanka (Tamil)" },
    // ls: "Lesotho",
    { front: "Lietuva", back: "Lithuania" },
    { front: "Lëtezebuerg", back: "Luxembourg" },
    { front: "Latvija", back: "Latvia" },
    { front: "Múnegu", back: "Monaco (Monegasque)" },
    { front: "Madagasikara", back: "Madagascar (Malagasy)" },
    { front: "Crna", back: "Montenegro" },
    { front: "Gora", back: "Montenegro" },
    { front: "Црна", back: "Montenegro" },
    { front: "Гора", back: "Montenegro" },
    { front: "Северна Македонија", back: "North Macedonia" },
    // ml: "Mali",
    { front: "Монгол Улс", back: "Mongolia" },
    // mo: "Macao",
    // mp: "Northern Mariana Islands",
    // mq: "Martinique",
    // mt: "Malta",
    { front: "Mēxihco", back: "Mexico (Nahuatl)" },
    { front: "马来西亚", back: "Malaysia (Mandarin Chinese)" },
    { front: "மலேசியா", back: "Malaysia (Tamil)" },
    // na: "Namibia",
    { front: "Nijeriya", back: "Nigeria (Hausa)" },
    { front: "Naigeria", back: "Nigeria (Igbo)" },
    { front: "Nàìjíríà", back: "Nigeria (Yoruba)" },
    { front: "Nederland", back: "Netherlands" },
    { front: "Nederlân", back: "Netherlands (Frisian)" },
    { front: "Norge", back: "Norway" },
    { front: "नेपाल", back: "Nepal" },
    { front: "Aotearoa", back: "New Zealand (Maori)" },
    // pa: "Panama",
    { front: "Piruw", back: "Peru (Aymara)" },
    { front: "Pilipinas", back: "Philippines (Filipino)" },
    { front: "پاکستان", back: "Pakistan (Urdu)" },
    { front: "Polska", back: "Poland" },
    // pm: "Saint Pierre and Miquelon",
    // pn: "Pitcairn",
    // pr: "Puerto Rico",
    // pt: "Portugal",
    { front: "قطر", back: "Qatar" },
    // re: "Reunion",
    // ro: "Romania",
    { front: "Србија", back: "Serbia" },
    { front: "Россия", back: "Russia" },
    // rw: "Rwanda",
    { front: "Sverige", back: "Sweden" },
    { front: "Singapura", back: "Singapore (Malay)" },
    { front: "新加坡", back: "Singapore (Mandarin Chinese)" },
    { front: "சிங்கப்பூர்", back: "Singapore (Tamil)" },
    { front: "Slovenija", back: "Slovenia" },
    { front: "Slovensko", back: "Slovakia" },
    // sm: "San Marino",
    { front: "Sénégal", back: "Senegal" },
    { front: "سورية", back: "Syria" },
    // sz: "Eswatini / Swaziland",
    { front: "เมืองไทย", back: "Thailand (Mueang Thai)" },
    { front: "ประเทศไทย", back: "Thailand (Prathet Thai)" },
    { front: "ราชอาณาจักรไทย", back: "Thailand (Ratcha-anachak Thai)" },
    { front: "تونس", back: "Tunisia" },
    { front: "Türkiye", back: "Turkey" },
    { front: "臺灣", back: "Taiwan (Traditional Chinese)" },
    { front: "台灣", back: "Taiwan (Simplified Chinese)" },
    // tz: "Tanzania",
    { front: "Україна", back: "Ukraine" },
    // ug: "Uganda",
    // us: "United States",
    // uy: "Uruguay",
    // vi: "U.S. Virgin Islands",
    { front: "Việt Nam", back: "Vietnam" },
    // vu: "Vanuatu",
    // xv: "Svalbard",
    { front: "Suid-Afrika", back: "South Africa (Afrikaans)" },
    { front: "iNingizimu Afrika", back: "South Africa (Zulu)" },
    { front: "uMzantsi Afrika", back: "South Africa (Xhosa)" },
    { front: "Afrika-Borwa", back: "South Africa (Northern Sotho)" },
  ];

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Local Country Names</h1>
        <Separator />
        <TrainingModal cards={localCountryNames} />
      </Head>
      <p>
        Names of countries in their own languages. Recall Training only includes names that are different than the
        English ones. If you think some information is irrelevant for GeoGuessr, or if you spot any error please report
        that on Github.
      </p>
      <img
        src={nativeCountryNames}
        alt="World map of country names in their own languages"
        loading="lazy"
        decoding="async"
        className="tipimg"
      />
    </Tip>
  );
}

export default LocalCountryNames;
