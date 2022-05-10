let fs = require("fs");
let axios = require("axios");

let songs = ["MoralisSpotifyClone.mp3", "web3future.mp3"];
let durations = ["00;30", "00:48"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://Qmex6wscR5cHRrdyWm6UZaVnW7obBGWQGebx3ngruytUyi/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://Qmex6wscR5cHRrdyWm6UZaVnW7obBGWQGebx3ngruytUyi/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "Damon Pickett",
      year: "2022"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "5caIjtjr5No0LM7vs2Tm0IO5dE2Ngu1qsvpQk7VO8ZhdVGukxTuc5E70eiscu6Av",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });