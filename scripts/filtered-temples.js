const year = document.getElementById("currentyear");
const today = new Date();
const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");
const homeLink = document.getElementById("home");
const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");

const temples = [
    {
        templeName:"Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 25",
        area: 19184,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-thumb.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-52.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-48067.jpg"
    }
];

function populateSection(temple, templeSection) {
    const heading = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    heading.textContent = temple.templeName;
    location.innerHTML = `<span>Location:</span> ${temple.location}`
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`
    area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    templeSection.appendChild(heading);
    templeSection.appendChild(location);
    templeSection.appendChild(dedicated);
    templeSection.appendChild(area);
    templeSection.appendChild(image);
}

function showTemples(temples) {
    const templeList = document.getElementById("templeList");
    templeList.replaceChildren();
    temples.forEach(temple => {
        let templeSection = document.createElement("section");
        templeSection.classList.add("temple");
        populateSection(temple, templeSection);
        templeList.appendChild(templeSection)
    });
}

function getNewTemples(temples) {
    let newTemples = [];
    temples.forEach(temple => {
        let dedicationYear = temple.dedicated.slice(0, 4);
        if (parseInt(dedicationYear) > 2000) {
            newTemples.push(temple);
        }
    });

    return newTemples;
}

function getOldTemples(temples) {
    let oldTemples = [];
    temples.forEach(temple => {
        let dedicationYear = temple.dedicated.slice(0, 4);
        if (parseInt(dedicationYear) < 1900) {
            oldTemples.push(temple);
        }
    });

    return oldTemples;
}

function getLargeTemples(temples) {
    let largeTemples = [];
    temples.forEach(temple => {
        if (temple.area > 90000) {
            largeTemples.push(temple);
        }
    });

    return largeTemples;
}

function getSmallTemples(temples) {
    let smallTemples = [];
    temples.forEach(temple => {
        if (temple.area < 10000) {
            smallTemples.push(temple);
        }
    });

    return smallTemples;
}

document.getElementById("lastModified").textContent = "Last Modfied: " + document.lastModified;
year.textContent = today.getFullYear();

navButton.addEventListener("click", function() {
    nav.classList.toggle("open");
    isOpen = nav.classList.contains("open");

    if (isOpen) {
        navButton.textContent = "✕"
    } 
    else {
        navButton.textContent = "☰"
    }
});

showTemples(temples);

homeLink.addEventListener("click", function() {
    showTemples(temples);
});

oldLink.addEventListener("click", function() {
    showTemples(getOldTemples(temples));
});

newLink.addEventListener("click", function() {
    showTemples(getNewTemples(temples));
});

largeLink.addEventListener("click", function() {
    showTemples(getLargeTemples(temples));
});

smallLink.addEventListener("click", function() {
    showTemples(getSmallTemples(temples));
});