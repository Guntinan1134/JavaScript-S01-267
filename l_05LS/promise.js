const { rejects } = require("assert");
const { resolve } = require("path");

function promiseTimeout(ms) {
    return new Promise((resolve , reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2800)
    .then(() => {
        console.log("Done!!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error")
    });

