// A verse from the quran in the format surah:ayah (uthmanic codex order)
// The url for the array with the verse specified by the user
error = "undefined"

async function updateVerse() {
  arUpdateVerse()
  // get the verse the user has input
  let surahAyah = document.getElementById("verse").value
  // update the url using the verse they input
  let url = "https://api.alquran.cloud/v1/ayah/" + surahAyah + "/en.asad"

  // make the request and parse it
  let response = await fetch(url);
  let data = await response.json()
  let verseText = data.data.text
  let theVerse = surahAyah + ": " + verseText;

  // put the resulting verse on the website
  if (typeof verseText != "undefined") {
    document.getElementById("result").innerHTML = theVerse;
  }
  if (typeof verseText == "undefined") {
    document.getElementById("result").innerHTML = "This verse does not exist!";
  }
}

async function arUpdateVerse() {
  // get the verse the user has input
  let arSurahAyah = document.getElementById("verse").value
  // update the url using the verse they input
  let arUrl = "https://api.alquran.cloud/v1/ayah/" + arSurahAyah
  // make the request and parse it
  let arResponse = await fetch(arUrl);
  let arData = await arResponse.json()
  let arVerseText = arData.data.text
  let arTheVerse = arSurahAyah + ": " + arVerseText;
  // put the resulting verse on the website
  if (typeof arVerseText != "undefined") {
    document.getElementById("arResult").innerHTML = arTheVerse;
  }
  if (typeof arVerseText == "undefined") {
    document.getElementById("arResult").innerHTML = "هذه الآية غير موجودة!";
  }
}