import MainLayout from "./components/layout/MainLayout";
import Container from "./components/layout/Container";

const App = () => {
  return (
    <>
      <MainLayout children={<Container />}/>
    </>
  );
}

export default App;