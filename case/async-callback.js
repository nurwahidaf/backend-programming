const persiapan = () => {
    console.log("Persiapan ...");
}

const rebusAir = () => {
    console.log("Rebus air ...");
}

const masak = () => {
    console.log("Masak mie");
    console.log("Selesai");
}

const main = () => {
    setTimeout(() => {
        persiapan();
        setTimeout(() => {
            rebusAir();
            setTimeout(() => {
                masak();
            }, 5000);
        }, 7000);
    }, 3000);
}

// callback hell