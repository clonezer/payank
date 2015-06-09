
var tone = "([่-๋])?";

var firstConsonants = [
    {
      "pattern": "([ฉสผถตขจ][งญนมยรลว])",
      "group": "อักษรนำ 2 พยางค์"                   
    },
    {
      "pattern": "([กขคตปพ]ร)",
      "group": "ควบกล่ำ ร"       
    },
    {
      "pattern": "([กขคปพ]ล)",
      "group": "ควบกล้ำ ล"             
    },
    {
      "pattern": "([กขคปพ]ว)",
      "group": "ควบกล้ำ ว"                   
    },
    {
      "pattern": "(ห[งญนมยรลว])",
      "group": "อักษรนำ ห"                   
    },    
    {
      "pattern": "(อย)",
      "group": "อักษรนำ อ"                   
    },  
    {
      "pattern": "([จซศส]ร)",
      "group": "ควบกล้ำไม่แท้"                   
    },
    {
      "pattern": "(ทร)",
      "group": "ควบกล้ำไม่แท้ ซ"                   
    },
    {
      "pattern": "([ก-ฮ])",
      "group": "ปกติ" 
    }  
    
  ];

var lastConsonants = [
    {
      "pattern": "$",
      "group": "แม่ ก กา"
    },
    {
      "pattern": "(หม)$",
      "group": "แม่ กม"       
    },
    {
      "pattern": "(ตร)$",
      "group": "แม่ กด"       
    },
    {
      "pattern": "(รถ)$",
      "group": "แม่ ด"       
    },
    {
      "pattern": "([ง])$",
      "group": "แม่ กง"       
    },
    {
      "pattern": "([ม])$",
      "group": "แม่ กม"
    },
    {
      "pattern": "([ย])$",
      "group": "แม่ เกย"
    },
    {
      "pattern": "([ว])$",
      "group": "แม่ เกอว"
    },    
    {
      "pattern": "([นญณรลฬ])$",
      "group": "แม่ กน"
    },  
    {
      "pattern": "([กขคฆ])$",
      "group": "แม่ กก"
    },
    {
      "pattern": "([ดจชซฎฏฐฑฒตถทธศษส])$",
      "group": "แม่ กด"
    },
    {
      "pattern": "([บปภพฟ])$",
      "group": "แม่ กบ"
    }
    
  ];

var leadingVowels = [               
                {
                  "name": "เออ",
                  "components": ["เ", "fc", "ิ", tone, "lc"]
                },                
                {
                  "name": "เอีย",
                  "components": ["เ", "fc", "ี", tone, "ย", "lc"]
                },
                {
                  "name": "เอียะ",
                  "components": ["เ", "fc", "ี", tone, "ยะ"]
                },
                {
                  "name": "เอือ",
                  "components": ["เ", "fc", "ื", tone, "อ"]                  
                },
                {
                  "name": "เอือะ",
                  "components": ["เ", "fc", "ื", tone, "อะ"]
                },
                {
                  "name": "เอาะ",
                  "components": ["เ", "fc", tone, "าะ"] 
                },
                {
                  "name": "เอา",
                  "components": ["เ", "fc", tone, "า"]                  
                },
                {
                  "name": "เออ",
                  "components": ["เ", "fc", tone, "อ"]                  
                },
                {
                  "name": "เออะ",
                  "components": ["เ", "fc", tone, "อะ"]                  
                },
                {
                  "name": "เอะ",
                  "components": ["เ", "fc", "็", tone, "lc"]
                },          
                {
                  "name": "เอ",
                  "components": ["เ", "fc", tone, "lc"]
                },
                {
                  "name": "เอะ",
                  "components": ["เ", "fc", tone, "ะ"]
                },                
                {
                  "name": "โอ",
                  "components": ["โ", "fc", tone, "lc"]                  
                },
                {
                  "name": "โอะ",
                  "components": ["โ", "fc", tone, "ะ"]
                },                
                {
                  "name": "แอ",
                  "components": ["แ", "fc", tone, "lc"]                  
                },
                {
                  "name": "แอะ",
                  "components": ["แ", "fc", tone, "ะ"]
                },
                {
                  "name": "ไอ",
                  "components": ["ไ", "fc", tone, "lc"]
                },
                {
                  "name": "ใอ",
                  "components": ["ใ", "fc", tone, "lc"]
                }         
              ];

