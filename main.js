let image = document.getElementById("image")
let name = document.getElementById("name")


let Names =["Family Book","Kaustav", "Runa", "Suresh", "Mridula", "Narayan"]
let Pictures = ["Book.png","Me.png","Mom.png", "Dad.png", "Grandma.png", "Grandpa.png"]

var i=0
function Next() {

i++
var total_members = 5

if(i > total_members) {
    i = 0
}
var updatedImage = Pictures[i]
var updatedName = Names[i]

document.getElementById("image").src = updatedImage
document.getElementById("name").src = updatedName

}