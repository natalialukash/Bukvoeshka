import Header from "./components/Header";
import Banner from "./components/Banner";
import classes from "./App.module.scss";
import "../public/assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf";
import ButtonArrowLeft from "./components/ButtonArrowLeft";
import ProgrammsList from "./components/Programms";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className={classes.App}>Привет </div>
      <Header />
      <Banner />
      <ButtonArrowLeft />
      <ProgrammsList />
      <AboutUs />
    </>
  );
}

export default App;
