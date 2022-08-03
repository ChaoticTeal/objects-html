/**
 * @TODO implement the submitButton onclick event handler
 * which onclick should:
 *      - get the form data from #form-container
 *      - create an object containing form data
 *      - create a method called debug for this object
 *        which alerts form data using a template string
 *        for debugging purposes
 *      - create and appends a User HTML element
 *        to #user-container
 */

let submitBtn = document.getElementById("submit-btn");
// arrow function
//              params go here
submitBtn.onclick = (event) => {
    // Prevents default behavior (reloading the page)
    event.preventDefault();

    let usernameElem = document.querySelector("#username");
    let pfpURLElem = document.querySelector("#pfp-url");

    // Make one-off objects with curly braces
    let formData = {
        // These are properties
        username: usernameElem.value,
        pfpURL: pfpURLElem.value,
        // This is a method
        // Using arrow functions within objects is tricky because "this" will refer to the arrow function instead of the object
        debug: function() {
            alert(`Username: ${this.username}\nURL: ${this.pfpURL}`);
        }
    }
    // formData.debug();
    let addedUser = new User(formData.pfpURL, formData.username);

    let userElem = addedUser.makeHTML();

    let userContainer = document.getElementById("user-container");
    userContainer.append(userElem);
}

/**
 * @TODO create a User class which has username, email,
 * and pfpURL props containing the appropriate data. the
 * constructor of this class should assign data appropriately.
 * if pfpURL is an empty string, we should assign it a value
 * of "images/default-pfp.jpg"
 * 
 * @TODO create a makeHTML method for the User class
 * which will return an HTML element representing the 
 * User.
 * 
 * this HTML element should be a div with the class "user-item".
 * 
 * this div should have two children:
 *      - an img with the src set to this object's pfpURL
 *      - an h2 with the text set to this object's username
 */

class User {
    constructor(pfpURL, username) {
        if(pfpURL === "") {
            this.pfpURL = "images/default-pfp.jpg";
        }
        else {
            this.pfpURL = pfpURL;
        }
        this.username = username;
    }

    makeHTML() {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("user-item");
        let pfp = document.createElement("img");
        pfp.setAttribute("src", this.pfpURL);
        parentDiv.append(pfp);
        let h2Elem = document.createElement("h2");
        h2Elem.innerHTML= this.username;
        parentDiv.append(h2Elem);

        return parentDiv;
    }
}