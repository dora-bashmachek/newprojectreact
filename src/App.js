import './App.css';
import {Component} from "react"
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Content from './components/content/content';


class App extends Component {
  render(){
     return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}
}

export default App;
