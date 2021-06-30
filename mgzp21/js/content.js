document.title = 'Eispalast Ludwigslust';

/**
 * landing
 */
let landing = new Vue({
  el: '.landing',
  data: {
    src: './static/img/landing-cake.webp',
    alt: 'Eisfruchtkuchen',
  }
});

/**
 * sorts
 */
let sorts = new Vue({
  el: '.sorts',
  data: {
    start: `Neben diesen regionalen Neuheiten bieten wir unsere bekannten und beliebten Sorten an.<br>
    Geschmacksrichtungen (derzeit lieferbar)`,
    end: `Jede Kugel aus unserem Sortiment kostet 1,30 EUR. &ensp;
    Eine Portion Sahne kostet 1,00 EUR.`,
    sorts: [
      'Sanddorn',
      'Brombeere',
      'Minze',
      'Rhabarber',
      'Haselnuss',
      'Schokolade',
      'Vanille',
      'Erdbeere',
      'Joghurt',
      'Amarena',
      'Himbeere',
      'Mango',
      'Pfefferminz',
      'Malaga',
      'Pistazie',
      'Mokka',
      'Bounty',
      'Zitrone',
      'Nutella',
    ]
  }
});

/**
 * header
 */
let header = new Vue({
  el: 'header',
  data: {
    img: {
      src: './static/img/logo.svg',
      alt: 'Eispalast',
    },
    title: 'Saisonstart',
    event: {
      label: 'Samstag, 4. April 2020',
      datetime: '2020-04-04',
    },
    text: `Nach der Winterpause sind wir wieder für Sie da<br>
    im Straßenverkauf Schlossstraße 45a`
  }
});

/**
 * footer
 */
let footer = new Vue({
  el: 'footer',
  data: {
    img: {
      src: './static/img/3.webp',
      alt: ''
    },
    address: `Eispalast Ludwigslust GmbH & Co. KG &ensp;
    Schlossstraße 45a &ensp;
    19288 Ludwigslust`,
    links: [{
        label: 'info@eispalast-ludwigslust.de',
        href: 'mailto:info@eispalast-ludwigslust.de',
      },
      {
        label: 'www.eispalast-ludwigslust.de',
        href: 'http://eispalast-ludwigslust.de',
      }
    ],
    nav: [{
        label: 'Impressum',
        href: '',
      },
      {
        label: 'Datenschutz',
        href: '',
      }
    ]
  }
});

/**
 * navigation
 */
let nav = new Vue({
  el: 'nav',
  data: {
    items: [{
        'label': 'Eissaison 2020',
        'href': '',
      },
      {
        'label': 'Der Eispalast',
        'href': '',
      },
      {
        'label': 'Lieferservice',
        'href': '',
      },
      {
        'label': 'Kontakt',
        'href': '',
      }
    ]
  }
});

/**
 * sections
 */
let sections = new Vue({
  el: '.sections',
  data: {
    sections: [{
        title: 'Bonuskarte',
        body: `Für jede Eiskugel erhalten Sie einen Stempel in Ihre persönliche Bonuskarte.<br>
        Nach zehn Stempeln genießen Sie eine Kugel mit Sahne gratis.<br>
        Hier können Sie sich Ihre <a>Bonuskarte ausdrucken</a>.`,
      },
      {
        title: 'Lieferservice',
        body: `Nutzen Sie auch diese Saison unseren Lieferservice. Ab einem Mindestbestellwert von 20 EURo liefern wir Ihnen Ihr Lieblingseis kostenlos. <a>Mehr</a>`,
      },
      {
        title: 'Öffnungszeiten',
        body: `Montag bis Freitag 12 bis 20 Uhr<br>
        Samstag, Sonn- und Feiertage 10 bis 20 Uhr<br>
        Kommen Sie in den Eispalast in der Schlossstraße!<br>
        Oder bestellen Sie unter <br>
        <a href="tel:+49387498712">03874/987-12</a>`,
      }
    ]
  }
});

/**
 * carousel
 */
let carousel = new Vue({
  el: '.carousel',
  data: {
    title: 'Neu in dieser Saison',
    body: 'Eis aus heimischen Zutaten',
    items: [{
        title: 'Haselnuss',
        body: `Geröstete Nüsse gepaart mit Salzkaramell, Gewürzen und Splittern schwarzer Schokolade:`,
        slogan: 'Ein Eis mit großem Charakter!',
        color: '#faebd5',
        img: {
          src: './static/img/Haselnuss.webp',
          alt: 'Haselnuss Eiskugel'
        }
      },
      {
        title: 'Minze',
        body: `Wilde Feldminze mit saisonalen Früchten wie Pfirsich, Mispel und Quitte aus der Region:`,
        slogan: 'Immer wieder ein neues Geschmackserlebnis!',
        color: '#cbf6ef',
        img: {
          src: './static/img/Minze.webp',
          alt: 'Minze Eiskugel'
        }
      },
      {
        title: 'Brombeere',
        body: `Die Beere aus den Wäldern der Mecklenburgischen Schweiz, kombiniert mit Tonkabohne und einem Hauch Zimtblüte: `,
        slogan: 'Ein unbeschreiblicher Genuss!',
        color: '#ecc1f8',
        img: {
          src: './static/img/Brombeere.webp',
          alt: 'Brombeere Eiskugel'
        }
      },
      {
        title: 'Rhabarber',
        body: `Karamellisierter Rhabarber kombiniert mit Limette und abgerundet mit Sauerrahm:`,
        slogan: 'Erfrischend anders!',
        color: '#fbdecf',
        img: {
          src: './static/img/Rhabarber.webp',
          alt: 'Rhabarber Eiskugel'
        }
      },
      {
        title: 'Sanddorn',
        body: `Wo sollte dieses leicht herbe Eis besser schmecken als in Ludwigslust, der Stadt des Sanddorns?`,
        slogan: '',
        color: '#fce7c9',
        img: {
          src: './static/img/Sanddorn.webp',
          alt: 'Sanddorn Eiskugel'
        }
      }
    ]
  }
});
