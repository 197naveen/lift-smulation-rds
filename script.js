let noOfFloors = document.getElementById("no-of-floors").value;
let noOfLifts = document.getElementById("no-of-lifts").value;

let i = noOfFloors - 1;
let c = 0;

while (i >= 0) {

    //creating floor container
    let floorCont = document.createElement("div");
    floorCont.setAttribute("id", "floor-" + i);
    floorCont.setAttribute("class", "floor-div");
    document.getElementById("outer-div").appendChild(floorCont);

    //creating button container to hold up & down button.
    let buttonCont = document.createElement("div");
    buttonCont.setAttribute("id", "btn-div-" + i)
    buttonCont.setAttribute("class", "btn-div");
    document.getElementById("floor-" + i).appendChild(buttonCont);

    //creating lift container inside floor container
    let liftCont = document.createElement("div");
    liftCont.setAttribute("id", "lift-div-" + i);
    liftCont.setAttribute("class", "lift-div");
    document.getElementById("floor-" + i).appendChild(liftCont);

    //creating floor level name inside the button-div container
    let levelElement = document.createElement("p");
    levelElement.innerHTML = "Level-" + i;
    document.getElementById("btn-div-" + i).appendChild(levelElement);

    //creating up button
    let upButton = document.createElement("BUTTON");
    upButton.innerHTML = "Up";
    upButton.setAttribute("class", "up-btn");
    document.getElementById("btn-div-" + i).appendChild(upButton);

    //creating br element
    let brkElement = document.createElement("br");
    document.getElementById("btn-div-" + i).appendChild(brkElement);

    //creating down button
    let downButton = document.createElement("BUTTON");
    downButton.innerHTML = "Down";
    downButton.setAttribute("class", "down-btn");
    document.getElementById("btn-div-" + i).appendChild(downButton);

    i--;

}

while (c < noOfLifts) {

    let a = document.getElementById("lift-div-0");
    let b = document.createElement("div")
    b.setAttribute("class", "lift");
    a.appendChild(b);
    c++;
}

