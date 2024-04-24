import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Main from './components/Main'
import Card from './components/Card'
import Grocery from './components/Grocery'
import Fruits from './components/Fruits'
import Veggie from './components/Veggie'
import Masala from './components/Masala'
import List from './components/List'

import Feedback from './components/Feedback'
import Services from './components/Services'

function App() {
  return (
    <div>
       <Navbar/>
       <Carousel />
       <Main />
       <Card />
       <Grocery/>
       <Fruits/>
       <Veggie/>
     <Masala/>
     <List category="grocery"/>
     <List category="vegatables" />
   <Feedback/>
  
   <Services/>
   

    </div>
  )
}

export default App
