console.log('works')
const malgames=[
    {name:'superstar saga',release:'21/11/2003',ign:9},
    {name:'partners in time',release:'28/11/2005',ign:9},
    {name:'bowser`s inside story',release:'11/2/2009',ign:9.5},
    {name:'dream team',release:'30/6/2013',ign:8},
    {name:'paper jam bros.',release:'3/12/2015',ign:5.9}
]
const mal=document.getElementById('marioandluigi')
for(i=0;i<malgames.length;i++){
    const newgame=document.createElement('tr')
    newgame.innerHTML=`<td>${malgames[i].name}</td><td>${malgames[i].release}</td><td>${malgames[i].ign}</td>`
    console.log(newgame)
    mal.appendChild(newgame)
}