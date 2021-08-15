// A verse from the quran in the format surah:ayah (uthmanic codex order)
// The url for the array with the verse specified above ("surahAyah")

async function updateVerse() {
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
  document.getElementById("result").innerHTML = theVerse;
}

updateVerse()
