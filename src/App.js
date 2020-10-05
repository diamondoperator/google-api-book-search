import React from 'react';
import './App.css';
import Header from './Header/Header';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Bookmark from './Bookmarks/Bookmarks';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books:[],
      printType:null,
      bookType:null
    }
  }

  handleSearch=(query)=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(resp => resp.json())
    .then(volumes => this.setState({books:volumes.items}))
  } 

  setPrintType=(printType)=>{
    printType==='0'?printType=null:void 0;
    this.setState({printType})
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Search handleSearch={this.handleSearch} />
          <Filter setPrintType={this.setPrintType}/>
          <Bookmark state={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
