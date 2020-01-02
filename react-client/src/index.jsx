import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        var value = [1,2,4,5];
    }
    render(){
        return (
            
        <TopTen value={value} />
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

