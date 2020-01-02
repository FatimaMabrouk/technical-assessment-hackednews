import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.

class TopTen extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {

   return (   
     <li>{this.props.value}</li>   
  ) 
   }
}
class Row extends React.Component {
  constructor(props){
    super(props);
    const numbres = props.numbres;
  }
  render() {
    return (
     <ul>
       {numbres.map( element => <TopTen element={element}/> )}
     </ul>
    
 )  
}
}


export default TopTen;