console.log('test')
bob=document.getElementById('fyt')
p=true
console.log(bob.innerHTML)
function h(){
    if(p){
        bob.innerHTML='<h1>done1</h1>'
    }
    else{
        bob.innerHTML='<h1>done2</h1>'
    }
    p=!p
}