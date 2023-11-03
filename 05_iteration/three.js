// for of

const arr = [1,2,3,4]

for (const iterator of arr) {
    // console.log(iterator)
}

// map

const map = new Map()
map.set('PAK', 'lahore')
map.set('usa', 'lahore')
map.set('palestine', 'GAZA')

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ' --', value)
}