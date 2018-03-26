import React, {Component} from 'react';

import Childshop1 from './childshop1'


export default class Shop1 extends Component {

componentWillMount() {
  
  this.state={ 
  purchaseList:[{
   
    Shirts : 2,
    Pants : 2, 
    Watch : 1, 
    Wallet : 1 
  
  },
  {
   
    Shirts : 3,
    Pants : 3, 
    Watch : 3, 
    Wallet : 3 
  
  }
  ]
}}


  render() {
   
     const {purchaseList} = this.state;
    
    return (
      <div>
      <h1> Costumer shopping list </h1>
      {
       
       purchaseList.map(function(val){

        return  <Childshop1 

                 shirtspurchased = {val.Shirts} 
                 pantspurchased = {val.Pants} 
                 watchpurchased = {val.Watch} 
                 walletpurchased ={val.Wallet} />
                
                })  
      

       }  
      </div>
    );
  }
}