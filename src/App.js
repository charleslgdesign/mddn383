 import React, { Component } from 'react'
 import Drinks from './components/Drinks.js'
 import ReturnBottle from './components/ReturnBottle.js'
 import Products from './components/Products.js'
 import Product from './components/Product.js'
 import Returns from './components/Returns.js'
 import Gallery from './components/Gallery.js'
 import WhitePaper from './components/WhitePaper.js'
 import Header from './components/Header.js'
 import './App.css'
 import Wallet from './components/Wallet.js'
 import Interactions from'./components/Interactions.js'
 import ReactDOM from 'react-dom'
 import { ReactComponent as Logo} from './components/img/logo.svg'
 import GalleryHeader from './components/GalleryHeader.js'
 import WhitePaperHeader from './components/WhitePaperHeader.js'
 import GetStartedHeader from './components/GetStartedHeader.js'


    class App extends Component { 

render() {
     return (

            
                
                <div className="container">
                  <div className="header-container">
                  <Header /> 
                  <WhitePaperHeader />
                  <GalleryHeader />
                  <GetStartedHeader />
                  <Drinks />
                  <Wallet />
                    <Returns />
                     
                    
                    
                    
                {/* <WhitePaper /> */}
                </div>
            </div>

        
     )
 }
}
 
 export default App;
  