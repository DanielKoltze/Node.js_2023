const rocks = [
    {name: "Dwayne johnson", age: 51},
    {name: "Netune", age: 1000000},
    {name: "Led Zeppelin", age: 40}
]



// make all the rocks one year older and save the value to rocksAgedOneYear
const rocksAgedOneYear = rocks.map(rock => {
    //return {...rock, age:rock.age+1}
    return {name: rock.name, age: rock.age}
})


//give all the rocks that have even ages

const evenAgedRocks = rocks.filter(rock => Number(rock.age) % 2 === 0)

console.log(rocks)
console.log(rocksAgedOneYear)
console.log(evenAgedRocks)

