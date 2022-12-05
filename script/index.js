function main() {}
    const charactersParentDiv =  document.getElementById('characters');
    const detailsBlock = document.getElementById('details-block')
   const pictures = [
    "img/skywalker.jpg", 
    'img/C-3PO.webp', 
    'img/R2-D2.webp', 
    'img/Darth-Vader.webp',
    "img/Leia-Organa.webp",
    "img/Owen-Lars.webp",
    "img/Beru-Whitesun-lars.webp",
    "img/R5-d4.webp",
    "img/biggs-darklighter.jpeg",
    "img/obi-wan.webp" 
   ]

   const chars = [
    {
        'name' : 'Luke Skywalker',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'C-3PO',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'R2-D2',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'Leia-Organa',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    }, 
    {
        'name' : 'Owen-Lars',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'Beru-Whitesun-lars',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'R5-D4',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'Biggs-darklighter',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    },
    {
        'name' : 'Obi-Wan-Kenobi',
        'height': '1.65m',
        'mass': '80kg',
        'hair_color': 'black',
        'skin_color' : 'white',
        'eye_color' : 'blue',
        'birth_year': 1899,
        'gender' : 'male'
    }
   ]

    fetch('https://swapi.dev/api/people')
    .then(data => data.json())
    .then(starWarrior => {
        // for(let character of starWarrior.results){
        //      console.log(character)
        //     const characterDiv = document.createElement('div')
        //     characterDiv.setAttribute('class', 'character')
        //     characterDiv.setAttribute('id', 'character')
        //     const characterLink = document.createElement('div')
        //     characterDiv.innerHTML = character.name
        //     charactersParentDiv.append(characterDiv)
        // }
        const characters = starWarrior.results
        let display = characters.map((character, index)=>{
            const characterDiv = document.createElement('div')
            characterDiv.classList.add(...['character' + (index + 1), 'character'])
            characterDiv.setAttribute('id', 'character')
           // characterDiv.setAttribute('class', 'character' + (index + 1))
           
            characterDiv.innerText = character.name
            charactersParentDiv.append(characterDiv)

            characterDiv.addEventListener('click', function(e){
                const characterDivCollection = document.querySelectorAll('.character')
                //convert to array
                Array.from(characterDivCollection).map(element=>{
                    if(element.className === characterDiv.className){
                        characterDiv.style.color = 'black'
                        characterDiv.style.background = 'yellow'
                    }else{
                        element.style.color = 'yellow'
                        element.style.background = 'black'
                    }
                })
                console.log(characterDivCollection)
                // const charDetails = document.createElement('div')
                // charDetails.setAttribute('class', 'char-details')
                // charDetails.setAttribute('id', `char-details - ${index}`)

                


        

                detailsBlock.innerHTML = 
                ` <div>
                    <div class='char_pic'> 
                        <img src=${pictures[index]} alt="">
                    </div>
                    
                    <p>Name:  ${character.name} </p>
                    <p>Height:  ${character.height} </p>
                    <p>Mass:  ${character.mass} </p>
                    <p>Hair Color:  ${character.hair_color} </p>
                    <p>Skin Color:  ${character.skin_color} </p>
                    <p>Eye Color:  ${character.eye_color} </p>
                    <p>Birth Year:  ${character.birth_year} </p>
                    <p>Gender:  ${character.gender} </p>
                </div>`
            })
        
        })
      
    }).catch(err=>{
        const characters = chars
        let display = characters.map((character, index)=>{
            const characterDiv = document.createElement('div')
            characterDiv.classList.add(...['character' + (index + 1), 'character'])
            characterDiv.setAttribute('id', 'character')
           // characterDiv.setAttribute('class', 'character' + (index + 1))
           
            characterDiv.innerText = character.name
            charactersParentDiv.append(characterDiv)

            characterDiv.addEventListener('click', function(e){
                const characterDivCollection = document.querySelectorAll('.character')
                //convert to array
                Array.from(characterDivCollection).map(element=>{
                    if(element.className === characterDiv.className){
                        characterDiv.style.color = 'black'
                        characterDiv.style.background = 'yellow'
                    }else{
                        element.style.color = 'yellow'
                        element.style.background = 'black'
                    }
                })
                console.log(characterDivCollection)
                // const charDetails = document.createElement('div')
                // charDetails.setAttribute('class', 'char-details')
                // charDetails.setAttribute('id', `char-details - ${index}`)

                


        

                detailsBlock.innerHTML = 
                ` <div>
                    <div class='char_pic'> 
                        <img src=${pictures[index]} alt="">
                    </div>
                    
                    <p>Name:  ${character.name} </p>
                    <p>Height:  ${character.height} </p>
                    <p>Mass:  ${character.mass} </p>
                    <p>Hair Color:  ${character.hair_color} </p>
                    <p>Skin Color:  ${character.skin_color} </p>
                    <p>Eye Color:  ${character.eye_color} </p>
                    <p>Birth Year:  ${character.birth_year} </p>
                    <p>Gender:  ${character.gender} </p>
                </div>`
            })
        
        })
    })

    



module.exports = { main }

