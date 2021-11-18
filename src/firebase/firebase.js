const URL = 'https://webbuilder-806c3-default-rtdb.firebaseio.com/list.json'
const URLPOS = 'https://webbuilder-806c3-default-rtdb.firebaseio.com/list/-MoYmTHpWetSpLzviYX-.json'

let content = {
    list: [1, 2, 3],
    s: 'b'
}


fetch(URLPOS, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(content)
}).then(response => {
    console.log(response.json())
})
let as = new Promise()

fetch(URLPOS)
    .then(response => response.json())
    .then(data => console.log(data))