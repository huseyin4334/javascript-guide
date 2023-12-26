import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import {getCoordsFromAddress, getAddressFromCoords} from "./Utility/Location";

class PlaceFinder {
    constructor() {
        const addressForm = document
            .getElementById("place-data")
            .querySelector("form");
        
        // Get Current Location Button
        const locateBtn = document.getElementById("locate-btn");

        const shareLinkBtn = document.getElementById("share-btn");

        locateBtn.addEventListener(
            "click", this.locateHandler.bind(this)
        );

        addressForm.addEventListener(
            "submit", this.findAddressHandler.bind(this)
        );

        shareLinkBtn.addEventListener(
            "click", this.sharePlaceHandler
        )
    }

    selectPlace(coordinates, address) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }

        document.getElementById("share-btn").setAttribute("disabled", false);
        
    }

    sharePlaceHandler() {
        const linkArea = document.getElementById("share-link")

        if (!navigator.clipboard) {
            linkArea.select();
            return;
        }

        navigator.clipboard.writeText(linkArea.textContent)
        .then(() => {
            alert("Copied!!");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    locateHandler() {
        if(navigator.geolocation) {
            const modal = this.getModal();

            modal.show();
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    // TODO
                    modal.hide();
                    
                    console.log(location);

                    const coordinates = {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    };

                    this.selectPlace(coordinates);

                    try {
                        const address = getAddressFromCoords(coordinates);
                        const shareArea = document.getElementById("share-link");

                        shareArea.setAttribute("value", address);
                    } catch (err) {
                        alert("Coordinates not point an address: " + err.message);
                    }
                    

                    console.log(coordinates);
                },
                (error) => {
                    modal.hide();
                    console.log(error);
                    alert("Couldn't locate you unfortunately. Please enter manually.")
                }
            )
        } else {
            allert("Lation feature is not available. Please use newer browser.");
        }
    }

    async findAddressHandler(event) {
        event.preventDefault();

        const address = event.target.querySelector("input").value;

        if (!address || address.trim().length === 0) {
            alert("Invalid address");
            return;
        }

        const modal = this.getModal();

        modal.show();

        try {
            const coordinates = await getCoordsFromAddress(address);
            this.selectPlace(coordinates);
        } catch (err) {
            alert(err.message);
        }
        
        modal.hide();
    }

    getModal() {
        return new Modal("loading-modal-content", "Loading locations - please wait");
    }
}

const placeFinder = new PlaceFinder();