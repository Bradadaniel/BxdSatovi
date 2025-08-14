import elegantblackrose from "./img/blackrose.png";
import elegantblack from "./img/blacksimple.png";
import elegantsilver from "./img/silversimple.png";
import elegantrosegold from "./img/rosesimple.png";
import blueGenevaWatch from "./img/blueGenevaWatch.png";
import soki from "./img/soki.png";
import fashionlightblue from "./img/fashionlightblue.png";
import brownGenevaWatch from "./img/brownGenevaWatch.png";
import lightGrayDigitalWatch from "./img/lightGrayDigitalWatch.png";
import grayDigitalWatch from "./img/grayDigitalWatch.png";
import brownDigitalWatch from "./img/brownDigitalWatch.png";
import ligeSportsWatch from "./img/ligeSportsWatch.png";
import poedagarPurple from "./img/poedagarPurple.png";
import podegarRoseWomen from "./img/podegarRoseWomen.png";
import gwenlandBlue from "./img/gwenlandBlue.png";
import smartwatchblacktedial from "./img/smartwatchblacktedial.png";




const items = [
    {
    id: 0,
    image: ligeSportsWatch,
    subtitle: "LIGE Men Sports",
    price: 2190,
    model: "watch",
    caseMaterial: "Kućište od cink legure", 
    bandMaterial: "Kaiš od nerđajućeg čelika", 
    movement: "Kvarcni mehanizam",
    caseDiameter: "40mm",
    caseThickness: "8mm",
    bandWidth: "20mm",
    bandLength: "24cm",
    description:
      "Sportski LIGE ručni sat za muškarce sa nerđajućim čeličnim mesh kaišem i okruglim kućištem od cink legure. Poseduje tri kazaljke, naptár i svetleće detalje za lako čitanje u mraku. Elektronski pogon i baterijsko napajanje. Savršen za sport i svakodnevnu upotrebu.",
  },
  {
    id: 1,
    image: poedagarPurple,
    subtitle: "POEDAGAR Casual Purple",
    price: 2290,
    model: "watch",
    caseMaterial: "Kućište od legure",
    bandMaterial: "Kaiš od nerđajućeg čelika",
    movement: "Kvarcni mehanizam",
    caseDiameter: "31mm",
    caseThickness: "8mm",
    bandWidth: "16mm",
    bandLength: "20cm",
    description:
      "Modni POEDAGAR ženski ručni sat u casual stilu sa velikim kristalnim brojčanikom u svetloj ljubičastoj boji, nerđajućim čeličnim kaišem i okruglim kućištem od legure. Napajan baterijom dugmeta, vodootporan do IPX7, savršen za svakodnevno nošenje i posebne prilike.",
  },
  {
    id: 2,
    image: podegarRoseWomen,
    subtitle: "Podegar Rose Women's",
    price: 2290,
    model: "watch",
    caseMaterial: "Kućište od cink legure", 
    bandMaterial: "Kaiš od nerđajućeg čelika",
    movement: "Kvarcni mehanizam", 
    caseDiameter: "29mm",  
    caseThickness: "8mm",   
    bandWidth: "16mm",   
    bandLength: "20cm",   
    description:
      "Elegantni ženski ručni sat u rose boji, sa casual stilom, okruglim kućištem od cink legure i kaišem od nerđajućeg čelika. Opremljen je kvarcnim mehanizmom i otporan na udarce. Savršen za svakodnevno nošenje i posebne prilike, moderan i sofisticiran dizajn.",
  },
  {
    id: 3,
    image: elegantblackrose, 
    subtitle: "Elegant Black Rose Gold",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od legure", 
    bandMaterial: "Kaiš od cink legure", 
    movement: "Japanski kvarcni mehanizam", 
    caseDiameter: "40mm",
    caseThickness: "9mm",
    bandWidth: "18mm",
    bandLength: "23cm",
    description:
      "Elegantni minimalistički ručni sat sa velikim brojčanikom i mrežastim kaišem. Savršen za muškarce i žene, za svakodnevno nošenje ili posebne prilike. Jednostavan, a moderan dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 4,
    image: elegantsilver, 
    subtitle: "Elegant Silver",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od legure", 
    bandMaterial: "Kaiš od cink legure", 
    movement: "Japanski kvarcni mehanizam", 
    caseDiameter: "40mm",
    caseThickness: "9mm",
    bandWidth: "18mm",
    bandLength: "23cm",
    description:
      "Elegantni minimalistički ručni sat sa velikim brojčanikom i mrežastim kaišem. Savršen za muškarce i žene, za svakodnevno nošenje ili posebne prilike. Jednostavan, a moderan dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 5,
    image: elegantblack, 
    subtitle: "Elegant Black",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od legure", 
    bandMaterial: "Kaiš od cink legure", 
    movement: "Japanski kvarcni mehanizam", 
    caseDiameter: "40mm",
    caseThickness: "9mm",
    bandWidth: "18mm",
    bandLength: "23cm",
    description:
      "Elegantni minimalistički ručni sat sa velikim brojčanikom i mrežastim kaišem. Savršen za muškarce i žene, za svakodnevno nošenje ili posebne prilike. Jednostavan, a moderan dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 6,
    image: elegantrosegold, 
    subtitle: "Elegant Rose Gold",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od legure", 
    bandMaterial: "Kaiš od cink legure", 
    movement: "Japanski kvarcni mehanizam", 
    caseDiameter: "40mm",
    caseThickness: "9mm",
    bandWidth: "18mm",
    bandLength: "23cm",
    description:
      "Elegantni minimalistički ručni sat sa velikim brojčanikom i mrežastim kaišem. Savršen za muškarce i žene, za svakodnevno nošenje ili posebne prilike. Jednostavan, a moderan dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 7,
    image: fashionlightblue, 
    subtitle: "Fashion Light Blue",
    price: 790, 
    model: "watch",
    caseMaterial: "Kućište od legure", 
    bandMaterial: "Kaiš od silikona", 
    movement: "Kvarcni mehanizam",
    caseDiameter: "40mm",
    caseThickness: "8mm",
    bandWidth: "20mm",
    bandLength: "22cm",
    description:
      "Moderan i elegantan ručni sat za muškarce i žene sa velikim brojčanikom i svetloplavim silikonskim kaišem. Savršen za svakodnevno nošenje, modne prilike i poklone. Jednostavan, ali sofisticiran dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 8,
    image: blueGenevaWatch, 
    subtitle: "Blue Geneva",
    price: 790,
    model: "watch",
    caseMaterial: "Kućište od plastike", 
    bandMaterial: "Kaiš od gume",
    movement: "Elektronski kvarcni mehanizam",
    caseDiameter: "39mm",
    caseThickness: "9mm",
    bandWidth: "13mm",
    bandLength: "20cm",
    description:
      "Moderan muški ručni sat sa okruglim brojčanikom i plavim gumiranim kaišem. Poseduje plastično kućište i elektronski kvarcni mehanizam. Savršen za svakodnevno nošenje i modne prilike, jednostavan, ali atraktivan dizajn.",
  },
  {
    id: 9,
    image: brownGenevaWatch,
    subtitle: "Brown Geneva",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od legure",
    bandMaterial: "Kaiš od PU kože",
    movement: "Kvarcni mehanizam",
    caseDiameter: "43mm",
    caseThickness: "9mm",
    bandWidth: "20mm",
    bandLength: "25.7cm",
    description:
      "Moderan i elegantan ručni sat pogodan za muškarce i žene. Poseduje crni brojčanik i smeđi kaiš od PU kože, kućište od legure i kvarcni mehanizam. Savršen za svakodnevno nošenje, modne prilike i poklone. Jednostavan, a sofisticiran dizajn koji se lako uklapa uz svaki outfit.",
  },
  {
    id: 10,
    image: soki, 
    subtitle: "SOKI Quartz",
    price: 990,
    model: "watch",
    caseMaterial: "Kućište od cink legure",
    bandMaterial: "Kaiš od veštačke kože",
    movement: "Kvarcni mehanizam", 
    caseDiameter: "42mm",  
    caseThickness: "10mm", 
    bandWidth: "20mm",   
    bandLength: "23.5cm",  
    description:
      "Elegantni i moderni SOKI Quartz ručni sat za muškarce i žene. Poseduje crni brojčanik sa zlatnim rimskim brojevima, smeđi kaiš od veštačke kože i kvarcni mehanizam. Savršen je za svakodnevno nošenje, poklone, mature i posebne prilike. Dolazi u poklon kutiji, nije vodootporan i koristi bateriju koja se ne puni.",
  },
  {
    id: 11,
    image: lightGrayDigitalWatch,
    subtitle: "Light Gray Digital",
    price: 590,
    model: "digital-watch",
    caseMaterial: "Kućište od plastike",
    bandMaterial: "Kaiš od silikona",
    movement: "Digitalni mehanizam",
    caseDiameter: "31mm",
    caseThickness: "9mm",
    bandWidth: "14mm",
    bandLength: "20cm",
    description:
      "Slatki unisex digitalni ručni sat sa velikim LED displejem za vreme i datum, sa printom jabuke. Poseduje glatko staklo i silikon kaiš, pogodan za svakodnevno nošenje, sport i kao poklon za parove. Jednostavan, moderan i funkcionalan dizajn.",
  },
  {
    id: 12,
    image: grayDigitalWatch,
    subtitle: "Gray Digital",
    price: 590,
    model: "digital-watch",
    caseMaterial: "Kućište od plastike",
    bandMaterial: "Kaiš od silikona",
    movement: "Digitalni mehanizam",
    caseDiameter: "31mm",
    caseThickness: "9mm",
    bandWidth: "14mm",
    bandLength: "20cm",
    description:
      "Moderan unisex digitalni ručni sat sa LED displejem, glatkim staklom i sivim silikon kaišem. Idealno za svakodnevnu upotrebu, sport i poklone za parove. Funkcionalan i sladak dizajn koji se lako uklapa u svaki stil.",
  },
  {
    id: 13,
    image: brownDigitalWatch,
    subtitle: "Brown Digital",
    price: 590,
    model: "digital-watch",
    caseMaterial: "Kućište od plastike",
    bandMaterial: "Kaiš od silikona",
    movement: "Digitalni mehanizam",
    caseDiameter: "31mm",
    caseThickness: "9mm",
    bandWidth: "14mm",
    bandLength: "20cm",
    description:
      "Slatki unisex digitalni ručni sat sa LED displejem, glatkim staklom i braon silikon kaišem. Savršen za svakodnevno nošenje, sport i poklone za parove. Jednostavan, moderan i funkcionalan dizajn.",
  },
  {
  id: 14,
  image: gwenlandBlue,
  subtitle: "GWENLAND Blue",
  price: 2690,
  model: "smart-watch",
  caseMaterial: "Kućište od plastike",
  bandMaterial: "Kaiš od silikona",
  movement: "Digitalni mehanizam",
  caseDiameter: "47.5mm",
  caseThickness: "10.5mm",
  bandWidth: "22mm",
  bandLength: "26cm",
  description:
    "GWENLAND plavi pametni sat sa okruglim ekranom, digitalnim prikazom i kapacitetom baterije 230mAh. Vodootporan IP68, podržava režime trčanja, biciklizma i planinarenja, prikaz poziva, pedometar, kalkulator, tajmer, alarm, praćenje aktivnosti, BPM, vremenska prognoza, motion track i shake shoot funkcije. Ekran IPS, rezolucija 240p, odnos ekrana 90%, procesor JL7012A. Napaja se USB punjenjem, baterija litijum-polimer punjiva. Pogodan za korisnike od 18+ godina. Izdržljiv i inteligentan dizajn, idealan za svakodnevne i sportske aktivnosti.",
},
{
  id: 15,
  image: smartwatchblacktedial,
  subtitle: "Black Tedial",
  price: 1990,
  model: "smart-watch",
  caseMaterial: "Plastično kućište",
  bandMaterial: "Silikonski kaiš",
  movement: "Pametni sat",
  caseDiameter: "46mm",
  caseThickness: "12.5mm",
  bandWidth: "2.2cm",
  bandLength: "26cm",
  description:
    "Pametni sportski sat za muškarce i žene sa bežičnim pozivima i biranjem. Poseduje višemodni sportski režim, praćenje fitnes aktivnosti i kompatibilan je sa iPhone i Android uređajima. Dolazi sa litijum-polimer baterijom od 230 mAh, okruglim kućištem i silikonskim kaišem, idealan za sport i svakodnevnu upotrebu.",
}


];

export default items;