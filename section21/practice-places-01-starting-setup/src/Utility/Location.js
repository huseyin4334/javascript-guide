const apiKey = "";

export async function getAddressFromCoords(coordinates) {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat}&key=${apiKey}`);

    if (!response.ok) {
        throw new Error("Failed fetch address");
    }

    const data = response.json();

    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const address = data.result[0].formatted_address;

    //return address;

    return '6th Avenue'; // return any dummy address you want
}

export async function getCoordsFromAddress(address) {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    const urlAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);

    if (!response.ok) {
        throw new Error("Failed fetch coordinates");
    }

    const data = response.json();

    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const coordinates = data.result[0].geometry.location;

    //return coordinates;
    return {lat: 47.01, lng: 33.55}; // return any dummy coordinates you want
}