function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(50);

    n = ['Pesse', 'Gack', 'Sames', 'Tohn', 'Verry', 'Qacob', 'Nustin', 'Wordan', 'Mack', 'Dack', 'Sack', 'Lack', 'Hack', 'Pack', 'Tack'];
    m = 2;
    groups = {};
    count = 0;
    generateGroups(n, m);
    text(`Task took ${count} iterations`, 50, 50);
    text(`The # of iterations \nis always the max per group \ntimes the number of groups`, 50, 150);
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
            text(`Group ${j + 1}:`, windowWidth/2 - 250, 50 + j * 100);
            groups[j] = [];
        for (let i = 0; i < m; i++) {
            let indexOfPerson = Math.round(random(0, n.length - 1))
            let person = n[indexOfPerson];
            groups[j].push(person);
            text(`${groups[j]}`, windowWidth/2 + 100, 50 + j * 100);
            n.splice(indexOfPerson, 1);
            count++;
        }
    }
    return groups;
}