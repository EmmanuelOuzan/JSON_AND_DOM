// document.querySelectorAll('tr.anon')[0].children[3].innerText
// let arr = document.querySelectorAll('tr.anon');

let country = '';
for (i = 0; i < document.querySelectorAll('tr.anon').length; i++) {
    country = document.querySelectorAll('tr.anon')[i].children[3].innerText;
    if (country.charAt(0) == 'G') {
        console.log(country);
    }
}

let tds = [...document.querySelectorAll('tr.anon')[0].children];
let tr = {}
tds.forEach(td => {
    tr[td.dataset.label.split(":")[0]] = td.innerText
})

let arr = [];
for (const [key, value] of Object.entries(tr)) {
    arr[`${key}`] = `${value}`
  }



// document.querySelectorAll('tr.anon')[0].children[4]

// .children[3].innerText

// // for (i in querySelectorAll.length){
//     document.querySelectorAll('tr.anon')[0].children[3].innerText
// }