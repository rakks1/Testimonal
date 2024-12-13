let testimonal_data =[
    {
        "name": "BILLA (2007)",
        "image":"ak.jpg",
        "text":"When an international gangster, David Billa, is killed, a police officer picks Velu, Billa's lookalike, inside the gang to get information. But Velu is framed for killing the cop."
    },
    {
        "name": "LEO (2023)",
        "image":"vj.jpg",
        "text":"Violently pursued by criminals who insist he's a former gangster, a humble cafe owner fights to shield his family and the truth about his identity."
    },
    {
        "name": "KGF-2 (2022)",
        "image":"kgf.jpg",
        "text":"The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes."
    }
]
//sync js with html
let data=0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_img")
let text= document.querySelector(".container_text")

//sync current data with html
function testimonal() {
     let current=testimonal_data[data]
     image.src=current.image   
     name.textContent=current.name   
     text.textContent=current.text  
     data++

//loop
if(data===testimonal_data.length){
    data=0
}
}

//looptiming
setInterval(()=>{
    testimonal()
},1500);


testimonal()


