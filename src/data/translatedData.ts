import { SupportedLanguage } from './translations';
import { ServiceItem, CLINIC_SERVICES, ConditionItem, CLINIC_CONDITIONS } from './clinicData';

export interface TranslatedServiceData {
  title: string;
  shortDesc: string;
  longDesc?: string;
  benefits?: string[];
  duration?: string;
}

export const TRANSLATED_SERVICES: Record<SupportedLanguage, Record<string, TranslatedServiceData>> = {
  en: {
    'root-canal-treatment': {
      title: 'Root Canal Treatment (Single-Sitting RCT)',
      shortDesc: 'Painless microscopic root canal therapy designed to relieve acute toothache and preserve your natural tooth.',
      duration: '45 - 60 Minutes',
      benefits: [
        'Immediate relief from severe toothache and sensitivity',
        'Preserves your natural tooth root and jawbone structure',
        'Advanced digital apex locator for 100% canal disinfection',
        'Single-sitting completion in most non-abscess cases'
      ]
    },
    'dental-implants': {
      title: 'Dental Implants & All-on-4 Restorations',
      shortDesc: 'Permanent, lifelike tooth replacements anchored by medical-grade titanium and customized zirconia crowns.',
      duration: '2 - 3 Sittings',
      benefits: [
        'Permanent replacement that looks, feels, and functions like a natural tooth',
        'Prevents bone resorption and sagging of facial muscles',
        'No trimming or damage to adjacent healthy teeth',
        'Lifetime warranty options with global passport certification'
      ]
    },
    'orthodontics-invisalign': {
      title: 'Braces & Invisible Clear Aligners',
      shortDesc: 'Discreet orthodontic correction for crowded, spaced, or misaligned teeth using cutting-edge clear aligners.',
      duration: '6 - 18 Months',
      benefits: [
        'Removable, transparent trays for unrestricted eating and brushing',
        '3D digital simulation of your entire smile transformation before starting',
        'Significantly reduced clinic visits and no painful wire pokes',
        'Corrects deep bites, crossbites, gap spaces, and severe crowding'
      ]
    },
    'cosmetic-dentistry': {
      title: 'Cosmetic Dentistry & Smile Design',
      shortDesc: 'Porcelain veneers, cosmetic bonding, and laser teeth whitening for an enchanting, confident smile.',
      duration: '1 - 2 Sittings',
      benefits: [
        'Ultra-thin E-max porcelain veneers tailored to your facial contours',
        'Safe laser teeth whitening lifting stains by up to 6–8 shades',
        'Minimally invasive composite bonding for chips and gaps',
        'Long-lasting stain-resistant aesthetics'
      ]
    },
    'crowns-bridges': {
      title: 'Crowns, Bridges & Zirconia Restorations',
      shortDesc: 'Precision CAD/CAM ceramic and monolithic zirconia caps to protect weak teeth and bridge missing gaps.',
      duration: '2 Sittings',
      benefits: [
        'Metal-free bio-compatible zirconia with 15-year guarantee',
        'Custom computerized color matching with your natural teeth',
        'High bite-resistance for comfortable food chewing',
        'Hermetic marginal seal preventing recurrent tooth decay'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'Painless Wisdom Tooth Extraction',
      shortDesc: 'Micro-surgical removal of impacted, painful, or misaligned third molars with swift healing protocol.',
      duration: '30 - 45 Minutes',
      benefits: [
        'Computer-guided digital nerve mapping before extraction',
        'Local painless anesthesia protocol for maximum comfort',
        'Fast-recovery sutures minimizing swelling and healing time',
        'Protects adjacent second molars from decay and bone loss'
      ]
    }
  },
  ta: {
    'root-canal-treatment': {
      title: 'ரூட் கெனால் சிகிச்சை (ஒரே அமர்வில் RCT)',
      shortDesc: 'கடுமையான பல் வலியை போக்கி, உங்கள் இயற்கையான பல்லை பாதுகாக்கும் வலியற்ற நவீன சிகிச்சை.',
      duration: '45 - 60 நிமிடங்கள்',
      benefits: [
        'கடுமையான பல் வலி மற்றும் கூச்சத்தில் இருந்து உடனடி நிவாரணம்',
        'இயற்கையான பல் வேர் மற்றும் தாடை எலும்பை பாதுகாக்கிறது',
        '100% கிருமி நீக்கத்திற்கான நவீன டிஜிட்டல் தொழில்நுட்பம்',
        'பெரும்பாலான சிகிச்சைகள் ஒரே அமர்வில் நிறைவு'
      ]
    },
    'dental-implants': {
      title: 'பல் இம்ப்ளான்ட் & நவீன பற்கள்',
      shortDesc: 'விழுந்த பற்களுக்கு பதிலாக வாழ்நாள் முழுவதும் நீடிக்கும் டைட்டானியம் இம்ப்ளான்ட் மற்றும் சிர்கோனியா பற்கள்.',
      duration: '2 - 3 அமர்வுகள்',
      benefits: [
        'இயற்கையான பல் போன்ற தோற்றம் மற்றும் மெல்லும் சக்தி',
        'தாடை எலும்பு தேய்மானத்தை தடுத்து முக அழகை காக்கிறது',
        'பக்கத்து பற்களை தேய்க்கவோ குறைக்கவோ தேவையில்லை',
        'வாழ்நாள் உத்தரவாத விருப்பங்கள் மற்றும் சர்வதேச தரம்'
      ]
    },
    'orthodontics-invisalign': {
      title: 'கிளிப் & கண்ணுக்குத் தெரியாத அலைனர்கள்',
      shortDesc: 'கோணலான, இடைவெளி உள்ள பற்களை நேராக்க கண்ணுக்குத் தெரியாத அதிநவீன கிளியர் அலைனர்கள் மற்றும் கிளிப்புகள்.',
      duration: '6 - 18 மாதங்கள்',
      benefits: [
        'சாப்பிடும்போதும் பல் துலக்கும்போதும் கழற்றி மாட்டக்கூடிய எளிமை',
        'சிகிச்சைக்கு முன்பே உங்கள் புன்னகையை காட்டும் 3D டிஜிட்டல் காட்சி',
        'கம்பிகள் குத்தும் வலி இல்லாத சொகுசான சிகிச்சை',
        'பற்களின் இடைவெளி மற்றும் கோணலை மிகச்சரியாக சரிசெய்கிறது'
      ]
    },
    'cosmetic-dentistry': {
      title: 'புன்னகை வடிவமைப்பு & வெண்மையாக்குதல்',
      shortDesc: 'கவர்ச்சிகரமான புன்னகைக்காக போர்சிலின் வெனியர்ஸ் மற்றும் லேசர் பல் வெண்மையாக்கும் சிகிச்சை.',
      duration: '1 - 2 அமர்வுகள்',
      benefits: [
        'முக அமைப்பிற்கு ஏற்ற அல்ட்ரா-தின் E-max போர்சிலின் வெனியர்ஸ்',
        'பற்களின் கறைகளை நீக்கும் பாதுகாப்பான லேசர் சிகிச்சை',
        'உடைந்த பற்களை சீரமைக்கும் காம்போசிட் பாண்டிங்',
        'நீண்ட காலம் நீடிக்கும் கவர்ச்சிகரமான புன்னகை'
      ]
    },
    'crowns-bridges': {
      title: 'சிர்கோனியா கேப் & பிரிட்ஜ் பற்கள்',
      shortDesc: 'பலவீனமான பற்களைப் பாதுகாக்கவும், இடைவெளியை நிரப்பவும் துல்லியமான CAD/CAM சிர்கோனியா கேப்கள்.',
      duration: '2 அமர்வுகள்',
      benefits: [
        'மெட்டல் இல்லாத, 15 ஆண்டுகள் உத்தரவாதத்துடன் கூடிய சிர்கோனியா',
        'இயற்கையான பற்களின் நிறத்துடன் பொருந்தும் கம்ப்யூட்டர் தேர்வு',
        'எளிதாக உணவை மெல்ல உதவும் அதிக உறுதித்தன்மை',
        'மீண்டும் சொத்தை ஏற்படாமல் தடுக்கும் துல்லியமான பொருத்தம்'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'வலியற்ற ஞானப்பல் எடுத்தல்',
      shortDesc: 'தாடையில் சிக்கிய ஞானப்பற்களை விரைவான குணமடைதல் முறையில் வலியின்றி அகற்றும் நவீன அறுவை சிகிச்சை.',
      duration: '30 - 45 நிமிடங்கள்',
      benefits: [
        'அறுவை சிகிச்சைக்கு முன் டிஜிட்டல் நரம்பு வரைபட ஆய்வு',
        'முழுமையான வலியற்ற லோக்கல் அனஸ்தீசியா சிகிச்சை',
        'வீக்கத்தை குறைத்து விரைவாக குணமடைய உதவும் தையல்கள்',
        'அருகிலுள்ள பற்கள் சொத்தையாகாமல் தடுக்கிறது'
      ]
    }
  },
  hi: {
    'root-canal-treatment': {
      title: 'रूट कैनाल उपचार (सिंगल-सिटिंग RCT)',
      shortDesc: 'गंभीर दांत दर्द से तुरंत राहत और प्राकृतिक दांत को बचाने के लिए दर्द रहित आधुनिक रूट कैनाल चिकित्सा।',
      duration: '45 - 60 मिनट',
      benefits: [
        'तेज दांत दर्द और झनझनाहट से तुरंत राहत',
        'प्राकृतिक दांत की जड़ और जबड़े की हड्डी की सुरक्षा',
        '100% कीटाणुशोधन के लिए उन्नत डिजिटल एपेक्स लोकेटर',
        'ज्यादातर मामलों में एक ही बैठक में इलाज पूरा'
      ]
    },
    'dental-implants': {
      title: 'डेंटल इंप्लांट्स और फिक्स्ड दांत',
      shortDesc: 'टूटे या गिरे दांतों के स्थान पर हमेशा के लिए टाइटेनियम इंप्लांट और प्राकृतिक जैसे मजबूत दांत।',
      duration: '2 - 3 बैठकें',
      benefits: [
        'असली दांत जैसा रूप, मजबूती और चबाने की पूरी क्षमता',
        'हड्डी के क्षरण को रोकता है और चेहरे की बनावट बनाए रखता है',
        'आसपास के स्वस्थ दांतों को घिसने की जरूरत नहीं',
        'लाइफटाइम वारंटी विकल्प और वैश्विक प्रमाणन'
      ]
    },
    'orthodontics-invisalign': {
      title: 'ब्रेसिज़ और इनविजिबल अलाइनर्स',
      shortDesc: 'टेढ़े-मेढ़े दांतों को सीधा करने के लिए अदृश्य पारदर्शी अलाइनर्स और आधुनिक क्लिप उपचार।',
      duration: '6 - 18 महीने',
      benefits: [
        'खाने और ब्रश करने के दौरान आसानी से हटाने योग्य ट्रे',
        'इलाज शुरू होने से पहले 3D डिजिटल स्माइल सिमुलेशन',
        'तार चुभने का कोई दर्द नहीं और कम क्लिनिक विज़िट्स',
        'दांतों के बीच की दूरी और टेढ़ेपन का सटीक सुधार'
      ]
    },
    'cosmetic-dentistry': {
      title: 'कॉस्मेटिक डेंटिस्ट्री और स्माइल डिजाइन',
      shortDesc: 'आकर्षक और आत्मविश्वास भरी मुस्कान के लिए पोर्सिलेन विनियर और लेजर टीथ व्हाइटनिंग।',
      duration: '1 - 2 बैठकें',
      benefits: [
        'चेहरे के अनुरूप बने पतले E-max पोर्सिलेन विनियर',
        'दांतों के दाग-धब्बे हटाने के लिए सुरक्षित लेजर तकनीक',
        'टूटे या कटे दांतों के लिए कंपोजिट बॉन्डिंग',
        'लंबे समय तक चलने वाली चमकदार मुस्कान'
      ]
    },
    'crowns-bridges': {
      title: 'ज़िरकोनिया कैप और डेंटल ब्रिज',
      shortDesc: 'कमजोर दांतों की सुरक्षा और खाली जगह भरने के लिए धातु-मुक्त ज़िरकोनिया कैप।',
      duration: '2 बैठकें',
      benefits: [
        '15 साल की वारंटी के साथ धातु-मुक्त बायो-कंपैटिबल ज़िरकोनिया',
        'प्राकृतिक दांतों के रंग से मेल खाता कंप्यूटर मिलान',
        'आसानी से भोजन चबाने के लिए अत्यधिक मजबूती',
        'दोबारा सड़न से बचाने वाला सटीक सुरक्षात्मक सील'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'दर्द रहित अक्ल दाढ़ निकालना',
      shortDesc: 'अटकने या दर्द करने वाली अक्ल दाढ़ को आधुनिक तकनीक से बिना दर्द के सुरक्षित निकालना।',
      duration: '30 - 45 मिनट',
      benefits: [
        'दांत निकालने से पहले डिजिटल तंत्रिका मैपिंग',
        'दर्द-मुक्त आरामदायक लोकल एनेस्थीसिया प्रोटोकॉल',
        'सूजन को कम करने वाले त्वरित रिकवरी टांके',
        'आसपास के स्वस्थ दांतों को सड़न से सुरक्षा'
      ]
    }
  },
  te: {
    'root-canal-treatment': {
      title: 'రూట్ కెనాల్ చికిత్స (సింగిల్-సిట్టింగ్ RCT)',
      shortDesc: 'తీవ్రమైన పంటి నొప్పి నుండి ఉపశమనం పొందడానికి మరియు సహజ పంటిని కాపాడటానికి నొప్పిలేని ఆధునిక చికిత్స.',
      duration: '45 - 60 నిమిషాలు',
      benefits: [
        'తీవ్రమైన పంటి నొప్పి మరియు సున్నితత్వం నుండి తక్షణ ఉపశమనం',
        'సహజ పంటి వేరు మరియు దవడ ఎముకను కాపాడుతుంది',
        'ఖచ్చితమైన డిజిటల్ అపెక్స్ లొకేటర్ పరిజ్ఞానం',
        'చాలావరకు ఒకే సిట్టింగ్‌లో చికిత్స పూర్తి'
      ]
    },
    'dental-implants': {
      title: 'డెంటల్ ఇంప్లాంట్స్ & శాశ్వత పళ్ళు',
      shortDesc: 'ఊడిన పళ్ళ స్థానంలో జీవితాంతం ఉండేలా టైటానియం ఇంప్లాంట్స్ మరియు సహజ సిద్ధమైన క్యాప్స్.',
      duration: '2 - 3 సిట్టింగ్స్',
      benefits: [
        'సహజ పంటి లాంటి రూపం మరియు నమలగల సామర్థ్యం',
        'దవడ ఎముక బలహీనపడకుండా ముఖ రూపాన్ని కాపాడుతుంది',
        'పక్క పళ్ళను అరగదీయాల్సిన అవసరం లేదు',
        'లైఫ్‌టైమ్ వారంటీ మరియు అంతర్జాతీయ ప్రమాణాలు'
      ]
    },
    'orthodontics-invisalign': {
      title: 'క్లిప్స్ & ఇన్విజిబుల్ క్లియర్ అలైన్ర్స్',
      shortDesc: 'వంకర పళ్ళు మరియు సందులను సరిచేయడానికి ఎవరికీ కనిపించని పారదర్శక అలైన్ర్స్.',
      duration: '6 - 18 నెలలు',
      benefits: [
        'తింటున్నప్పుడు సులభంగా తీసివేసే సౌలభ్యం',
        'చికిత్సకు ముందే మీ చిరునవ్వును చూపే 3D డిజిటల్ సిమ్యులేషన్',
        'తీగలు గుచ్చుకునే నొప్పి లేకుండా సులభమైన చికిత్స',
        'పళ్ళ మధ్య సందులు మరియు వంకరలను కచ్చితంగా సరిచేస్తుంది'
      ]
    },
    'cosmetic-dentistry': {
      title: 'కాస్మెటిక్ డెంటిస్ట్రీ & స్మైల్ డిజైన్',
      shortDesc: 'ఆకర్షణీయమైన చిరునవ్వు కోసం పోర్సిలిన్ వెనీర్స్ మరియు లేజర్ టీత్ వైట్నింగ్.',
      duration: '1 - 2 సిట్టింగ్స్',
      benefits: [
        'ముఖ ఆకృతికి సరిపోయే అల్ట్రా-థిన్ E-max వెనీర్స్',
        'పళ్ళపై మరకలను తొలగించే సురక్షిత లేజర్ చికిత్స',
        'విరిగిన పళ్ళకు కాంపోజిట్ బాండింగ్',
        'ఎక్కువ కాలం మెరిసే సహజ చిరునవ్వు'
      ]
    },
    'crowns-bridges': {
      title: 'జిర్కోనియా క్యాప్స్ & డెంటల్ బ్రిడ్జిలు',
      shortDesc: 'బలహీనమైన పళ్ళను రక్షించడానికి మరియు ఖాళీలను పూడ్చడానికి మెటల్-రహిత జిర్కోనియా క్యాప్స్.',
      duration: '2 సిట్టింగ్స్',
      benefits: [
        '15 సంవత్సరాల వారంటీతో మెటల్-రహిత జిర్కోనియా',
        'సహజ పళ్ళ రంగుతో ఖచ్చితంగా సరిపోయేలా కంప్యూటర్ మ్యాచింగ్',
        'ఆహారాన్ని సులభంగా నమలగల అత్యధిక బలం',
        'తిరిగి పిప్పి పళ్ళు రాకుండా నిరోధించే పరిరక్షణ'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'నొప్పిలేని జ్ఞానదంతం తొలగింపు',
      shortDesc: 'సమస్యగా మారిన జ్ఞానదంతాన్ని నొప్పిలేకుండా ఆధునిక పద్ధతిలో తొలగించే చికిత్స.',
      duration: '30 - 45 నిమిషాలు',
      benefits: [
        'తొలగించడానికి ముందే డిజిటల్ నరాల మ్యాపింగ్',
        'నొప్పిలేని లోకల్ అనస్థీషియా ప్రోటోకాల్',
        'త్వరగా నయమయ్యే సున్నితమైన కుట్లు',
        'పక్కనున్న ఆరోగ్యకరమైన పంటికి రక్షణ'
      ]
    }
  },
  kn: {
    'root-canal-treatment': {
      title: 'ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ (ಸಿಂಗಲ್-ಸಿಟ್ಟಿಂಗ್ RCT)',
      shortDesc: 'ತೀವ್ರ ಹಲ್ಲುನೋವಿನಿಂದ ಮುಕ್ತಿ ಮತ್ತು ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ನೋವುರಹಿತ ಚಿಕಿತ್ಸೆ.',
      duration: '45 - 60 ನಿಮಿಷಗಳು',
      benefits: [
        'ತೀವ್ರ ಹಲ್ಲುನೋವು ಮತ್ತು ಜುಮ್ಮೆನಿಸುವಿಕೆಯಿಂದ ತಕ್ಷಣದ ಉಪಶಮನ',
        'ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನ ಬೇರು ಮತ್ತು ದವಡೆಯ ಮೂಳೆಯನ್ನು ಉಳಿಸುತ್ತದೆ',
        '100% ಸೋಂಕು ನಿವಾರಣೆಗೆ ಸುಧಾರಿತ ಡಿಜಿಟಲ್ ತಂತ್ರಜ್ಞಾನ',
        'ಹೆಚ್ಚಿನ ಸಂದರ್ಭಗಳಲ್ಲಿ ಒಂದೇ ಭೇಟಿಯಲ್ಲಿ ಪೂರ್ಣ'
      ]
    },
    'dental-implants': {
      title: 'ದಂತ ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಮತ್ತು ಶಾಶ್ವತ ಹಲ್ಲುಗಳು',
      shortDesc: 'ಬಿದ್ದ ಹಲ್ಲುಗಳ ಜಾಗದಲ್ಲಿ ಶಾಶ್ವತ ಟೈಟಾನಿಯಂ ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಮತ್ತು ಜಿರ್ಕೋನಿಯಾ ಹಲ್ಲುಗಳು.',
      duration: '2 - 3 ಭೇಟಿಗಳು',
      benefits: [
        'ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನಂತೆಯೇ ಕಾಣುವ ಮತ್ತು ಜಗಿಯುವ ಶಕ್ತಿ',
        'ದವಡೆಯ ಮೂಳೆಯ ಸವೆತವನ್ನು ತಡೆದು ಮುಖದ ಅಂದವನ್ನು ಕಾಪಾಡುತ್ತದೆ',
        'ಪಕ್ಕದ ಹಲ್ಲುಗಳನ್ನು ಉಜ್ಜುವ ಅಥವಾ ಸವೆಸುವ ಅಗತ್ಯವಿಲ್ಲ',
        'ಜೀವಮಾನದ ವಾರಂಟಿ ಮತ್ತು ಜಾಗತಿಕ ಗುಣಮಟ್ಟ'
      ]
    },
    'orthodontics-invisalign': {
      title: 'ಕ್ಲಿಪ್ಸ್ & ಅದೃಶ್ಯ ಕ್ಲಿಯರ್ ಅಲೈನರ್‌ಗಳು',
      shortDesc: 'ಡೊಂಕು ಹಲ್ಲುಗಳನ್ನು ನೇರಗೊಳಿಸಲು ಯಾರಿಗೂ ಕಾಣಿಸದ ಪಾರದರ್ಶಕ ಅಲೈನರ್‌ಗಳು.',
      duration: '6 - 18 ತಿಂಗಳುಗಳು',
      benefits: [
        'ಊಟ ಮತ್ತು ಬ್ರಶ್ ಮಾಡುವಾಗ ಸುಲಭವಾಗಿ ತೆಗೆಯುವ ಸೌಲಭ್ಯ',
        'ಚಿಕಿತ್ಸೆಗೆ ಮೊದಲೇ ನಿಮ್ಮ ನಗುವನ್ನು ತೋರಿಸುವ 3D ಡಿಜಿಟಲ್ ತಂತ್ರಜ್ಞಾನ',
        'ತಂತಿ ಚುಚ್ಚುವ ನೋವಿಲ್ಲದ ಸುಲಭ ಚಿಕಿತ್ಸೆ',
        'ಹಲ್ಲುಗಳ ಅಂತರ ಮತ್ತು ವಕ್ರತೆಯನ್ನು ನಿಖರವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ'
      ]
    },
    'cosmetic-dentistry': {
      title: 'ಕಾಸ್ಮೆಟಿಕ್ ದಂತವೈದ್ಯಕೀಯ & ಸ್ಮೈಲ್ ವಿನ್ಯಾಸ',
      shortDesc: 'ಆಕರ್ಷಕ ನಗುವಿಗಾಗಿ ಪೋರ್ಸಿಲಿನ್ ವೆನಿಯರ್ಸ್ ಮತ್ತು ಲೇಸರ್ ಹಲ್ಲು ಬಿಳಿಯಾಗಿಸುವ ಚಿಕಿತ್ಸೆ.',
      duration: '1 - 2 ಭೇಟಿಗಳು',
      benefits: [
        'ಮುಖದ ಆಕಾರಕ್ಕೆ ಸರಿಹೊಂದುವ ಅಲ್ಟ್ರಾ-ತೆಳುವಾದ E-max ವೆನಿಯರ್ಸ್',
        'ಕಲೆಗಳನ್ನು ನಿವಾರಿಸುವ ಸುರಕ್ಷಿತ ಲೇಸರ್ ಚಿಕಿತ್ಸೆ',
        'ಮುರಿದ ಹಲ್ಲುಗಳಿಗೆ ಕಾಂಪೋಸಿಟ್ ಬಾಂಡಿಂಗ್',
        'ದೀರ್ಘಕಾಲಿಕ ಹೊಳೆಯುವ ನೈಸರ್ಗಿಕ ನಗು'
      ]
    },
    'crowns-bridges': {
      title: 'ಜಿರ್ಕೋನಿಯಾ ಕ್ಯಾಪ್ಸ್ & ದಂತ ಬ್ರಿಡ್ಜ್',
      shortDesc: 'ದುರ್ಬಲ ಹಲ್ಲುಗಳನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ಖಾಲಿ ಜಾಗವನ್ನು ತುಂಬಲು ಲೋಹ-ಮುಕ್ತ ಜಿರ್ಕೋನಿಯಾ ಕ್ಯಾಪ್ಸ್.',
      duration: '2 ಭೇಟಿಗಳು',
      benefits: [
        '15 ವರ್ಷಗಳ ವಾರಂಟಿಯೊಂದಿಗೆ ಲೋಹ-ಮುಕ್ತ ಜಿರ್ಕೋನಿಯಾ',
        'ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನ ಬಣ್ಣಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಕಂಪ್ಯೂಟರ್ ಆಯ್ಕೆ',
        'ಆಹಾರವನ್ನು ಸುಲಭವಾಗಿ ಜಗಿಯಲು ಅಧಿಕ ಶಕ್ತಿ',
        'ಮತ್ತೆ ಹುಳುಕು ಬಾರದಂತೆ ರಕ್ಷಿಸುವ ನಿಖರ ಜೋಡಣೆ'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'ನೋವುರಹಿತ ದವಡೆ ಹಲ್ಲು ತೆಗೆಯುವಿಕೆ',
      shortDesc: 'ಸಮಸ್ಯೆಯಾಗಿರುವ ದವಡೆ ಹಲ್ಲನ್ನು ನೋವಿಲ್ಲದೆ ಶೀಘ್ರವಾಗಿ ತೆಗೆಯುವ ಆಧುನಿಕ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.',
      duration: '30 - 45 ನಿಮಿಷಗಳು',
      benefits: [
        'ಹಲ್ಲು ತೆಗೆಯುವ ಮುನ್ನ ಡಿಜಿಟಲ್ ನರಗಳ ನಕ್ಷೆ ಪರಿಶೀಲನೆ',
        'ಸಂಪೂರ್ಣ ನೋವುರಹಿತ ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆ',
        'ಊತವನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಶೀಘ್ರ ಗುಣಮುಖವಾಗುವ ಹೊಲಿಗೆಗಳು',
        'ಪಕ್ಕದ ಆರೋಗ್ಯಕರ ಹಲ್ಲುಗಳಿಗೆ ರಕ್ಷಣೆ'
      ]
    }
  },
  ml: {
    'root-canal-treatment': {
      title: 'റൂട്ട് കനാൽ ചികിത്സ (സിംഗിൾ-സിറ്റിംഗ് RCT)',
      shortDesc: 'കഠിനമായ പല്ലുവേദന മാറ്റി സ്വാഭാവിക പല്ല് സംരക്ഷിക്കുന്ന വേദനയില്ലാത്ത ആധുനിക ചികിത്സ.',
      duration: '45 - 60 മിനിറ്റ്',
      benefits: [
        'പല്ലുവേദനയിൽ നിന്നും പുളിപ്പിൽ നിന്നും പെട്ടെന്നുള്ള ആശ്വാസം',
        'സ്വാഭാവിക പല്ലിന്റെ വേരും താടിയെല്ലും സംരക്ഷിക്കുന്നു',
        '100% അണുവിമുക്തമാക്കുന്ന ആധുനിക ഡിജിറ്റൽ സാങ്കേതികവിദ്യ',
        'ഒറ്റ സിറ്റിംഗിൽ തന്നെ ഭൂരിഭാഗം ചികിത്സയും പൂർത്തിയാക്കുന്നു'
      ]
    },
    'dental-implants': {
      title: 'ഡെന്റൽ ഇംപ്ലാന്റുകളും സ്ഥിരം പല്ലുകളും',
      shortDesc: 'നഷ്ടപ്പെട്ട പല്ലുകൾക്ക് പകരം ആജീവനാന്തം നിലനിൽക്കുന്ന ടൈറ്റാനിയം ഇംപ്ലാന്റുകളും സിർക്കോണിയ പല്ലുകളും.',
      duration: '2 - 3 സിറ്റിംഗുകൾ',
      benefits: [
        'സ്വാഭാവിക പല്ലുപോലെയുള്ള രൂപവും ചവച്ചരയ്ക്കാനുള്ള പൂർണ്ണ ശക്തിയും',
        'താടിയെല്ലിന്റെ തേയ്മാനം തടഞ്ഞ് മുഖസൗന്ദര്യം കാത്തുസൂക്ഷിക്കുന്നു',
        'തൊട്ടടുത്ത പല്ലുകൾക്ക് യാതൊരു കേടും വരുത്തുന്നില്ല',
        'ലൈഫ് ടൈം വാറന്റിയും അന്താരാഷ്ട്ര നിലവാരവും'
      ]
    },
    'orthodontics-invisalign': {
      title: 'ക്ലിപ്പുകളും ഇൻവിസിബിൾ അലൈനറുകളും',
      shortDesc: 'വളഞ്ഞ പല്ലുകൾ നേരെയാക്കാൻ പുറത്തു കാണാത്ത സുതാര്യമായ അലൈനറുകളും ആധുനിക ക്ലിപ്പുകളും.',
      duration: '6 - 18 മാസം',
      benefits: [
        'ഭക്ഷണം കഴിക്കുമ്പോഴും ബ്രഷ് ചെയ്യുമ്പോഴും ഊരി മാറ്റാവുന്ന സൗകര്യം',
        'ചികിത്സയ്ക്ക് മുൻപ് തന്നെ നിങ്ങളുടെ ചിരി കാണിക്കുന്ന 3D സിമുലേഷൻ',
        'കമ്പി കുത്തുന്ന വേദനയില്ലാത്ത സുഖപ്രദമായ ചികിത്സ',
        'പല്ലുകൾക്കിടയിലെ വിടവും വളവും കൃത്യമായി മാറ്റുന്നു'
      ]
    },
    'cosmetic-dentistry': {
      title: 'കോസ്മെറ്റിക് ഡെന്റിസ്ട്രിയും സ്മൈൽ ഡിസൈനും',
      shortDesc: 'മനോഹരമായ ചിരിക്കായി പോർസലൈൻ വെനീറുകളും ലേസർ പല്ല് വെളുപ്പിക്കലും.',
      duration: '1 - 2 സിറ്റിംഗുകൾ',
      benefits: [
        'മുഖത്തിന് ഇണങ്ങുന്ന അൾട്രാ-തിൻ E-max വെനീറുകൾ',
        'കറകൾ നീക്കം ചെയ്യുന്ന സുരക്ഷിതമായ ലേസർ ചികിത്സ',
        'പൊട്ടിയ പല്ലുകൾ ശരിയാക്കുന്ന കോമ്പോസിറ്റ് ബോണ്ടിംഗ്',
        'ദീർഘകാലം തിളങ്ങിനിൽക്കുന്ന മനോഹരമായ ചിരി'
      ]
    },
    'crowns-bridges': {
      title: 'സിർക്കോണിയ ക്യാപ്പുകളും ബ്രിഡ്ജുകളും',
      shortDesc: 'ദുർബലമായ പല്ലുകളെ സംരക്ഷിക്കാനും വിടവുകൾ നികത്താനും മെറ്റൽ രഹിത സിർക്കോണിയ ക്യാപ്പുകൾ.',
      duration: '2 സിറ്റിംഗുകൾ',
      benefits: [
        '15 വർഷം വാറന്റിയുള്ള മെറ്റൽ രഹിത സിർക്കോണിയ',
        'സ്വാഭാവിക പല്ലിന്റെ നിറവുമായി പൊരുത്തപ്പെടുന്ന കമ്പ്യൂട്ടർ തെരഞ്ഞെടുപ്പ്',
        'ഭക്ഷണം എളുപ്പത്തിൽ ചവയ്ക്കാൻ സഹായിക്കുന്ന ഉയർന്ന ബലം',
        'വീണ്ടും പോട് വരാതെ സംരക്ഷിക്കുന്ന കൃത്യമായ ഫിറ്റിംഗ്'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'വേദനയില്ലാതെ അണപ്പല്ല് എടുക്കൽ',
      shortDesc: 'വേദനയുണ്ടാക്കുന്ന അണപ്പല്ലുകൾ വേദനയില്ലാതെ വേഗത്തിൽ എടുത്തുമാറ്റുന്ന ആധുനിക ശസ്ത്രക്രിയ.',
      duration: '30 - 45 മിനിറ്റ്',
      benefits: [
        'പല്ല് എടുക്കുന്നതിന് മുൻപുള്ള ഡിജിറ്റൽ പരിശോധന',
        'വേദനയില്ലാത്ത ലോക്കൽ അനസ്തേഷ്യ രീതി',
        'പെട്ടെന്ന് സുഖപ്പെടാൻ സഹായിക്കുന്ന തുന്നലുകൾ',
        'തൊട്ടടുത്ത ആരോഗ്യകരമായ പല്ലിന്റെ സംരക്ഷണം'
      ]
    }
  },
  es: {
    'root-canal-treatment': {
      title: 'Endodoncia (Tratamiento de Conducto en 1 Sesión)',
      shortDesc: 'Terapia microscópica indolora para aliviar el dolor agudo y preservar su diente natural.',
      duration: '45 - 60 Minutos',
      benefits: [
        'Alivio inmediato del dolor y sensibilidad dental severa',
        'Preserva la raíz natural del diente y el hueso maxilar',
        'Localizador apical digital avanzado para desinfección total',
        'Finalización en una sola sesión en la gran mayoría de casos'
      ]
    },
    'dental-implants': {
      title: 'Implantes Dentales y Prótesis Fijas',
      shortDesc: 'Reemplazos dentales permanentes de titanio médico con coronas de circonio de aspecto natural.',
      duration: '2 - 3 Sesiones',
      benefits: [
        'Reemplazo permanente con apariencia y función de diente natural',
        'Previene la pérdida ósea y el envejecimiento facial prematuro',
        'Sin desgaste ni daño a los dientes sanos adyacentes',
        'Opciones con garantía de por vida y pasaporte internacional'
      ]
    },
    'orthodontics-invisalign': {
      title: 'Ortodoncia y Alineadores Invisibles',
      shortDesc: 'Corrección discreta para dientes apiñados o separados con alineadores transparentes de última generación.',
      duration: '6 - 18 Meses',
      benefits: [
        'Férulas removibles y transparentes para comer y cepillarse con libertad',
        'Simulación digital 3D de su nueva sonrisa antes de iniciar',
        'Menos visitas clínicas y sin molestias de alambres metálicos',
        'Corrige mordidas cruzadas, apiñamiento y espacios dentales'
      ]
    },
    'cosmetic-dentistry': {
      title: 'Odontología Estética y Diseño de Sonrisa',
      shortDesc: 'Carillas de porcelana, microadhesión y blanqueamiento dental láser para una sonrisa radiante.',
      duration: '1 - 2 Sesiones',
      benefits: [
        'Carillas ultrafinas E-max adaptadas a la armonía de su rostro',
        'Blanqueamiento dental láser seguro aclarando de 6 a 8 tonos',
        'Adhesión estética mínimamente invasiva para bordes y fracturas',
        'Estética duradera y resistente a las manchas'
      ]
    },
    'crowns-bridges': {
      title: 'Coronas y Puentes de Circonio CAD/CAM',
      shortDesc: 'Fundas de porcelana y circonio sin metal para proteger dientes debilitados y cubrir espacios.',
      duration: '2 Sesiones',
      benefits: [
        'Circonio biocompatible libre de metal con 15 años de garantía',
        'Coincidencia digital exacta con el tono de sus dientes naturales',
        'Máxima resistencia para masticar con total confianza',
        'Sellado hermético que evita futuras caries secundarias'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'Extracción Indolora de Muelas del Juicio',
      shortDesc: 'Extracción microquirúrgica de cordales impactados con protocolo de cicatrización rápida sin dolor.',
      duration: '30 - 45 Minutos',
      benefits: [
        'Mapeo digital del nervio antes de la extracción',
        'Anestesia local indolora para máxima comodidad',
        'Suturas de recuperación rápida que minimizan la inflamación',
        'Protege los molares contiguos de caries y pérdida ósea'
      ]
    }
  },
  ar: {
    'root-canal-treatment': {
      title: 'علاج جذور الأسنان (جلسة واحدة)',
      shortDesc: 'علاج مجهري بدون ألم لتخفيف آلام الأسنان الشديدة والحفاظ على سنك الطبيعي.',
      duration: '45 - 60 دقيقة',
      benefits: [
        'تسكين فوري لآلام الأسنان الحادة وحساسية العصب',
        'يحافظ على جذر السن الطبيعي وعظام الفك',
        'محدد قمة رقمي متطور لتعقيم القنوات بنسبة 100%',
        'إتمام العلاج في جلسة واحدة لأغلب الحالات'
      ]
    },
    'dental-implants': {
      title: 'زراعة الأسنان والتركيبات الثابتة',
      shortDesc: 'بدائل دائمة للأسنان المفقودة باستخدام التيتانيوم الطبي وتيجان الزركونيا الفاخرة.',
      duration: '2 - 3 جلسات',
      benefits: [
        'بديل دائم يماثل السن الطبيعي تماماً في الشكل وقوة المضغ',
        'يمنع ذوبان عظام الفك ويحافظ على ملامح الوجه',
        'بدون أي برد أو إضرار بالأسنان السليمة المجاورة',
        'خيارات ضمان مدى الحياة مع توثيق دولي'
      ]
    },
    'orthodontics-invisalign': {
      title: 'تقويم الأسنان والقوالب الشفافة',
      shortDesc: 'تصحيح غير مرئي للأسنان المزدحمة أو المتباعدة باستخدام أحدث التقويمات الشفافة.',
      duration: '6 - 18 شهراً',
      benefits: [
        'قوالب شفافة قابلة للإزالة لتناول الطعام وتنظيف الأسنان بسهولة',
        'محاكاة رقمية ثلاثية الأبعاد لشكل ابتسامتك قبل بدء العلاج',
        'زيارات أقل وبدون وخز أسلاك التقويم التقليدي',
        'تصحيح دقيق للعضات المعكوسة والفراغات وازدحام الأسنان'
      ]
    },
    'cosmetic-dentistry': {
      title: 'تجميل الأسنان وتصميم الابتسامة',
      shortDesc: 'عدسات فينير الخزفية وتبييض الأسنان بالليزر للحصول على ابتسامة مشرقة وواثقة.',
      duration: '1 - 2 جلسات',
      benefits: [
        'عدسات إيماكس فائقة النحافة مصممة وفق أبعاد وجهك',
        'تبييض ليزر آمن يفتح لون الأسنان حتى 8 درجات',
        'حشوات تجميلية لعلاج الكسور والفراغات بدقة',
        'نتائج جمالية طويلة الأمد ومقاومة للتصبغ'
      ]
    },
    'crowns-bridges': {
      title: 'تيجان وجسور الزركونيا الرقمية',
      shortDesc: 'أغطية خالية من المعادن لحماية الأسنان الضعيفة وتعويض الفراغات بدقة CAD/CAM.',
      duration: 'جلستان',
      benefits: [
        'زركونيا متوافقة حيوياً مع ضمان لمدة 15 عاماً',
        'مطابقة رقمية دقيقة للون الأسنان الطبيعية',
        'مقاومة فائقة لقوة المضغ براحة تامة',
        'إغلاق حوافي دقيق يمنع تسوس الأسنان المتكرر'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'خلع ضرس العقل بدون ألم',
      shortDesc: 'خلع جراحي دقيق لأضراس العقل المطمورة مع بروتوكول الشفاء السريع وبدون ألم.',
      duration: '30 - 45 دقيقة',
      benefits: [
        'تصوير رقمي لتحديد مسار العصب بدقة قبل الخلع',
        'تخدير موضعي متطور لراحة تامة أثناء الإجراء',
        'خيوط جراحية سريعة الالتئام تقلل التورم',
        'حماية الأضراس المجاورة من التسوس وتراجع العظام'
      ]
    }
  },
  fr: {
    'root-canal-treatment': {
      title: 'Traitement de Canal / Dévitalisation (1 Séance)',
      shortDesc: 'Thérapie endodontique microscopique sans douleur pour soulager les maux de dents et préserver la dent.',
      duration: '45 - 60 Minutes',
      benefits: [
        'Soulagement immédiat de la douleur dentaire aiguë et de la sensibilité',
        'Préserve la racine naturelle et la masse osseuse de la mâchoire',
        'Localisateur d’apex numérique pour une désinfection à 100%',
        'Réalisé en une seule séance dans la grande majorité des cas'
      ]
    },
    'dental-implants': {
      title: 'Implants Dentaires & Réhabilitations Fixes',
      shortDesc: 'Remplacement dentaire permanent en titane biocompatible et couronnes en zircone sur mesure.',
      duration: '2 - 3 Séances',
      benefits: [
        'Remplacement permanent identique à une vraie dent en esthétique et mastication',
        'Évite la perte osseuse et l’affaissement des traits du visage',
        'Aucune altération des dents saines adjacentes',
        'Options avec garantie à vie et passeport implantaire international'
      ]
    },
    'orthodontics-invisalign': {
      title: 'Orthodontie & Aligneurs Invisibles',
      shortDesc: 'Alignement discret pour dents chevauchées ou espacées grâce aux gouttières transparentes modernes.',
      duration: '6 - 18 Mois',
      benefits: [
        'Gouttières amovibles et transparentes pour manger et se brosser sans contrainte',
        'Simulation numérique 3D de votre futur sourire avant de commencer',
        'Rendez-vous cliniques réduits et sans douleur de fils métalliques',
        'Corrige l’encombrement dentaire, les écarts et les surocclusions'
      ]
    },
    'cosmetic-dentistry': {
      title: 'Dentisterie Esthétique & Smile Design',
      shortDesc: 'Facettes dentaires en porcelaine, collage esthétique et blanchiment laser pour un sourire étincelant.',
      duration: '1 - 2 Séances',
      benefits: [
        'Facettes ultra-fines E-max adaptées à l’harmonie de votre visage',
        'Blanchiment dentaire laser sécurisé éclaircissant de 6 à 8 teintes',
        'Composites esthétiques pour réparer les éclats et petits écarts',
        'Esthétique durable et résistante aux taches'
      ]
    },
    'crowns-bridges': {
      title: 'Couronnes & Bridges en Zircone CAD/CAM',
      shortDesc: 'Chapes sans métal pour consolider les dents fragilisées et combler les espaces manquants.',
      duration: '2 Séances',
      benefits: [
        'Zircone biocompatible sans métal garantie 15 ans',
        'Correspondance informatique précise avec la teinte naturelle des dents',
        'Excellente résistance pour mastiquer en toute sérénité',
        'Joint marginal étanche prévenant les récidives de caries'
      ]
    },
    'wisdom-tooth-removal': {
      title: 'Extraction Indolore des Dents de Sagesse',
      shortDesc: 'Extraction micro-chirurgicale douce des dents de sagesse incluses avec protocole de guérison rapide.',
      duration: '30 - 45 Minutes',
      benefits: [
        'Cartographie numérique préalable du nerf dentaire',
        'Anesthésie locale douce pour un confort maximal',
        'Sutures à cicatrisation rapide minimisant l’œdème',
        'Protège les molaires voisines des caries et déchaussements'
      ]
    }
  }
};

/**
 * Helper to get list of services translated in the current language
 */
export function getTranslatedClinicServices(lang: SupportedLanguage): ServiceItem[] {
  const serviceTranslations = TRANSLATED_SERVICES[lang] || TRANSLATED_SERVICES.en;
  
  return CLINIC_SERVICES.map((s) => {
    const tData = serviceTranslations[s.slug];
    if (!tData) return s;

    return {
      ...s,
      title: tData.title || s.title,
      shortDesc: tData.shortDesc || s.shortDesc,
      duration: tData.duration || s.duration,
      benefits: tData.benefits && tData.benefits.length > 0 ? tData.benefits : s.benefits,
    };
  });
}
