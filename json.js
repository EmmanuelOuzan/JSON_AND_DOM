// object creation

let obj = {
    'name': 'emmanuel',
    'age': '24',
    'semesters': {
        'semster1': [{
            'name' : "music",
            'grade' : 30
        }],
        'semster2': [{
            'Math': '90',
            'computeres': 100
        }], 
    }
}
console.log(json_obj = JSON.stringify(obj));

pj = JSON.parse(json_obj);

// pj.semesters.semster1.filter( item => item.grade < 56);
let arr = [];
arr.push()