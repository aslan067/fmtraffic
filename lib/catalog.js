// Product catalogue for the category pages (/[lang]/products/[slug]/).
// Category pages exist in all four site languages (en, de, nl, fr).
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
    nl: {"name": "Flexibele afzetpalen", "short": "Flexibele afzetpalen (delineators) van 45 en 75 cm, in TPU of als voordelige TPE-versie.", "title": "Flexibele afzetpalen — 45 & 75 cm, TPU / TPE | FM Traffic", "desc": "Flexibele afzetpalen (delineators) van 45 en 75 cm, in TPU of als voordelige TPE-versie, met reflecterende banden en bevestigingsset. CE-gecertificeerd, OEM / private label, EXW Turkije.", "intro": "Flexibele afzetpalen scheiden rijstroken, beschermen fietspaden en geleiden het verkeer op kruispunten, parkeerterreinen en bij wegwerkzaamheden. Het flexibele lichaam buigt mee wanneer erover wordt gereden en komt daarna weer rechtop."},
    fr: {"name": "Balises flexibles", "short": "Balises de délimitation flexibles de 45 et 75 cm, en TPU ou en version économique TPE.", "title": "Balises flexibles — 45 & 75 cm, TPU / TPE | FM Traffic", "desc": "Balises de délimitation flexibles de 45 et 75 cm, en TPU ou en version économique TPE, avec bandes réfléchissantes et kit de fixation. Certifiées CE, OEM / marque privée, EXW Turquie.", "intro": "Les balises flexibles séparent les voies, protègent les pistes cyclables et guident la circulation aux carrefours, sur les parkings et sur les chantiers. Leur corps flexible plie au passage d’un véhicule puis se redresse."},
    products: [
      { image: 'delineator-75-tpu', en: '75 cm flexible lane delineator (TPU)', de: 'Flexibler Leitpfosten 75 cm (TPU)', nl: "Flexibele afzetpaal 75 cm (TPU)", fr: "Balise flexible 75 cm (TPU)" },
      { image: 'delineator-45-tpu', en: '45 cm flexible lane delineator (TPU)', de: 'Flexibler Leitpfosten 45 cm (TPU)', nl: "Flexibele afzetpaal 45 cm (TPU)", fr: "Balise flexible 45 cm (TPU)" },
      { image: 'delineator-75-flexible', en: '75 cm flexible lane delineator', de: 'Flexibler Leitpfosten 75 cm', nl: "Flexibele afzetpaal 75 cm", fr: "Balise flexible 75 cm" },
      { en: 'Economy flexible delineators, 45 and 75 cm (TPE)', de: 'Flexible Spar-Leitpfosten, 45 und 75 cm (TPE)', nl: "Voordelige flexibele afzetpalen, 45 en 75 cm (TPE)", fr: "Balises flexibles économiques, 45 et 75 cm (TPE)" },
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
    nl: {"name": "Verkeerskegels", "short": "Verkeerskegels met verzwaarde voet, voordelige kegels en kegels met reflectoren.", "title": "Verkeerskegels — met verzwaarde voet & reflecterend | FM Traffic", "desc": "Verkeerskegels voor wegwerkzaamheden, parkeerterreinen en evenementen: met verzwaarde voet, voordelige kegels van 50 cm en kegels met reflectoren. CE-gecertificeerd, OEM / private label, EXW Turkije.", "intro": "Verkeerskegels markeren werkvakken, sluiten rijstroken af en geleiden bestuurders en voetgangers. Een verzwaarde voet houdt de kegel stabiel bij wind en passerend verkeer; reflecterende banden zorgen voor zichtbaarheid in het donker."},
    fr: {"name": "Cônes de signalisation", "short": "Cônes à socle lesté, cônes économiques et cônes avec réflecteurs.", "title": "Cônes de signalisation — socle lesté & réfléchissants | FM Traffic", "desc": "Cônes de signalisation pour chantiers, parkings et événements : à socle lesté, cônes économiques de 50 cm et cônes avec réflecteurs. Certifiés CE, OEM / marque privée, EXW Turquie.", "intro": "Les cônes de signalisation balisent les chantiers, ferment des voies et guident conducteurs et piétons. Un socle lesté assure la stabilité face au vent et à la circulation ; les bandes réfléchissantes les rendent visibles la nuit."},
    products: [
      { image: 'cone-weighted-base', en: 'Traffic cone with weighted base', de: 'Leitkegel mit beschwertem Fuß', nl: "Verkeerskegel met verzwaarde voet", fr: "Cône à socle lesté" },
      { image: 'cone-50-economy', en: '50 cm traffic cone (economy)', de: 'Leitkegel 50 cm (Sparversion)', nl: "Verkeerskegel 50 cm (voordelig)", fr: "Cône de signalisation 50 cm (économique)" },
      { image: 'cone-reflector', en: 'Traffic cone with reflectors', de: 'Leitkegel mit Reflektoren', nl: "Verkeerskegel met reflectoren", fr: "Cône de signalisation avec réflecteurs" },
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
    nl: {"name": "Verkeersdrempels", "short": "Modulaire verkeersdrempels van rubber, kunststof en metaal, plus kabelbeschermers.", "title": "Verkeersdrempels — rubber, kunststof & metaal | FM Traffic", "desc": "Modulaire verkeersdrempels van rubber, kunststof en metaal met reflectoren voor parkeerterreinen, privéwegen en bedrijfsterreinen. Kabelbeschermers leverbaar. CE-gecertificeerd, EXW Turkije.", "intro": "Verkeersdrempels verlagen de snelheid bij inritten van parkeerterreinen, op privéwegen, logistieke terreinen en bij oversteekplaatsen. Modulaire systemen worden op elke wegbreedte samengesteld en afgewerkt met eindstukken."},
    fr: {"name": "Ralentisseurs", "short": "Ralentisseurs modulaires en caoutchouc, plastique et métal, ainsi que passe-câbles.", "title": "Ralentisseurs — caoutchouc, plastique & métal | FM Traffic", "desc": "Ralentisseurs modulaires en caoutchouc, plastique et métal avec réflecteurs pour parkings, voies privées et sites industriels. Passe-câbles disponibles. Certifiés CE, EXW Turquie.", "intro": "Les ralentisseurs réduisent la vitesse aux entrées de parking, sur les voies privées, les plateformes logistiques et aux passages piétons. Les systèmes modulaires s’assemblent selon la largeur de la voie et se terminent par des embouts."},
    products: [
      { image: 'speed-bump-rubber', en: 'Rubber speed bump modules', de: 'Bodenschwellen-Module aus Gummi', nl: "Rubberen verkeersdrempelmodules", fr: "Modules de ralentisseur en caoutchouc" },
      { image: 'speed-bump-plastic', en: 'Plastic speed bump modules', de: 'Bodenschwellen-Module aus Kunststoff', nl: "Kunststof verkeersdrempelmodules", fr: "Modules de ralentisseur en plastique" },
      { image: 'speed-bump-metal', en: 'Metal speed bump', de: 'Bodenschwelle aus Metall', nl: "Metalen verkeersdrempel", fr: "Ralentisseur en métal" },
      { en: 'Cable protector ramps', de: 'Kabelschutzbrücken', nl: "Kabelbeschermers", fr: "Passe-câbles" },
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
    nl: {"name": "Barrières", "short": "Met water vulbare kunststof wegbarrières, barrières voor verkeerseilanden en hoogwaterbarrières.", "title": "Met water vulbare kunststof wegbarrières & barrières | FM Traffic", "desc": "Met water vulbare kunststof wegbarrières in New-Jerseyprofiel (50×50×120, 50×50×150, 50×80×120 cm), barrières voor verkeerseilanden met optioneel solar flitslicht, hoogwaterbarrières. EXW Turkije.", "intro": "Kunststof wegbarrières worden ter plaatse met water of zand gevuld om werkvakken, evenementen en rijstroken af te zetten. Leeg zijn ze licht te vervoeren en ze koppelen tot een doorlopende lijn. Ze dienen voor geleiding en afscheiding, niet als geteste voertuigkering."},
    fr: {"name": "Barrières", "short": "Barrières routières en plastique lestables à l’eau, barrières d’îlot et barrières anti-inondation.", "title": "Barrières routières en plastique lestables à l’eau | FM Traffic", "desc": "Barrières routières en plastique lestables à l’eau, profil New Jersey (50×50×120, 50×50×150, 50×80×120 cm), barrières d’îlot avec feu flash solaire en option, barrières anti-inondation. EXW Turquie.", "intro": "Les barrières routières en plastique se remplissent d’eau ou de sable sur place pour fermer chantiers, événements et voies. Vides, elles sont légères à transporter et s’emboîtent en une ligne continue. Elles servent au guidage et à la séparation, pas de dispositif de retenue de véhicules testé."},
    products: [
      { image: 'water-barrier-50x80x120', en: 'Water-fillable road barrier, New Jersey profile, 50×80×120 cm', de: 'Wasserbefüllbare Leitwand, New-Jersey-Profil, 50×80×120 cm', nl: "Met water vulbare wegbarrière, New-Jerseyprofiel, 50×80×120 cm", fr: "Barrière lestable à l’eau, profil New Jersey, 50×80×120 cm" },
      { image: 'water-barrier-50x50x120', en: 'Water-fillable road barrier, New Jersey profile, 50×50×120 / 50×50×150 cm', de: 'Wasserbefüllbare Leitwand, New-Jersey-Profil, 50×50×120 / 50×50×150 cm', nl: "Met water vulbare wegbarrière, New-Jerseyprofiel, 50×50×120 / 50×50×150 cm", fr: "Barrière lestable à l’eau, profil New Jersey, 50×50×120 / 50×50×150 cm" },
      { image: 'island-barrier-120-solar', en: 'Traffic island barrier 120 cm with solar flasher (also 80 cm)', de: 'Absperrung für Verkehrsinseln 120 cm mit Solar-Blitzleuchte (auch 80 cm)', nl: "Barrière voor verkeerseilanden 120 cm met solar flitslicht (ook 80 cm)", fr: "Barrière d’îlot 120 cm avec feu flash solaire (aussi 80 cm)" },
      { en: 'Flood barriers for doors and garage entrances', de: 'Hochwasserbarrieren für Türen und Garageneinfahrten', nl: "Hoogwaterbarrières voor deuren en garage-inritten", fr: "Barrières anti-inondation pour portes et entrées de garage" },
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
    nl: {"name": "Wegmarkering", "short": "Markeerspuitverf, applicators, markeermachines en glasparels.", "title": "Wegmarkering: markeerverf, machines & glasparels | FM Traffic", "desc": "Markeerspuitverf (500 en 750 ml, 6-packs), spuitapplicators, markeermachines en reflecterende glasparels (25 kg). CE-gecertificeerd, EXW Turkije.", "intro": "Markeringsproducten voor parkeerterreinen, magazijnen, sportvelden en wegreparaties. Glasparels worden op de verse verf gestrooid en maken de lijnen ’s nachts reflecterend."},
    fr: {"name": "Marquage routier", "short": "Peinture de marquage en aérosol, applicateurs, machines de traçage et microbilles de verre.", "title": "Marquage routier : peinture, machines & microbilles de verre | FM Traffic", "desc": "Peinture de marquage en aérosol (500 et 750 ml, packs de 6), applicateurs, machines de traçage et microbilles de verre réfléchissantes (25 kg). Certifié CE, EXW Turquie.", "intro": "Produits de marquage pour parkings, entrepôts, terrains de sport et réparations de voirie. Les microbilles de verre sont saupoudrées sur la peinture fraîche pour rendre les lignes réfléchissantes la nuit."},
    products: [
      { image: 'glass-beads-25kg', en: 'Reflective glass beads, 25 kg', de: 'Reflektierende Glasperlen, 25 kg', nl: "Reflecterende glasparels, 25 kg", fr: "Microbilles de verre réfléchissantes, 25 kg" },
      { en: 'Road-marking spray paint, 500 and 750 ml (6-packs)', de: 'Markierungs-Sprühfarbe, 500 und 750 ml (6er-Pack)', nl: "Markeerspuitverf, 500 en 750 ml (6-packs)", fr: "Peinture de marquage en aérosol, 500 et 750 ml (packs de 6)" },
      { en: 'Spray can applicator', de: 'Applikator für Sprühdosen', nl: "Applicator voor spuitbussen", fr: "Applicateur pour aérosols" },
      { en: 'Line-marking machines', de: 'Markierungs\u00admaschinen', nl: "Markeermachines", fr: "Machines de traçage" },
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
    nl: {"name": "Waarschuwings\u00adlichten", "short": "Solar LED-flitslichten voor kegels en barrières, zwaailampen en lichtbalken voor voertuigen.", "title": "Solar LED-waarschuwingslichten, flitslichten & zwaailampen | FM Traffic", "desc": "Solar LED-flitslichten (rond en driehoekig, geel en rood) voor kegels, barrières en borden, plus zwaailampen en lichtbalken voor voertuigen. CE-gecertificeerd, EXW Turkije.", "intro": "Solar LED-flitslichten laden overdag op en knipperen automatisch in het donker, zonder bekabeling op wegwerkzaamheden en tijdelijke locaties. Voor service- en werkvoertuigen zijn zwaailampen en lichtbalken leverbaar."},
    fr: {"name": "Feux d’avertissement", "short": "Feux flash solaires à LED pour cônes et barrières, gyrophares et rampes lumineuses pour véhicules.", "title": "Feux d’avertissement solaires à LED, feux flash & gyrophares | FM Traffic", "desc": "Feux flash solaires à LED (ronds et triangulaires, ambre et rouges) pour cônes, barrières et panneaux, ainsi que gyrophares et rampes lumineuses pour véhicules. Certifiés CE, EXW Turquie.", "intro": "Les feux flash solaires à LED se rechargent le jour et clignotent automatiquement la nuit, sans câblage sur les chantiers et sites temporaires. Des gyrophares et rampes lumineuses sont disponibles pour les véhicules de service et de chantier."},
    products: [
      { image: 'solar-flasher-triangle', en: 'Triangular solar LED flasher (amber / red)', de: 'Dreieckige Solar-LED-Blitzleuchte (gelb / rot)', nl: "Driehoekig solar LED-flitslicht (geel / rood)", fr: "Feu flash solaire à LED triangulaire (ambre / rouge)" },
      { image: 'solar-flasher-round', en: 'Round solar LED flasher (amber / red)', de: 'Runde Solar-LED-Blitzleuchte (gelb / rot)', nl: "Rond solar LED-flitslicht (geel / rood)", fr: "Feu flash solaire à LED rond (ambre / rouge)" },
      { en: 'Vehicle beacons and light bars', de: 'Rundumleuchten und Lichtbalken für Fahrzeuge', nl: "Zwaailampen en lichtbalken voor voertuigen", fr: "Gyrophares et rampes lumineuses pour véhicules" },
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
    nl: {"name": "Parkeerbeugels & palen", "short": "Afsluitbare, neerklapbare parkeerbeugels en parkeerpalen, stalen afzetpalen.", "title": "Afsluitbare parkeerbeugels, parkeerpalen & stalen palen | FM Traffic", "desc": "Afsluitbare, neerklapbare parkeerbeugels (met hangslot of ingebouwd slot), afsluitbare parkeerpalen (8×8 cm) en stalen afzetpalen voor privéparkeerplaatsen en ingangen. EXW Turkije.", "intro": "Parkeerbeugels reserveren privéparkeerplaatsen: ontgrendelen en neerklappen om te parkeren, rechtop zetten en afsluiten bij vertrek. Stalen afzetpalen houden voertuigen weg van ingangen, etalages en voetgangersgebieden."},
    fr: {"name": "Arceaux de parking & bornes", "short": "Arceaux et poteaux de parking rabattables verrouillables, bornes en acier.", "title": "Arceaux de parking verrouillables, poteaux & bornes en acier | FM Traffic", "desc": "Arceaux de parking rabattables verrouillables (cadenas ou serrure intégrée), poteaux de parking verrouillables (8×8 cm) et bornes en acier pour places privées et entrées. EXW Turquie.", "intro": "Les arceaux de parking réservent les places privées : déverrouiller et rabattre pour se garer, relever et verrouiller en partant. Les bornes en acier tiennent les véhicules à distance des entrées, vitrines et zones piétonnes."},
    products: [
      { image: 'parking-barrier-lockable', en: 'Lockable fold-down parking barrier', de: 'Abschließbare, umlegbare Parkplatzsperre', nl: "Afsluitbare, neerklapbare parkeerbeugel", fr: "Arceau de parking rabattable verrouillable" },
      { image: 'parking-barrier-u', en: 'U-shaped parking barrier with built-in lock (padlock version available)', de: 'Parkbügel mit integriertem Schloss (auch mit Vorhängeschloss)', nl: "U-vormige parkeerbeugel met ingebouwd slot (ook met hangslot)", fr: "Arceau de parking en U avec serrure intégrée (version cadenas disponible)" },
      { image: 'parking-post-lockable', en: 'Lockable fold-down parking post (8×8 cm)', de: 'Abschließbarer, umlegbarer Parkpfosten (8×8 cm)', nl: "Afsluitbare, neerklapbare parkeerpaal (8×8 cm)", fr: "Poteau de parking rabattable verrouillable (8×8 cm)" },
      { image: 'steel-bollard', en: 'Steel bollard', de: 'Stahlpoller', nl: "Stalen afzetpaal", fr: "Borne en acier" },
    ],
  },
];

export const findCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
