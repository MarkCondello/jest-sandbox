const englishCode = "en-US";
const spanishCode = "es-ES";
const czechCode = "cs-CZ";
function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
        case czechCode.toLowerCase():
          return '/o-nas';
    }
    return '';
}
module.exports = getAboutUsLink;