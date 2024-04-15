const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const names = [];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        names.push(data[i][j].name);
    }
}

console.log(names);