import React from "react";
import '../App.css';
import Header from './Header.jsx'
import SearchBox from './SearchBox.jsx'

function App() {
  return (
    <div className="container">
        <Header/>
        <SearchBox/>

        <div>
        <div className="section group">
            <div className="col span_1_of_3">
                This is column 1
            </div>
            <div className="col span_1_of_3">
                This is column 2
            </div>
            <div className="col span_1_of_3">
                This is column 3
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
