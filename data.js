// ============================================================
//  DATOS DEL VIAJE: edita aquí textos, planes y fotos.
//  Fotos: libres de Wikimedia Commons (autor + licencia se muestran en la web).
//  Para usar una propia: guárdala en /img y pon { src: "img/ubud-1.webp", alt: "..." }
//  Si una foto no tiene src, se muestra un recuadro provisional.
// ============================================================

const VIAJE = {
  titulo: "Indonesia en Familia",
  subtitulo: "Bali · 2027",
  resumen: "10 días · 9 noches · 3 caminos posibles",
  intro:
    "Tenemos 8 días completos para explorar Bali. Moverse por la isla es lento, así que cada plan visita solo 3 zonas. Elige un mundo y mira el recorrido día a día.",
};

// ---------- DESTINOS (se reutilizan en varios planes) ----------
const DESTINOS = {
  pererenan: {
    nombre: "Pererenan / Kedungu",
    emoji: "🏄",
    intro: "Surf, arrozales y terrazas frente al mar, a un paso de Canggu.",
    puntos: [
      "Clase de surf en Kedungu",
      "Templo de Tanah Lot al atardecer",
      "Desayuno en las terrazas de surf de Pererenan",
      "Compras por Canggu",
      "Gym",
    ],
    fotos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Pantai_Kedungu%2C_Tabanan.jpg/960px-Pantai_Kedungu%2C_Tabanan.jpg", alt: "Playa de Kedungu",
        autor: "Anggabuana", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Pantai_Kedungu,_Tabanan.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Tanah_Lot%2C_Bali%2C_Indonesia%2C_20220827_1008_1159.jpg/960px-Tanah_Lot%2C_Bali%2C_Indonesia%2C_20220827_1008_1159.jpg", alt: "Templo de Tanah Lot",
        autor: "Jakub Hałun", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Tanah_Lot,_Bali,_Indonesia,_20220827_1008_1159.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Batu_Bolong.jpg/960px-Batu_Bolong.jpg", alt: "Playa de Batu Bolong, Canggu",
        autor: "KGG2017v2", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Batu_Bolong.jpg" },
    ],
  },

  ubud: {
    nombre: "Ubud",
    emoji: "🐒",
    intro: "La Bali de la selva: arrozales, cascadas, templos y monos traviesos.",
    puntos: [
      "Monkey Forest",
      "Templo Tirta Empul (el templo del agua sagrada)",
      "Arrozales de Tegallalang",
      "Mercado de Ubud",
      "Cascada de Tibumana",
    ],
    fotos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Macaca_fascicularis%2C_Ubud_Monkey_Forest%2C_Bali%2C_20220822_1053_0056.jpg/960px-Macaca_fascicularis%2C_Ubud_Monkey_Forest%2C_Bali%2C_20220822_1053_0056.jpg", alt: "Monos en el Monkey Forest",
        autor: "Jakub Hałun", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Macaca_fascicularis,_Ubud_Monkey_Forest,_Bali,_20220822_1053_0056.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Pura_Tirta_Empul_2017-08-18_%2831%29.jpg/960px-Pura_Tirta_Empul_2017-08-18_%2831%29.jpg", alt: "Templo Tirta Empul",
        autor: "Panina Manina", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Pura_Tirta_Empul_2017-08-18_(31).jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Rice_terraces_in_Tegallalang_5.jpg/960px-Rice_terraces_in_Tegallalang_5.jpg", alt: "Arrozales de Tegallalang",
        autor: "Christophe95", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Rice_terraces_in_Tegallalang_5.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Ubud_market_%2816435596274%29.jpg/960px-Ubud_market_%2816435596274%29.jpg", alt: "Mercado de Ubud",
        autor: "Jorge Láscar from Melbourne, Australia", licencia: "CC BY 2.0", fuente: "https://commons.wikimedia.org/wiki/File:Ubud_market_(16435596274).jpg" },
    ],
  },

  gili: {
    nombre: "Gili",
    emoji: "🐢",
    intro: "Islas sin coches: todo en bici o andando, y tortugas por todas partes.",
    puntos: [
      "Snorkel con tortugas",
      "Vuelta a la isla en bici",
      "Estatuas submarinas de Gili Meno",
      "Atardecer con columpios en el agua",
    ],
    fotos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Visiting_A_Friend_S_Home_%28220789189%29.jpeg/960px-Visiting_A_Friend_S_Home_%28220789189%29.jpeg", alt: "Tortuga marina en Gili",
        autor: "Tilonaut", licencia: "CC BY 3.0", fuente: "https://commons.wikimedia.org/wiki/File:Visiting_A_Friend_S_Home_(220789189).jpeg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Gili-Air-%D0%93%D0%B8%D0%BB%D0%B8-%D0%90%D0%B8%D1%80.jpg/960px-Gili-Air-%D0%93%D0%B8%D0%BB%D0%B8-%D0%90%D0%B8%D1%80.jpg", alt: "Gili Air",
        autor: "Aethelberht of Kent", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Gili-Air-%D0%93%D0%B8%D0%BB%D0%B8-%D0%90%D0%B8%D1%80.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Lombok_Island_and_Mount_Rinjani_from_Gili_Meno_Island%2C_Indonesia.jpg/960px-Lombok_Island_and_Mount_Rinjani_from_Gili_Meno_Island%2C_Indonesia.jpg", alt: "Gili Meno con el volcán Rinjani al fondo",
        autor: "Vyacheslav Argenberg", licencia: "CC BY 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Lombok_Island_and_Mount_Rinjani_from_Gili_Meno_Island,_Indonesia.jpg" },
    ],
  },

  penida: {
    nombre: "Nusa Penida / Lembongan",
    emoji: "🐠",
    intro: "Islas a 40 min en barco desde Sanur: mantas raya, acantilados y un puente amarillo.",
    puntos: [
      "Snorkel con mantas raya",
      "Mirador de Kelingking Beach (el T-Rex)",
      "Yellow Bridge hasta Ceningan",
      "Devil's Tear",
      "Paseo en barca por los manglares",
    ],
    fotos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/19-Indonesia-Bali_Nusa-Penida_Manta-Point_14_%28Manta_Ray%29-APiazza.JPG/960px-19-Indonesia-Bali_Nusa-Penida_Manta-Point_14_%28Manta_Ray%29-APiazza.JPG", alt: "Manta raya en Manta Point",
        autor: "Andrepiazza", licencia: "CC BY-SA 3.0", fuente: "https://commons.wikimedia.org/wiki/File:19-Indonesia-Bali_Nusa-Penida_Manta-Point_14_(Manta_Ray)-APiazza.JPG" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Kelingking_Beach_%28T-Rex_Bay%29_of_Nusa_Penida%2C_Bali_%282025%29_-_img_08.jpg/960px-Kelingking_Beach_%28T-Rex_Bay%29_of_Nusa_Penida%2C_Bali_%282025%29_-_img_08.jpg", alt: "Kelingking Beach (el T-Rex)",
        autor: "Chainwit.", licencia: "CC BY 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Kelingking_Beach_(T-Rex_Bay)_of_Nusa_Penida,_Bali_(2025)_-_img_08.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Yellow_bridge_lembongan.jpg/960px-Yellow_bridge_lembongan.jpg", alt: "Yellow Bridge en Lembongan",
        autor: "Sgroey", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Yellow_bridge_lembongan.jpg" },
    ],
  },

  uluwatu: {
    nombre: "Uluwatu",
    emoji: "🌅",
    intro: "Acantilados enormes y playas escondidas, a 30 min del aeropuerto.",
    puntos: [
      "Templo de Uluwatu y danza Kecak al atardecer",
      "Playa de Melasti",
      "Playa de Padang Padang",
      "Garuda Wisnu Kencana (GWK)",
    ],
    fotos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Luhur_Uluwatu_Temple%2C_Bali%2C_20220826_0953_1016.jpg/960px-Luhur_Uluwatu_Temple%2C_Bali%2C_20220826_0953_1016.jpg", alt: "Templo de Uluwatu",
        autor: "Jakub Hałun", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Luhur_Uluwatu_Temple,_Bali,_20220826_0953_1016.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Kecak_Pura_Luhur_Uluwatu_2011.JPG/960px-Kecak_Pura_Luhur_Uluwatu_2011.JPG", alt: "Danza Kecak en Uluwatu",
        autor: "Midori", licencia: "CC BY 3.0", fuente: "https://commons.wikimedia.org/wiki/File:Kecak_Pura_Luhur_Uluwatu_2011.JPG" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Melasti_Beach_coast.jpg/960px-Melasti_Beach_coast.jpg", alt: "Playa de Melasti",
        autor: "Dare2Leap", licencia: "CC BY-SA 4.0", fuente: "https://commons.wikimedia.org/wiki/File:Melasti_Beach_coast.jpg" },
    ],
  },
};

