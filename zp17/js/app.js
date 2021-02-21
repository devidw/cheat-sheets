document.title = 'Kaffeerösterei Clements Tourk';

let nav = new Vue({
  el: 'nav',
  data: {
    menuItems: [
      'Home',
      'Aktuelles',
      'Alles über Kaffee',
      'Online-Shop',
      'Café',
      'Seminare',
      'Kontakt',
      'Impressum',
    ]
  }
});

let header = new Vue({
  el: 'main > header',
  data: {
    headline: `Von Aroma bis Zubereitung:
Unsere Kaffee-Seminare für Sie!`,
    text: 'Wussten Sie schon, dass die belebende Wirkung des Kaffees einst ein äthiopischer Ziegenhirte entdeckt haben soll, als seine Herde auch nachts putzmunter blieb, nachdem sie Beeren einer ungewöhnlichen Pflanze gefressen hatte? Diese und weitere spannende Details rund um den Kaffee-Genuss erfahren Sie bei uns:'
  }
});

let footer = new Vue({
  el: 'footer',
  data: {
    text: '* Bitte beachten Sie: An Feiertagen finden keine Kaffee-Seminare statt.'
  }
});

let article = new Vue({
  el: 'article',
  data: {
    seminars: [{
        title: 'Röstung: Das Ein und Alles',
        image: './img/seminar-1.webp',
        description: 'Sie erleben sämtliche Schritte von der grünen bis zur gerösteten Bohne und erfahren etwas über die Vorzüge der einzelnen Kaffeesorten. Wir laden Sie ein zur Verkostung und schulen Ihre Sinne: So können Sie Ihren Trinkgenuss steigern und Familie und Freunde überraschen.',
        turnus: 'Immer montags*',
        date: 'Montag, 18.30 bis 21 Uhr',
        price: '50,– EUR'
      },
      {
        title: 'Brühkaffee: Da steckt mehr drin',
        image: './img/seminar-2.webp',
        description: 'Sie werden sich wundern, welche aromatische Vielfalt mit dieser altbekannten Zubereitungsart möglich ist. Wir zeigen Ihnen verschiedene Brühmethoden und Sie kosten das Ergebnis. Sie probieren selbst Ihre Lieblingsmethode aus und perfektionieren sie.',
        turnus: 'Immer mittwochs*',
        date: 'Mittwoch, 18.30 bis 21 Uhr',
        price: '45,– EUR'
      },
      {
        title: 'Aufgeschäumt: Das lässt sich sehen',
        image: './img/seminar-3.webp',
        description: 'Sie erfahren, wie der Cappuccino zu seiner perfekten Haube kommt. Sie üben das Schäumen und lernen, wie sich der Milchschaum zu verschiedenen Motiven formen lässt. Wir verraten Ihnen weitere Tricks, wie auch zuhause eine Tasse Kaffee zum Augenschmaus wird.',
        turnus: 'Immer freitags*',
        date: 'Freitag, 18.30 bis 21 Uhr',
        price: '55,– EUR'
      },
    ]
  }
});
