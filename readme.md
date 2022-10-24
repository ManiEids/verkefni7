# Vefforritun 1, 2022: Verkefni 7, JS #1

[Kynning](https://youtu.be/I5Lvm6Wh3so).

## Markmið

* Búa til JavaScript forrit sem notar föll, flæðistýringar og ítranir.
* Nota strengi og tölur í JavaScript.
* Nota „build“ skref fyrir Netlify.

## Grunnur

Gefin er grunnur að verkefni:

* `package.json` með uppsetningu á `browser-sync`.
* `index.html` með leiðbeiningum og tengingu við `scripts.js`.
* `scripts.js` með grunni að forriti, athugasemdir og tillögur að útfærslum eru í skjalinu.

Skjölun á föllum og breytum notar [`jsdoc`](https://jsdoc.app/).

## Virkni

Spila skal leik þar sem bolti er falinn undir bolla.

Byrjað er á að biðja notanda að velja hversu marga bolla eigi að fela undir, lágmark 2, hámark 10. Ef notandi slær ekki inn rétt gildi skal hætta og nota `console.error` til að birta villu.

Þegar notandi er búinn að velja hve marga bolla skal biðja um gisk frá notanda, ef það er ógilt skal láta vita af því og biðja aftur um inntak. Þegar gilt inntak er komið skal velja af handahófi hvar bolti er. Ef notandi valdi rétt skal láta vita af því og gefa notanda `N-1` stig þar sem `N` er fjöldi bolla. Ef rangt skal láta vita af því og í hvaða bolla boltinn var.

Ef notandi ýtir á `ESC` eða `Cancel` skal hætta.

Til að byrja leik skal notandi slá inn `play()` í console. Til að fá upplýsingar um leiki skal slá inn `games()`.

Sjá fyrirmynd í `v7-fyrirmynd.mp4`.

![Fyrirmynd](./v7-fyrirmynd.mp4)

Fyrir inntak og til að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin ásamt `console`.

Vefur skal vera prófaður og virka í nýjustu útgáfum af Firefox og Chrome.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Útbúa þarf `build` script í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

* `index.html`
* `scripts.js`

## „Snyrtilegur“ kóði

Þegar verið er að skrifa JavaScript kóða gildir það sama og þegar við skrifum HTML og CSS, að passa upp á inndrátt og skipuleggja og skila af okkur læsilegum og „snyrtilegum“ kóða.

Dæmi um kóða sem uppfyllir þessar kröfur ekki:

```javascript
function bla(a, b)
{
if (a) {
  let x = a + 1
    return x
}
else {
return a +b;
}
}
```

og sami kóði „lagfærður“:

```javascript
function calculate(a, b) {
  if (a) {
    let x = a + 1;
    return x;
  } else {
    return a + b;
  }
}
```

## Mat

* 10% Snyrtilegur JavaScript kóði.
* 10% Verkefni sett upp á Netlify og `build` scripta útfærð.
* 20% `games()` virkni og utanumhald um spilaða leiki.
* 40% `play()` virkni útfærð skv. forskrift.
* 20% Tekið við inntaki notanda og það staðfest skv. forskrift.

## Sett fyrir

Verkefni sett fyrir mánudaginn 17. október 2021.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 25. október 2022.

Skilaboð skulu innihalda:

* slóð á verkefni keyrandi á Netlify
* slóð á **private** GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  * `MarzukIngi`
  * `Stimmikex`
  * `brynjar13`
  * `ofurtumi`
  * `BjarniHaskoli`
  * `Stulli888`

Athugið að setja [`node_modules`](https://github.com/vefforritun/vef1-2022/blob/main/namsefni/21.taeki-tol/1.npm.md#node_modules) í [`.gitignore` skrá](https://github.com/vefforritun/vef1-2022/blob/main/namsefni/03.git/1.git.md#gitignore) þar sem sú mappa getur orðið stór.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
