data_condition = [
    {
        title: "Vak",
        icon: "one-eyed",
        subtitle: "Nem látsz semmit",
        description: "Nem érzékeled vizuálisan a környezetedet, minden látásalapú cselekvés ellehetetlenül.",
        reference: "PHB, 290. o.",
        bullets: [
            "Automatikusan elbuksz minden olyan képességpróbát, amely látást igényel.",
            "Hátrányod van a támadásdobásokra.",
            "Az ellened irányuló támadásdobások előnnyel történnek."
        ]
    },
    {
        title: "Megbűvölt",
        icon: "smitten",
        subtitle: "Vmi/Vki befolyása alatt vagy",
        description: "Egy másik lény mágikus vagy természetfeletti módon befolyásolja a viselkedésedet vele szemben.",
        reference: "PHB, 290. o.",
        bullets: [
            "Nem támadhatod meg a megbűvölődet, és nem célozhatod őt káros képességekkel vagy mágikus hatásokkal.",
            "A megbűvölőd előnyt kap minden olyan képességpróbára, amely a veled való társas interakcióra irányul."
        ]
    },
    {
        title: "Süket",
        icon: "elf-ear",
        subtitle: "Nem hallasz semmit",
        description: "Nem érzékeled a hangokat, minden hallásalapú észlelés automatikusan sikertelen.",
        reference: "PHB, 290. o.",
        bullets: [
            "Automatikusan elbuksz minden olyan képességpróbát, amely hallást igényel."
        ]
    },
    {
        title: "Kimerültség",
        icon: "crawl",
        subtitle: "Fizikailag és mentálisan kimerült vagy",
        description: "A tested és elméd túlterhelt; a hatás súlyossága a kimerültség szintjétől függ.",
        reference: "PHB, 291. o.",
        bullets: [
            "<table><tr><th>Szint</th><th></th><th></th><th style='text-align:left'>Hatás</th></tr><tr><td>1</td><td></td><td></td><td>Hátrány minden képességpróbára</td></tr><tr><td>2</td><td></td><td></td><td>Sebesség feleződik</td></tr><tr><td>3</td><td></td><td></td><td>Hátrány támadásdobásokra és mentődobásokra</td></tr><tr><td>4</td><td></td><td></td><td>Maximális életerő feleződik</td></tr><tr><td>5</td><td></td><td></td><td>Sebesség 0-ra csökken</td></tr><tr><td>6</td><td></td><td></td><td>Halál</td></tr></table>",
            "A jelenlegi kimerültségi szinted és az összes alacsonyabb szint hatása is érvényes rád.",
            "Egy hosszú pihenés befejezése 1-gyel csökkenti a kimerültség szintjét, feltéve hogy ettél és ittál is.",
            "A halálból való feltámasztás szintén 1-gyel csökkenti a lény kimerültségi szintjét."
        ]
    },
    {
        title: "Megfélemlített",
        icon: "sharp-smile",
        subtitle: "A félelem átveszi feletted az uralmat",
        description: "Egy konkrét forrás félelmet kelt benned, ami korlátozza a cselekedeteidet.",
        reference: "PHB, 290. o.",
        bullets: [
            "Hátrányod van képességpróbákra és támadásdobásokra, amíg a félelmed forrása a látómeződön belül van.",
            "Nem mozoghatsz szándékosan közelebb a félelmed forrásához."
        ]
    },
    {
        title: "Megragadott",
        icon: "grab",
        subtitle: "Valaki fizikailag visszatart",
        description: "Egy másik lény fizikailag lefog vagy megragad, megakadályozva a mozgásodat.",
        reference: "PHB, 290. o.",
        bullets: [
            "A sebességed 0-ra csökken, és nem részesülhetsz semmilyen sebességnövelő bónuszban.",
            "Az állapot megszűnik, ha a megragadód cselekvőképtelenné válik.",
            "Az állapot akkor is megszűnik, ha kikerülsz a megragadód hatótávolságából."
        ]
    },
    {
        title: "Cselekvőképtelen",
        icon: "internal-injury",
        subtitle: "Nem tudsz akciót vagy reakciót végrehajtani",
        description: "Nem tudsz akciót vagy reakciót használni, és nem tudsz aktívan részt venni a harcban.",
        reference: "PHB, 290. o.",
        bullets: [
        ]
    },
    {
        title: "Láthatatlan",
        icon: "invisible",
        subtitle: "Nem látható a tested",
        description: "Nem vagy érzékelhető látással, hacsak valaki nem rendelkezik különleges érzékeléssel vagy mágiával.",
        reference: "PHB, 291. o.",
        bullets: [
            "Rejtőzködés szempontjából erősen takartnak számítasz.",
            "Zaj vagy nyomok alapján továbbra is észlelhető vagy.",
            "Előnyöd van a támadásdobásokra.",
            "Az ellened irányuló támadásdobások hátránnyal történnek."
        ]
    },
    {
        title: "Bénult",
        icon: "internal-injury",
        subtitle: "Teljes mozgásképtelenség",
        description: "Nem tudsz mozogni vagy beszélni; a tested teljesen lebénult.",
        bullets: [
            "Cselekvőképtelen vagy, nem tudsz mozogni vagy beszélni.",
            "Az ellened irányuló támadásdobások előnnyel történnek.",
            "Minden támadás, amely eltalál, kritikus találat, ha a támadó 5 lábon belül van.",
            "Automatikusan elbukod az Erő és Ügyesség mentődobásokat."
        ]
    },
    {
        title: "Megkövesedett",
        icon: "stone-pile",
        subtitle: "Kővé váltál",
        description: "A tested élettelen, szilárd anyaggá változott, miközben tudatod általában megszűnik érzékelni a külvilágot.",
        reference: "PHB, 291. o.",
        bullets: [
            "A testsúlyod tízszeresére nő, és megszűnsz öregedni.",
            "Cselekvőképtelen vagy, nem tudsz mozogni vagy beszélni, és nem vagy tudatában a környezetednek.",
            "Az ellened irányuló támadásdobások előnnyel történnek.",
            "Automatikusan elbukod az Erő és Ügyesség mentődobásokat.",
            "Ellenállásod van minden sebzéssel szemben.",
            "Immunis vagy a méregre és a betegségekre, bár a már a szervezetedben lévő méreg vagy betegség csak felfüggesztődik, nem szűnik meg."
        ]
    },
    {
        title: "Megmérgezett",
        icon: "deathcab",
        subtitle: "Méreg hatása alatt állsz",
        description: "A szervezetedet méreg gyengíti, ami hátráltatja a cselekvéseidet.",
        reference: "PHB, 292. o.",
        bullets: [
            "Hátrányod van a támadásdobásokra és a képességpróbákra."
        ]
    },
    {
        title: "Hason fekvő",
        icon: "crawl",
        subtitle: "A földön fekszel",
        description: "A földre kerültél, és csak kúszva tudsz mozogni, amíg fel nem állsz.",
        reference: "PHB, 292. o.",
        bullets: [
            "Az egyetlen mozgási lehetőséged a kúszás, hacsak fel nem állsz.",
            "Hátrányod van a támadásdobásokra.",
            "Az ellened irányuló támadásdobások előnnyel történnek, ha a támadó 5 lábon belül van, egyébként hátránnyal."
        ]
    },
    {
        title: "Megkötözött",
        icon: "imprisoned",
        subtitle: "Mozgásod korlátozva van",
        description: "Fizikai kötelékek vagy mágikus hatások akadályozzák a mozgásodat.",
        reference: "PHB, 292. o.",
        bullets: [
            "A sebességed 0-ra csökken, és nem részesülhetsz semmilyen sebességnövelő bónuszban.",
            "Hátrányod van a támadásdobásokra.",
            "Az ellened irányuló támadásdobások előnnyel történnek.",
            "Hátrányod van az Ügyesség mentődobásokra."
        ]
    },
    {
        title: "Elkábított",
        icon: "internal-injury",
        subtitle: "Zavart és cselekvőképtelen vagy",
        description: "Mentálisan és fizikailag lelassult vagy, nem tudsz rendesen reagálni.",
        reference: "PHB, 292. o.",
        bullets: [
            "Cselekvőképtelen vagy, nem tudsz mozogni, és csak akadozva tudsz beszélni.",
            "Az ellened irányuló támadásdobások előnnyel történnek.",
            "Automatikusan elbukod az Erő és Ügyesség mentődobásokat."
        ]
    },
    {
        title: "Eszméletlen",
        icon: "coma",
        subtitle: "Nem vagy magadnál",
        description: "Teljesen elvesztetted az eszméletedet, és nem érzékeled a külvilágot.",
        reference: "PHB, 292. o.",
        bullets: [
            "Cselekvőképtelen vagy, nem tudsz mozogni vagy beszélni, és nem vagy tudatában a környezetednek.",
            "Elejted mindazt, amit tartasz, és hasra esel.",
            "Az ellened irányuló támadásdobások előnnyel történnek.",
            "Minden támadás, amely eltalál, kritikus találat, ha a támadó 5 lábon belül van.",
            "Automatikusan elbukod az Erő és Ügyesség mentődobásokat."
        ]
    },
    {
        title: "Haldokló",
        icon: "dead-head",
        subtitle: "Az élet és halál határán",
        description: "0 életerőn vagy, eszméletlen állapotban, és minden körben a túlélésért küzdesz.",
        reference: "PHB, 197. o.",
        bullets: [
            "Ha olyan sebzés miatt esel 0 életerőre, amely nem öl meg azonnal, eszméletlen állapotba kerülsz és haldokolsz.",
            "Ha bármilyen gyógyítást kapsz, azonnal visszanyered az eszméletedet, és már nem haldokolsz.",
            "Haldoklás közben minden köröd elején halálmentő dobást teszel. Dobj egy d20-at, módosítók nélkül.",
            "10 vagy magasabb érték siker, 9 vagy alatta kudarc.",
            "A harmadik siker után stabil állapotba kerülsz.",
            "A harmadik kudarc után meghalsz.",
            "1 dobása két kudarcnak számít.",
            "20 dobása azonnal 1 életerőt ad vissza.",
            "Egy szövetséges stabilizálhat a Stabilizálás akcióval, ha sikeresen teljesít egy DC 10 Bölcsesség (Gyógyítás) próbát.",
            "Stabil állapotban 1 életerőt nyersz vissza 1d4 óra elteltével."
        ]
    }
]
