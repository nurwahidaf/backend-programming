const formatName = (name) => name.toUpperCase();

const getName = (name, callformatName) => console.log(callformatName(name));

getName("fitri", formatName);