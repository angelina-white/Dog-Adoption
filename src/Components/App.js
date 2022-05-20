import Header from "./Header"
import SideNav from "./SideNav"
import DogList from "./DogList"
import dogs from "../Data/dogs"

console.log(dogs)

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <DogList dogs={dogs}/>
    </div>
  );
}

export default App;
