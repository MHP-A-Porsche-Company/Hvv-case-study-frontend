const staticCharactersData = [
  {
    id: 9,
    staticName: "Biggs Darklighter",
    quote: "Die Macht ist in jeder Ecke der Stadt stark.",
    description: "So sehr ich es liebte, einen X-Wing zu fliegen, das Leben als Pilot war immer intensiv - Luftkämpfe, Weltraumschlachten und ständig über die Schulter schauen. Jetzt, als Busfahrer der Hamburger Hochbahn, sind die Dinge... ruhiger. Die Stadt hat ihren eigenen Rhythmus, und mein Bus durch die Straßen zu lenken, gibt mir ein Gefühl der Verbundenheit mit den Menschen, wie es Weltraumschlachten nie konnten. Es hat etwas Beruhigendes, die Elbphilharmonie vorbeigleiten zu sehen, statt feindliche Jäger, und die Gespräche der Passagiere zu hören, statt Alarmsirenen. Hamburg ist mein neues Cockpit geworden, und ich bin froh, einen ruhigeren, bodenständigeren Weg gefunden zu haben, zu dienen.",
  },
  {
    id: 10,
    staticName: "Obi-Wan Kenobi",
    quote: "Die Macht ist stark in dieser Stadt, aber auch die Security...",
    description: "Als Jedi lernt man, vielen Herausforderungen zu begegnen, aber ich muss zugeben, die häufigen Auseinandersetzungen mit den Sicherheitskräften Hamburgs wegen meiner Roben sind... ermüdend. Es scheint, dass meine traditionelle Kleidung — ein Symbol des Friedens und der Weisheit in der Galaxis — hier auf der Erde allerdings Verdacht erregt. Oft muss ich erklären, dass ich nichts unter diesen Roben verberge, außer vielleicht das Gewicht unzähliger Schlachten. Ich suche nur Frieden in dieser geschäftigen Stadt, aber meine Roben scheinen überall, wo ich gehe, Konflikte zu schüren.",
  },
  {
    id: 2,
    staticName: "C-3PO",
    quote: "Die Busse dieser Stadt sind ein Abenteuer.",
    description: "In dieser Stadt Hamburg finde ich den Mangel an Genauigkeit ziemlich beunruhigend. Besonders die Verkehrsbusse lassen an Präzision vermissen, was im krassen Gegensatz zu den geordneten Umgebungen der höheren Gesellschaft der Galaxis steht. Meine Schaltkreise müssen sich ständig neu kalibrieren, um sich an diesen neuen, unvorhersehbaren Rhythmus anzupassen. Dennoch, trotz dieser Herausforderungen, gibt es einen gewissen Charme in der Vielfalt der Kultur der Stadt und ihrer Mischung aus Alt und Neu. Man könnte sogar sagen, es ist ein bisschen wie das Navigieren in der Galaxis — voller Überraschungen und unerwarteter Wendungen.",
  },
  {
    id: 5,
    staticName: "Leia Organa",
    quote: "Rebellion schläft nie, auch nicht in Hamburg.",
    description: "Das lebendige Leben in Hamburg ist eine willkommene Abwechslung zu den chaotischen galaktischen Schlachten, aber es erinnert mich immer noch an den anhaltenden Kampf für Gerechtigkeit. Die leidenschaftliche Kultur und Widerstandsfähigkeit der Stadt spiegeln meine eigene rebellische Natur wider. Ob ich mich durch die belebten Straßen bewege oder an Veranstaltungen teilnehme, ich finde die Energie hier belebend. Hamburgs Mischung aus Geschichte und Moderne spiegelt den Kampf um Freiheit und die Hoffnung auf eine bessere Zukunft wider, die mir am Herzen liegen. In jeder Ecke gibt es einen Funken des Widerstands und eine Erinnerung daran, dass der Kampf für eine bessere Welt weitergeht.",
  },
  {
    id: 3,
    staticName: "R2-D2",
    quote: "Beep-boop! Die Technik dieser Stadt ist faszinierend.",
    description: "Hamburgs technologische Landschaft ist ziemlich faszinierend. Von der raffinierten Architektur bis zu den fortschrittlichen öffentlichen Verkehrssystemen gibt es viel zu entdecken. Auch wenn die Stadt keine Hyperantriebe oder Blaster hat, bieten ihre modernen Annehmlichkeiten und der innovative Geist eine andere Art von Aufregung. Ich genieße es, die Technik der Stadt zu analysieren und meine eigenen Daten in die Mischung einzubringen. Inmitten des Trubels ist es eine Freude zu sehen, wie diese lebendige Metropole funktioniert und mit ihrer einzigartigen technologischen Umgebung zu interagieren.",
  },
  {
    id: 4,
    staticName: "Darth Vader",
    quote: "Liebt die Dunkelheit zwischen den U-Bahn-Stationen.",
    description: "Als Dunkler Lord der Sith finde ich den Hamburger Dom eine äußerst interessante Erfahrung. Der Nervenkitzel der Fahrgeschäfte ist eine willkommene Ablenkung von den Zwängen der galaktischen Herrschaft, während die lebhaften Menschenmengen mich an die unaufhaltsame Energie des Imperiums erinnern. Das mächtige Riesenrad bietet eine Aussicht, die so beherrschend ist wie meine eigene Präsenz, und das Aroma der lokalen Küche verführt sogar jemanden so disziplinierten wie mich. In diesem lebhaften Jahrmarkt spüre ich sowohl die Macht des Volkes als auch gelegentlich eine Störung der Macht — ein Ort, der sowohl zur Entspannung als auch zur Beobachtung geeignet ist.",
  },
  {
    id: 1,
    staticName: "Luke Skywalker",
    quote: "Jedes Abenteuer beginnt mit einem einzigen Schritt.",
    description: "In Hamburg finde ich, dass jede Ecke ein neues Abenteuer bietet, ähnlich wie die Galaxis selbst. Von der historischen Architektur bis zu den lebhaften Märkten spiegelt der Geist der Stadt die Aufregung der Erkundung wider. Ob ich entlang der Elbe spaziere oder versteckte Schätze in der Stadt entdecke, ich werde daran erinnert, wie wichtig es ist, neue Erfahrungen zu machen. Hamburgs vielfältige und dynamische Natur inspiriert mich und spiegelt die Reise der Selbstfindung und des Heldentums wider, die meinen Weg als Jedi geprägt hat. Es ist eine Erinnerung daran, dass die Macht in jeder neuen Erfahrung stark ist, die wir unternehmen.",
  },
  {
    id: 13,
    staticName: "Chewbacca",
    quote: "Rrrrgh... (Übersetzung: Natur und Frieden finde ich hier.)",
    description: "Rrrrgh... (Übersetzung: Als Wookiee ist der Hamburger Stadtpark eine perfekte Flucht vor dem Chaos der Galaxis. Die weiten offenen Flächen erinnern mich an die Wälder von Kashyyyk, und die Bäume bieten eine Ruhe, die ich selten finde. Es hat etwas Friedliches, durch den Park zu spazieren, die Vögel zu hören und den Wind in meinem Fell zu spüren. Die großen Flächen des Parks erlauben es mir, meine Beine nach langen Weltraumreisen zu strecken, und die frische Luft ist eine willkommene Abwechslung zu der abgestandenen Luft eines Raumschiffs. Es ist der perfekte Ort, um sich zu entspannen und die Natur zu genießen — ohne sich um Sturmtruppen sorgen zu müssen!)",
  },
  {
    id: 20,
    staticName: "Yoda",
    quote: "Hamburgs Balance spiegelt die Harmonie der Macht wider.",
    description: "In Hamburg sesshaft geworden bin ich, und viel Freude bringt es mir. Das Gleichgewicht der Stadt zwischen Natur und lebendigem Leben spricht meine Seele an, tut es. Die friedlichen Parks und der fließende Fluss Elbe erinnern mich an die Gelassenheit von Dagobah, aber hier finde ich auch die Energie einer geschäftigen Stadt. Von der Architektur der Elbphilharmonie bis zu den ruhigen Ecken von Planten un Blomen, überall, wo ich hingehe, spüre ich die Stärke und Ruhe dieses Ortes. Glücklich ich bin, Hamburg mein Zuhause zu nennen.",
  },
  {
    id: 21,
    staticName: "Palpatine",
    quote: "Selbst in Hamburg verweilt die dunkle Seite.",
    description: "Als Imperator der Galaxis würde man erwarten, dass Hamburg eine Stadt bietet, die meiner Macht würdig ist. Leider enttäuscht sie in vielerlei Hinsicht. Der ständige Regen, die düstere Atmosphäre und die endlosen Menschenmengen... irritierend, gelinde gesagt. Es gibt jedoch einen Ort, der etwas in mir weckt — die Statue von Bismarck. Dort finde ich einen Hauch von Autorität und Stärke, eine Aura, die mit meiner eigenen Resonanz hat. Unter Bismarcks Blick zu sitzen, spüre ich eine Verbindung zur wahren Macht. Der Rest von Hamburg? Es verblasst im Vergleich. Nur zu Bismarcks Füßen kann ich die Mittelmäßigkeit dieser Stadt ertragen.",
  },
  {
    id: 22,
    staticName: "Boba Fett",
    quote: "Hamburgs ruhiger Charme passt zu einem Kopfgeldjäger.",
    description: "Die Elbe hat eine Art, die Dinge in Bewegung zu halten, nicht wahr? Hier am Elbstrand, diese Containerschiffe zu beobachten — ruhig, ohne Eile, einfach die Arbeit erledigend. Ein bisschen wie ich an einem guten Tag. In meinem Beruf gibt es nicht viel Freizeit, aber diese Stadt... sie hat Charme. Ruhig und ohne Schnickschnack, genau wie ich es mag. Es mag nicht mein üblicher Schauplatz sein, aber hey, selbst ein Kopfgeldjäger braucht eine Pause. Es könnte schlimmere Orte geben, oder?",
  },
  {
    id: 23,
    staticName: "IG-88",
    quote: "Effizienz ist der Schlüssel im Hamburger Radwegenetz.",
    description: "Effizienz ist alles — und das Stadtrad Hamburg macht es perfekt. Schnell, einfach und überall, es ist ideal, um durch die Stadt zu rasen, von der Elbe bis zur Speicherstadt. Hamburgs Straßen waren noch nie so spaßig zu dominieren — selbst für einen Droiden, der für das Kopfgeldjagen gebaut wurde!",
  },
  {
    id: 24,
    staticName: "Bossk",
    quote: "In Hamburg ist die Jagd genauso aufregend wie immer.",
    description: "Hamburg ist mein Jagdgebiet — geschäftig, unvorhersehbar und voller interessanter Ziele. Die Mischung aus Alt und Neu hält mich auf Trab, und das Essen ist nicht schlecht für jemanden, der an Rationen auf einem Raumschiff gewöhnt ist. Außerdem kann ich in der Menge untertauchen, bis ich bereit bin, zuzuschlagen. Perfekt!",
  }
];

export default staticCharactersData;