// ---------- PLANES ----------
// etapas: { tipo: "destino", destino, dias, noches, nota? }
//         { tipo: "warp", texto, duracion }
// Días y noches PROVISIONALES (3 + 3 + 3)
const PLANES = [
  {
    id: "a",
    mundo: 1,
    nombre: "Surf, Monos y Tortugas",
    lema: "Olas, selva y una isla sin coches.",
    color: "a",
    etapas: [
      { tipo: "warp", texto: "Aeropuerto de Denpasar → Pererenan", duracion: "45–60 min" },
      { tipo: "destino", destino: "pererenan", dias: "1–3", noches: 3 },
      { tipo: "warp", texto: "Pererenan → Ubud", duracion: "1–1,5 h" },
      { tipo: "destino", destino: "ubud", dias: "4–6", noches: 3 },
      { tipo: "warp", texto: "Ubud → Padang Bai + fast boat a Gili", duracion: "1,5 h + 2 h" },
      { tipo: "destino", destino: "gili", dias: "7–10", noches: 3 },
      { tipo: "warp", texto: "Gili → Padang Bai → Aeropuerto", duracion: "4–5 h" },
    ],
  },
  {
    id: "b",
    mundo: 2,
    nombre: "Monos, Mantas y Surf",
    lema: "Selva, islas y terminar entre olas.",
    color: "b",
    etapas: [
      { tipo: "warp", texto: "Aeropuerto de Denpasar → Ubud", duracion: "1,5–2 h" },
      { tipo: "destino", destino: "ubud", dias: "1–3", noches: 3 },
      { tipo: "warp", texto: "Ubud → Sanur + fast boat a Lembongan", duracion: "1 h + 40 min" },
      { tipo: "destino", destino: "penida", dias: "4–6", noches: 3 },
      { tipo: "warp", texto: "Barco a Sanur → Pererenan", duracion: "40 min + 1 h" },
      { tipo: "destino", destino: "pererenan", dias: "7–10", noches: 3 },
      { tipo: "warp", texto: "Pererenan → Aeropuerto", duracion: "45–60 min" },
    ],
  },
  {
    id: "c",
    mundo: 3,
    nombre: "Monos, Mantas y Acantilados",
    lema: "Selva, islas y un final de película junto al aeropuerto.",
    color: "c",
    etapas: [
      { tipo: "warp", texto: "Aeropuerto de Denpasar → Ubud", duracion: "1,5–2 h" },
      { tipo: "destino", destino: "ubud", dias: "1–3", noches: 3 },
      { tipo: "warp", texto: "Ubud → Sanur + fast boat a Lembongan", duracion: "1 h + 40 min" },
      { tipo: "destino", destino: "penida", dias: "4–6", noches: 3 },
      { tipo: "warp", texto: "Barco a Sanur → Uluwatu", duracion: "40 min + 1 h" },
      { tipo: "destino", destino: "uluwatu", dias: "7–10", noches: 3 },
      { tipo: "warp", texto: "Uluwatu → Aeropuerto", duracion: "30–45 min" },
    ],
  },
];
