import Title from "./components/Title";
import Holiday from "./components/Holiday";

function App() {
  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
      <Title text="Le nostre Vacanze"/>
      <Holiday />
    </div>
  );
}

export default App;
