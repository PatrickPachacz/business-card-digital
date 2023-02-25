import './App.css';
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <main className="main">
        <section className="main_section">
         <Info />
         <About />
         <Interest />
         <Footer />
        </section>
      </main>
    </div>
  );
}
