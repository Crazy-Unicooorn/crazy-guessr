import { ReactElement, useEffect, useState } from "react";
import { styled } from "styled-components";
import Recall from "./BlurRecall";

const facts = [
  // AFRICA
  <span>
    <Recall>Botswana</Recall> is the only country in southern Africa where <strong>yellow rear plates</strong> are
    predominantly found.
  </span>,
  <span>
    <Recall>Botswana</Recall> features a unique <strong>black-and-yellow striped signpost</strong>, exclusive to this
    country in Southern Africa.
  </span>,
  <span>
    In <Recall>Southern Africa</Recall>, outside road lines are <strong>yellow</strong> and center lines are{" "}
    <strong>white</strong>. This is distinct from countries like <strong>Israel</strong>, <strong>Palestine</strong>,{" "}
    <strong>Jordan</strong>, and the <strong>UAE</strong>, where yellow outside lines exist, but they drive on the
    right.
  </span>,
  <span>
    Roads labeled with &apos;<strong>MR</strong>&apos; are unique to <Recall>Eswatini</Recall>.
  </span>,
  <span>
    <Recall>Ghana</Recall> often displays patriotic colours from its national flag—<strong>red, yellow, green</strong>,
    and sometimes the <strong>black star</strong>.
  </span>,
  <span>
    {" "}
    <Recall>Kenya</Recall> uses long white front license plates, with the rear plates being{" "}
    <strong>square and yellow</strong>.{" "}
  </span>,
  <span>
    The mobile network brand <strong>Safaricom</strong> is unique to <Recall>Kenya</Recall>, with locations in almost
    every city.
  </span>,
  <span>
    <Recall>Nigeria</Recall> uses short license plates that often appear slightly <strong>green</strong> through the
    blur, reminding the colors of the national flag.
  </span>,
  <span>
    In <Recall>Nigeria</Recall>, a <strong>police car</strong> almost always follows the Street View car.
  </span>,
  <span>
    In <Recall>Rwanda</Recall>, all motorcyclists are required to wear <strong>red vests and helmets</strong>, making
    them easy to identify.
  </span>,
  <span>
    <Recall>Senegal</Recall> is the only African country with fully <strong>blue license plates</strong>, though a newer
    version in Generation 4 coverage resembles standard European plates, with white and a blue strip on the left.
  </span>,
  <span>
    As a former French colony, <strong>Senegal</strong> features French infrastructure, with <strong>French</strong> as
    the most common language.
  </span>,
  <span>
    <Recall>South Africa</Recall> has 11 official languages, including <strong>English</strong>,{" "}
    <strong>Afrikaans</strong>, and various <strong>Bantu languages</strong>; English is the most common on signage.
  </span>,
  <span>
    <strong>Afrikaans</strong>, a Germanic language related to <strong>Dutch</strong>, features common place name
    suffixes like <strong>-fontein</strong>, <strong>-kraal</strong>, <strong>-kop</strong>, <strong>-dorp</strong>,{" "}
    <strong>-nek</strong>, and <strong>-berg</strong>, indicating <Recall>South Africa</Recall> since it’s rare in
    Eswatini and Lesotho.
  </span>,
  <span>
    The most common pole in <Recall>South Africa</Recall> has 1 to 5 horizontal bars with thin white insulators,
    resembling rows of birds, hence nicknamed &quot;<strong>bird pole</strong>&quot;.
  </span>,
  <span>
    <Recall>South Africa</Recall> uses green directional signs with yellow road numbers, which are also found in{" "}
    Lesotho, Eswatini, and Botswana; however, N and R-roads are exclusive to <Recall>South Africa</Recall>.
  </span>,
  <span>
    In <Recall>Tunisia</Recall> the Google car is often escorted by a follow car in most coverage.
  </span>,
  <span>
    {" "}
    In <Recall>Tunisia</Recall>, both <strong>Arabic</strong> and <strong>French</strong> are common, often seen on
    bilingual signs.{" "}
  </span>,
  <span>
    In <Recall>Tunisia</Recall>, doors, windows, gates, and other architectural elements are often painted with a
    specific traditional shade of <strong>blue</strong>, especially common on the island of <strong>Djerba</strong>.
  </span>,
  // ASIA
  <span>
    The <strong>turquoise</strong> and black license plate is exclusive to <Recall>Bangladesh</Recall>, although it is
    not the only type of license plate used in the country.
  </span>,
  <span>
    The{" "}
    <strong>
      <Recall>Bengali</Recall> script
    </strong>
    , found in and around <Recall>Bangladesh</Recall>, features a continuous horizontal line at the top of each word. It
    is distinguishable from <strong>Devanagari</strong> by its many triangular-shaped letters.
  </span>,
  <span>
    License plates in <Recall>Bhutan</Recall> are almost always <strong>red</strong> and easily visible on vehicles,
    making it the only country in <strong>Asia</strong> that uses full red license plates.
  </span>,
  <span>
    In <strong>Bhutan</strong>, stone blocks are commonly used as safety barriers on winding rural roads, while
    guardrails are rare. A key feature for guessing.
  </span>,
  <span>
    <strong>Dzongkha</strong> is an official language in <Recall>Bhutan</Recall>, almost exclusive to it, with
    unique-looking letters. e.g. &quot;དགའ་བོད་ཀྱི་རྗེ་སྐར་&quot;.
  </span>,
  <span>Prayer flags near the road are typically seen in Bhutan.</span>,
  <span>
    Taxis in <Recall>Bhutan</Recall> feature <strong>yellow license plates</strong> and <strong>yellow roofs</strong>.
  </span>,
  <span>
    <strong>Khmer</strong> is the official language of <Recall>Cambodia</Recall> and has a unique script that is
    distinct and recognizable, with letters often featuring an intricate, curvy look. e.g.
    &quot;សូមស្វាគមន៍មកកាន់កម្ពុជា&quot;
  </span>,
  <span>
    In <Recall>Cambodia</Recall>, advertisements for the beer brands <strong>Angkor</strong>, <strong>Anchor</strong>,
    and the creatively named <strong>Cambodia Beer</strong> are quite common.
  </span>,
  <span>
    <Recall>Hong Kong</Recall> has two official languages: <strong>English</strong> and <strong>Chinese</strong>{" "}
    (primarily <strong>Cantonese</strong>), with bilingual signs featuring both scripts.
  </span>,
  <span>
    The most common utility pole in <strong>India</strong> is a concrete square pole topped with a{" "}
    <strong>trident</strong> design.
  </span>,
  <span>
    <Recall>Indonesian</Recall> license plates are black with white letters, which often appear as three white sections
    through the blur.
  </span>,
  <span>
    While <strong>Indonesian</strong> can resemble <strong>Malaysian</strong>, it is influenced by{" "}
    <strong>Dutch</strong>, whereas Malaysian is influenced by <strong>English</strong>; small spelling changes can help
    differentiate the two.
  </span>,
  <span>
    In <Recall>Indonesia</Recall>, you can see cigarette ads. Keep an eye out for illustrated graphic pictures and the
    word ‘<strong>PERINGATAN</strong>’.
  </span>,
  <span>
    <strong>Israeli</strong> license plates are yellow with a blue strip on the left.
  </span>,
  <span>
    <strong>Hebrew</strong> script is almost exclusively found in <Recall>Israel</Recall>.
  </span>,
  <span>
    In <Recall>Israel and the West Bank</Recall>, stop signs feature a painted hand instead of a word.
  </span>,
  <span>
    <Recall>Japanese</Recall> uses a mix of <strong>kanji</strong> and syllabic scripts <strong>hiragana</strong> and{" "}
    <strong>katakana</strong>. <strong>Hiragana</strong> is simpler and often has loops, like &quot;<strong>あ</strong>
    &quot;, &quot;<strong>い</strong>&quot;, and &quot;<strong>う</strong>&quot;.
  </span>,
  <span>
    In <Recall>Japan</Recall>, <strong>katakana</strong> is mainly used for loanwords and is common in commercials, with
    simpler, geometric shapes like &quot;<strong>ア</strong>&quot;, &quot;<strong>イ</strong>&quot;, and &quot;
    <strong>ウ</strong>&quot; compared to hiragana and kanji.
  </span>,
  <span>
    <Recall>Japan</Recall> typically uses simple white &quot;lollipop&quot; bollards with circular reflectors on top.
  </span>,
  <span>
    In <Recall>Japan</Recall>, prefecture roads are marked by <strong>hexagonal-shaped shields</strong>, with the
    prefecture name often written in <strong>kanji</strong> beneath the road number.
  </span>,
  <span>
    In <Recall>Kazakhstan</Recall>, license plates appear mostly white when blurred, with a small hint of light blue in
    the top left corner: the country&apos;s flag.
  </span>,
  <span>
    <Recall>Kazakhstan</Recall> uses both <strong>Cyrillic</strong> and <strong>Latin</strong> alphabets, with unique
    letters like Қ Ұ and І. <strong>Cyrillic</strong> is sometimes used monolingually, and the Latin text can resemble{" "}
    <strong>Turkish</strong>.
  </span>,
  <span>
    In <strong>Kazakhstan</strong>, street signs are typically blue and attached to buildings, often featuring intricate
    white patterns at the top and bottom, and may include QR codes.
  </span>,
  <span>
    In <strong>Kazakhstan</strong>, gas pipes are extremely common in cities.
  </span>,
  <span>
    The ornamental pattern known as{" "}
    <strong>
      <a href="https://www.dostartrips.com/journal/culture/kazakh-ornaments/" target="_blank" rel="noreferrer">
        koshkar-muiz
      </a>
    </strong>{" "}
    is commonly found in various decorations throughout <Recall>Kazakhstan</Recall>.
  </span>,
  <span>
    In <Recall>Kyrgyzstan</Recall>, license plates feature a red strip on the left. It can also be seen in{" "}
    <Recall>Albania</Recall>.
  </span>,
  <span>
    In <Recall>Lebanon</Recall>, taxi license plates are notably <strong>deep red</strong> with a blue strip on the
    left.
  </span>,
  <span>
    In <Recall>Macau</Recall>, the <strong>Portuguese</strong> language is commonly seen alongside{" "}
    <strong>Chinese</strong>, particularly on storefronts, due to its history as a Portuguese colony.
  </span>,
  <span>
    The white street signs with a blue border around the <strong>Chinese</strong> and <strong>Portuguese</strong> text
    are unique to <Recall>Macau</Recall>.
  </span>,
  <span>
    In <Recall>Macau</Recall>, gambling is legal and accounts for 50% of its GDP, leading to many extravagant casinos
    and advertisements for gambling.
  </span>,
  <span>
    In <Recall>Malaysia</Recall>, license plates are black and typically show <strong>two white sections</strong> when
    blurred.
  </span>,
  <span>
    &apos;<strong>BERHENTI</strong>&apos; stop signs and &apos;<strong>BERI LALUAN</strong>&apos; yield signs are unique
    to <Recall>Malaysia</Recall>.
  </span>,
  <span>
    <strong>Hexagonal yellow</strong> highway shields are unique to <Recall>Malaysia</Recall>.
  </span>,
  <span>
    In <Recall>Malaysia</Recall>, kilometer markers feature a unique <strong>white-and-blue</strong> color scheme, often
    displaying hexagonal shields.
  </span>,
  <span>
    In <strong>Malaysia</strong>, Chinese characters are commonly seen, in contrast to neighboring{" "}
    <strong>Indonesia</strong>.
  </span>,
  <span>
    <Recall>Mongolian</Recall> license plates are mostly white with a hint of red on the left side from the{" "}
    <strong>
      <a href="https://en.wikipedia.org/wiki/Soyombo_symbol" target="_blank" rel="noreferrer">
        Soyombo symbol
      </a>
    </strong>
    .
  </span>,
  <span>
    <Recall>Mongolia</Recall> uniquely features white bowling-pin shaped bollards with two red stripes around the top.
  </span>,
  <span>
    Unique to <Recall>Mongolia</Recall> is the &apos;ЗОГС&apos; stop sign.
  </span>,
  <span>
    White, round yurts are the traditional dwellings of nomadic families in <strong>Mongolia</strong> and are commonly
    seen.
  </span>,
  <span>
    Concrete roads are extremely common in the <strong>Philippines</strong>.
  </span>,
  <span>
    <strong>Tall, square yellow road stones</strong> are unique to the <Recall>Philippines</Recall>.
  </span>,
  <span>
    The <strong>Filipino</strong> language features many loanwords from <strong>Spanish</strong>, reflecting the
    country’s history, which can help identify the <strong>Philippines</strong>.
  </span>,
  <span>
    Although not the official language, <strong>English</strong> is widely seen on signs in{" "}
    <Recall>the Philippines</Recall>, the only major Southeast Asian country where you’re likely to encounter it.
  </span>,
  <span>
    Regular cars in <Recall>Qatar</Recall> have long white license plates with a <strong>maroon strip</strong> on the
    left, similar to the flag colors.
  </span>,
  <span>
    <strong>In Qatar</strong>, crossing signs feature a man in a{" "}
    <a href="https://en.wikipedia.org/wiki/Thawb" target="_blank" rel="noreferrer">
      <strong>thobe</strong>
    </a>
    .
  </span>,
  <span>
    <strong>Road signs</strong> in <Recall>Singapore</Recall> are unique as they always have a{" "}
    <strong>square white background</strong>.
  </span>,
  <span>
    In <strong>Singapore</strong>, warnings are often written on the road in large letters, like &apos;
    <strong>HUMP AHEAD</strong>&apos;.
  </span>,
  <span>
    <Recall>Singapore</Recall> sometimes features a unique <strong>yellow bus-leaving box</strong> with an arrow on the
    street, sized like a bus.
  </span>,
  <span>
    The <Recall>Korean</Recall> writing system (<strong>Hangul</strong>) is unique and recognizable, featuring circles
    in many letters. 한국에 오신 것을 환영합니다
  </span>,
  <span>
    In <Recall>South Korea</Recall>, utility poles almost always have black and yellow diagonal stripes near the bottom,
    which do not reach all the way down.
  </span>,
  <span>
    In <strong>South Korea</strong>, pedestrian crossings are often painted yellow and white on the road.
  </span>,
  <span>
    In <Recall>Sri Lanka</Recall>, <strong>Sinhalese</strong> is the most common language, featuring a curvy, rounded
    look. ශ්‍රී ලංකාවේ සාදරයෙන් පිළිගනිමු
  </span>,
  <span>
    In <Recall>Sri Lanka</Recall>, you can see <strong>Tamil</strong> in certain regions. It&apos;s also found in the
    Indian state of Tamil Nadu. ශ්‍රී ලංකාවේ සාදරයෙන් පිළිගනිමු
  </span>,
  <span>
    <Recall>Sri Lanka</Recall> has unique short, wide stone bollards with a tapered shape, featuring a{" "}
    <strong>black base</strong> and a <strong>white top</strong>.
  </span>,
  <span>
    In <Recall>Taiwan</Recall>, poles commonly display <strong>black and yellow diagonal-striped markings</strong> that
    extend all the way to the bottom.
  </span>,
  <span>
    In <Recall>Taiwan</Recall>, <strong>red outer lines indicating no parking</strong> are common, especially in cities,
    making them essentially unique to the country.
  </span>,
  <span>
    <Recall>Taiwan</Recall> features <strong>lollipop-shaped reflectors on guardrails</strong>, similar to designs found
    in <strong>Japan</strong>.
  </span>,
  <span>
    <strong>Signposts</strong> in <Recall>Thailand</Recall> are unique in Southeast Asia, being{" "}
    <strong>square, bulky, usually white</strong>, and often with a <strong>black bottom</strong>.
  </span>,
  <span>
    In <Recall>Thailand</Recall>, the{" "}
    <strong>
      <a href="https://en.wikipedia.org/wiki/Emblem_of_Thailand" target="_blank" rel="noreferrer">
        Garuda
      </a>
    </strong>{" "}
    can be found near road numbering.
  </span>,
  <span>
    The dotless <strong>ı</strong>, is unique to <Recall>Turkish</Recall>, distinguishing it from the dotted{" "}
    <strong>i</strong>: Havaalanı yakınında
  </span>,
  <span>
    In <Recall>Turkey</Recall>, many roads feature a grainy <strong>“salt and pepper”</strong> texture on the pavement.
  </span>,
  <span>
    Stop signs in <Recall>Turkey</Recall> feature the word &apos;<strong>DUR</strong>&apos;.
  </span>,
  <span>
    {" "}
    In <Recall>the UAE</Recall> and, more rarely, Jordan; <strong>English</strong> and <strong>Arabic</strong> are used
    together on signs.{" "}
  </span>,
  // EUROPE
  <span>
    In <Recall>Albania</Recall>, licence plates either feature blue strips on both sides or a single{" "}
    <strong>red strip</strong> on the left, which is unique in Europe.
  </span>,
  <span>
    In <Recall>Albania</Recall>, the word for street is &apos;<strong>rruga</strong>&apos;.
  </span>,
  <span>
    In <strong>Albania</strong>, cylinder-shaped water tanks are commonly seen on rooftops.
  </span>,
  <span>
    In <Recall>Andorra</Recall>, licence plates feature an <strong>orange dot</strong> on the left side (the coat of
    arms), unique within Europe.
  </span>,
  <span>
    The Catalan word for street is &apos;<strong>carrer</strong>&apos;.
  </span>,
  <span>
    Within Europe, only <Recall>Spain</Recall> and <Recall>Andorra</Recall> have pedestrian signs with{" "}
    <strong>8 stripes</strong>.
  </span>,
  <span>
    In <Recall>Austria</Recall>, some road signs are mounted with <strong>four metal clips</strong>, a detail unique
    within Central Europe.
  </span>,
  <span>
    In <Recall>Austria</Recall>, one-way traffic signs say &apos;<strong>EINBAHN</strong>&apos;, unlike in{" "}
    <Recall>Germany</Recall>, where they read &apos;<strong>Einbahnstraße</strong>&apos;.
  </span>,
  <span>
    Dry rock walls made of <strong>volcanic rocks</strong> are very common in the <Recall>Azores</Recall>.
  </span>,
  <span>
    Licence plates in <Recall>Belgium</Recall> use <strong>red text</strong> with a blue strip on the left, making them
    recognizable even through the blur.
  </span>,
  <span>
    Street name signs in <strong>Belgium</strong> often have the town or city name written.
  </span>,
  <span>
    The letter “Ъ” is only found in <Recall>Bulgarian</Recall> and <strong>Russian</strong>, but is fairly uncommon in{" "}
    <strong>Russian</strong>.
  </span>,
  <span>
    In <Recall>Bulgaria</Recall>, pedestrian signs have <strong>four stripes</strong>. Unlike other Eastern or Central
    European pedestrian signs.
  </span>,
  <span>
    <strong>Karlovačko</strong> and <strong>Ožujsko</strong> are common beer brands, with ads seen throughout{" "}
    <Recall>Croatia</Recall>.
  </span>,
  <span>
    <strong>Konzum</strong> and <strong>Plodine</strong> are supermarket chains unique to <Recall>Croatia</Recall>,
    mainly found in larger cities.
  </span>,
  <span>
    Bollards in <Recall>Czechia</Recall> and <Recall>Slovakia</Recall> are unique, featuring{" "}
    <strong>double orange reflectors</strong> on the front and a single white reflector on the back. Blue and red
    variants also exist.
  </span>,
  <span>
    <strong>Ů</strong> is unique to <Recall>Czechia</Recall>.
  </span>,
  <span>
    <strong>Ŕ</strong> is unique to <Recall>Slovakia</Recall>. Make sure not to confuse it with <strong>Ř</strong>,
    which is found in <Recall>Czechia</Recall>.
  </span>,
  <span>
    <strong>Ľ</strong> and <strong>Ĺ</strong> are unique to <Recall>Slovakia</Recall>.
  </span>,
  <span>
    In Europe, <strong>Ě</strong> is almost unique to <Recall>Czechia</Recall>.
  </span>,
  <span>
    <strong>Czechia</strong> uses <strong>arrow-shaped directional signs</strong> with a filled-in tip, making them
    recognizable from behind.
  </span>,
  <span>
    <Recall>Denmark</Recall> has unique direction signs, low to the ground and <strong>framed by pipes</strong>.
  </span>,
  <span>
    In <Recall>Denmark</Recall>, most street names end in &quot;<strong>vej</strong>&quot;, meaning &quot;street&quot;.
  </span>,
  <span>
    A <strong>circular</strong> signpost with the <strong>pipe frame bent around the sign</strong> is unique to{" "}
    <Recall>Denmark</Recall>.
  </span>,
  <span>
    Among the Baltics, only <Recall>Estonia</Recall> features the vowels <strong>Ä, Ö, Ü,</strong> and{" "}
    <strong>Õ</strong>.
  </span>,
  <span>
    The words &apos;<strong>tänav</strong>&apos; for street and &apos;<strong>tee</strong>&apos; for road are exclusive
    to <Recall>Estonia</Recall>, with &apos;<strong>tn</strong>&apos; often used as an abbreviation.
  </span>,
  <span>
    <strong>Finnish</strong> and <strong>Estonian</strong> feature many long words and <strong>double vowels</strong>.
  </span>,
  <span>
    In <Recall>Finland</Recall>, most street names end in &quot;<strong>tie</strong>&quot; or &quot;
    <strong>katu</strong>&quot; (&quot;road&quot; and &quot;street&quot;).
  </span>,
  <span>
    <Recall>Finland</Recall> is the only Nordic country where traffic signs with a red border feature a{" "}
    <strong>thin yellow stroke</strong> along the edge.
  </span>,
  <span>
    <strong>K-Market</strong> and <strong>S-Market</strong> are only found in <Recall>Finland</Recall>.{" "}
    <strong>K-Market</strong> may also appear as <strong>K-Supermarket</strong> or <strong>K-Citymarket</strong>.
  </span>,
  <span>
    The French word for street is <strong>“rue”</strong>.
  </span>,
  <span>
    The <strong>French bollard</strong> is highly recognizable: a round white post with a pointed top and a{" "}
    <strong>red</strong> or grey <strong>reflector band circling it</strong>.
  </span>,
  <span>
    Small <strong>blue rectangular plates</strong> on utility poles are unique to <Recall>France</Recall>. They are
    common on wooden and metallic poles.
  </span>,
  <span>
    Small <strong>yellow signs</strong> displaying the road number, typically starting with a <strong>“D”</strong>, are
    unique to <Recall>France</Recall> and often found on top of directional or town entry signs.
  </span>,
  <span>
    The alphabet with unique letters like Δ Ω Λ Θ and Φ is exclusive to <Recall>Greece</Recall>. You might be familiar
    with some of them, used for scientific abbreviations.
  </span>,
  <span>
    <strong>Miniature churches</strong>, placed on small pedestals, are unique to <Recall>Greece</Recall> and often
    found along its roads.
  </span>,
  <span>
    In <Recall>Greece</Recall>, the word for street is &apos;<strong>ΟΔΟΣ</strong>&apos;.
  </span>,
  <span>
    The letters <strong>Ő</strong> and <strong>Ű</strong>, with double acute accents, are unique to{" "}
    <Recall>Hungary</Recall>,
  </span>,
  <span>
    The words for street, &apos;<strong>utca</strong>&apos; and &apos;<strong>út</strong>&apos;, are unique to{" "}
    <Recall>Hungary</Recall>.
  </span>,
  <span>
    In <strong>Hungary</strong>, signs are typically bolted to the post with four bolts in a tall rectangular pattern,
    uncommon in other Eastern European countries.
  </span>,
  <span>
    <Recall>Iceland</Recall> features unique <strong>yellow bollards with a white reflector</strong>
  </span>,
  <span>
    <Recall>Iceland</Recall> is the only European country that uses{" "}
    <strong>pedestrian signs with a yellow background</strong>.
  </span>,
  <span>
    The letters <strong>Þ</strong> and <strong>þ</strong> are unique to <Recall>Iceland</Recall>.
  </span>,
  <span>
    In <strong>Ireland</strong>, it is very common to see <strong>yellow outside dashes</strong> on the roads.
  </span>,
  <span>
    In <Recall>Italy</Recall>, <strong>licence plates</strong> have <strong>blue strips</strong> on both sides. The{" "}
    <strong>front plate</strong> is also distinctly shorter, making it unique.
  </span>,
  <span>
    In <Recall>Italy</Recall> and <Recall>Albania</Recall>, bollards are <strong>triangular</strong> in shape, white
    with a <strong>black top</strong>, and feature a red front and a white rear reflector.
  </span>,
  <span>
    In Italy, you will find the municipality name at the top of &apos;no parking&apos;-signs with the text{" "}
    <strong>passo carrabile</strong>
  </span>,
  <span>
    <Recall>Isle of Man</Recall> uses white front licence plates with yellow rears, featuring a{" "}
    <strong>red strip</strong> on the left.
  </span>,
  <span>
    The word for street, &apos;<strong>iela</strong>&apos;, is unique to <Recall>Latvia</Recall>.
  </span>,
  <span>
    Among the Baltics, only <Recall>Lithuania</Recall> features the vowels <strong>Ą Ę Į Ų</strong> and the letter{" "}
    <strong>Ė</strong> with a single dot.
  </span>,
  <span>
    Road signs in <Recall>Liechtenstein</Recall> commonly have a <strong>round, grey metal border</strong> around them.
  </span>,
  <span>
    In <Recall>Lithuania</Recall>, the word for street &apos;<strong>gatvė</strong>,&apos; is almost entirely unique and
    often abbreviated as &apos;<strong>g</strong>&apos;.
  </span>,
  <span>
    <Recall>Luxembourg</Recall> has unique direction signs, <strong>completely surrounded by a frame</strong>, also seen
    on a lot of other road infrastructure.
  </span>,
];

const StyledFact = styled.div`
  display: flex;
  flex-direction: column;
  margin: -0.25rem 1rem 0;
  padding: 0 1rem;
  border-radius: 0.25rem;
  height: 3rem;
  background-color: var(--purple-700);
  color: white;
  justify-content: center;
  align-self: stretch;
  flex: 1 0 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  user-select: none;

  a {
    color: lightblue;
  }
`;

function RandomFact() {
  const [fact, setFact] = useState<ReactElement | null>(null);

  function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  }

  useEffect(() => {
    generateRandomFact();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <StyledFact onClick={generateRandomFact}>
      <p
        style={{
          margin: 0,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {fact}
      </p>
    </StyledFact>
  );
}

export default RandomFact;
