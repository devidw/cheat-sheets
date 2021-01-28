let landing = new Vue({
  el: '#landing',
  data: {
    headline: 'Eine Marke mit Visionen, inspiriert vom Lebensgefühl unserer Erde',
    text: 'Wir produzieren für dich Möbel mit Weitblick und Sorgfalt, damit sie für lange Zeit bestehen, aber dabei ihre natürliche Schönheit und Funktion nicht verlieren. Eines unserer Hauptanliegen ist es, dass im gesamten Entstehungs- und Lebenszyklus unserer Möbel weder du noch die Umwelt oder die Hersteller zu Schaden kommen. Nur wenn all diese Kriterien erfüllt sind, sind wir zufrieden und geben unsere Möbel guten Gewissens an dich weiter.'
  }
});

let nature = new Vue({
  el: '#nature',
  data: {
    headline: 'Wir haben uns mit dem besten Designer der Welt zusammengetan: Der Natur.',
    blocks: [{
        subtitle: 'Wir lieben Holz.',
        text: 'Am Anfang des sinnvollen Einsatzes von Ressourcen steht der nachhaltig bewirtschaftete Wald, der mit der Kraft der Sonne immer wieder nachwächst. Das edle, europäische Laubholz verarbeiten wir mit größter Sorgfalt und Achtsamkeit zu einzigartigen Designmöbeln, die unsere Liebe zum Holz in jedem einzelnen Detail spürbar machen. Nachhaltigkeit und Verantwortung, Wertschöpfung im Einklang mit Mensch und Natur, bestimmen bei CORAX das Denken und Handeln.'
      },
      {
        text: 'Die Kombination der beiden ursprünglichsten Materialien die die Natur hervorgebracht hat, machen unsere Möbelstücke einzigartig und langlebig. Versprochen.'
      },
      {
        text: 'Unsere Materialien stammen aus Mitteleuropa und werden regional verarbeitet. \
        Kurze Wege und die Einbindung der unmittelbaren Infrastruktur stehen für uns an oberster Stelle. Bei jedem Schritt unseres Prozesses ist es unser Ziel, Abfall zu vermeiden und unseren ökologischen Fußabdruck so klein wie möglich zu halten. Das Holz wächst lange Zeit in den Wäldern und muss vor der Weiterverarbeitung durch unsere Tischler getrocknet werden. Anschließend wird es sortiert und zu Platten verleimt. Dafür verwenden wir einen natürlichen Weißleim ohne Formaldehyd oder andere Zusatzstoffe - ein Prozess, der viel Erfahrung und Fingerspitzengefühl erfordert.'
      },
      {
        subtitle: 'So wird Einrichten zum Kinderspiel.',
        text: 'Ob attraktives Einzelmöbel, offene Komponente in den Wohnprogrammen oder optional mit Glastüren in Küchen und Beimöbel integriert - das Gestaltungselement spannt den roten Faden durch alle Wohnbereiche und bietet Ihnen jede Menge kreativen Freiraum bei der individuellen Gestaltung Ihres Zuhauses. Und dabei sind die flexiblen Naturholzkorpusse der Gestaltungselemente buchstäblich offen für alles.'
      },
      {
        subtitle: 'Alles aus einer Hand. Nämlich unserer.\
        Arbeitgeber mit Holz, Metall und Seele.',
        text: 'Wir sind ein kleiner Arbeitgeber in der Region. Die Aus- und Weiterbildung unserer Mitarbeiter sind uns sehr wichtig. Wir sehen die Menschen und ihr Können immer als Ganzes und versuchen Kompetenzen zu steigern, Perspektiven und Aufstiegschancen zu geben. So fördern wir auch ältere Mitarbeiter und helfen, Arbeit und Familie vereinbar zu machen.'
      },
      {
        subtitle: 'Einkauf mit der richtigen Einstellung.',
        text: 'Wir legen Wert auf regionale Einkaufsstrukturen. Dabei achten wir als Möbelhersteller penibel darauf, dass auch unsere Lieferanten die Werte unseres Unternehmens mittragen. Außerdem ist neben den kurzen Wegen und der entsprechend geringeren Schadstoff- und CO2-Belastung auch die Flexibilität eines regionalen Lieferantennetzwerkes ein wichtiger Bestandteil der betrieblichen Leistungsfähigkeit von CORAX. Ein weiterer positiver Effekt liegt in der Schaffung und Erhaltung von hochwertigen Arbeitsplätzen in der Region.'
      },
      {
        subtitle: 'Von A wie Ankleide bis Z wie Zen-Zimmer.',
        text: 'Wir fertigen Massivholzmöbel für alle Wohnbereiche. Egal ob Küche, Essen, Wohnen, Schlafen oder Kind: Wir haben das Richtige für alle Räume in Ihrem Zuhause. Und dabei messen wir uns in jedem Bereich mit den Besten. Unser umfassendes Know-how und die Synergieeffekte durch das breite Angebot helfen uns dabei, Ihr Zuhause immer als Ganzes und z.B. auch im Kontext der Architektur zu sehen.'
      }
    ]
  }
});

