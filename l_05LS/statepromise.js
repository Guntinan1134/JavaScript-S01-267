const { rejects } = require("assert");
const { resolve } = require("path");

const promise = new Promise((resolve, reject) => {
    const res = true;

    if (res) {
        resolve("Resolved!");

    } else{
        rejects(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);