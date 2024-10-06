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

  document.getElementById("elozoKepGomb").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + imageSets[currentSet].length) % imageSets[currentSet].length;
    updateImage();
  });

  document.getElementById("kovetkezoKepGomb").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % imageSets[currentSet].length;
    updateImage();
  });

  document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function() {
      currentSet = this.getAttribute("data-set"); 
      currentIndex = 0; 
      updateImage();
    });
  });