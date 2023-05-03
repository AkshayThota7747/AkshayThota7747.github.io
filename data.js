let kodi_kaki = {
  'url': '/assets/kodi_kaki_2.jpeg',
  'text': 'కోడి కాకి'
}

let sethuva = {
  'url': '/assets/sethuva.jpeg',
  'text': 'సేతువా'
}

let kodi_pacha_kaki = {
  'url': '/assets/kodi_pacha_kaki.jpeg',
  'text': 'కోడి పచ్చ కాకి'
}

let thella_kodi_kekkirayi = {
  'url': '/assets/kekkirayi.jpeg',
  'text': 'తెల్ల కోడి కొక్కిరాయి'
}

let kodi_rasangi = {
  'url': '/assets/rasangi.jpeg',
  'text': "కోడి రసంగి"
}

let kaki_dega = {
  'url': '/assets/kaki_dega.jpeg',
  'text': 'కాకి డేగ'
}

let kaki_dega_parla = {
  'url': '/assets/erra_nemali.jpeg',
  'text': 'కాకి డేగ పర్ల'
}

let erupu_minchina_getti_kaki = {
  'url': '/assets/kattu_kaki.jpeg',
  'text': 'ఎరుపు మించిన గెట్టి కాకి'
}

let nemali_pingala = {
  'url': '/assets/nemali_pingala.jpeg',
  'text': 'నెమలి పింగళ'
}

let thella_nemali = {
  'url': '/assets/pingala.jpeg',
  'text': 'తెల్ల నెమలి'
}

let pala_abrass = {
  'url': '/assets/pala_abrass.jpeg',
  'text': 'పాల అబ్రసు'
}

let nemali_poola = {
  'url': '/assets/nemali_poola.jpeg',
  'text': 'నెమలి పూల'
}

let kodi_dega = {
  'url': '/assets/kodi_dega.jpeg',
  'text': 'కోడి డేగ'
}

let errabotlu_sethuva = {
  'url': '/assets/nallabotlu_errabotlu_sethuva.webp',
  'text': 'ఎర్రబొట్ల సేతువా'
}

let erra_kodi_kekkirayi = {
  'url': '/assets/gaju_kekkirayi.jpeg',
  'text': 'ఎర్ర కోడి కొక్కిరాయి'
}

let kaki_nemali = {
  'url': '/assets/erupu_minchina_kaki_nemali.jpeg',
  'text': 'కాకి నెమలి'
}

let pacha_kaki = {
  'url': '/assets/pacha_kaki_2.webp',
  'text': 'పచ్చ కాకి'
}

let nemali_maila = {
  'url': '/assets/nemali_maila.jpeg',
  'text': 'నెమలి మైల'
}

function getNameInfo(name) {
  switch (true) {
    case name.includes("kodi_kaki"):
      return kodi_kaki;
    case name.includes("sethuva"):
      return sethuva;
    case name.includes("kodi_pacha_kaki"):
      return kodi_pacha_kaki;
    case name.includes("thella_kodi_kekkirayi"):
      return thella_kodi_kekkirayi;
    case name.includes("kodi_rasangi"):
      return kodi_rasangi;
    case name.includes("kodi_rasangi"):
      return kodi_rasangi;
    case name.includes("kaki_dega"):
      return kaki_dega;
    case name.includes("kaki_dega_parka"):
      return kaki_dega_parla;
    case name.includes("erupu_minchina_getti_kaki"):
      return erupu_minchina_getti_kaki;
    case name.includes("nemali_pingala"):
      return nemali_pingala;
    case name.includes("nemali_pingala"):
      return nemali_pingala;
    case name.includes("thella_nemali"):
      return thella_nemali;
    case name.includes("pala_abrass"):
      return pala_abrass;
    case name.includes("nemali_poola"):
      return nemali_poola;
    case name.includes("kodi_dega"):
      return kodi_dega;
    case name.includes("errabotlu_sethuva"):
      return errabotlu_sethuva;
    case name.includes("erra_kodi_kekkirayi"):
      return erra_kodi_kekkirayi;
    case name.includes("kaki_nemali"):
      return kaki_nemali;
    case name.includes("pacha_kaki"):
      return pacha_kaki;
    case name.includes("nemali_maila"):
      return nemali_maila;

    default:
      return {};
  }
}


const kodi_pingala_first_jamu = 
{
  'header': 'ఉదయం 6:15 నుండి 8:30 గెలిచే రంగు -' + getTranslated("kodi_pingala") + '\n' + 'కోడి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_kaki"),

  '2': getNameInfo("sethuva"),

  '3': getNameInfo("kodi_pacha_kaki"),

  '4': getNameInfo("thella_kodi_kekkirayi"),

  '5': getNameInfo("kodi_rasangi")
}


const kaki_dega_second_jamu = {
  'header': 'ఉదయం 8:30 నుండి 10:45 వరకు గెలిచే రంగు -' + getTranslated("kaki_dega") + '\n' + 'కాకి డేగ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kaki_dega"),

  '2': getNameInfo("kaki_dega_parla"),

  '3': getNameInfo("erupu_minchina_getti_kaki")
}


const nemali_pingala_third_jamu = {
  'header': 'ఉదయం 10:45 నుండి మధ్యాహ్నం 1 వరకు గెలిచే రంగు -' + getTranslated("nemali_pingala") + '\n' + 'నెమలి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("nemali_pingala"),

  '2': getNameInfo("thella_nemali"),

  '3': getNameInfo("pala_abrass"),

  '4': getNameInfo("nemali_poola")
}


const kodi_dega_fourth_jamu = {
  'header': 'మధ్యాహ్నం 1 నుండి మధ్యాహ్నం 3:15 వరకు గెలిచే రంగు -' + getTranslated("kodi_dega") + '\n' + 'కోడి డేగ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_dega"),

  '2': getNameInfo("errabotlu_sethuva"),

  '3': getNameInfo("erra_kodi_kekkirayi")
}

const kaki_nemali_fifth_jamu = {
  'header': 'మధ్యాహ్నం 3:15 నుండి సాయంత్రం 5:30 వరకు గెలిచే రంగు -' + getTranslated("kaki_nemali") + '\n' + 'కాకి నెమలి వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kaki_nemali"),

  '2': getNameInfo("pacha_kaki"),

  '3': getNameInfo("nemali_maila")
}

const kodi_pingala_last_jamu = 
{
  'header': 'ఉదయం 6:15 నుండి 8:30 గెలిచే రంగు -' + getTranslated("kodi_pingala") + '\n' + 'కోడి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_kaki"),

  '2': getNameInfo("sethuva"),

  '3': getNameInfo("kodi_pacha_kaki"),

  '4': getNameInfo("thella_kodi_kekkirayi"),

  '5': getNameInfo("kodi_rasangi")
}


const jsonData = {
    'morning6' : kodi_pingala_first_jamu,

    'morning8' : kaki_dega_second_jamu,
  
    'morning10' : nemali_pingala_third_jamu,
  
    'afternoon1' : kodi_dega_fourth_jamu,
  
    'afternoon3' : kaki_nemali_fifth_jamu,

    'evening' : kodi_pingala_last_jamu
  }


function getTranslated(name) {  
  switch (true) {
    case name.includes("kodi_pingala"):
      return "కోడి పింగళ";
    case name.includes("kaki_dega"):
      return "కాకి డేగ";
    case name.includes("nemali_pingala"):
      return "నెమలి పింగళ";
    case name.includes("kodi_dega"):
      return "కోడి డేగ";
    case name.includes("kaki_nemali"):
      return "కాకి నెమలి";
      default:
        return {};
    }
}