var tailingVowels = [               
                {
                  "name": "อา",
                  "components": ["fc", tone, "า", "lc"]                  
                },      
                {
                  "name": "อิ",
                  "components": ["fc", "ิ", tone, "lc"]
                },
                {
                  "name": "อี",
                  "components": ["fc", "ี", tone, "lc"]                  
                },
                {
                  "name": "อึ",
                  "components": ["fc", "ึ", tone, "lc"]
                },
                {
                  "name": "อือ",
                  "components": ["fc", "ื", tone, "lc"]
                },
                {
                  "name": "อุ",
                  "components": ["fc", "ุ", tone, "lc"]
                },
                {
                  "name": "อู",
                  "components": ["fc", "ู", tone, "lc"]
                },
                {
                  "name": "อัวะ",
                  "components": ["fc", "ั", tone, "วะ"]
                },
                {
                  "name": "อัว",
                  "components": ["fc", tone, "ว", "lc"] 
                },
                {
                  "name": "อะ",
                  "components": ["fc", tone, "ะ"]
                },
                {
                  "name": "อะ",
                  "components": ["fc", "ั", tone, "lc"] 
                },
                {
                  "name": "อัว",
                  "components": ["fc", "ั", tone, "ว"] 
                },
                {
                  "name": "อำ",
                  "components": ["fc", "ำ", tone]                   
                },
                {
                  "name": "โอะ",
                  "components": ["fc", tone, "lc"]                   
                },
                {
                  "name": "ออ",
                  "components": ["fc", tone, "อ", "lc"]                   
                }
        
              ];

function analyze(word) {
  
  var wordComp = {
    "fullWord": word,
    "noKarun": karunRemover(word),    
    "pattern": null,
    "firstConsonant":null,
    "firstConsonantGroup":null,    
    "lastConsonant":null,    
    "lastConsonantGroup":null,        
    "vowel":null,
    "tone":null    
                 };
  
  word = karunRemover(word);  
  
  //leading check
  var vowel;
  var leadingVowel = /[เ-ไ]/;
  if (leadingVowel.test(word)) {
    //มีสระนำ
    vowel = leadingVowels;    
  }else {
    //ไม่มีสระนำ
    vowel = tailingVowels;
  }
  
    for (var i = 0; i < vowel.length; i++) {// Vowel Loop
      for (var j = 0; j < firstConsonants.length; j++) {// First Consonant Loop
          for (var k = 0; k < lastConsonants.length; k++) {// Last Consonant Loop
            var components = vowel[i].components;
            var fc = firstConsonants[j].pattern;            
            var lc = lastConsonants[k].pattern;
            var pattern = "^";
            for (var l = 0; l < components.length; l++) {// Components Loop
              var component = components[l];
              if (component == "fc") {
                pattern = pattern + fc; 
              }else if (component == "lc") {
                pattern = pattern + lc; 
              }else {
                pattern = pattern + component;
              }
            }
            var patt = new RegExp(pattern);
            
            if(patt.test(word)) {
              wordComp.pattern = pattern;
              wordComp.firstConsonantGroup = firstConsonants[j].group;
              wordComp.lastConsonantGroup = lastConsonants[k].group;
              wordComp.vowel = vowel[i].name;
              
              var match = word.match(pattern);

              wordComp.firstConsonant = getFirstConsonant(match[1]);
              wordComp.tone = findTone(match[2]);
              wordComp.lastConsonant = match[3];

              break;
            }
            
          } 
      }
    }  
  
  return wordComp;
}

