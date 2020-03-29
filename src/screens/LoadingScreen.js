import React from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#e9e9e9', border:'3px solid black', textAlign:'center', justifyContent:'center',width: '75%',margin:'auto'}}>
                
                
                    <h1 style={{textAlign:'center', fontSize:40,paddingTop:40}}>You're Currently Connecting With...</h1>
                    <img
                        src="https://i.imgur.com/6Sg2irv.jpg"
                        style={{borderRadius:50, height:150, justifyContent:'center', alignItems:'center'}}
                            />
                    
                    <h2 style={{paddingBottom:40}}>Ananda</h2>
                    <div style={{justifyContent:'center'}}>
                        <i style={{fontSize: 80}} className="fa fa-refresh fa-spin"  aria-hidden="true"/>
                    </div>
                    
                    <div>
                        <Link to="/call/video">
                            <button
                                style={{backgroundColor:'#e9e9e9',height:20, width:5, border:'transparent'}}
                                />
                        </Link>
                    </div>
                    <div style={{height:'100%', width:'100%'}}>
                     {/* <Grid style={{width:'100%', margin:'auto'}}>
                        <Cell col={4}>
                            1
                        </Cell>
                        <Cell col={4}>
                            2
                        </Cell>

                        <Cell col={4}>
                            3
                        </Cell>
                    </Grid>    */}
                    </div>
                    
                    
                    
                
                
            </div>
        )
    }
}