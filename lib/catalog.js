// Product catalogue for the category pages (/[lang]/products/[slug]/).
// Category pages exist in English and German only (Germany is the priority market).
// Product names come from the live range on trafikgerecleri.com; only state facts that are
// in the product name (size, material) or confirmed by the business (see CLAUDE.md).
// Images live in /public/products and were taken from trafikgerecleri.com with permission.

export const CATEGORIES = [
  {
    slug: 'delineators',
    image: 'delineator-75-tpu',
    en: {
      name: 'Flexible Delineator Posts',
      short: 'Flexible lane delineators in 45 and 75 cm, TPU and economy TPE versions.',
      title: 'Flexible Delineator Posts — 45 & 75 cm TPU / TPE | FM Traffic',
      desc: 'Flexible lane delineator posts in 45 and 75 cm, TPU and economy TPE versions, with reflective bands and fixing kits. CE-certified range, OEM / private label, EXW Türkiye.',
      intro: 'Flexible delineator posts separate lanes, protect cycle paths and guide traffic at junctions, car parks and work zones. The flexible body bends when driven over and returns to its upright position.',
    },
    de: {
      name: 'Flexible Leitpfosten',
      short: 'Flexible Leitpfosten (Delineatoren) in 45 und 75 cm, aus TPU oder als TPE-Sparversion.',
      title: 'Flexible Leitpfosten — 45 & 75 cm, TPU / TPE | FM Traffic',
      desc: 'Flexible Leitpfosten (Delineatoren) in 45 und 75 cm, aus TPU oder als TPE-Sparversion, mit Reflexstreifen und Befestigungsset. CE-zertifiziert, OEM / Private Label, EXW Türkei.',
      intro: 'Flexible Leitpfosten trennen Fahrstreifen, schützen Radwege und leiten den Verkehr an Kreuzungen, auf Parkplätzen und in Baustellen. Der flexible Körper gibt beim Überfahren nach und richtet sich danach wieder auf.',
    },
    products: [
      { image: 'delineator-75-tpu', en: '75 cm flexible lane delineator (TPU)', de: 'Flexibler Leitpfosten 75 cm (TPU)' },
      { image: 'delineator-45-tpu', en: '45 cm flexible lane delineator (TPU)', de: 'Flexibler Leitpfosten 45 cm (TPU)' },
      { image: 'delineator-75-flexible', en: '75 cm flexible lane delineator', de: 'Flexibler Leitpfosten 75 cm' },
      { en: 'Economy flexible delineators, 45 and 75 cm (TPE)', de: 'Flexible Spar-Leitpfosten, 45 und 75 cm (TPE)' },
    ],
  },
  {
    slug: 'traffic-cones',
    image: 'cone-weighted-base',
    en: {
      name: 'Traffic Cones',
      short: 'Weighted-base cones, economy cones and cones with reflectors.',
      title: 'Traffic Cones — Weighted Base & Reflective | FM Traffic',
      desc: 'Traffic cones for road works, car parks and events: weighted-base cones, 50 cm economy cones and cones with reflectors. CE-certified range, OEM / private label, EXW Türkiye.',
      intro: 'Traffic cones mark work zones, close lanes and guide drivers and pedestrians. Weighted bases keep cones standing in wind and passing traffic; reflective bands make them visible at night.',
    },
    de: {
      name: 'Leitkegel',
      short: 'Leitkegel mit beschwertem Fuß, Spar-Leitkegel und Kegel mit Reflektoren.',
      title: 'Leitkegel / Verkehrskegel — mit beschwertem Fuß & reflektierend | FM Traffic',
      desc: 'Leitkegel für Baustellen, Parkplätze und Veranstaltungen: mit beschwertem Fuß, 50-cm-Sparkegel und Kegel mit Reflektoren. CE-zertifiziert, OEM / Private Label, EXW Türkei.',
      intro: 'Leitkegel sichern Baustellen, sperren Fahrstreifen und leiten Fahrzeuge und Fußgänger. Ein beschwerter Fuß hält den Kegel bei Wind und vorbeifahrendem Verkehr stabil; Reflexstreifen sorgen für Sichtbarkeit bei Nacht.',
    },
    products: [
      { image: 'cone-weighted-base', en: 'Traffic cone with weighted base', de: 'Leitkegel mit beschwertem Fuß' },
      { image: 'cone-50-economy', en: '50 cm traffic cone (economy)', de: 'Leitkegel 50 cm (Sparversion)' },
      { image: 'cone-reflector', en: 'Traffic cone with reflectors', de: 'Leitkegel mit Reflektoren' },
    ],
  },
  {
    slug: 'speed-bumps',
    image: 'speed-bump-rubber',
    en: {
      name: 'Speed Bumps',
      short: 'Modular rubber, plastic and metal speed bumps, plus cable protectors.',
      title: 'Speed Bumps — Rubber, Plastic & Metal | FM Traffic',
      desc: 'Modular rubber, plastic and metal speed bumps with reflective inserts for car parks, private roads and industrial sites. Cable protectors available. CE-certified range, EXW Türkiye.',
      intro: 'Speed bumps slow vehicles down at car park entrances, private roads, logistics yards and pedestrian crossings. Modular systems are bolted together to fit any road width, with end caps for a clean finish.',
    },
    de: {
      name: 'Bodenschwellen',
      short: 'Modulare Bodenschwellen aus Gummi, Kunststoff und Metall sowie Kabelschutzbrücken.',
      title: 'Bodenschwellen / Temposchwellen — Gummi, Kunststoff & Metall | FM Traffic',
      desc: 'Modulare Bodenschwellen aus Gummi, Kunststoff und Metall mit Reflektoren für Parkplätze, Privatstraßen und Betriebsgelände. Kabelschutzbrücken lieferbar. CE-zertifiziert, EXW Türkei.',
      intro: 'Bodenschwellen reduzieren die Geschwindigkeit an Parkplatzeinfahrten, auf Privatstraßen, Logistikflächen und an Fußgängerüberwegen. Modulare Systeme werden auf jede Fahrbahnbreite zusammengesetzt und mit Endstücken abgeschlossen.',
    },
    products: [
      { image: 'speed-bump-rubber', en: 'Rubber speed bump modules', de: 'Bodenschwellen-Module aus Gummi' },
      { image: 'speed-bump-plastic', en: 'Plastic speed bump modules', de: 'Bodenschwellen-Module aus Kunststoff' },
      { image: 'speed-bump-metal', en: 'Metal speed bump', de: 'Bodenschwelle aus Metall' },
      { en: 'Cable protector ramps', de: 'Kabelschutzbrücken' },
    ],
  },
  {
    slug: 'barriers',
    image: 'water-barrier-50x80x120',
    en: {
      name: 'Barriers',
      short: 'Water-fillable plastic road barriers, traffic island barriers and flood barriers.',
      title: 'Water-Filled Plastic Road Barriers & Island Barriers | FM Traffic',
      desc: 'Water-fillable New Jersey profile plastic road barriers (50×50×120, 50×50×150, 50×80×120 cm), traffic island barriers with optional solar flasher, flood barriers. EXW Türkiye.',
      intro: 'Plastic road barriers are filled with water or sand on site to close off work zones, events and lanes. They are light to transport when empty and interlock into a continuous line. They are for guidance and separation, not crash-rated vehicle restraint.',
    },
    de: {
      name: 'Absperrungen',
      short: 'Wasserbefüllbare Kunststoff-Leitwände, Absperrungen für Verkehrsinseln und Hochwasserbarrieren.',
      title: 'Wasserbefüllbare Kunststoff-Leitwände & Absperrungen | FM Traffic',
      desc: 'Wasserbefüllbare Kunststoff-Leitwände im New-Jersey-Profil (50×50×120, 50×50×150, 50×80×120 cm), Absperrungen für Verkehrsinseln mit optionaler Solar-Blitzleuchte, Hochwasserbarrieren. EXW Türkei.',
      intro: 'Kunststoff-Leitwände werden vor Ort mit Wasser oder Sand befüllt und sperren Baustellen, Veranstaltungsflächen und Fahrstreifen ab. Leer sind sie leicht zu transportieren und lassen sich zu einer durchgehenden Linie verbinden. Sie dienen der Leitung und Abtrennung, nicht als geprüftes Fahrzeug-Rückhaltesystem.',
    },
    products: [
      { image: 'water-barrier-50x80x120', en: 'Water-fillable road barrier, New Jersey profile, 50×80×120 cm', de: 'Wasserbefüllbare Leitwand, New-Jersey-Profil, 50×80×120 cm' },
      { image: 'water-barrier-50x50x120', en: 'Water-fillable road barrier, New Jersey profile, 50×50×120 / 50×50×150 cm', de: 'Wasserbefüllbare Leitwand, New-Jersey-Profil, 50×50×120 / 50×50×150 cm' },
      { image: 'island-barrier-120-solar', en: 'Traffic island barrier 120 cm with solar flasher (also 80 cm)', de: 'Absperrung für Verkehrsinseln 120 cm mit Solar-Blitzleuchte (auch 80 cm)' },
      { en: 'Flood barriers for doors and garage entrances', de: 'Hochwasserbarrieren für Türen und Garageneinfahrten' },
    ],
  },
  {
    slug: 'line-marking',
    image: 'glass-beads-25kg',
    en: {
      name: 'Line Marking',
      short: 'Road-marking spray paint, applicators, marking machines and glass beads.',
      title: 'Road Line Marking Paint, Machines & Glass Beads | FM Traffic',
      desc: 'Road-marking spray paint (500 and 750 ml, 6-packs), spray applicators, line-marking machines and reflective glass beads (25 kg). CE-certified range, EXW Türkiye.',
      intro: 'Line-marking products for car parks, warehouses, sports grounds and road repairs. Glass beads are dropped onto fresh paint to make lines reflective at night.',
    },
    de: {
      name: 'Fahrbahn\u00admarkierung',
      short: 'Markierungs-Sprühfarbe, Applikatoren, Markierungsmaschinen und Glasperlen.',
      title: 'Fahrbahnmarkierung: Markierfarbe, Maschinen & Glasperlen | FM Traffic',
      desc: 'Markierungs-Sprühfarbe (500 und 750 ml, 6er-Pack), Sprühapplikatoren, Markierungsmaschinen und reflektierende Glasperlen (25 kg). CE-zertifiziert, EXW Türkei.',
      intro: 'Markierungsprodukte für Parkplätze, Lagerhallen, Sportanlagen und Straßenausbesserungen. Glasperlen werden auf die frische Farbe gestreut und machen die Linien nachts reflektierend.',
    },
    products: [
      { image: 'glass-beads-25kg', en: 'Reflective glass beads, 25 kg', de: 'Reflektierende Glasperlen, 25 kg' },
      { en: 'Road-marking spray paint, 500 and 750 ml (6-packs)', de: 'Markierungs-Sprühfarbe, 500 und 750 ml (6er-Pack)' },
      { en: 'Spray can applicator', de: 'Applikator für Sprühdosen' },
      { en: 'Line-marking machines', de: 'Markierungs\u00admaschinen' },
    ],
  },
  {
    slug: 'warning-lights',
    image: 'solar-flasher-triangle',
    en: {
      name: 'Warning Lights',
      short: 'Solar LED flashers for cones and barriers, beacons and light bars for vehicles.',
      title: 'Solar LED Warning Lights, Flashers & Beacons | FM Traffic',
      desc: 'Solar LED warning flashers (round and triangular, amber and red) for cones, barriers and signs, plus beacons and light bars for vehicles. CE-certified range, EXW Türkiye.',
      intro: 'Solar LED flashers charge during the day and flash automatically in the dark, so they need no cabling on road works and temporary sites. Vehicle beacons and light bars are available for service and works vehicles.',
    },
    de: {
      name: 'Warnleuchten',
      short: 'Solar-LED-Blitzleuchten für Kegel und Absperrungen sowie Rundumleuchten und Lichtbalken für Fahrzeuge.',
      title: 'Solar-LED-Warnleuchten, Blitzleuchten & Rundumleuchten | FM Traffic',
      desc: 'Solar-LED-Blitzleuchten (rund und dreieckig, gelb und rot) für Leitkegel, Absperrungen und Schilder sowie Rundumleuchten und Lichtbalken für Fahrzeuge. CE-zertifiziert, EXW Türkei.',
      intro: 'Solar-LED-Blitzleuchten laden sich tagsüber auf und blinken bei Dunkelheit automatisch – ohne Verkabelung auf Baustellen und temporären Flächen. Für Service- und Baustellenfahrzeuge sind Rundumleuchten und Lichtbalken lieferbar.',
    },
    products: [
      { image: 'solar-flasher-triangle', en: 'Triangular solar LED flasher (amber / red)', de: 'Dreieckige Solar-LED-Blitzleuchte (gelb / rot)' },
      { image: 'solar-flasher-round', en: 'Round solar LED flasher (amber / red)', de: 'Runde Solar-LED-Blitzleuchte (gelb / rot)' },
      { en: 'Vehicle beacons and light bars', de: 'Rundumleuchten und Lichtbalken für Fahrzeuge' },
    ],
  },
  {
    slug: 'parking',
    image: 'parking-barrier-lockable',
    en: {
      name: 'Parking Barriers & Bollards',
      short: 'Lockable fold-down parking barriers and posts, steel bollards.',
      title: 'Lockable Parking Barriers, Parking Posts & Steel Bollards | FM Traffic',
      desc: 'Lockable fold-down parking barriers (padlock or built-in lock), lockable parking posts (8×8 cm) and steel bollards for private parking spaces and building entrances. EXW Türkiye.',
      intro: 'Parking barriers reserve private parking spaces: unlock and fold them down to park, raise and lock them when you leave. Steel bollards keep vehicles away from entrances, shop fronts and pedestrian areas.',
    },
    de: {
      name: 'Parkplatzsperren & Poller',
      short: 'Abschließbare, umlegbare Parkplatzsperren und Parkpfosten, Stahlpoller.',
      title: 'Abschließbare Parkplatzsperren, Parkpfosten & Stahlpoller | FM Traffic',
      desc: 'Abschließbare, umlegbare Parkplatzsperren (mit Vorhängeschloss oder integriertem Schloss), abschließbare Parkpfosten (8×8 cm) und Stahlpoller für private Stellplätze und Eingänge. EXW Türkei.',
      intro: 'Parkplatzsperren reservieren private Stellplätze: zum Parken aufschließen und umlegen, beim Verlassen aufrichten und abschließen. Stahlpoller halten Fahrzeuge von Eingängen, Schaufenstern und Fußgängerbereichen fern.',
    },
    products: [
      { image: 'parking-barrier-lockable', en: 'Lockable fold-down parking barrier', de: 'Abschließbare, umlegbare Parkplatzsperre' },
      { image: 'parking-barrier-u', en: 'U-shaped parking barrier with built-in lock (padlock version available)', de: 'Parkbügel mit integriertem Schloss (auch mit Vorhängeschloss)' },
      { image: 'parking-post-lockable', en: 'Lockable fold-down parking post (8×8 cm)', de: 'Abschließbarer, umlegbarer Parkpfosten (8×8 cm)' },
      { image: 'steel-bollard', en: 'Steel bollard', de: 'Stahlpoller' },
    ],
  },
];

export const findCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