function getFirstConsonant(fc) {

  if (fc == "ทร") {//ควบกล้ำไม่แท้
    return "ซ";
  }else if (fc.match("([จซศส])ร")) { //ควบกล้ำไม่แท้
    return fc.match("([จซศส])ร")[1];
  }else if (fc.match("([ฉสผถตขจ])([งญนมยรลว])")) { //อักษรนำ 2 พยางค์
    return "ห" + fc.match("([ฉสผถตขจ])([งญนมยรลว])")[2];
  }else {
    return fc;
  }

}

function karunRemover(word) {
  var noKarun = word.replace(/([ก-ฮ])([(ิุ])?์/g, "");
  return noKarun;  
}

function findTone(toneChar) {
  if (toneChar == "่"){
    return "เอก";
  }else if (toneChar == "้"){
    return "โท";    
  }else if (toneChar == "๊"){
    return "ตรี";    
  }else if (toneChar == "๋"){
    return "จัตวา";    
  }else {
    return "-";
  }
}

function isLastConsonantIn(wordComp, array) {
  for (var i = 0; i < array.length; i++) {
    if (wordComp.lastConsonantGroup == array[i]) {
      return true;
    }
  }
  return false;
}

function isVowelIn(wordComp, array) {
  for (var i = 0; i < array.length; i++) {
    if (wordComp.vowel == array[i]) {
      return true;
    }
  }
  return false;  
}

// verse function

function isDeadWord(wordComp) {
  //คำตาย
  if(isLastConsonantIn(wordComp, ["แม่ กก", "แม่ กบ", "แม่ กด", "แม่ ก กา"])) {
    if (isVowelIn(wordComp, ["อะ", "อิ", "อึ", "อุ", "เอียะ", "เอะ", "แอะ", "เออะ", "โอะ", "อัวะ", "เอาะ"])) {
      return true;
    }  
  }

  return false;  
}

function isAliveWord(wordComp) {
  //คำเป็น
  if(isLastConsonantIn(wordComp, ["แม่ กง", "แม่ กน", "แม่ กม", "แม่ เกย", "แม่ เกอว"])) {
    if (isVowelIn(wordComp, ["อา", "อี", "อื", "อู", "เอีย", "เอ", "แอ", "เออ", "โอ", "อัว", "เอา", "ไอ", "ใอ"])) {
      return true;
    }  
  }

  return false;  
}

function isFirstToneWord(wordComp) {
  //คำเอก
  if (wordComp.tone == "เอก") {
    return true;
  }
  
  return false;
}

function isSecondaryToneWord(wordComp) {
  //คำโท
  if (wordComp.tone == "โท") {
    return true;
  }
  
  return false;  
}

function isRhyme(wordComp1, wordComp2) {
  //สัมผัส
  if (wordComp1.vowel == wordComp2.vowel) {
    if (wordComp1.lastConsonantGroup == wordComp2.lastConsonantGroup) {
        return true;
    }
  }
  
  return false;
}


function analyzeWord() {

  var word = document.getElementById("wordTextField").value;

  var wordResult = analyze(word);
  
  var result = "คำ:  " + wordResult.fullWord + "<br>พยัญชนะ:  " + wordResult.firstConsonant + "<br>สระ:  " + wordResult.vowel + "<br>วรรณยุกต์:  " + wordResult.tone + "<br>ตัวสะกด:  " +  wordResult.lastConsonantGroup;
  
  var div = document.getElementById("result");
  if (div != null) {
    div.parentNode.removeChild(div);  
  };
  

  var resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  resultDiv.className = 'col-lg-3 col-lg-offset-4 result';
  document.getElementsByTagName('body')[0].appendChild(resultDiv);

  var resultP = document.createElement('p');
  resultP.className = 'text-left';

  resultDiv.appendChild(resultP);
  resultP.innerHTML = result;

}
