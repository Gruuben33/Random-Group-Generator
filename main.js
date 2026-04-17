function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(50);

    n = ['Pesse', 'Gack', 'Sames', 'Tohn', 'Verry', 'Qacob', 'Nustin', 'Wordan'];
    m = 3;
    groups = {};
    generateGroups(n, m);
    // grouping = generateGroups(n, m);
    // [key, names] = Object.entries(grouping);
    // for (let i = 0; i < Object.entries(grouping)[0].length; i++) {
        // text(`Group ${i + 1}: ${names[i]}`, 50, 50)
    // text(`${grouping}`, 50, 50)
    // }
}

function generateGroups(n, m) {
    let numberOfGroups = Math.ceil(n.length / m);
    for (let j = 0; j < numberOfGroups; j++) {
            text(`Group ${j + 1}:`, windowWidth/2 - 250, windowHeight/2 + j * 100);
            groups[j] = [];
        for (let i = 0; i < m; i++) {
            let indexOfPerson = Math.round(random(0, n.length - 1))
            let person = n[indexOfPerson];
            groups[j].push(person);
            text(`${groups[j]}`, windowWidth/2 + 100, windowHeight/2 + j * 100);
            n.splice(indexOfPerson, 1);
        }
    }
    return groups;
}