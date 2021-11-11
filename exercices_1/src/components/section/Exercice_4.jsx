import React from 'react'
import Main from '../template/Main'

const fs = require('fs')
const dir = '../../assets/pictures'
//On compte les photos dans le dossier
let totalPhotos = 0
function totalPhotosFun(dir){
    fs.readdir(dir, (error, files) => {
        return  files.length
    })
}
totalPhotos = totalPhotosFun(dir)


console.log("TOTAL:" + totalPhotos)


export default props => 
    <Main icon="home" title="Exercices 4" subtittle="Portifolio">
        <div className='display-4'>Exercices 4!</div>
        <hr/>
        <h2>Quelques photos à moi</h2>
        <p>Total: {totalPhotos}</p>
        
    </Main>