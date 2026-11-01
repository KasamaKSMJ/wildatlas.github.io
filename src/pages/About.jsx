
import './About.css';

import aboutHero from '../assets/About/about-cover.jpg';
import exploreImage from '../assets/About/explore.jpg';
import discoverImage from '../assets/About/discover.jpg';
import experienceImage from '../assets/About/experience.jpg';

function About() {
  return (
    <main className="about-page">

      {/* 01. About Hero */}
      <section className="about-hero">

        <img
          src={aboutHero}
          alt="WildAtlas landscape"
          className="about-hero-image"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p>ABOUT WILDATLAS</p>

          <h1>
            The World
            <br />
            Is Waiting.
          </h1>

          <span>
            WildAtlas is a gateway to a world of travel, adventure, and discovery, where you can explore remarkable places and uncover their stories through your own perspective.
            More than just a travel guide, WildAtlas goes beyond recommending destinations, hidden gems, and places worth staying. It is designed to lead you toward new experiences, greater discoveries, and thrilling adventures waiting beyond the horizon.
            Every journey comes with its own challenges and unexpected obstacles. That's why WildAtlas is here to be your personal, always-accessible encyclopedia — a companion you can carry with you, 24 hours a day, providing valuable knowledge about the wildlife, nature, and surroundings of every territory you explore.
            No traveler's home, no explorer's camp, and no adventurer's journey across this boundless world would ever be complete without this mobile encyclopedia by their side.
            Explore the unknown. Discover the extraordinary. Let WildAtlas be your companion.
          </span>
        </div>

      </section>


      {/* 03. Our Philosophy */}
      <section className="our-philosophy">

        <div className="philosophy-header">
          <p className="about-label">01 — OUR PHILOSOPHY</p>

          <h2>Three Ways to See the World.</h2>

          <p>
            Every journey begins with curiosity.
            Discover what makes each experience meaningful.
          </p>
        </div>

        <div className="philosophy-grid">

          <article className="philosophy-card">
            <img src={exploreImage} alt="Explore the world" />

            <div className="philosophy-card-content">
              <span>01</span>
              <h3>Explore</h3>
              <p>
                Step beyond the familiar and embrace the unknown.
              </p>
            </div>
          </article>

          <article className="philosophy-card">
            <img src={discoverImage} alt="Discover new cultures" />

            <div className="philosophy-card-content">
              <span>02</span>
              <h3>Discover</h3>
              <p>
                Find inspiration in cultures, places, and hidden stories.
              </p>
            </div>
          </article>

          <article className="philosophy-card">
            <img src={experienceImage} alt="Experience new places" />

            <div className="philosophy-card-content">
              <span>03</span>
              <h3>Experience</h3>
              <p>
                Make every journey a meaningful experience.
              </p>
            </div>
          </article>

        </div>

      </section>

        {/* ROLE SELECTION */}
        <section className="roles-section about-closing">

        <h2>
          Your Next Journey
          <br />
          Starts Here.
        </h2>

        <p>
          The world is full of places to discover and stories
          to experience. Where will your curiosity take you next? 
          Travel, exploration, and adventure are endless in this boundless world. 
          Along your journey, you may encounter them. Your next great adventure is waiting for you.
        </p>

        <div className="roles-grid">

            <article className="role-card">
            <img src="/images/naturalist.png" alt="Naturalist" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Naturalist</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/moonshiner.jpg" alt="Moonshiner" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Moonshiner</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/collector.jpg" alt="Collector" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Collector</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/bounty-hunter.jpg" alt="Bounty Hunter" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Bounty Hunter</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/trader.jpg" alt="Trader / Merchant" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Trader / Merchant</h3>
            </div>
            </article>

        </div>
        </section>
    </main>
  );
}

export default About;
