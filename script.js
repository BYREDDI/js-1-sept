const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].profession == "developer")
            console.log(data[i]);
    }
}

// 2. Add Data
function addData() {
    let name = prompt("Enter name");
    let age = prompt("Enter age");
    let profession = prompt("Enter profeesion");
    let obj = { "name": name, "age": age, "profeesion": profession };
    data.push(obj);
    console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
    let filterArray = data.filter((a) => a.profession != "admin");
    console.log(filterArray);
}

// 4. Concatenate Array
function concatenateArray() {
    let data1 = [{ name: "ram", age: 23, profession: "student" }, { name: "bhavani", age: 21, profession: "engineer" }];
    let concatArray = [...data, ...data1];
    console.log(concatArray);
}

// 5. Average Age
function averageAge() {
    let sum = 0,
        count = 0;
    for (let i in data) {
        sum += data[i].age;
        count++;
    }
    console.log(sum / count);
}

// 6. Age Check
function checkAgeAbove25() {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 25) {
            console.log("In this array data, persons whose age greather than 25 exists");
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log("In this array data, persons whose age greather than 25 doesn't exist");
    }

}

// 7. Unique Professions
function uniqueProfessions() {
    let obj = {};
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (obj[data[i].profession] == undefined) {
            obj[data[i].profession] = 1;
        } else {
            obj[data[i].profession] += 1;
        }
        arr.push(data[i].profession);
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == 1) {
            console.log(data[i].profession);
        }
    }
}

// 8. Sort by Age
function sortByAge() {
    data.sort(function(a, b) { return a.age - b.age });
    console.log(data);
}


// 9. Update Profession
function updateJohnsProfession() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name == "john") {
            data[i].profession = "manager";
        }
    }
    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        if (obj[data[i].profession] == undefined) {
            obj[data[i].profession] = 1;
        } else {
            obj[data[i].profession] += 1;
        }

    }
    console.log(obj);
}