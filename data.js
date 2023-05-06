let kodi_kaki = {
  'url': '/assets/kodi_kaki_pingala_chupu.jpeg',
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

let kattu_kaki = {
  'url': '/assets/kattu_kaki.jpeg',
  'text': 'కాకి'
}

let kaki_dega_parla = {
  'url': '/assets/erra_nemali.jpeg',
  'text': 'కాకి డేగ పర్ల'
}

let erupu_minchina_getti_kaki = {
  'url': '/assets/kaki_dega.jpeg',
  'text': 'ఎరుపు మించిన గెట్టి కాకి డేగ'
}

let nemali_pingala = {
  'url': '/assets/pingala.jpeg',
  'text': 'నెమలి పింగళ'
}

let thella_nemali = {
  'url': '/assets/thella_savala.webp',
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

let errabotlu = {
  'url': '/assets/nallabotlu_errabotlu.webp',
  'text': 'ఎర్రబొట్ల సేతువా'
}

let erra_kodi_kekkirayi = {
  'url': '/assets/gaju_kekkirayi.jpeg',
  'text': 'ఎర్ర కోడి కొక్కిరాయి'
}

let erupu_kaki_nemali = {
  'url': '/assets/erupu_minchina_kaki_nemali.jpeg',
  'text': 'ఎరుపు మించిన కాకి నెమలి'
}

let pacha_kaki = {
  'url': '/assets/pacha_kaki_2.webp',
  'text': 'పచ్చ కాకి'
}

let nemali_maila = {
  'url': '/assets/nemali_maila_new.jpeg',
  'text': 'నెమలి మైల'
}

let poola_rasangi = {
  'url': '/assets/poola_rasangi.jpeg',
  'text': 'కోడి రసంగి'
}

let kodi_pingali = {
  'url': '/assets/kodi_pingala.jpeg',
  'text': 'కోడి పింగళ'
}

let erra_kaki_dega = {
  'url': '/assets/erra_kaki_dega_new.jpeg',
  'text': 'ఎర్ర కాకి డేగ'
}

let kaki = {
  'url': '/assets/kaki_dega_new.jpeg',
  'text': 'కాకి డేగ'
}

let np_abrass = {
  'url': '/assets/nemali_pingala_abrass.jpeg',
  'text': 'నెమలి పింగళ అబ్రసు'
}

let dega = {
  'url': '/assets/dega.jpeg',
  'text': 'డేగ'
}

let kaki_nemali = {
  'url': '/assets/kaki_nemali_new.jpeg',
  'text': 'కాకి నెమలి'
}

let nemali_daga = {
  'url': '/assets/nemali_dega.webp',
  'text': 'నెమలి డేగ'
}

let nalla_savala = {
  'url': '/assets/nalla_savala_2.jpeg',
  'text': 'నల్ల సవల'
}

function getNameInfo(name) {
  switch (true) {
    case name.includes("kodi_kaki"):
      return kodi_kaki;
    case name.includes("erra_kaki_dega"):
      return erra_kaki_dega;
    case name.includes("sethuva"):
      return sethuva;
    case name.includes("kodi_pacha_kaki"):
      return kodi_pacha_kaki;
    case name.includes("thella_kodi_kekkirayi"):
      return thella_kodi_kekkirayi;
    case name.includes("kodi_rasangi"):
      return kodi_rasangi;
    case name.includes("poola_rasangi"):
      return poola_rasangi;
    case name.includes("kattu_kaki"):
      return kattu_kaki;
    case name.includes("kade_parla"):
      return kaki_dega_parla;
    case name.includes("erupu_minchina_getti_kaki"):
      return erupu_minchina_getti_kaki;
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
    case name.includes("errabotlu"):
      return errabotlu;
    case name.includes("erra_kodi_kekkirayi"):
      return erra_kodi_kekkirayi;
    case name.includes("kaki_nemali"):
      return kaki_nemali;
    case name.includes("pacha_kaki"):
      return pacha_kaki;
    case name.includes("nemali_maila"):
      return nemali_maila;
    case name.includes("kodi_pingali"):
      return kodi_pingali;
    case name.includes("kaki"):
      return kaki;
    case name.includes("np_abrass"):
      return np_abrass;
    case name.includes("dega"):
      return dega;
    case name.includes("erupu_kaki_nemali"):
      return erupu_kaki_nemali;
    case name.includes("nemali_daga"):
      return nemali_daga;
    case name.includes("nalla_savala"):
      return nalla_savala;

    default:
      return {};
  }
}


const kodi_pingala_jamu = 
{
  'header': getTimingText("2") + getTranslated("kodi_pingala") + '\n' + 'కోడి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_kaki"),

  '2': getNameInfo("thella_kodi_kekkirayi"),

  '3': getNameInfo("poola_rasangi"),

  '4': getNameInfo("kodi_pingali"),

  '5': getNameInfo("kodi_pacha_kaki")
}


const kaki_dega_jamu = {
  'header': getTimingText("3") + getTranslated("kaki_dega") + '\n' + getTranslated("kaki_dega") + ' వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  
  '1': getNameInfo("kaki"), 

  '2': getNameInfo("kattu_kaki"), 
  
  '3': getNameInfo("erra_kaki_dega"), 

  '4': getNameInfo("erupu_minchina_getti_kaki"),

  '5': getNameInfo("kade_parla")
}


const nemali_pingala_jamu = {
  'header': getTimingText("4") + getTranslated("nemali_pingala") + '\n' + getTranslated("nemali_pingala") + ' వంతులో పెట్టుకోవాల్సిన రంగులు ↓',

  '1': getNameInfo("nemali_pingala"),

  '2': getNameInfo("np_abrass"),

  '3': getNameInfo("thella_nemali"),

  '4': getNameInfo("pala_abrass"),

  '5': getNameInfo("nemali_poola")
}


const kodi_dega_jamu = {
  'header': getTimingText("5") + getTranslated("kodi_dega") + '\n' + getTranslated("kodi_dega") + ' వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_dega"),

  '2': getNameInfo("dega"),
  
  '3': getNameInfo("erra_kodi_kekkirayi"),

  '4': getNameInfo("kodi_rasangi"),
  
  '5': getNameInfo("errabotlu")

}

const kaki_nemali_jamu = {
  'header': getTimingText("1") + getTranslated("kaki_nemali") + '\n' + getTranslated("kaki_nemali")+ ' వంతులో పెట్టుకోవాల్సిన రంగులు ↓',

  '1': getNameInfo("kaki_nemali"),

  '2': getNameInfo("nalla_savala"),

  '3': getNameInfo("nemali_maila"),

  '4': getNameInfo("nemali_daga"),

  '5': getNameInfo("pacha_kaki"),
}

const last_jamu = 
{
  'header': getTimingText("1") + getTranslated("kaki_nemali") + '\n' + getTranslated("kaki_nemali")+ ' వంతులో పెట్టుకోవాల్సిన రంగులు ↓',

  '1': getNameInfo("kaki_nemali"),

  '2': getNameInfo("nalla_savala"),

  '3': getNameInfo("nemali_maila"),

  '4': getNameInfo("nemali_daga"),

  '5': getNameInfo("pacha_kaki"),
}


const jsonData = {
    'morning6' : kodi_dega_jamu,

    'morning8' : kodi_pingala_jamu,
  
    'morning10' : kaki_nemali_jamu,
  
    'afternoon1' : nemali_pingala_jamu,
  
    'afternoon3' : kaki_dega_jamu,

    'evening' : last_jamu
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

function getTimingText(time){
  switch(true){
    case time.includes("1"):
      return "ఉదయం 6:15 నుండి 8:30 గెలిచే రంగు -";
    case time.includes("2"):
      return "ఉదయం 8:30 నుండి 10:45 వరకు గెలిచే రంగు -";
    case time.includes("3"):
      return "ఉదయం 10:45 నుండి మధ్యాహ్నం 1 వరకు గెలిచే రంగు -";
    case time.includes("4"):
      return "మధ్యాహ్నం 1 నుండి మధ్యాహ్నం 3:15 వరకు గెలిచే రంగు -";
    case time.includes("5"):
      return "మధ్యాహ్నం 3:15 నుండి సాయంత్రం 5:30 వరకు గెలిచే రంగు -";
    case time.includes("6"):
      return "సాయంత్రం 5:30 నుండి గెలిచే రంగు -";
      default:
        return {};
    }
}




