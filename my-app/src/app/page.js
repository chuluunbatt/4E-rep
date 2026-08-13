import { Block, Boxes, Button, Cards, ContactBlock, ContactUs, Container, Footer, Groups, Header, Hero, Teams, Testimonials, TestimonialsBlock, } from "./_components"
import { Case } from "./_components/Case";
import { OurWorking } from "./_components/OurWorking";
import { Services } from "./_components/Services";
import { Studies } from "./_components/Studies";
const Home = () => {
  return (
    //  Header
    <>
      <Header />
      <Hero />
      <Container />
      <Services />
      <Boxes />
      <Block />
      <Case />
      <Studies />
      <OurWorking />
      <Cards />
      <Teams />
      <Groups />
      <Button />
      <Testimonials />
      <TestimonialsBlock />
      <ContactUs />
      <ContactBlock />
      <Footer />
    </>
  );
};
export default Home;    
