function setup() {
    createCanvas(400, 400);
    background(220);

    n = [Jesse, Jack, James, John, Jerry, Jacob, Justin, Jordan];
    m = 4;
    groups = {};
    grouping = generateGroups(n, m);
    text(`${grouping}`, windowWidth/2, windowHeight/2)
}

function generateGroups(n, m) {
    let numberOfGroups = Math.ceil(n.length / m);
    for (let j = 0; j < numberOfGroups; j++) {
            groups[i] = [];
        for (let i = 0; i < m; i++) {
            let indexOfPerson = random(0, n.length - 1)
            let person = n[indexOfPerson];
            groups[j].push(person);
            n.splice(indexOfPerson, 1);
        }
    }
    return groups;
}