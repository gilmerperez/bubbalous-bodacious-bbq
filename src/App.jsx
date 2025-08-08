import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import PartyPacks from "./pages/PartyPacks/PartyPacks";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/party-packs" element={<PartyPacks />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </>
  );
}

export default App;
