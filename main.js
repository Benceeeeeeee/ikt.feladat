import './node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const hatchback = document.getElementById("hatchback");
    const truck = document.getElementById("truck");
    const sedan = document.getElementById("sedan");
    const suv = document.getElementById("suv");
    const kocsik = document.getElementById("kocsik");
    
    kocsik.addEventListener('change', () => {
        const value = kocsik.value;

        if (value === "osszess") {
            hatchback.classList.remove("hidden");
            truck.classList.remove("hidden");
            sedan.classList.remove("hidden");
            suv.classList.remove("hidden");
        }
        else if (value === "truck") {
            hatchback.classList.add("hidden");
            truck.classList.remove("hidden");
            sedan.classList.add("hidden");
            suv.classList.add("hidden");
        }
        else if (value === "hatchback") {
            hatchback.classList.remove("hidden");
            truck.classList.add("hidden");
            sedan.classList.add("hidden");
            suv.classList.add("hidden");
        }
        else if (value === "sedan") {
            hatchback.classList.add("hidden");
            truck.classList.add("hidden");
            sedan.classList.remove("hidden");
            suv.classList.add("hidden");
        }
        else if (value === "suv") {
            hatchback.classList.add("hidden");
            truck.classList.add("hidden");
            sedan.classList.add("hidden");
            suv.classList.remove("hidden");
        }
    });
});