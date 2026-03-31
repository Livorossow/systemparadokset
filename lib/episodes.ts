export type Episode = {
  number: number;
  title: string;
  description: string;
  date: string; // ISO 8601
  duration: string;
  tags?: string[];
  imageUrl?: string;
  spotifyUrl?: string;
  appleUrl?: string;
};

export const episodes: Episode[] = [
  {
    number: 1,
    title: 'Fra rampete ansatte til "er du våken"?',
    description:
      "Hans Christian Holte – om veien mellom fart og treghet i et samfunn i en rask endring.",
    date: "2025-12-18",
    duration: "1t 6m",
    tags: ["Offentlig sektor", "Ledelse", "Endring"],
  },
  {
    number: 2,
    title: "Konserverende krefter, utrente endringsmuskler og personvernbremsen",
    description:
      "Hvor ærlig kan en toppleder i offentlig sektor være – før karrieren tar en brå slutt? Mange ledere holder seg langt innenfor grensene. Da blir det lite utvikling – i et samfunn som trenger det sårt. Andre igjen har bestemt seg: de skal ikke være fiolinister i orkesteret på Titanic. De skal bygge Norge 2.0.",
    date: "2026-01-05",
    duration: "1t 5m",
    tags: ["Topplederskap", "Personvern", "Kultur"],
  },
  {
    number: 3,
    title: "Ungt hastverk og seniorbremsing i regeljungelen",
    description:
      "Forsvarssjef Eirik Kristoffersen har hastverk. Han vet at ingen vinner morgendagens krig med gårsdagens forsvar. Men regler, byråkrati, system og kultur står i veien. Så hvordan skaper han fart der treghet regjerer?",
    date: "2026-01-20",
    duration: "52 min",
    tags: ["Forsvar", "Byråkrati", "Endringsledelse"],
  },
  {
    number: 4,
    title: "Lav lønn i en hardere verden",
    description:
      "Politimester i Oslo, Ida Øystese Melbo, snakker ut. Om offentlig sektor, endring, og det å være lavtlønnet politi i en stadig tøffere verden.",
    date: "2026-02-11",
    duration: "58 min",
    tags: ["Politi", "Lønn", "Offentlig sektor"],
  },
  {
    number: 5,
    title: "Kortsiktig styring og en politiker i bagasjerommet",
    description:
      "Hva skjer når politisk styringslogikk møter langsiktige systemutfordringer? En samtale om kortsiktige insentiver, ansvarsflukt og det å sitte i bagasjerommet på egen politikk.",
    date: "2026-02-27",
    duration: "46 min",
    tags: ["Politikk", "Styring", "Insentiver"],
  },
  {
    number: 6,
    title: "Hettegenser møter dress – når fart slår kontroll",
    description:
      "Hva skjer når teknologiens fart møter et system bygget for kontroll? I denne episoden møter vi digitaliseringsminister Karianne Tung til en ærlig samtale om kunstig intelligens, offentlig sektor og tempoet som nå former samfunnet. Vi snakker om hvorfor endring går for tregt – ikke fordi vi mangler teknologi, men fordi systemene våre er bygget for noe annet. Om siloer, personvern, kultur og struktur.",
    date: "2026-03-31",
    duration: "50 min",
    tags: ["KI", "Digitalisering", "Offentlig sektor"],
    imageUrl: "/episodes/ep6.jpg",
  },
];
