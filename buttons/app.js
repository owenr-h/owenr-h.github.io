console.log('test')
const button=document.getElementById('mybutton')
const fnshop=function(){
    console.log('it is at https://www.fortnite.com/item-shop?lang=en-US')
    console.log('epic needs to sort nintendo switch vbucks not synching on all platforms')
}
button.addEventListener("click", fnshop)
const button2=document.getElementById('mybutton2')
const body=document.querySelector('body')
button2.addEventListener("click",function(){
    console.log(body.className)
    if(body.className==="base"){
        body.className="dark"
    }else{
        body.className="base"
    }
})
const random=function(){
    num=Math.floor(Math.random()*(1000000000000000000-1+1))+1
    console.log(num)
}
const randombutton=document.getElementById('random')
randombutton.addEventListener("click", random)