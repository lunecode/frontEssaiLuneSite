import React, { Component } from 'react';

import Carousel  from './components/carousel/Carousel';
import NavBar  from './components/navBar/NavBar';
import Accueil  from './components/accueil/Accueil';
import Footer  from './components/footer/Footer';

import './App.css';


class App extends Component {
  render() {
      return (
        <>
          <NavBar />
          <Carousel />
          <Accueil />
          <Footer />
        </>
      );
  }
};

export default App;


// import React, { Component } from 'react';
// import 'bulma/bulma';


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//             "Go to the store",
//             "Wash the dishes",
//             "Learn some code"
//             ],
//     render() {
//       return (
//         <div className="content">
//           <div className="container">
//             <section className="section">
//               <ul>
//                 {this.state.list.map(item => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </div>
//       )
//     }
//   }

//   export default App;