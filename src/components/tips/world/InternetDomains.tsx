import { styled } from "styled-components";
import InternetDomainsImg from "../../../assets/img/world/world_countries_iso.gif";
import TrainingModal from "../../common/TrainingModal";
import Separator from "../../common/Separator";
import Button from "../../common/Button";
import LocationIcon from "../../../assets/icons/general/location";

function InternetDomainsCard() {
  interface Card {
    [key: string]: string;
  }

  const internetDomains: Card = {
    ad: "Andorra",
    ae: "United Arab Emirates",
    af: "Afghanistan",
    al: "Albania",
    aq: "Antarctica",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    bd: "Bangladesh",
    be: "Belgium",
    bg: "Bulgaria",
    bo: "Bolivia",
    br: "Brazil",
    bt: "Bhutan",
    bw: "Botswana",
    by: "Belarus",
    ca: "Canada",
    ch: "Switzerland",
    cl: "Chile",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cw: "Curaçao",
    cz: "Czech Republic",
    de: "Germany",
    dk: "Denmark",
    do: "Dominican Republic",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    es: "Spain",
    fi: "Finland",
    fk: "Falkland Islands",
    fo: "Faroe Islands",
    fr: "France",
    gb: "United Kingdom",
    uk: "United Kingdom",
    "co.uk": "United Kingdom",
    gh: "Ghana",
    gl: "Greenland",
    gr: "Greece",
    gs: "South Georgia and the South Sandwich Islands",
    gt: "Guatemala",
    hk: "Hong Kong",
    hr: "Croatia",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    io: "British Indian Ocean Territory",
    iq: "Iraq",
    is: "Iceland",
    it: "Italy",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    kr: "South Korea",
    la: "Laos",
    lb: "Lebanon",
    lk: "Sri Lanka",
    ls: "Lesotho",
    lt: "Lithuania",
    lu: "Luxembourg",
    lv: "Latvia",
    mg: "Madagascar",
    me: "Montenegro",
    mk: "North Macedonia",
    ml: "Mali",
    mn: "Mongolia",
    mo: "Macao",
    mp: "Northern Mariana Islands",
    mq: "Martinique",
    mt: "Malta",
    mx: "Mexico",
    my: "Malaysia",
    na: "Namibia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nz: "New Zealand",
    pa: "Panama",
    pe: "Peru",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pr: "Puerto Rico",
    pt: "Portugal",
    qa: "Qatar",
    re: "Reunion",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    se: "Sweden",
    si: "Slovenia",
    sk: "Slovakia",
    sn: "Senegal",
    sy: "Syria",
    sz: "Eswatini / Swaziland",
    th: "Thailand",
    tn: "Tunisia",
    tr: "Turkey",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    us: "United States",
    uy: "Uruguay",
    vi: "U.S. Virgin Islands",
    vn: "Vietnam",
    vu: "Vanuatu",
    xv: "Svalbard",
    za: "South Africa",
  };

  const keys = Object.keys(internetDomains);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomFront = keys[randomIndex];
  const randomBack = internetDomains[randomFront];

  return { randomFront, randomBack };
}

const Tip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
`;

function InternetDomains() {
  return (
    <Tip>
      <Head>
        <h1>Internet Domains</h1>
        <Separator />
        <Button
          hasLink
          externalLink="https://www.geoguessr.com/maps/604657abb3894900011da5bc"
          backgroundColor="var(--pastel-green)"
          text="GeoGuessr Map"
          hasIconRight
          iconRight={<LocationIcon size={24} />}
          collapseText
          boop={{
            y: -4,
            timing: 200,
            springConfig: { tension: 300, friction: 10 },
          }}
          // style={{ zIndex: -1 }}
        />
        <TrainingModal cardSource={InternetDomainsCard} />
      </Head>
      <img src={InternetDomainsImg} alt="World map of Internet domains" className="tipimg" />
    </Tip>
  );
}

export default InternetDomains;
