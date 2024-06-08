import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import classes from "./App.module.scss";
import "../public/assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf";
import ProgrammsList from "./components/Programms/Programms";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  return (
    <>
      <div className={classes.App}>Привет </div>
      <Header />
      <Banner />
      <ProgrammsList />
      <AboutUs />
    </>
  );
}

export default App;
