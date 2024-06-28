import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import "../public/assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf";
import ProgrammsList from "./components/Programms/Programms";
import AboutUs from "./components/AboutUsBlock/AboutUsBlock";
import TeachersBlock from "./components/TeachersBlock/TeachersBlock";
import FormBlock from "./components/FormBlock/FormBlock";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock";
import Footer from "./components/Footer/Footer";
import ReviewsBlock from "./components/ReviewsBlock/ReviewBlock";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div id="programmsList">
        <ProgrammsList />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="teachersBlock">
        <TeachersBlock />
      </div>
      <div id="reviewsBlock">
        <ReviewsBlock />
      </div>
      <div id="formBlock">
        <FormBlock />
      </div>
      <div id="contactsBlock">
        <ContactsBlock />
      </div>
      <Footer />
    </>
  );
}

export default App;
