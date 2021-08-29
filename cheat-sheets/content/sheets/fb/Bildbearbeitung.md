---
title: "Bildbearbeitung"
date: 2020-09-30T15:03:13+02:00
tags: ["fb"]
---

## Über
30.09.20, 3. & 4. Std. in Raum G105 (Abgeschlossen)

### Quellmaterialien
- Texte zur Bildbearbeitung (Ausdruck)
- alte Prüfungsaufgaben
- Schüleraufgaben


## Farbmischung

![Farbkreis](/img/6-teiliger-farbkreis_black.svg)

eine Farbe mischt sich immer aus den angrenzenden Farben

### Additiv (**R**ot **G**rün **B**lau)
- Lichtfarben
- Farben addieren sich zu neuen Farben
- 0-255 -> 256 Helligkeitsabstufungen
- Rot  + Grün + Blau = **Weiß**

### Subtraktiv (**C**yan **M**agenta **Y**ellow)
- Körperfarben
- Basis weißer Bedruckstoff, Farben überdecken sich zu max. schwarz
- 0-100%
- Cyan + Magenta + Gelb = **Schwarz**


## Fachbegriffe
- Tonwert
  - eine Helligkeistabstufung (je höher der Tw desto heller)
- Tonwertumfang
    - Umfang zwischen hellstem & dunkelstem Px
- Tonwertspreizung
    - Twumfang auf Bildinformationen beschränken/maximieren
    - Twumverteilung auf größeren Bereich (Folge: Twsprünge/abrisse)
- Tonwertabriss
    - Lückem im Twumfang (durch Twspreizung)
- Tonwerttrennung
  - sichtbare Abstufungen
  - geringer (bzw. lückenhafter) Twumfang
- Clipping
   - eventuell vorhandene Details sind nicht mehr wiederherstellbar
   - Ausschläge/monochrome Flächen durch Twspreizung
- Kontrast
  - Twunterschied hellster/dunkelster Px
  - Maximalkontrast  s/w
- Detailkontrast/-zeichnung
  - Unterscheidbarkeit ähnlicher Twe
- Weißabgleich
  - legt fest was als weiß behandelt wird


## Histogramm
- X (waagerecht _ ): Tonwertverteilung
  - Von rechts nach links unterteilt in:
    - Lichter
    - ¼-Töne
    - Mitteltöne
    - ¾-Töne
    - Tiefen
- Y (senkrecht | ): Tonwerthäufigkeit
- => Welche Twe (X) kommen wie oft (Y) im Bild vor?


## Gradationskurve
- RGB: 0 (schwarz) -> 255 (Rot/Grün/Blau)
- CMYK: 0 (weiß) -> 100 (Cyan/Magenta/Gelb/Schwarz)
- X: Twe unbearbeitet
- Y: Twe bearbeitet
- Kurven
  - 45° Normale (Ausgangszustand)
  - Steigung < 45° (Detail-)Kontrastverringerung
  - Steigung \> 45°(Detail-)Kontraststeigerung
  - S-Kurve
    - Kontraststeigerung Mitteltöne, -verringerung Tiefen & Lichter
  - "umgekehrte S-Kurve"
    - Kontraststverringerung  Mitteltöne, -steigerung Tiefen & Lichter
