# Embert Boerdery – webtuiste

Die amptelike webtuiste van **Embert Boerdery**, ’n gemengde veeboerdery wat met
beeste en skape boer. Die webtuiste is beskikbaar by [embert.co.za](https://embert.co.za/).

Kontak: [info@embert.co.za](mailto:info@embert.co.za)

## Oorsig

Dit is ’n eenvoudige, statiese webtuiste (geen bouproses, geen raamwerke) wat met
GitHub Pages gehuisves word. Alles is gewone HTML, CSS en ’n klein bietjie
JavaScript, sodat dit vinnig laai en maklik is om te wysig.

```
.
├── index.html            # Tuisblad met al die afdelings
├── 404.html              # Bladsy-nie-gevind
├── CNAME                 # Eie domein vir GitHub Pages (embert.co.za)
├── robots.txt
├── sitemap.xml
├── .nojekyll             # Sê vir GitHub Pages om die lêers net so te bedien
└── assets/
    ├── css/style.css     # Stylblad (kleure, uitleg, responsiwiteit)
    ├── js/main.js        # Mobiele kieslys, animasies, kontakvorm
    └── img/
        ├── favicon.svg
        └── og-image.png  # Voorskou-prent vir sosiale media / WhatsApp
```

## Afdelings op die tuisblad

| Afdeling | Anker | Inhoud |
| --- | --- | --- |
| Tuis | `#tuis` | Opskrif, kort inleiding en knoppies |
| Oor ons | `#oor-ons` | Wie ons is en waarvoor ons staan |
| Ons boerdery | `#boerdery` | Beeste en skape |
| Ons benadering | `#benadering` | Vier beginsels: veld, diere, mense, toekoms |
| Kontak | `#kontak` | E-posadres en ’n kontakvorm |

## Inhoud wysig

Al die teks lê in `index.html`. Soek die afdeling se kommentaar-opskrif
(bv. `<!-- ===================== ONS BOERDERY ===================== -->`) en
pas die teks aan. Kleure en lettertipes word bo-aan `assets/css/style.css`
as CSS-veranderlikes gedefinieer.

### Kontakvorm

Die webtuiste het geen bediener nie, so die kontakvorm stuur nie self e-pos nie.
Wanneer ’n besoeker op **Stuur e-pos** klik, maak die vorm die besoeker se eie
e-posprogram oop met ’n boodskap aan `info@embert.co.za` wat reeds ingevul is.
Om later ’n “regte” vorm te gebruik, kan ’n diens soos Formspree of Netlify Forms
in `assets/js/main.js` ingeprop word.

### Idees vir later

- Foto’s van die plaas, die beeste en die skape (in `assets/img/`).
- Telefoonnommer en fisiese adres/ligging by die Kontak-afdeling.
- ’n Engelse vertaling van die webtuiste.

## Plaaslik bekyk

Maak `index.html` direk in ’n blaaier oop, of bedien die vouer plaaslik:

```sh
python3 -m http.server 8000
# of
npx serve .
```

Besoek dan <http://localhost:8000>.

## Publisering

Die webtuiste word outomaties deur GitHub Pages vanaf die hoof-tak gepubliseer.
Die `CNAME`-lêer koppel dit aan `embert.co.za`. Enige veranderinge wat na die
hoof-tak saamgesmelt word, is binne ’n paar minute lewendig.
