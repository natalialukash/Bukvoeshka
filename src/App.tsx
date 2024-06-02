import Header from "./components/Header";
import Banner from "./components/Banner";
import classes from "./App.module.scss"
import './assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf'

function App() {
  return (
    <>
    <div className={classes.App}>Привет </div>
      <Header />
      <Banner />
    </>
  );
}

export default App;
