import "./App.css";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="content-wrapper">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
