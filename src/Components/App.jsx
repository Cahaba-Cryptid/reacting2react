import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: 'World!',
            amazed: 'You\'re so full of shit!',
            destination: 'Where next?',
            location: '',
            hasLoaded: false
        };


    }

    handleChanges(value) {
        this.setState({ location: value });
    }

    loadedBtn() {
        this.setState({hasLoaded: true})
    }
    
    componentDidMount() {
        console.log('componentDidMount starting')
        setTimeout(()=>{this.setState({hasLoaded: true})},3000);
    }

    render() {
        if (this.state.hasLoaded === false){
            return (
                <>
                <h1>Loading...</h1>
                <button onClick={()=>this.loadedBtn()}>Loaded</button>
                </>
            )
        }
        return (
            <>
                <h1>Hello {this.state.place} {this.state.amazed}</h1>
                <input placeholder={this.state.destination}
                    value={this.state.location}
                    onChange={(event) => this.handleChanges(event.target.value)}
                />
            </>
        )
    }
}



// const App = (props) => {
//     return (
//         <>
//         <h1>Hello {props.place}</h1>
//         </>
//     );
// }

export default App;

