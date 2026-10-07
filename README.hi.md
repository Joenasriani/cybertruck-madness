# Cybertruck Madness '98

Three.js से बनाया गया एक प्रयोगात्मक ओपन-वर्ल्ड ब्राउज़र ड्राइविंग गेम, जो 1990 के दशक के अंत के PC ड्राइविंग गेम्स की अराजक और स्वतंत्र भावना से प्रेरित है।

**खेलें:** https://cybertruckmadness.vercel.app

> यह रिपॉज़िटरी सार्वजनिक है और व्यापक समुदाय योगदान के लिए तैयार की जा रही है। परियोजना को पूरी तरह open source कहने से पहले सॉफ़्टवेयर लाइसेंस और third-party assets के अधिकारों की पुष्टि अभी जारी है।

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

- `W` / `Arrow Up` — accelerate
- `S` / `Arrow Down` — reverse
- `A` / `Arrow Left` — steer left
- `D` / `Arrow Right` — steer right
- `Space` — brake / drift
- Map, camera, music और SFX के लिए HUD buttons इस्तेमाल करें

### Mobile

- Left touch zone — move और steer
- Right touch zone — brake / drift के लिए hold करें
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

मौजूदा स्थिति: **experimental / community-readiness phase**

Live game काम करता है। Source code MIT License के तहत है; contributor workflow और asset-rights documentation अभी भी सुधारे जा रहे हैं।

## Licensing और third-party assets

Source code [MIT License](LICENSE) के तहत licensed है।

यह license software source code पर लागू होता है। यह bundled 3D models, music, names, trademarks या अलग source वाले अन्य assets पर अपने-आप अधिकार नहीं देता। मौजूदा provenance और rights status के लिए [ASSETS.md](ASSETS.md) देखें।

## Disclaimer

यह एक unofficial experimental fan project है। इसका Tesla, Microsoft या Motocross Madness के creators से कोई affiliation, endorsement या sponsorship नहीं है।

## Contributing

Pull Request खोलने से पहले [CONTRIBUTING.md](CONTRIBUTING.md) पढ़ें।

अगर आपको Bug, performance issue, gameplay problem या project direction से मेल खाता कोई ठोस idea मिलता है और बदलाव बड़ा है, तो पहले Issue खोलें।
