import Bookmark from "./sections/Bookmark";
import Footer from "./sections/Footer";
import Frompdf from "./sections/Frompdf";
import Navbar from "./sections/Navbar";
import Slider from "./sections/Slider";
import Topdf from "./sections/Topdf";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Bookmark/>
      <Slider />
      <Frompdf />
      <Topdf />
      <Footer />
    </main>
  );
}
