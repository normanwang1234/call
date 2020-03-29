import React from 'react';
import {Link} from 'react-router-dom';
import {Player, ControlBar} from 'video-react';
import {Grid, Cell} from 'react-mdl';


export default class VideoScreen extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#e9e9e9', textAlign:'center', justifyContent:'center',width: '75%',margin:'auto', height: 500}}>
                
                
                <Player height={500}>
                    <source src="https://i.imgur.com/PTKeVkn.mp4" />
                    
                    <ControlBar autoPlay={true}/>
                    </Player>
                    <hr style={{color:'white',border:'3px solid black'}}/>

                <img
                    src="https://cdn3.iconfinder.com/data/icons/cosmo-color-multimedia-2/40/hang-512.png"
                    style={{width:100, height:90}}
                    
                    />
                    
                    
                    
                    
                    
                    
                    
                    
                
                
            </div>
        )
    }
}