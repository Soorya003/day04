function compareJSON(json1, json2) {
    // Parse JSON strings into objects
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    // Get sorted keys of objects
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    // Compare sorted keys length
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Compare sorted keys and values
    for (let i = 0; i < keys1.length; i++) {
        const key1 = keys1[i];
        const key2 = keys2[i];

        // Compare keys
        if (key1 !== key2) {
            return false;
        }

        // Compare values
        const value1 = obj1[key1];
        const value2 = obj2[key2];
        if (value1 !== value2) {
            return false;
        }
    }

    return true;
}

// Example JSON strings
const json1 = '{"name":"person1","age":5}';
const json2 = '{"age":5,"name":"person1"}';

// Compare JSON objects
const result = compareJSON(json1, json2);
console.log("JSON objects are equal:", result);
//how to compare two JSON have the same properties without order?