import React from 'react'
import Main from '../template/Main'
import ImageGallery from 'react-photo-gallery'

const photos = [
    {
        src: "https://i.imgur.com/KBrrTUW.jpg",
        width: 4,
        height: 3
    },
    {
        src: "https://i.imgur.com/b5tIvta.jpg",
        width: 1,
        height: 1
    }
]

const BasicRows = () => <ImageGallery photos={photos} />

class MyGallery extends React.Component {
    render(){
        return (
            <ImageGallery photos={photos}/>
        )
    }
}


export default props => 
    <Main icon="home" title="Exercices 5" subtittle="Portifolio">
        <div className='display-4'>Exercices 5!</div>
        <hr/>
        <BasicRows className='gallery'/>
        
        
    </Main>