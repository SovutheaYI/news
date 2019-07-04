const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=62aa88d0dfa84069a90883bba0f01b85";

export async function getTopNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}


const urle = "https://123sovutheatech.000webhostapp.com/getentertainment.php";

export async function getEnterNews() {
    let resulte = await fetch(urle).then(response => response.json());
    return resulte.articles;
}


const urls = "https://123sovutheatech.000webhostapp.com/getsport.php";

export async function getSportNews() {
    let results = await fetch(urls).then(response => response.json());
    return results.articles;
}

const urlsc = "https://123sovutheatech.000webhostapp.com/getscience.php";

export async function getScienceNews() {
    let resultsc = await fetch(urlsc).then(response => response.json());
    return resultsc.articles;
}


const urlh = "https://123sovutheatech.000webhostapp.com/gethealth.php";

export async function getHealthNews() {
    let resulth = await fetch(urlh).then(response => response.json());
    return resulth.articles;
}

const urlt = "https://123sovutheatech.000webhostapp.com/gettechnology.php";

export async function getTechNews() {
    let resultt = await fetch(urlt).then(response => response.json());
    return resultt.articles;
}

const urlb = "https://123sovutheatech.000webhostapp.com/getbusiness.php";

export async function getBusNews() {
    let resultb = await fetch(urlb).then(response => response.json());
    return resultb.articles;
}


const urltennis = "https://123sovutheatech.000webhostapp.com/gettennis.php";

export async function getTennis() {
    let resulttennis = await fetch(urltennis).then(response => response.json());
    return resulttennis.articles;
}

const urlball = "https://123sovutheatech.000webhostapp.com/getfootball.php";

export async function getFootball() {
    let resultball = await fetch(urlball).then(response => response.json());
    return resultball.articles;
}

const urlski = "https://123sovutheatech.000webhostapp.com/getskiing.php";

export async function getSkiing() {
    let resultski = await fetch(urlski).then(response => response.json());
    return resultski.articles;
}


const urlf = "https://123sovutheatech.000webhostapp.com/getf1.php";

export async function getF1() {
    let resultf = await fetch(urlf).then(response => response.json());
    return resultf.articles;
}

const urlgolf = "https://123sovutheatech.000webhostapp.com/getgolf.php";

export async function getGolf() {
    let resultgolf = await fetch(urlgolf).then(response => response.json());
    return resultgolf.articles;
}

const urlfood = "https://123sovutheatech.000webhostapp.com/getfood.php";

export async function getFood() {
    let resultfood = await fetch(urlfood).then(response => response.json());
    return resultfood.articles;
}

const urlfit = "https://123sovutheatech.000webhostapp.com/getfitness.php";

export async function getFitness() {
    let resultfit = await fetch(urlfit).then(response => response.json());
    return resultfit.articles;
}

const urlwell = "https://123sovutheatech.000webhostapp.com/getwellness.php";

export async function getWellness() {
    let resultwell = await fetch(urlwell).then(response => response.json());
    return resultwell.articles;
}

const urlcul = "https://123sovutheatech.000webhostapp.com/getculture.php";

export async function getCulture() {
    let resultcul = await fetch(urlcul).then(response => response.json());
    return resultcul.articles;
}

const urlscr = "https://123sovutheatech.000webhostapp.com/getscreen.php";

export async function getScreen() {
    let resultscr = await fetch(urlscr).then(response => response.json());
    return resultscr.articles;
}

const urlbing = "https://123sovutheatech.000webhostapp.com/getbinge.php";

export async function getBinge() {
    let resultbing = await fetch(urlbing).then(response => response.json());
    return resultbing.articles;
}

const urlstar = "https://123sovutheatech.000webhostapp.com/getstar.php";

export async function getStar() {
    let resultstar = await fetch(urlstar).then(response => response.json());
    return resultstar.articles;
}

const urlmarket = "https://123sovutheatech.000webhostapp.com/getmarket.php";

export async function getMarket() {
    let resultmarket = await fetch(urlmarket).then(response => response.json());
    return resultmarket.articles;
}

const urlmedia = "https://123sovutheatech.000webhostapp.com/getmedia.php";

export async function getMedia() {
    let resultmedia = await fetch(urlmedia).then(response => response.json());
    return resultmedia.articles;
}

