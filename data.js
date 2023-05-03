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
    default:
      return {};
  }
}


const kodi_pingala_first_jamu = 
{
  'header': 'ఉదయం 6:15 నుండి 8:30 గెలిచే రంగు - కోడి పింగళ' + '\n' + 'కోడి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': getNameInfo("kodi_kaki"),

  '2': getNameInfo("sethuva"),

  '3': getNameInfo("kodi_pacha_kaki"),

  '4': getNameInfo("thella_kodi_kekkirayi"),

  '5': getNameInfo("kodi_rasangi")
}


const kaki_dega_second_jamu = {
  'header': 'ఉదయం 8:30 నుండి 10:45 వరకు గెలిచే రంగు - కాకి డేగ' + '\n' + 'కాకి డేగ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': {
    'url': '/assets/kaki_dega.jpeg',
    'text': 'కాకి డేగ'
  },

  '2': {
    'url': '/assets/erra_nemali.jpeg',
    'text': 'కాకి డేగ పర్ల'
  },

  '3': {
    'url': '/assets/kattu_kaki.jpeg',
    'text': 'ఎరుపు మించిన గెట్టి కాకి'
  }
}


const nemali_pingala_third_jamu = {
  'header': 'ఉదయం 10:45 నుండి మధ్యాహ్నం 1 వరకు గెలిచే రంగు - నెమలి పింగళ'+ '\n' + 'నెమలి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': {
    'url': '/assets/nemali_pingala.jpeg',
    'text': 'నెమలి పింగళ'
  },

  '2': {
    'url': '/assets/pingala.jpeg',
    'text': 'తెల్ల నెమలి'
  },

  '3': {
    'url': '/assets/pala_abrass.jpeg',
    'text': 'పాల అబ్రసు'
  },

  '4': {
    'url': '/assets/nemali_poola.jpeg',
    'text': 'నెమలి పూల'
  }
}


const kodi_dega_fourth_jamu = {
  'header': 'మధ్యాహ్నం 1 నుండి మధ్యాహ్నం 3:15 వరకు గెలిచే రంగు - కోడి డేగ'+ '\n' + 'కోడి డేగ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': {
    'url': '/assets/kodi_dega.jpeg',
    'text': 'కోడి డేగ'
  },

  '2': {
    'url': '/assets/nallabotlu_errabotlu_sethuva.webp',
    'text': 'ఎర్రబొట్ల సేతువా'
  },

  '3': {
    'url': '/assets/gaju_kekkirayi.jpeg',
    'text': 'ఎర్ర కోడి కొక్కిరాయి'
  }
}

const kaki_nemali_fifth_jamu = {
  'header': 'మధ్యాహ్నం 3:15 నుండి సాయంత్రం 5:30 వరకు గెలిచే రంగు - కాకి నెమలి'+ '\n' + 'కాకి నెమలి వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': {
    'url': '/assets/erupu_minchina_kaki_nemali.jpeg',
    'text': 'కాకి నెమలి'
  },

  '2': {
    'url': '/assets/pacha_kaki_2.webp',
    'text': 'పచ్చ కాకి'
  },

  '3': {
    'url': '/assets/nemali_maila.jpeg',
    'text': 'నెమలి మైల'
  }
}

const kodi_pingala_last_jamu = 
{
  'header': 'సాయంత్రం 5:30pm నుండి గెలిచే రంగు - కోడి పింగళ' + '\n' + 'కోడి పింగళ వంతులో పెట్టుకోవాల్సిన రంగులు ↓',
  '1': {
    'url': '/assets/kodi_kaki_2.jpeg',
    'text': 'కోడి కాకి'
  },

  '2': {
    'url': '/assets/sethuva.jpeg',
    'text': 'సేతువా'
  },

  '3': {
    'url': '/assets/kodi_pacha_kaki.jpeg',
    'text': 'కోడి పచ్చ కాకి'
  },

  '4': {
    'url': '/assets/kekkirayi.jpeg',
    'text': 'తెల్ల కోడి కొక్కిరాయి'
  },

  '5': {
    'url': '/assets/rasangi.jpeg',
    'text': "కోడి రసంగి"
  }
}


const jsonData = {
    'morning6' : kodi_pingala_first_jamu,

    'morning8' : kaki_dega_second_jamu,
  
    'morning10' : nemali_pingala_third_jamu,
  
    'afternoon1' : kodi_dega_fourth_jamu,
  
    'afternoon3' : kaki_nemali_fifth_jamu,

    'evening' : kodi_pingala_last_jamu
  }
  

const translated = {
  kekkirayi : 'కోడి కొక్కిరాయి',
  thella_kodi_kekkirayi : 'తెల్ల కోడి కొక్కిరాయి',
  kodi_rasangi : "కోడి రసంగి",
  kodi_pacha_kaki : "కోడి పచ్చ కాకి",
  kodi_kaki : "కోడి కాకి",
  kaki_dega_parla : "కాకి డేగ పర్ల",
  erupu_minchina_getti_kaki : "ఎరుపు మించిన గెట్టి కాకి",
  nemali_pingala : "నెమలి పింగళ",
  thella_nemali : "తెల్ల నెమలి",
  pala_abrass : "పాల అబ్రసు",
  kodi_dega : "కోడి డేగ",
  erra_kekkirayi : "ఎర్ర కొక్కిరాయి",
  nemali_poola : "నెమలి పూల",
  kaki_nemali : "కాకి నెమలి",
  pacha_kaki : "పచ్చ కాకి",
  nemali_maila : "నెమలి మైల"
  }


function getCockNames(name) {  
  return name;
}


