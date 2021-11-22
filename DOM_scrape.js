let arr = []

let trs = [...document.querySelectorAll('tr.anon')] // get all trs of table
for (tr of trs) {
    // loop on each tr
    let tds = [...tr.children] // get all children >> td
    let t = {} // create empty object
    tds.forEach(td => {
        t[td.dataset.label.split(":")[0]] = td.innerText
    })  
    arr.push(t)
}