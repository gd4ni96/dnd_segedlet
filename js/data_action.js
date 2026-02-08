data_action = [
    {
        title: "Támadás",
        icon: "crossed-swords",
        subtitle: "Közelharci vagy távolsági támadás",
        description: "Hajts végre egy közelharci vagy távolsági fegyvertámadást",
        reference: "PHB, 192., 194–195. o.",
        bullets: [
            "Bizonyos képességek, például a harcos <i>Extra Támadás</i> képessége lehetővé teszik, hogy egynél több támadást hajts végre ezzel az akcióval. Minden támadás külön dobás, és különböző lényeket is célozhat. A támadások között mozoghatsz.",
            "Ha könnyű közelharci fegyverrel támadsz, bónusz akcióként támadhatsz a másik kezeddel is (lásd <i>Melléktámadás</i> bónusz akció).",
            "Az egyik közelharci támadásodat lecserélheted egy <i>Birkózásra</i> vagy egy <i>Lökésre</i>.",
            "Bizonyos állapotok előnyt adnak a támadásra: vak, bénult, megkövesedett, megkötözött, elkábított vagy eszméletlen célpontok elleni támadások; hason fekvő célpont elleni közelharci támadások; láthatatlan vagy rejtőzködő támadó támadásai.",
            "Bizonyos állapotok hátrányt adnak a támadásra: láthatatlan vagy rejtőzködő célpont elleni támadások; hason fekvő célpont elleni távolsági támadások; vak, megrémült, megmérgezett vagy megkötözött támadó támadásai."
        ]
    },
    {
        title: "Megragadás",
        icon: "grab",
        subtitle: "Speciális közelharci támadás",
        description: "Megpróbálsz megragadni vagy lefogni egy lényt",
        reference: "PHB, 195. o.",
        bullets: [
            "A <i>Támadás</i> akcióval végrehajthatsz egy speciális közelharci támadást, a birkózást. Ha az Akcióval több támadásra is képes vagy, ez a támadás az egyik helyébe lép.",
            "A célpont legfeljebb egy méretkategóriával lehet nagyobb nálad, és a hatótávolságodon belül kell lennie.",
            "Legalább egy szabad kézzel megpróbálod megragadni a célpontot: Erő (Atlétika) próbát dobsz, amit a célpont Erő (Atlétika) vagy Ügyesség (Akrobatika) próbája ellenez (a célpont választ).",
            "Siker esetén a célpont megkapja a megragadott állapotot (a sebessége 0-ra csökken)."
        ]
    },
    {
        title: "Lökés",
        icon: "hand",
        subtitle: "Speciális közelharci támadás",
        description: "Ellöksz egy lényt, hogy hasra essen vagy eltávolodjon tőled",
        reference: "PHB, 195. o.",
        bullets: [
            "A <i>Támadás</i> akcióval végrehajthatsz egy speciális közelharci támadást, a lökést. Ha az Akcióval több támadásra is képes vagy, ez a támadás az egyik helyébe lép.",
            "A célpont legfeljebb egy méretkategóriával lehet nagyobb nálad, és a hatótávolságodon belül kell lennie.",
            "Erő (Atlétika) próbát dobsz, amit a célpont Erő (Atlétika) vagy Ügyesség (Akrobatika) próbája ellenez (a célpont választ).",
            "Ha megnyered az ellenpróbát, a célpont vagy hasra esik, vagy 5 lábbal eltávolodik tőled."
        ]
    },
    {
        title: "Varázslás",
        icon: "magic-swirl",
        subtitle: "Varázslási idő: 1 akció",
        description: "Varázslat elmondása, amelynek varázslási ideje 1 akció",
        reference: "PHB, 192. o.",
        bullets: [
            "Ugyanabban a körben nem varázsolhatsz egy varázslatot akcióval és egy másikat bónusz akcióval, kivéve ha az akcióval egy cantripet varázsolsz.",
            "A varázslat célpontjának a varázslat hatótávolságán belül kell lennie. A célzásához tiszta útvonal szükséges, tehát nem lehet teljes fedezék mögött.",
            "Az anyagi komponensek nem fogyasztódnak el, hacsak a varázslat kifejezetten nem mondja. Ha nincs feltüntetve költség, feltételezhető, hogy elhanyagolható, és a komponens elérhető egy komponenserszényben.",
            "Egyes varázslatok koncentrációt igényelnek. Ha elveszíted a koncentrációt, a varázslat véget ér. Elveszíted a koncentrációt, ha egy másik koncentrációt igénylő varázslatot varázsolsz, vagy ha cselekvőképtelenné válsz. Minden alkalommal, amikor sebzést szenvedsz, Alkotmány mentődobást kell tenned a koncentráció fenntartásához. A DC értéke 10 vagy a kapott sebzés fele (amelyik nagyobb)."
        ]
    },
    {
        title: "Sprintelés",
        icon: "sprint",
        subtitle: "Mozgási sebesség megduplázása",
        description: "Extra mozgást kapsz a jelenlegi körödre",
        reference: "PHB, 192. o.",
        bullets: [
            "A növekedés mértéke megegyezik a sebességeddel, minden módosító alkalmazása után."
        ]
    },
    {
        title: "Elmozdulás",
        icon: "journey",
        subtitle: "Lehetőség támadások elkerülése",
        description: "A mozgásod nem vált ki lehetőség támadásokat a kör végéig",
        reference: "PHB, 192. o.",
        bullets: [
        ]
    },
    {
        title: "Védekezés",
        icon: "aura",
        subtitle: "Védelem növelése",
        description: "Teljes mértékben a támadások elkerülésére koncentrálsz",
        reference: "PHB, 192. o.",
        bullets: [
            "A következő köröd kezdetéig minden ellened irányuló támadás hátránnyal történik, ha látod a támadót, és Ügyesség mentődobásaid előnnyel zajlanak.",
            "Ez az előny megszűnik, ha <i>cselekvőképtelenné</i> válsz, vagy ha a sebességed 0-ra csökken."
        ]
    },
    {
        title: "Kiszabadulás",
        icon: "manacles",
        subtitle: "Szabadulás fogásból",
        description: "Kiszabadulsz egy birkózásból",
        reference: "PHB, 195. o.",
        bullets: [
            "A birkózásból való szabaduláshoz Erő (Atlétika) vagy Ügyesség (Akrobatika) próbát kell dobnod, amit a birkózó Erő (Atlétika) próbája ellenez.",
            "Más, mozgást korlátozó állapotokból (például bilincsek) való szabadulás Ügyesség vagy Erő próbát igényelhet, az adott állapot leírása szerint."
        ]
    },
    {
        title: "Segítség",
        icon: "telepathy",
        subtitle: "Előny biztosítása egy szövetségesnek",
        description: "Előnyt adsz egy szövetségesnek képességpróbára vagy támadásra",
        reference: "PHB, 192. o.",
        bullets: [
            "A célpont előnyt kap a következő képességpróbájára, amelyet az általad segített feladat végrehajtására tesz.",
            "Alternatívaként a célpont előnyt kap a következő támadásdobására egy olyan lény ellen, amely 5 lábon belül van tőled.",
            "Az előny a következő köröd kezdetéig tart."
        ]
    },
    {
        title: "Tárgy használata",
        icon: "snatch",
        subtitle: "Interakció, speciális képességek",
        description: "Egy második tárggyal való interakció vagy speciális tárgyképesség használata",
        reference: "PHB, 193. o.",
        bullets: [
            "A köröd során egy tárggyal ingyen interakcióba léphetsz (például fegyvert rántasz vagy ajtót nyitsz). Ha egy második tárggyal is interakcióba lépnél, ehhez ezt az akciót kell használnod.",
            "Ha egy tárgy használata akciót igényel, akkor ezt az akciót hajtod végre."
        ]
    },
    {
        title: "Pajzs használata",
        icon: "round-shield",
        subtitle: "Pajzs fel- vagy levétele",
        description: "Pajzs fel- vagy levétele",
        reference: "PHB, 144–146. o.",
        bullets: [
            "A pajzs fel- és levétele mindig egy akciót igényel.",
            "A páncél fel- és levétele több percet vesz igénybe."
        ]
    },
    {
        title: "Rejtőzködés",
        icon: "hood",
        subtitle: "",
        description: "Megpróbálsz elrejtőzni",
        reference: "PHB, 192. o.",
        bullets: [
            "Nem rejtőzködhetsz egy olyan lény elől, amely lát téged. Teljes fedezékben kell lenned, erősen takart területen, láthatatlannak kell lenned, vagy más módon el kell takarnod az ellenség látását.",
            "Ha zajt csapsz (például kiabálsz vagy feldöntesz egy vázát), felfeded a helyzetedet.",
            "Amikor rejtőzködni próbálsz, Ügyesség (Lopakodás) próbát dobsz, és feljegyzed az eredményt. Amíg fel nem fedeznek vagy abba nem hagyod a rejtőzködést, ezt az értéket minden olyan lény Bölcsesség (Észlelés) próbája ellenezi, amely aktívan keres téged.",
            "Egy lény akkor is észrevesz, ha nem keres aktívan, hacsak a Lopakodás próbád nem magasabb, mint a passzív Észlelése.",
            "Harcokon kívül is használhatsz Ügyesség (Lopakodás) próbát például ellenségek elől való elrejtőzésre, őrök melletti elsurranásra, észrevétlen eltűnésre, vagy valakihez való odalopózásra."
        ]
    },
    {
        title: "Keresés",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Figyelmedet valamire összpontosítod",
        reference: "PHB, 193. o.",
        bullets: [
            "A keresés jellegétől függően a KM Bölcsesség (Észlelés) vagy Intelligencia (Vizsgálat) próbát kérhet."
        ]
    },
    {
        title: "Felkészülés",
        icon: "stopwatch",
        subtitle: "Kiváltó ok és akció kiválasztása",
        description: "Kiválasztasz egy kiváltó eseményt és egy reakciót",
        reference: "PHB, 193. o.",
        bullets: [
            "Először eldöntöd, milyen észlelhető körülmény váltja ki a reakciódat.",
            "Ezután kiválasztod az akciót, amit végrehajtasz a kiváltó esemény hatására, vagy dönthetsz úgy, hogy legfeljebb a sebességeddel mozogsz.",
            "Amikor a kiváltó esemény bekövetkezik, a reakciódat közvetlenül utána végrehajthatod, vagy figyelmen kívül hagyhatod.",
            "Ha egy varázslatot készítesz elő, normál módon elmondod, de visszatartod az energiáját, és a reakcióddal szabadítod fel, amikor a kiváltó esemény bekövetkezik. Az előkészítéshez a varázslat varázslási idejének 1 akciónak kell lennie, és a varázslat fenntartása koncentrációt igényel."
        ]
    },
    {
        title: "Klassz képesség használata",
        icon: "embrassed-energy",
        subtitle: "Egyes képességek akciót igényelnek",
        description: "Egy faji vagy osztályképesség használata, amely akciót igényel",
        reference: "Lásd az osztály leírását további információkért.",
        bullets: [
        ]
    },
    {
        title: "Stabilizálása",
        icon: "first-aid",
        subtitle: "Elsősegély egy haldokló lénynek",
        description: "Megakadályozod, hogy egy haldokló lény halálmentő dobásokat tegyen",
        reference: "PHB, 197. o.",
        bullets: [
            "Bölcsesség (Gyógyítás) próba DC 10 ellen",
            "Siker esetén a lény stabil állapotba kerül, és nem kell többé halálmentő dobásokat tennie",
            "Egy stabil lény 1 életerőt nyer vissza 1d4 óra elteltével"
        ]
    },
    {
        title: "Improvizáció",
        icon: "juggler",
        subtitle: "Bármely, a listán nem szereplő akció",
        description: "Bármilyen elképzelhető akció végrehajtása",
        reference: "PHB, 193. o.",
        bullets: [
            "Ha olyan akciót írsz le, amelyet a szabályok máshol nem részleteznek, a KM megmondja, hogy az lehetséges-e, és milyen dobás szükséges (ha egyáltalán) a siker vagy kudarc eldöntéséhez."
        ]
    }
]
