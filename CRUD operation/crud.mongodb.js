use("CrudDB")
db.createCollection("courses")
db.courses.insertOne({
    name: "web development",
    price: 0,
    projects: 3,
    description: "Learn web development from scratch"
})
let a = db.courses.find({price:0})
console.log(a.toArray());

db.courses.updateMany({price:0},{$set:{price:10}})
db.courses.deleteMany({name:"web development"})

