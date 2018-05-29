import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { players } from '../data/fifadb'

class App extends Component{
    constructor(){
        super()
        this.state = {
            players: players,
            searchfield: ''
        }
    }

    
    //Fetching data from JSON url    
    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));    
    }*/
    
//use this syntax when using own funtion
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const filteredPlayers = this.state.players.filter(player => {
            return player.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1> FIFA18 Db </h1> 
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList players={filteredPlayers} />  
                </Scroll>
            </div>
        );
    }
}

export default App;