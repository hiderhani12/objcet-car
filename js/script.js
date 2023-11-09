const container2 = document.getElementById("container2");
const btn = document.getElementById("btn");

class Car {
    constructor(img, car, model, price, year) {
        this.img = img;
        this.car = car;
        this.model = model;
        this.price = price;
        this.year = year;
    }
};


let chiron = new Car(
    "https://pro.bbcdn.io/cf/cf4e2017-99e3-4625-ba46-88e96068f2a9?rule=news-large", 
    "bugatti chiron",  
    "chiron", 
    "40 000 000",
    "2023"
);

let la_voiture_noire = new Car(
    "https://www.hoom.se/wp-content/uploads/2019/03/bugatti-la-voiture-noire-101-1551790192.jpg", 
    "bugatti la voiture noire", 
    "la voiture noire", 
    "116 000 000", 
    "2023"
);

let divo = new Car(
    "https://www.mestmotor.se/automotorsport/wp-content/uploads/sites/2/2023/01/YTo2OntzOjI6ImlkIjtpOjE1MzExNzE7czoxOiJ3IjtpOjU3ODtzOjE6ImgiO2k6MzIwMDtzOjE6ImMiO2k6MDtzOjE6InMiO2k6MDtzOjE6ImsiO3M6NDA6IjAzNjhjYmU0NmVmMmI5NWVjYWM4MzNmZmY2ZmYzNGI2ODc0MTcyM2YiO30.jpg", 
    "bugatti divo", 
    "divo", 
    "90 000 000", 
    "2023"
);

let agera = new Car(
    "https://cdn.carbuzz.com/gallery-images/1600/396000/900/396973.jpg", 
    "koenigsegg agera", 
    "agera", 
    "8 000 000", 
    "2023"
);

let gemera = new Car(
    "https://fra1.digitaloceanspaces.com/dagensps/uploads/2023/07/b6af1a382c5739cd_org.jpg", 
    "koenigsegg gemera ", 
    "gemera", 
    "25 000 000", 
    "2023"
);

let jesko = new Car(
    "https://www.vibilagare.se/public/styles/media_image/public/images/2019/03/koenigsegg_jesko_01_0.jpg?itok=QOWCYJol", 
    "koenigsegg jesko", 
    "jesko", 
    "40 000 000", 
    "2023"
);

let veneno = new Car(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carpixel.net%2Fsv%2Fwallpapers%2F9783%2F2014-lamborghini-veneno-roadster.html&psig=AOvVaw3Yi_AWA5ge_mmAIELunMXM&ust=1699617880104000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjs5JHwtoIDFQAAAAAdAAAAABAE", 
    "lamborghini veneno", 
    "veneno", 
    "32 000 000", 
    "2021"
);

let countach = new Car(
    "https://www.dackavisen.se/wp-content/uploads/2021/09/Pirelli-lamborghini-countach.png", 
    "lamborghini countach ", 
    "countach", 
    "20 000 000", 
    "2023"
);

let svj = new Car(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fteknikensvarld.expressen.se%2Fnyheter%2Fbil-och-trafik%2Flamborghini-aventador-svj-roadster-lockar-i-geneve%2F&psig=AOvVaw38w0XCZl2Zsqd687ri-4HH&ust=1699617298280000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMienvzttoIDFQAAAAAdAAAAABAJ", 
    "lamborghini svj", 
    "svj", 
    "4 100 000", 
    "2023"
);

let f1 = new Car(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.skysports.com%2Ff1%2Fnews%2F12474%2F12810026%2Fferrari-reveal-their-valentine-as-new-car-launched-for-2023-formula-1-championship-challenge&psig=AOvVaw3pmqUgWrK0Ah39614V5Ncz&ust=1699617097844000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPj5ypzttoIDFQAAAAAdAAAAABAz", 
    "ferrari f1", 
    "f1", 
    "???", 
    "2022"                                                           
);

carsGroup = [
    chiron, 
    la_voiture_noire, 
    divo, 
    agera, 
    gemera, 
    jesko, 
    veneno, 
    countach, 
    svj, 
    f1
]



carsGroup.map((item) => {
    let carImg = document.createElement('img');
    carImg.src = item.img;

    let carName = document.createElement('h2');
    carName.textContent = item.car;

    let carModel = document.createElement('p');
    carModel.textContent = item.model;

    let carPrice = document.createElement('p');
    carPrice.textContent = item.price;

    let carYear = document.createElement('p');
    carYear.textContent = item.year;

    container2.appendChild(carImg);
    container2.appendChild(carName);
    container2.appendChild(carModel);
    container2.appendChild(carPrice);
    container2.appendChild(carYear);
});

