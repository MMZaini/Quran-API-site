// A verse from the quran in the format surah:ayah (uthmanic codex order)
// The url for the array with the verse specified by the user

async function updateVerse() {
  // run the arabic verse function
  arUpdateVerse()
  // get the verse the user has input
  let surahAyah = document.getElementById("verse").value
  // update the url using the verse they input
  let url = "https://api.alquran.cloud/v1/ayah/" + surahAyah + "/en.asad"

  // make the request and parse it
  let response = await fetch(url);
  let data = await response.json()
  let verseText = data.data.text
  let quranNumber = data.data.number
  let surahData = data.data.surah.number
  let ayahData = data.data.numberInSurah
  let theVerse = surahData + ":" + ayahData + ": " + verseText;

  // title in english and arabic
  let englishname = data.data.surah.englishName
  document.getElementById("engname").innerHTML = "Surah " + englishname + ": "
  let arabicname = data.data.surah.name
  document.getElementById("araname").innerHTML = " :" + arabicname

  // put the resulting verse on the website
  if (typeof verseText != "undefined") {
    document.getElementById("result").innerHTML = theVerse;
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
  let arSurahData = arData.data.surah.number
  let arAyahData = arData.data.numberInSurah
  let arTheVerse = arSurahData + ":" + arAyahData + ": " + arVerseText;

  // put the resulting verse on the website
  if (typeof arVerseText != "undefined") {
    document.getElementById("arResult").innerHTML = arTheVerse;
  }
  if (typeof arVerseText == "undefined") {
    document.getElementById("arResult").innerHTML = "!هذه الآية غير موجودة";
    if (typeof verseText == "undefined") {
      document.getElementById("result").innerHTML = "This verse does not exist!";
    }
  }
}

updateVerse() // to put 1:1 when page is launched

async function nextAyah() {
  let surahAyah = document.getElementById("verse").value
  let url = "https://api.alquran.cloud/v1/ayah/" + surahAyah + "/en.asad"
  let response = await fetch(url);
  let data = await response.json()
  let quranNumber = data.data.number
  quranNumber = quranNumber + 1
  surahAyah = quranNumber
  console.log(quranNumber)
  document.getElementById("verse").value = quranNumber
  updateVerse()
  arUpdateVerse()
}