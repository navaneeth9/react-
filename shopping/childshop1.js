import React, {Component} from 'react';

export default class Childshop1 extends Component {
 
  render() {

   const {shirtspurchased,pantspurchased,watchpurchased,walletpurchased} = this.props; 
    
    return (
    <div >
    <ul>
       <li> <div>shirts purchased by costumer in childshop1: {shirtspurchased}</div> </li> 
       <li>  <div>pants purchased by costumer in childshop1: {pantspurchased}</div> </li> 
       <li>  <div>watch purchased by costumer in childshop1:{watchpurchased} </div> </li> 
        <li> <div>wallet purchased by costumer in childshop1:{walletpurchased} </div> </li> 
    </ul> 
      </div>
    );
  }
}