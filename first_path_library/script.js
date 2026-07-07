// invoccation variables
const div = document.getElementById('div');
const btn = document.getElementById('btn');
const send = document.querySelector('.send');
const dialog = document.getElementById('dialog');
const inp = document.getElementsByClassName('inp')
const form = document.getElementById('form')




btn.setAttribute('style', 'background-color: lightgreen; color: white; margin: 15px; font-weight: bold; font-size: 20px;  cursor: pointer;')

// variable declaration




const library = []

function books(id, title, author, pages, read) {

    if(!new.target){
        throw Error('You must use the new keyword to create a new book')
    }

    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

books.prototype.read = function(){
    (this.read === true) ? this.read = false : this.read = true

}



function addBookToLibrary(title, author, pages, read) {

    let book = new books(crypto.randomUUID(), title, author, pages, read);

    library.push(book);


}


addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('Good boy','Thomas bid', 100, false)
addBookToLibrary('Troy','brock lisner', 120, true)
addBookToLibrary('bani adm', 'basem yousef', 180, true);




function addtoDisplay(book){

    let block = document.createElement('div');
    block.setAttribute('style', 'margin: 10px;  padding: 10px;  border: 3px solid white;  border-radius: 20px;')
    let headline = document.createElement('p')
    headline.setAttribute('style', 'font-size: 20px;  font-weight: bold;  margin: 5px;')
    headline.textContent = book.title
    let display_btn = document.createElement('button')
    display_btn.setAttribute('style', 'background-color: lightgreen; font-size: 16px; color: white;  font-weight: bold;  cursor: pointer;')
    display_btn.dataset.action = 'display'
    display_btn.textContent = 'Hide'
    let read_btn = document.createElement('button')
    read_btn.setAttribute('style', 'background-color: lightgreen; font-size: 16px; color: white;  font-weight: bold;  cursor: pointer; margin: 3px;')
    read_btn.dataset.action = 'read'
    read_btn.textContent = 'Read'
    

    // unOrdered list to include all data expect headline ( book title )
    let book_data = document.createElement('ul')
    let book_author = document.createElement('li')
    book_author.textContent = book.author
    let book_pages = document.createElement('li')
    book_pages.textContent = book.pages
    let book_read = document.createElement('li')
    book_read.textContent = book.read
    book_data.appendChild(book_author)
    book_data.appendChild(book_pages)
    book_data.appendChild(book_read)


    

    // final to put elements in a block
    block.appendChild(headline)
    block.appendChild(book_data)
    block.appendChild(display_btn)
    block.appendChild(read_btn)


    // final to put block in a div
    div.appendChild(block)
    

}


library.forEach((book) => {

    addtoDisplay(book)

})



btn.addEventListener("click", (e) => {

    dialog.showModal()
    
        

})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(inp[0].value,inp[1].value,inp[2].value, inp[3].value)
    addtoDisplay(library[library.length - 1])
    dialog.close()
})


div.addEventListener('click', e => {
    if(e.target.dataset.action === 'display'){
        e.target.parentElement.style.display = 'none'
    }
})

div.addEventListener('click', e => {
    if(e.target.dataset.action === 'read'){
        
        if(e.target.textContent === 'Read'){
            e.target.textContent = 'UnRead'
            e.target.style.backgroundColor='red'
        }else{
            e.target.textContent = 'Read'
            e.target.style.backgroundColor='lightgreen'

        }
    }
})

