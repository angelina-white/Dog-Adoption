import Header from "./Header"
import DogList from "./DogList"
import dogs from "../Data/dogs"

function App() {
  return (
    <div className="App">
      <Header />
      <DogList dogs={dogs}/>
    </div>
  );
}

export default App;
