import Separator from "../../common/Separator";
import { Head, Paragraph, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import mapFR from "../../../assets/img/fr/location_map.png";
import generatePinpointableCards, { CityData } from "../../common/PinpointableCards";
// import ImageMagnifier from "../../common/ImageMagnifier";

function PinpointSousPref() {
  const prefData: CityData[] = [
    { cityName: "Belley", top: 54.675, left: 72.709 },
    { cityName: "Gex", top: 49.206, left: 75.049 },
    { cityName: "Nantua", top: 50.921, left: 72.191 },
    { cityName: "Château-Thierry", top: 23.368, left: 58.247 },
    { cityName: "Saint-Quentin", top: 15.727, left: 57.508 },
    { cityName: "Soissons", top: 20.18, left: 57.737 },
    { cityName: "Vervins", top: 15.849, left: 61.456 },
    { cityName: "Montluçon", top: 49.143, left: 53.18 },
    { cityName: "Vichy", top: 51.172, left: 58.391 },
    { cityName: "Barcelonnette", top: 67.746, left: 78.817 },
    { cityName: "Castellane", top: 72.881, left: 77.936 },
    { cityName: "Forcalquier", top: 71.817, left: 73.289 },
    { cityName: "Briançon", top: 62.897, left: 78.703 },
    { cityName: "Grasse", top: 74.685, left: 80.54 },
    { cityName: "Largentière", top: 66.251, left: 63.887 },
    { cityName: "Tournon-sur-Rhône", top: 61.265, left: 67.296 },
    { cityName: "Rethel", top: 18.955, left: 64.351 },
    { cityName: "Sedan", top: 17.124, left: 67.976 },
    { cityName: "Vouziers", top: 20.019, left: 66.463 },
    { cityName: "Pamiers", top: 79.844, left: 46.904 },
    { cityName: "Saint-Girons", top: 81.098, left: 43.961 },
    { cityName: "Bar-sur-Aube", top: 31.114, left: 66.496 },
    { cityName: "Nogent-sur-Seine", top: 28.632, left: 58.877 },
    { cityName: "Limoux", top: 80.41, left: 50.751 },
    { cityName: "Narbonne", top: 79.193, left: 55.719 },
    { cityName: "Millau", top: 70.497, left: 56.188 },
    { cityName: "Villefranche-de-Rouergue", top: 68.071, left: 49.583 },
    { cityName: "Aix-en-Provence", top: 75.926, left: 71.174 },
    { cityName: "Arles", top: 74.505, left: 66.004 },
    { cityName: "Istres", top: 76.056, left: 68.284 },
    { cityName: "Bayeux", top: 21.156, left: 32.254 },
    { cityName: "Lisieux", top: 22.423, left: 38.136 },
    { cityName: "Vire Normandie", top: 25.347, left: 31.081 },
    { cityName: "Mauriac", top: 59.82, left: 51.479 },
    { cityName: "Saint-Flour", top: 61.585, left: 56.283 },
    { cityName: "Cognac", top: 55.278, left: 34.626 },
    { cityName: "Confolens", top: 52.244, left: 40.97 },
    { cityName: "Jonzac", top: 57.651, left: 33.964 },
    { cityName: "Rochefort", top: 52.934, left: 30.589 },
    { cityName: "Saintes", top: 54.807, left: 32.693 },
    { cityName: "Saint-Jean-d'Angély", top: 52.913, left: 33.411 },
    { cityName: "Saint-Amand-Montrond", top: 45.497, left: 52.563 },
    { cityName: "Vierzon", top: 40.743, left: 49.8 },
    { cityName: "Brive-la-Gaillarde", top: 60.392, left: 46.412 },
    { cityName: "Ussel", top: 56.685, left: 51.324 },
    { cityName: "Sartène", top: 94.087, left: 93.504 },
    { cityName: "Calvi", top: 85.069, left: 92.131 },
    { cityName: "Corte", top: 87.566, left: 94.624 },
    { cityName: "Beaune", top: 42.627, left: 67.335 },
    { cityName: "Montbard", top: 36.923, left: 64.158 },
    { cityName: "Dinan", top: 28.995, left: 23.732 },
    { cityName: "Guingamp", top: 27.976, left: 16.765 },
    { cityName: "Lannion", top: 26.357, left: 14.84 },
    { cityName: "Aubusson", top: 52.799, left: 50.427 },
    { cityName: "Bergerac", top: 63.323, left: 39.759 },
    { cityName: "Nontron", top: 56.862, left: 40.897 },
    { cityName: "Sarlat-la-Canéda", top: 62.952, left: 44.409 },
    { cityName: "Montbéliard", top: 38.003, left: 79.736 },
    { cityName: "Pontarlier", top: 43.751, left: 76.929 },
    { cityName: "Die", top: 64.251, left: 70.698 },
    { cityName: "Nyons", top: 67.992, left: 69.244 },
    { cityName: "Bernay", top: 22.966, left: 40.496 },
    { cityName: "Les Andelys", top: 21.471, left: 45.643 },
    { cityName: "Châteaudun", top: 32.659, left: 45.176 },
    { cityName: "Dreux", top: 26.32, left: 45.352 },
    { cityName: "Nogent-le-Rotrou", top: 30.27, left: 41.909 },
    { cityName: "Brest", top: 29.619, left: 8.31 },
    { cityName: "Châteaulin", top: 31.46, left: 10.823 },
    { cityName: "Morlaix", top: 27.833, left: 12.482 },
    { cityName: "Alès", top: 70.217, left: 62.537 },
    { cityName: "Le Vigan", top: 71.503, left: 59.529 },
    { cityName: "Muret", top: 76.569, left: 45.1 },
    { cityName: "Saint-Gaudens", top: 79.923, left: 41.287 },
    { cityName: "Condom", top: 71.833, left: 39.066 },
    { cityName: "Mirande", top: 76.05, left: 39.267 },
    { cityName: "Arcachon", top: 65.156, left: 29.311 },
    { cityName: "Blaye", top: 60.688, left: 32.518 },
    { cityName: "Langon", top: 66.161, left: 35.13 },
    { cityName: "Lesparre-Médoc", top: 58.981, left: 30.774 },
    { cityName: "Libourne", top: 62.712, left: 35.165 },
    { cityName: "Béziers", top: 77.683, left: 57.064 },
    { cityName: "Lodève", top: 73.984, left: 57.718 },
    { cityName: "Fougères", top: 29.984, left: 29.114 },
    { cityName: "Redon", top: 36.653, left: 23.514 },
    { cityName: "Saint-Malo", top: 27.169, left: 23.994 },
    { cityName: "Issoudun", top: 43.352, left: 49.325 },
    { cityName: "La Châtre", top: 46.836, left: 49.286 },
    { cityName: "Le Blanc", top: 46.347, left: 43.435 },
    { cityName: "Chinon", top: 41.267, left: 38.245 },
    { cityName: "Loches", top: 41.632, left: 43.008 },
    { cityName: "La Tour-du-Pin", top: 56.516, left: 71.171 },
    { cityName: "Vienne", top: 56.899, left: 67.562 },
    { cityName: "Dole", top: 41.979, left: 71.454 },
    { cityName: "Saint-Claude", top: 48.693, left: 73.819 },
    { cityName: "Dax", top: 74.22, left: 30.055 },
    { cityName: "Romorantin-Lanthenay", top: 39.444, left: 47.739 },
    { cityName: "Vendôme", top: 35.307, left: 43.453 },
    { cityName: "Montbrison", top: 56.119, left: 62.438 },
    { cityName: "Roanne", top: 52.037, left: 62.456 },
    { cityName: "Brioude", top: 59.103, left: 58.128 },
    { cityName: "Yssingeaux", top: 60.545, left: 62.808 },
    { cityName: "Châteaubriant", top: 36.029, left: 27.999 },
    { cityName: "Saint-Nazaire", top: 40.251, left: 22.697 },
    { cityName: "Montargis", top: 33.362, left: 54.003 },
    { cityName: "Pithiviers", top: 31.696, left: 50.962 },
    { cityName: "Figeac", top: 65.632, left: 49.568 },
    { cityName: "Gourdon", top: 64.407, left: 45.461 },
    { cityName: "Marmande", top: 66.667, left: 37.755 },
    { cityName: "Nérac", top: 70.132, left: 38.857 },
    { cityName: "Villeneuve-sur-Lot", top: 67.553, left: 41.166 },
    { cityName: "Florac Trois Rivières", top: 68.312, left: 59.488 },
    { cityName: "Cholet", top: 42.296, left: 31.141 },
    { cityName: "Saumur", top: 40.389, left: 36.215 },
    { cityName: "Segré-en-Anjou Bleu", top: 36.312, left: 31.197 },
    { cityName: "Avranches", top: 26.815, left: 28.121 },
    { cityName: "Cherbourg-en-Cotentin", top: 17.725, left: 26.424 },
    { cityName: "Coutances", top: 23.378, left: 27.562 },
    { cityName: "Épernay", top: 23.429, left: 61.767 },
    { cityName: "Reims", top: 21.283, left: 62.206 },
    { cityName: "Vitry-le-François", top: 26.431, left: 65.724 },
    { cityName: "Langres", top: 34.643, left: 70.462 },
    { cityName: "Saint-Dizier", top: 27.259, left: 68.031 },
    { cityName: "Château-Gontier-sur-Mayenne", top: 34.966, left: 32.261 },
    { cityName: "Mayenne", top: 30.447, left: 32.825 },
    { cityName: "Lunéville", top: 27.72, left: 77.859 },
    { cityName: "Toul", top: 26.905, left: 73.998 },
    { cityName: "Val de Briey", top: 21.434, left: 74.306 },
    { cityName: "Commercy", top: 26.056, left: 72.099 },
    { cityName: "Verdun", top: 22.288, left: 70.777 },
    { cityName: "Lorient", top: 35.754, left: 15.403 },
    { cityName: "Pontivy", top: 32.68, left: 17.957 },
    { cityName: "Forbach", top: 22.019, left: 80.38 },
    { cityName: "Sarrebourg", top: 26.336, left: 81.354 },
    { cityName: "Sarreguemines", top: 22.757, left: 81.438 },
    { cityName: "Thionville", top: 20.399, left: 75.749 },
    { cityName: "Château-Chinon", top: 42.238, left: 61.61 },
    { cityName: "Clamecy", top: 38.476, left: 58.984 },
    { cityName: "Cosne-Cours-sur-Loire", top: 38.95, left: 55.222 },
    { cityName: "Avesnes-sur-Helpe", top: 13.108, left: 61.554 },
    { cityName: "Cambrai", top: 12.611, left: 57.182 },
    { cityName: "Douai", top: 10.923, left: 56.125 },
    { cityName: "Dunkerque", top: 4.402, left: 51.749 },
    { cityName: "Valenciennes", top: 11.13, left: 59.051 },
    { cityName: "Clermont", top: 20.201, left: 51.978 },
    { cityName: "Compiègne", top: 19.865, left: 54.571 },
    { cityName: "Senlis", top: 21.836, left: 53.08 },
    { cityName: "Argentan", top: 26.243, left: 36.581 },
    { cityName: "Mortagne-au-Perche", top: 28.378, left: 40.172 },
    { cityName: "Béthune", top: 9.229, left: 53.413 },
    { cityName: "Boulogne-sur-Mer", top: 7.376, left: 46.923 },
    { cityName: "Calais", top: 5.256, left: 48.458 },
    { cityName: "Lens", top: 10.177, left: 54.636 },
    { cityName: "Montreuil-sur-Mer", top: 9.859, left: 47.867 },
    { cityName: "Saint-Omer", top: 7.159, left: 51.018 },
    { cityName: "Ambert", top: 56.672, left: 60.39 },
    { cityName: "Issoire", top: 56.722, left: 57.271 },
    { cityName: "Riom", top: 53.394, left: 56.408 },
    { cityName: "Thiers", top: 53.749, left: 59.161 },
    { cityName: "Bayonne", top: 76.262, left: 27.365 },
    { cityName: "Oloron-Sainte-Marie", top: 79.103, left: 32.869 },
    { cityName: "Argelès-Gazost", top: 80.918, left: 36.092 },
    { cityName: "Bagnères-de-Bigorre", top: 80.341, left: 37.656 },
    { cityName: "Céret", top: 85.828, left: 54.123 },
    { cityName: "Prades", top: 84.598, left: 52.038 },
    { cityName: "Haguenau", top: 25.556, left: 85.999 },
    { cityName: "Molsheim", top: 28.164, left: 84.128 },
    { cityName: "Saverne", top: 26.272, left: 83.303 },
    { cityName: "Sélestat", top: 30.862, left: 83.887 },
    { cityName: "Altkirch", top: 36.923, left: 82.528 },
    { cityName: "Mulhouse", top: 35.728, left: 83.159 },
    { cityName: "Thann", top: 35.175, left: 81.674 },
    { cityName: "Villefranche-sur-Saône", top: 52.481, left: 66.581 },
    { cityName: "Lure", top: 36.352, left: 77.827 },
    { cityName: "Autun", top: 43.323, left: 63.915 },
    { cityName: "Chalon-sur-Saône", top: 44.942, left: 67.43 },
    { cityName: "Charolles", top: 48.243, left: 63.768 },
    { cityName: "Louhans", top: 46.415, left: 69.777 },
    { cityName: "La Flèche", top: 36.193, left: 36.227 },
    { cityName: "Mamers", top: 30.005, left: 39.047 },
    { cityName: "Albertville", top: 55.468, left: 77.168 },
    { cityName: "Saint-Jean-de-Maurienne", top: 59.27, left: 76.867 },
    { cityName: "Bonneville", top: 51.63, left: 77.22 },
    { cityName: "Saint-Julien-en-Genevois", top: 51.008, left: 75.216 },
    { cityName: "Thonon-les-Bains", top: 48.852, left: 77.72 },
    { cityName: "Dieppe", top: 15.032, left: 43.53 },
    { cityName: "Le Havre", top: 19.103, left: 37.393 },
    { cityName: "Fontainebleau", top: 29.439, left: 53.808 },
    { cityName: "Meaux", top: 24.196, left: 54.986 },
    { cityName: "Provins", top: 28.011, left: 57.591 },
    { cityName: "Torcy", top: 25.235, left: 53.486 },
    { cityName: "Mantes-la-Jolie", top: 23.899, left: 47.574 },
    { cityName: "Rambouillet", top: 27.204, left: 48.291 },
    { cityName: "Saint-Germain-en-Laye", top: 24.796, left: 49.94 },
    { cityName: "Bressuire", top: 44.381, left: 33.616 },
    { cityName: "Parthenay", top: 46.204, left: 35.146 },
    { cityName: "Abbeville", top: 13.283, left: 48.325 },
    { cityName: "Montdidier", top: 17.638, left: 52.975 },
    { cityName: "Péronne", top: 14.931, left: 55.294 },
    { cityName: "Castres", top: 75.183, left: 50.886 },
    { cityName: "Castelsarrasin", top: 71.048, left: 43.715 },
    { cityName: "Brignoles", top: 77.087, left: 75.074 },
    { cityName: "Draguignan", top: 75.815, left: 77.634 },
    { cityName: "Apt", top: 72.608, left: 70.863 },
    { cityName: "Carpentras", top: 70.905, left: 68.659 },
    { cityName: "Fontenay-le-Comte", top: 47.934, left: 31.605 },
    { cityName: "Les Sables-d'Olonne", top: 47.653, left: 25.413 },
    { cityName: "Châtellerault", top: 44.601, left: 40.16 },
    { cityName: "Montmorillon", top: 48.323, left: 42.22 },
    { cityName: "Bellac", top: 51.22, left: 43.351 },
    { cityName: "Rochechouart", top: 54.066, left: 41.904 },
    { cityName: "Neufchâteau", top: 29.947, left: 72.76 },
    { cityName: "Saint-Dié-des-Vosges", top: 30.627, left: 80.691 },
    { cityName: "Avallon", top: 38.19, left: 61.445 },
    { cityName: "Sens", top: 31.455, left: 57.489 },
    { cityName: "Étampes", top: 29.19, left: 50.394 },
    { cityName: "Palaiseau", top: 26.492, left: 50.948 },
    { cityName: "Antony", top: 26.159, left: 51.245 },
    { cityName: "Boulogne-Billancourt", top: 25.378, left: 50.895 },
    { cityName: "Le Raincy", top: 24.77, left: 52.678 },
    { cityName: "Saint-Denis (NOT La Réunion)", top: 24.423, left: 51.607 },
    { cityName: "L'Haÿ-les-Roses", top: 25.913, left: 51.501 },
    { cityName: "Nogent-sur-Marne", top: 25.365, left: 52.421 },
    { cityName: "Argenteuil", top: 24.307, left: 50.934 },
    { cityName: "Pontoise", top: 23.325, left: 50.005 },
    { cityName: "Sarcelles", top: 23.836, left: 51.76 },
  ];

  const cards = generatePinpointableCards(prefData, mapFR);

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Sous-préfectures</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
        {/* <MapButton url="https://www.geoguessr.com/maps/604657abb3894900011da5bc" /> */}
      </Head>
      <Paragraph>
        <b>Sous-préfectures</b> are the second level of administrative divisions in France, below the prefectures. There
        are 234 sous-préfectures in France. Although they are not necessarily the most populated cities in their
        respective départements, they are well indicated both on the map and on the street signs.
      </Paragraph>
      {/* <ImageMagnifier src={mapSousPrefs} alt="Map of France with sous-préfectures written" /> */}
    </Tip>
  );
}

export default PinpointSousPref;
