/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

const showDownload = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`
                Download selesai\n
                Hasil Download: ${result}
            `);
        }, 3000);
    });
};

const download = async (result) => {
    console.log(await showDownload(result));
};

download("windows-10.exe");