let coreValues = new Vue({
  el: '#coreValues',
  data: {
    headline: 'Die Kernwerte',
    blocks: [{
      subtitle: 'Nachwachsende Rohstoffe',
        text: 'Wir finden, dass uns die Natur mit vielen Rohstoffen beschenkt hat, aus denen man wunderbar Möbel schaffen kann. Wir versuchen deshalb, die Natur so gut wie möglich an dich weiterzugeben: Natürliche Materialien sind unser Grundwerkstoff - ganz ohne Schadstoffe.'
      },
      {
        subtitle: 'Von A bis Z durchdacht',
        text: 'Vom Design über den Herstellungsprozess bis hin zur Lagerhaltung durchleuchten wir jeden einzelnen Schritt und versuchen dabei, ein bestmögliches Verhältnis zwischen Qualität und Preis zu schaffen.'
      },
      {
        subtitle: 'Sinneserlebnis Coraxdentity',
        text: 'Der turbulente Alltag bringt schon genug Anstrengungen mit sich. Da sind unsere Möbel der perfekte Ausgleich: Natur die man spürt, Natur die man riecht. Das Gesamtkonzept ergibt ein pures Sinneserlebnis.\
        Kurz gesagt:  CORAXDENTITY'
      },
      {
        text: 'Damit dein Möbelstück so lange wie möglich so bleibt wie du es bekommen hast, haben wir eine Corax Care Box zusammengestellt.'
      },
      {
        text: 'Diese beinhaltet die Corax Care Instructions - eine ausführlich Pflegeanleitung. Mit einem Reinigungspad für Verunreinigungen am Holz, einem Naturölfläschchen und einem Stofftuch kannst du von Zeit zu Zeit deine Möbel nachölen und kleine Ausbesserungen vornehmen.'
      },
    ]
  }
});

let legal = new Vue({
  el: '#legal',
  data: {
    headline: 'Impressum',
    pairs: [{
        'label': 'Verantwortlich für den Inhalt',
        'content': 'Morten Rayk\
        Fischbacherbergstr. 2\
        57072 Siegen',
      },
      {
        'label': 'Öffnungszeiten',
        'content': 'MO - DO (8:00 - 17:00), FR (8:00 - 12:00)',
      },
      {
        'label': 'Telefon',
        'content': '0271 233264149',
      },
      {
        'label': 'Bank',
        'content': 'Sparkasse Siegen',
      },
      {
        'label': 'IBAN',
        'content': 'DE90 2032 0321 0029 2568',
      },
      {
        'label': 'BIC',
        'content': 'ASPKAT2LXXX',
      },
      {
        'label': 'Umsatzsteuer-ID',
        'content': 'DE 68738645',
      },
    ]
  }
});
