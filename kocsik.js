import './node_modules/bootstrap/dist/css/bootstrap.css'
import './kocsi.css'

const imageSets = {
  piros: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FL5G4RGW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FL5G4RGW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FL5G4RGW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+3"
  ],
  kek: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FL5G4RGW$EC:B-637P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BL$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FL5G4RGW$EC:B-637P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BL$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FL5G4RGW$EC:B-637P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BL$ECX:&width=1400+3"
  ],
  fekete: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FL5G4RGW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FL5G4RGW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FL5G4RGW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+3"
  ],
  feher: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FL5G4RGW$EC:NH-0$HC:undefined$IC:BR$O:$F:FIFS$ECC:WH$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FL5G4RGW$EC:NH-0$HC:undefined$IC:BR$O:$F:FIFS$ECC:WH$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FL5G4RGW$EC:NH-0$HC:undefined$IC:BR$O:$F:FIFS$ECC:WH$ECX:&width=1400+3"
  ]
};

let currentSet = "piros";
let currentIndex = 0;

function updateImage() {
  document.getElementById("kep").src = imageSets[currentSet][currentIndex];
}

document.getElementById("elozoKepGomb").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + imageSets[currentSet].length) % imageSets[currentSet].length;
  updateImage();
});

document.getElementById("kovetkezoKepGomb").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % imageSets[currentSet].length;
  updateImage();
});

document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", function () {
    currentSet = this.getAttribute("data-set");
    currentIndex = 0;
    updateImage();
  });
});
let basePrice = 15000000;

document.addEventListener('DOMContentLoaded', function () {
  const basePrice = 15000000;

  function updatePrice() {
    let roofRackPrice = document.getElementById("roof-rack").checked ? parseInt(document.getElementById("roof-rack").value) : 0;
    let heatedSeatsPrice = document.getElementById("heated-seats").checked ? parseInt(document.getElementById("heated-seats").value) : 0;
    let navigationPrice = document.getElementById("navigation").checked ? parseInt(document.getElementById("navigation").value) : 0;
    let winterTiresPrice = document.getElementById("winter-tires").checked ? parseInt(document.getElementById("winter-tires").value) : 0;
    let raceTransmissionPrice = document.getElementById("race-transmission").checked ? parseInt(document.getElementById("race-transmission").value) : 0;
    let nitroPrice = document.getElementById("nitro").checked ? parseInt(document.getElementById("nitro").value) : 0;

    let totalPrice = basePrice + roofRackPrice + heatedSeatsPrice + navigationPrice + winterTiresPrice + raceTransmissionPrice + nitroPrice;

    document.getElementById("total-price").textContent = totalPrice.toLocaleString() + " Ft";
  }

  document.getElementById("roof-rack").addEventListener("click", updatePrice);
  document.getElementById("heated-seats").addEventListener("click", updatePrice);
  document.getElementById("navigation").addEventListener("click", updatePrice);
  document.getElementById("winter-tires").addEventListener("click", updatePrice);
  document.getElementById("race-transmission").addEventListener("click", updatePrice);
  document.getElementById("nitro").addEventListener("click", updatePrice);
})