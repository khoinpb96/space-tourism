import "../scss/Home.scss";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="home">
      <section className="home-page">
        <Header />
        <div className="welcome-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="cta-button">
          <h4>EXPLORE</h4>
        </div>
      </section>
    </main>
  );
}
