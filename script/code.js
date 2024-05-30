let btnClicker = document.querySelector(".submit")

let person = {}

btnClicker.addEventListener("click" , ()=> {
    let inputScreen = document.querySelector(".input")
    inputScreen = inputScreen.value
    let dob = inputScreen.slice(0,6) // right -> 1995-09-28
    let gen = inputScreen.slice(6,10) // right -> >=5000 Male, <5000 Female
    let c = Number(inputScreen.slice(10,11)) // 0,1,2 -> 

    if(inputScreen.length == "13"){
        if(Number(gen) >= 5000){
            person.gender = "Male"
        }else{
            person.gender = "Female"
        }
        if(c<=2){
            if(c==0){
                person.citizen = "SA Citizen" 
            }else if (c==1){
                person.citizen = "Permanent Resident"
            }else{
                person.citizen = "Refugee"
            }
        }else {
            person = {}
            person.error = "The ID No is incorrect"
        }
        let y = dob.slice(0,2)
        if(Number(y) > 25){
            y = "19"+y
            person.dob = y+"-"+dob.slice(2,4)+"-"+dob.slice(4,6)
        }else {
            y = "20"+y
            person.dob = y+"-"+dob.slice(2,4)+"-"+dob.slice(4,6)
        }
        if(person.dob && person.citizen && person.gender){
            document.querySelector(".res").innerHTML = `
                <p>DOB: ${person.dob}</p>
                <p>Gender: ${person.gender}</p>
                <p>Citizenship: ${person.citizen}</p>
            `
        }else {
            document.querySelector(".res").innerHTML = "This is not a valid SA ID number"
        }
    }else {
        document.querySelector(".res").innerHTML = "This is not a 13 digit SA ID number"
    }
})