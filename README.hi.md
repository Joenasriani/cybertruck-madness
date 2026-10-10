# Cybertruck Madness '98

[English](Readme.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md)

Three.js से बनाया गया एक प्रयोगात्मक ओपन-वर्ल्ड ब्राउज़र ड्राइविंग गेम, जो 1990 के दशक के अंत के PC ड्राइविंग गेम्स की अराजक और स्वतंत्र भावना से प्रेरित है।

**खेलें:** https://cybertruckmadness.vercel.app

> गेम का सोर्स कोड MIT लाइसेंस के अंतर्गत है और ओपन सोर्स रहेगा। मौजूदा 3D मॉडल और ऑडियो की अलग लाइसेंस शर्तें हैं; कुछ अधिकार अभी सत्यापित नहीं हैं। [ASSETS.md](ASSETS.md) देखें।

## यह क्या है

Cybertruck Madness '98 आपको एक बड़े procedural terrain में ले जाता है, जहाँ आप ड्राइव करते हैं, drift करते हैं, rings इकट्ठा करते हैं, battery संभालते हैं, compass/map से navigate करते हैं और अंत में extraction objective unlock करते हैं।

मौजूदा build में शामिल है:

- Three.js rendering
- बड़ा procedural terrain
- Arcade driving और drift physics
- Cybertruck 3D vehicle
- 500 collectible rings
- Battery / recharge mechanic
- Compass navigation
- Expandable map
- Keyboard controls
- Mobile touch controls
- Camera switching
- Engine, skid, collection और landing audio
- Extraction / mission-complete objective

## Controls

### Desktop

- `W` / `Arrow Up`: accelerate
- `S` / `Arrow Down`: reverse
- `A` / `Arrow Left`: steer left
- `D` / `Arrow Right`: steer right
- `Space`: brake / drift
- Map, camera, music और SFX के लिए HUD buttons इस्तेमाल करें

### Mobile

- Left touch zone: move और steer
- Right touch zone: brake / drift के लिए hold करें
- HUD buttons map, camera, music और SFX नियंत्रित करते हैं

## मौजूदा architecture

फिलहाल project जानबूझकर simple रखा गया है:

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

अधिकांश gameplay logic अभी `index.html` में है। इससे project को inspect करना आसान है, और साथ ही यह contribution का स्पष्ट अवसर देता है: playable behavior बदले बिना systems को धीरे-धीरे modularize करना।

## Local run

Project ES modules और browser-loaded assets का उपयोग करता है, इसलिए `index.html` को सीधे खोलने के बजाय local web server से चलाएँ।

उदाहरण:

```bash
python -m http.server 8000
```

फिर खोलें:

```text
http://localhost:8000
```

फिलहाल build step की ज़रूरत नहीं है।

## इसे आगे बढ़ाने में मदद करें

Contribution के अच्छे क्षेत्र:

- बेहतर vehicle physics और drift behavior
- Ramps, jumps, stunt scoring और tricks
- नए objectives और mission types
- Time trials और checkpoint systems
- Procedural terrain improvements
- Biomes और environmental variety
- Gamepad support
- Mobile control improvements
- Performance profiling और optimization
- Collision improvements
- Audio polish
- अतिरिक्त accessibility settings
- Replay / score systems
- Map और navigation improvements
- `index.html` का progressive modularization

[ROADMAP.md](ROADMAP.md) और [CONTRIBUTING.md](CONTRIBUTING.md) देखें।

## Contribution philosophy

यह project playable, experimental और थोड़ा अजीब बना रहना चाहिए।

उद्देश्य इसे generic framework बनाना नहीं है। Contributions को game को अधिक मज़ेदार, तकनीकी रूप से अधिक रोचक, विस्तार करने में आसान या चलाने में आसान बनाना चाहिए।

बड़े rewrites की तुलना में छोटे और focused Pull Request पसंद किए जाते हैं।

## Project status

मौजूदा स्थिति: **experimental / actively developed**

Live game काम करता है। Source code MIT License के तहत है; contributor workflow और asset-rights documentation अभी भी सुधारे जा रहे हैं।

## समुदाय के Cybertruck मॉडल और योगदानकर्ताओं को श्रेय

**3D कलाकारों और डेवलपरों की ज़रूरत है:** [मौलिक Cybertruck मॉडल में योगदान दें](https://github.com/Joenasriani/cybertruck-madness/issues/15)।

Cybertruck खेल का मुख्य वाहन बना रहेगा। पहले सही अधिकारों वाला एक गेम-रेडी मॉडल चाहिए। बाद में कई मॉडल और वाहन चुनने का विकल्प जोड़ा जा सकता है। अभी कोई नया मॉडल स्वीकृत नहीं हुआ है।

स्वीकृत मॉडल कलाकारों और इंटीग्रेशन डेवलपरों को गेम के अंदर और README में अलग-अलग श्रेय मिलेगा। आप अपना नाम, GitHub यूज़रनेम या गुमनाम श्रेय चुन सकते हैं।

गेम का कोड MIT लाइसेंस में रहेगा। मॉडल और मीडिया के लाइसेंस अलग हैं। नए मॉडल के अधिकार सार्वजनिक पुनर्वितरण, संशोधन और व्यावसायिक उपयोग की अनुमति देने चाहिए। मौजूदा मॉडल के अधिकार अभी अस्पष्ट हैं; [ASSETS.md](ASSETS.md) देखें।

## Licensing और third-party assets

Source code [MIT License](LICENSE) के तहत licensed है।

यह license software source code पर लागू होता है। यह bundled 3D models, music, names, trademarks या अलग source वाले अन्य assets पर अपने-आप अधिकार नहीं देता। मौजूदा provenance और rights status के लिए [ASSETS.md](ASSETS.md) देखें।

## Disclaimer

यह एक unofficial experimental fan project है। इसका Tesla, Microsoft या Motocross Madness के creators से कोई affiliation, endorsement या sponsorship नहीं है।

## Contributing

Pull Request खोलने से पहले [CONTRIBUTING.md](CONTRIBUTING.md) पढ़ें।

अगर आपको Bug, performance issue, gameplay problem या project direction से मेल खाता कोई ठोस idea मिलता है और बदलाव बड़ा है, तो पहले Issue खोलें।
