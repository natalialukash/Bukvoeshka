import Header from "./components/Header";
import Banner from "./components/Banner";
import classes from "./App.module.scss";
import "../public/assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf";
import ButtonArrowLeft from "./components/ButtonArrowLeftGray";
import ProgrammsList from "./components/Programms";
import AboutUs from "./components/AboutUs";
import ButtonArrowRightGray from "./components/ButtonArowRightGray"
import ButtonArrowRightBeige from "./components/ButtonArrowRightBeige";

function App() {
  return (
    <>
      <div className={classes.App}>Привет </div>
      <Header />
      <Banner />
      <ButtonArrowLeft />
      <ProgrammsList />
      <AboutUs />
      <ButtonArrowRightGray/>
      <ButtonArrowRightBeige/>
    </>
  );
}

export default App;
