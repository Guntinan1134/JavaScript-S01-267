function criticalCode(){
    throw " throw an exception";

}

function logError(theException){
    console.log(theException);

}

//Try..catch
console.log("\n********Try..catch********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Throwing in Try..catch********\n");

try{
    throw "An exception that is thrown every time";
} catch (ex){
    console.log("Got an error");
    logError(ex);

}

console.log("\n******** Try..catch..Finally********\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
} finally{
    console.log("Code that Alway eill run");
}
function hello(){
    console.log("\n********Throwing Exceptions********\n");
}