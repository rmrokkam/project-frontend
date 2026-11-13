// Translations are a reasonable first draft, not reviewed by a native
// speaker — worth a proofread pass by a Telugu/Hindi speaker before guests
// see this page. "Rokkam" (the family name) is a proper noun and keeps the
// same name in every language, just transliterated into that language's
// script; venue names are also left untranslated.

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
];

export const DEFAULT_LANGUAGE = 'en';

// "Rokkam Vari Pelli Sandadi" is Telugu for "Rokkam family's wedding
// celebration" — translated per language rather than kept as a fixed string.
export const WEDDING_TITLE = {
  en: 'Rokkam Family Wedding Celebration',
  te: 'రొక్కం వారి పెళ్లి సందడి',
  hi: 'रोक्कम परिवार का विवाह उत्सव',
};

export const UI_TEXT = {
  en: {
    eyebrow: "You're Invited",
    subtitle: 'Event Schedule',
    addFullCalendar: 'Add Full Schedule to Calendar',
    addCalendar: '+ Calendar',
    getDirections: 'Get Directions',
    onwards: 'onwards',
  },
  te: {
    eyebrow: 'మీకు ఆహ్వానం',
    subtitle: 'కార్యక్రమ షెడ్యూల్',
    addFullCalendar: 'పూర్తి షెడ్యూల్‌ను క్యాలెండర్‌కు జోడించండి',
    addCalendar: '+ క్యాలెండర్',
    getDirections: 'దిశలను పొందండి',
    onwards: 'నుండి',
  },
  hi: {
    eyebrow: 'आपको आमंत्रित किया गया है',
    subtitle: 'कार्यक्रम अनुसूची',
    addFullCalendar: 'पूरा शेड्यूल कैलेंडर में जोड़ें',
    addCalendar: '+ कैलेंडर',
    getDirections: 'दिशा-निर्देश प्राप्त करें',
    onwards: 'से',
  },
};

export const DAY_LABELS = {
  Thursday: { en: 'Thursday', te: 'గురువారం', hi: 'गुरुवार' },
  Friday: { en: 'Friday', te: 'శుక్రవారం', hi: 'शुक्रवार' },
  Saturday: { en: 'Saturday', te: 'శనివారం', hi: 'शनिवार' },
  Sunday: { en: 'Sunday', te: 'ఆదివారం', hi: 'रविवार' },
};

export const EVENT_TITLES = {
  'thu-lunch': { en: 'Lunch', te: 'భోజనం', hi: 'दोपहर का भोजन' },
  'thu-sangeet': { en: 'Sangeet', te: 'సంగీత్', hi: 'संगीत' },
  'fri-photoshoot': { en: 'Family Photoshoot', te: 'కుటుంబ ఫోటోషూట్', hi: 'पारिवारिक फोटोशूट' },
  'fri-lunch': { en: 'Lunch', te: 'భోజనం', hi: 'दोपहर का भोजन' },
  'fri-dinner': { en: 'Dinner', te: 'రాత్రి భోజనం', hi: 'रात्रि भोज' },
  'sat-haldi': { en: 'Haldi (Muhurtham)', te: 'పసుపు (ముహూర్తం)', hi: 'हल्दी (मुहूर्त)' },
  'sat-pellikuturu': { en: 'Pellikuturu', te: 'పెళ్లికూతురు', hi: 'पेल्लिकूतुरु' },
  'sat-lunch': { en: 'Lunch', te: 'భోజనం', hi: 'दोपहर का भोजन' },
  'sat-mehendi': { en: 'Mehendi', te: 'మెహందీ', hi: 'मेहंदी' },
  'sat-dinner': { en: 'Dinner', te: 'రాత్రి భోజనం', hi: 'रात्रि भोज' },
  'sun-vratam': { en: 'Vratam', te: 'వ్రతం', hi: 'व्रतम' },
  'sun-lunch': { en: 'Lunch', te: 'భోజనం', hi: 'दोपहर का भोजन' },
  'sun-wedding-event': {
    en: 'Wedding Event (Programme Begins)',
    te: 'వివాహ కార్యక్రమం (ప్రారంభం)',
    hi: 'विवाह समारोह (कार्यक्रम प्रारंभ)',
  },
  'sun-muhurtham': { en: 'Muhurtham', te: 'ముహూర్తం', hi: 'मुहूर्त' },
};
