import './node_modules/bootstrap/dist/css/bootstrap.css'
import './kocsi.css'

const imageSets = {
  piros: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:YK3F6SKNW$EC:R-580M$HC:undefined$IC:BK$O:$F:FIFS$ECC:RL$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:YK3F6SKNW$EC:R-580M$HC:undefined$IC:BK$O:$F:FIFS$ECC:RL$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/10?config=M:YK3F6SKNW$EC:R-580M$HC:undefined$IC:BK$O:$F:FIFS$ECC:RL$ECX:&width=1400+3"
  ],
  kek: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:YK3F6SKNW$EC:B-638P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BT$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:YK3F6SKNW$EC:B-638P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BT$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/10?config=M:YK3F6SKNW$EC:B-638P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BT$ECX:&width=1400+3"
  ],
  fekete: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:YK3F6SKNW$EC:NH-731P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BK$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:YK3F6SKNW$EC:NH-731P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BK$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/10?config=M:YK3F6SKNW$EC:NH-731P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BK$ECX:&width=1400+3"
  ],
  feher: [
    "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:YK3F6SKNW$EC:NH-883P$HC:undefined$IC:BK$O:$F:FIFS$ECC:WX$ECX:&width=1400+1",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/04?config=M:YK3F6SKNW$EC:NH-883P$HC:undefined$IC:BK$O:$F:FIFS$ECC:WX$ECX:&width=1400+2",
    "https://automobiles.honda.com/platform/api/v4/images/exterior/10?config=M:YK3F6SKNW$EC:NH-883P$HC:undefined$IC:BK$O:$F:FIFS$ECC:WX$ECX:&width=1400+3"
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
let basePrice = 18800000;

document.addEventListener('DOMContentLoaded', function () {
    const basePrice = 18800000;
  
    function updatePrice() {
      let extra1 = document.getElementById("extra1").checked ? parseInt(document.getElementById("extra1").value) : 0;
      let extra2 = document.getElementById("extra2").checked ? parseInt(document.getElementById("extra2").value) : 0;
      let extra3 = document.getElementById("extra3").checked ? parseInt(document.getElementById("extra3").value) : 0;
      let extra4 = document.getElementById("extra4").checked ? parseInt(document.getElementById("extra4").value) : 0;
      let extra5 = document.getElementById("extra5").checked ? parseInt(document.getElementById("extra5").value) : 0;
      let extra6 = document.getElementById("extra6").checked ? parseInt(document.getElementById("extra6").value) : 0;
      let extra7 = document.getElementById("extra7").checked ? parseInt(document.getElementById("extra7").value) : 0;
  
      let totalPrice = basePrice + extra1 + extra2 + extra3 + extra4 + extra5 + extra6 +extra7;
  
      document.getElementById("total-price").textContent = totalPrice.toLocaleString() + " Ft";
    }
  
    document.getElementById("extra1").addEventListener("click", updatePrice);
    document.getElementById("extra2").addEventListener("click", updatePrice);
    document.getElementById("extra3").addEventListener("click", updatePrice);
    document.getElementById("extra4").addEventListener("click", updatePrice);
    document.getElementById("extra5").addEventListener("click", updatePrice);
    document.getElementById("extra6").addEventListener("click", updatePrice);
    document.getElementById("extra7").addEventListener("click", updatePrice);
  })