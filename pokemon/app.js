console.log('2025')
const container=document.querySelector('#container')
for (i=1;i<=1025;i++){
    const newimg=document.createElement('img')
    newimg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newimg)
}