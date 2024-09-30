// List of syllables by language, organized with first names and last names
const syllabes = {
    francais: {
        prenoms: ['sé', 'ba', 'va', 'lé', 'mi', 'jul', 'soph', 'gui', 'rique', 'pas', 'ma', 'lou', 'jo', 'luc', 'séba', 'astien', 'valé', 'émie', 'jul', 'soph', 'guill', 'illaume', 'érique', 'guerite', 'inique', 'ascale', 'deleine', 'lexandre', 'aguette', 'honhon'],
        noms: ['art', 'du', 'pon', 'rand', 'ber', 'nard', 'mor', 'pey', 'dup', 'lam', 'joy', 'cam', 'artin', 'febvre', 'upont', 'rand', 'ber', 'nard', 'morency', 'perret', 'upéry', 'upuis', 'oyer', 'ammes']
    },
    anglais: {
        prenoms: ['win', 'chris', 'alex', 'nat', 'ben', 'cynd', 'son', 'isa', 'li', 'tom', 'pat', 'win', 'opher', 'chris', 'xander', 'thaniel', 'cynd', 'soni', 'isa', 'ning', 'will', 'teatime'],
        noms: ['wil', 'mit', 'john', 'rick', 'ton', 'son', 'ham', 'lee', 'park', 'jack', 'iamson', 'mith', 'randon', 'rikson', 'sington', 'son', 'ingham', 'rington', 'worth', 'thames', 'icadily']
    },
    japonais: {
        prenoms: ['su', 'ri', 'ga', 'to', 'ko', 'na', 'yu', 'mi', 'ki', 'sa', 'su', 'shi', 'a', 'ri', 'ga', 'to', 'kon', 'ni', 'chi', 'wa', 'tetsu', 'sango', 'sushi', 'ramen'],
        noms: ['ya', 'shi', 'ta', 'fu', 'ka', 'mu', 'na', 'ra', 'mi', 'ku', 'yama', 'tani', 'kawa', 'mura', 'shima', 'fuji', 'itaka', 'uhiko', 'suharu', 'hiko']
    },
    russe: {
        prenoms: ['an', 'ka', 'mi', 'do', 're', 'nik', 'va', 'ser', 'ti', 'vlad', 'ri', 'sergu', 'bori', 'do', 'ma', 're', 'ka', 'ma', 'shi', 'na', 'kni', 'ga', 'so'],
        noms: ['rov', 'nov', 'kov', 'ski', 'nin', 'vich', 'so', 'vin', 'lov', 'pol', 'varitch', 'dropov', 'spout', 'ovitch', 'vich', 'rov']
    },
    espagnol: {
        prenoms: ['ma', 'ri', 'so', 'lu', 'pe', 'an', 'se', 'ca', 'jo', 'an', 'ca', 'sa', 'li', 'bro', 'co', 'che', 'es', 'cue', 'la', 'fa'],
        noms: ['rez', 'lo', 'pez', 'san', 'gos', 'la', 'dez', 'tri', 'dra', 'lan', 'opez', 'alez', 'odrigo', 'diaz', 'guez']
    },
    allemand: {
        prenoms: ['max', 'frie', 'ka', 'le', 'to', 'ben', 'em', 'lu', 'han', 'kla', 'haus', 'schu', 'le', 'au', 'to', 'bu', 'ch', 'fen', 'ster', 'leh'],
        noms: ['ber', 'man', 'min', 'sch', 'wen', 'lin', 'der', 'leh', 'bau', 'wul', 'neider', 'midt', 'shtein', 'uller', 'erger', 'shnei']
    },
    arabe: {
        prenoms: ['ki', 'tab', 'ma', 'sa', 'ra', 'ya', 'bay', 'mo', 'lam', 'dar', 'ki', 'tab', 'ma', 'dra', 'sa', 'say', 'ya', 'ra', 'maa', 'bay'],
        noms: ['ah', 'med', 'ram', 'man', 'sar', 'naz', 'bin', 'hak', 'far', 'lat', 'alsaeed', 'ahmed', 'abdu', 'raman', 'naseer']
    }
};

// Function to get a random syllable from a random language, avoiding repetition of the same language
function getRandomSyllabeExcludeLangue(excludedLangue, type, currentLength, maxLength) {
    const availableLangues = Object.keys(syllabes).filter(langue => langue !== excludedLangue);
    let syllabe, selectedLangue;

    do {
        selectedLangue = availableLangues[Math.floor(Math.random() * availableLangues.length)];
        const syllabesFromLangue = syllabes[selectedLangue][type];
        syllabe = syllabesFromLangue[Math.floor(Math.random() * syllabesFromLangue.length)];
    } while (currentLength + syllabe.length > maxLength);

    return { syllabe, langue: selectedLangue };
}

// Function to generate part of the name (either first name or last name) using syllables from different languages
function genererPartieNom(type, minLength, maxLength) {
    let namePart = '';
    let previousLangue = '';

    while (namePart.length < minLength) {
        const { syllabe, langue } = getRandomSyllabeExcludeLangue(previousLangue, type, namePart.length, maxLength);
        namePart += syllabe;
        previousLangue = langue;

        if (namePart.length >= maxLength) break;
    }
    return namePart;
}

// Function to generate a full name (first name + last name)
function genererNom() {
    const prenom = genererPartieNom('prenoms', 4, 13);
    const nom = genererPartieNom('noms', 6, 18);
    return `${prenom.charAt(0).toUpperCase()}${prenom.slice(1)} ${nom.charAt(0).toUpperCase()}${nom.slice(1)}`;
}

module.exports = genererNom;