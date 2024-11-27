console.log('works')
const form=document.getElementById('myform')
form.addEventListener("submit",function(event){
    console.log('test')
    event.preventDefault()
    const row=document.createElement("tr")
    row.innerHTML=`<td>${fname.value}</td><td>${lname.value}</td><td>${email.value}</td>`
    table.appendChild(row)
    fname.value=""
    lname.value=""
    email.value=""
})
const table=document.getElementById("table")
const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const email=document.getElementById("email")