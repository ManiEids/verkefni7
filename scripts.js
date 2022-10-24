/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns  {boolean}`true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  if (isNaN(numAsString)) {
    return false;
  }

  // Ekki á bili
  if (numAsString < min || numAsString > max) {
    return false;
  }

  return true;
}
//console.assert(numAsString('2','11 ') === false, ' 11 er ekki valid(ekki milli 2 og 10 )');
//console.assert(numAsString('2','4') === true, '4 er valid (milli 2 og 10)');

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  const val = prompt(`Hvaða bolla veluru af ${numOfCups}`);

  if (val === null) {
    console.error(`${val} er ekki löglegt gildi`);
    return;
  }
  if (!isValidNum(val, MIN_NUM_OF_CUPS, numOfCups)) {
    console.error(`${val} er ekki löglegt gildi`);
    return;
  }

  return val;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);
    min = MIN_NUM_OF_CUPS;
    max = numOfCups;

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
    if (!isValidNum(numOfCups, MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS)) {
      console.error(`${numOfCups} er ekki löglegt gildi`);
      return;
    }

    let choice = getChoice(numOfCups);

    if (choice) {
      let slembitala = randomNumber(1, max);

      if (choice == slembitala) {
        /* ef rétt slembi */
        let stig = numOfCups - 1;
        alert(`þú giskaðir á ${choice} Það var rétt ! þú færð ${stig} stig.`);
        points += stig;
        won += 1;
      } else {
        /* vitlaust gisk */
        alert(
          `Þú giskaður á ${choice} en rétt tala var     ** ${slembitala} **      Better luck next time looser`
        );
      }

      played++;

      confirm(`Viltu spila aftur? `);
    } else {
      console.log("Notandi hætti við");
    }
  } while (true);
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  console.log(
    `Leikir spilaðir: ${played}. Unnir leikir: ${won}. Stig: ${points}`
  );
}
