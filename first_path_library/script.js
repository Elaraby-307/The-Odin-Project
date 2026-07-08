let div = document.getElementById('div')
let dialog = document.getElementById('dialog')
let new_btn = document.getElementById('btn')
let form = document.getElementById('form')

let library = []


function books (id ,title, author, pages, read){
    if(!new.target){
        throw Error("Please use constructor with new")
    }
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

books.prototype.readToggle = function(){
    this.read = !this.read
}





function addBookToLibrary(title, author, pages, read){
    let book = new books(crypto.randomUUID(), title, author, pages, read)

    library.push(book)
}


addBookToLibrary('troy', 'hecktor', 10, true)
addtoDisplay(library[library.length -1])
addBookToLibrary('360 vacation days', 'Ezz', 5, false)
addtoDisplay(library[library.length -1])



function addtoDisplay(book){

    

        let card = document.createElement('div') 
        card.classList.add('card')
        let headline = document.createElement('p')
        headline.textContent = book.title
        headline.setAttribute('style', 'padding: 3px; margin: 5px;')
        let list = document.createElement('ul')
        let autor_element = document.createElement('li')
        autor_element.textContent = book.author
        let pages_element = document.createElement('li')
        pages_element.textContent = book.pages
        let read_element = document.createElement('li')
        read_element.setAttribute('class','li_read')
        if(book.read === 'on'){
            read_element.textContent = 'had read'
        }else read_element.textContent = 'Not Yet'

        // form the dom
        list.appendChild(autor_element)
        list.appendChild(pages_element)
        list.appendChild(read_element)

        card.appendChild(headline)
        card.appendChild(list)


        
        let btn = document.createElement("btn")
        btn.setAttribute('style', 'background-color: yellow; font-size: 15px; padding: 3px; border-radius: 8px; cursor: pointer; margin: 5px;')
        btn.dataset.id = book.id
        btn.dataset.flag = 'flag'
        btn.textContent = 'Remove'


        let read_btn = document.createElement("btn")
        read_btn.setAttribute('style', 'background-color: lightgreen; font-size: 15px; padding: 3px; border-radius: 8px; cursor: pointer; margin: 5px;')
        read_btn.classList.add('read')
        read_btn.dataset.id = book.id
        if(book.id === true){
            read_btn.textContent = 'Read'
            read_btn.style.backgroundColor = 'lightgreen'
        }else{
            read_btn.textContent = 'Un Read'
            read_btn.style.backgroundColor = 'red'
        }
        

        //position of buttons
        card.appendChild(btn)
        card.appendChild(read_btn)


        div.appendChild(card)
    
}




new_btn.addEventListener('click' ,(e) => {
    if(e.target.id === 'btn'){
        dialog.showModal()
    }
})


form.addEventListener('submit', (e) => {

    e.preventDefault()
    addBookToLibrary(
        document.getElementsByClassName('inp')[0].value,
        document.getElementsByClassName('inp')[1].value,
        document.getElementsByClassName('inp')[2].value,
        document.getElementsByClassName('inp')[3].value)
    form.reset()
    dialog.close()    
    addtoDisplay(library[library.length -1 ])

})


div.addEventListener('click', (e) => {
    if(e.target.dataset.flag){
        let ind = library.findIndex((book) => book.id === e.target.dataset.id )
        library.splice(ind,1)
        console.log(library);
        e.target.parentElement.style.display='none';
    }
})


div.addEventListener('click', (e) => {
    if(e.target.classList.contains('read')){
        let obj = library.find((book) => book.id === e.target.dataset.id)
        let ind = library.findIndex((book) => book.id === e.target.dataset.id)
        obj.readToggle()
        let target = e.target.closest('.card').querySelector('.li_read')
        if(obj.read === true){
            target.textContent = 'had read'
            e.target.textContent = 'Un Read'
            e.target.style.backgroundColor = 'red'
        }else{
             target.textContent = 'Not Yet'
             e.target.textContent = 'Read'
             e.target.style.backgroundColor = 'lightgreen'
        }     
        console.log(obj);

    }
})


