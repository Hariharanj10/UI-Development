
import './App.css';

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
          <div className="right-nav">
              <span>logo</span>
              <span><input type="search" placeholder='search' /></span>
          </div>
         
          <div className="nav-bar">
              <span>Home</span>
              <span>Contact</span>
              <span>Aboutus</span>
              <span>Menu</span>
          </div>
          
      </header>
      <div className="main-section">
         <div className="main">
            <form id="form">
              <div className="labels">
                <label>
                  Name:
                  <input type="text"></input>
                </label>
              </div>
              <div className="labels">
                <label>
                  Email:
                   <input type="email"></input>
                </label>
                
              </div>
              <div className="labels">
                <label>
                  Pass:
                   <input type="password"></input>
                </label>
                
              </div>
              <div className="labels">
                <button>submit</button>
              </div>
            </form>
         </div>

      </div>
    </div>
    </>
   
  );
}

export default App;
