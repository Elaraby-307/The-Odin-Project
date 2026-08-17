const express = require('express')
const app = express()
const path = require('path')

const options = {
    root: path.join(__dirname, 'HTML_Files')
}


app.get('/', (req,res) => {

      
    res.sendFile('index.html',options)
})

app.get('/about', (req,res) => {
    res.sendFile('about.html', options)
})
app.get('/contact', (req,res) => {
    res.sendFile('contact-me.html', options)
})
app.get('/*splat', (req,res) => {
    res.status(404).sendFile('404.html', options)
})

app.listen(3000,(err) => {
    if(err){
        console.log(err);
    }


})