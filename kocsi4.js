import './node_modules/bootstrap/dist/css/bootstrap.css'
import './kocsi.css'

const imageSets = {
  piros: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5SKXW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FE1E5SKXW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FE1E5SKXW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400+3"
  ],
  szurke: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5SKXW$EC:NH-912P$HC:undefined$IC:BR$O:$F:FIFS$ECC:GE$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FE1E5SKXW$EC:NH-912P$HC:undefined$IC:BR$O:$F:FIFS$ECC:GE$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FE1E5SKXW$EC:NH-912P$HC:undefined$IC:BR$O:$F:FIFS$ECC:GE$ECX:&width=1400+3"
  ],
  fekete: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5SKXW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FE1E5SKXW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FE1E5SKXW$EC:NH-731P$HC:undefined$IC:BR$O:$F:FIFS$ECC:BK$ECX:&width=1400+3"
  ],
  feher: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5SKXW$EC:NH-883P$HC:undefined$IC:BR$O:$F:FIFS$ECC:WX$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:FE1E5SKXW$EC:NH-883P$HC:undefined$IC:BR$O:$F:FIFS$ECC:WX$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/09?config=M:FE1E5SKXW$EC:NH-883P$HC:undefined$IC:BR$O:$F:FIFS$ECC:WX$ECX:&width=1400+3"
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
let basePrice = 11000000;

document.addEventListener('DOMContentLoaded', function () {
    const basePrice = 11000000;
  
    function updatePrice() {
      let extra1 = document.getElementById("extra1").checked ? parseInt(document.getElementById("extra1").value) : 0;
      let extra2 = document.getElementById("extra2").checked ? parseInt(document.getElementById("extra2").value) : 0;
      let extra3 = document.getElementById("extra3").checked ? parseInt(document.getElementById("extra3").value) : 0;
      let extra4 = document.getElementById("extra4").checked ? parseInt(document.getElementById("extra4").value) : 0;
      let extra5 = document.getElementById("extra5").checked ? parseInt(document.getElementById("extra5").value) : 0;
  
      let totalPrice = basePrice + extra1 + extra2 + extra3 + extra4 + extra5;
  
      document.getElementById("total-price").textContent = totalPrice.toLocaleString() + " Ft";
    }
  
    document.getElementById("extra1").addEventListener("click", updatePrice);
    document.getElementById("extra2").addEventListener("click", updatePrice);
    document.getElementById("extra3").addEventListener("click", updatePrice);
    document.getElementById("extra4").addEventListener("click", updatePrice);
    document.getElementById("extra5").addEventListener("click", updatePrice);
  })