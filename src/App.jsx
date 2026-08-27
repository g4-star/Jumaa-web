import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Download,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import "./App.css";

const PHONE = "0708209070";
const EMAIL = "dicksonsang434@gmail.com";
const WHATSAPP = "https://wa.me/254708209070";

const apartments = [
  {
    name: "GreenView Apartments",
    location: "Nakuru • Nakuru Town",
    price: "KSh 12,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=70",
  },
  {
    name: "JUMAA Heights",
    location: "Nairobi • Kasarani",
    price: "KSh 15,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=70",
  },
  {
    name: "Palm Residence",
    location: "Bomet • Bomet Town",
    price: "KSh 10,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=70",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [county, setCounty] = useState("");

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#" className="brand" onClick={closeMenu}>
          <span className="brand-mark">
            <Home size={20} strokeWidth={2.5} />
          </span>
          <span>JUMAA</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#apartments" onClick={closeMenu}>Apartments</a>
          <a href="#how" onClick={closeMenu}>How It Works</a>
          <a href="#owners" onClick={closeMenu}>For Landlords</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-download" href="https://github.com/g4-star/Jumaa-web/releases/download/v1.0.0/JUMAA-Android.apk" download onClick={closeMenu}>
            <Download size={16} />
            Download App
          </a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse-dot" />
              Kenya's smarter home search
            </div>

            <h1>
              Find a place
              <span>you'll love</span>
              to call home.
            </h1>

            <p>
              Discover apartments across Kenya, search by location and connect
              directly with property owners through JUMAA.
            </p>

            <div className="hero-actions">
              <a href="#apartments" className="primary-button">
                Find an Apartment
                <ArrowRight size={18} />
              </a>
              <a href="https://github.com/g4-star/Jumaa-web/releases/download/v1.0.0/JUMAA-Android.apk" className="secondary-button" download>
                <Smartphone size={18} />
                Get the App
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <ShieldCheck size={18} />
                Verified listings
              </div>
              <div>
                <MapPin size={18} />
                Search by location
              </div>
              <div>
                <Users size={18} />
                Direct owner contact
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
                alt="Modern apartment"
              />
              <div className="image-overlay" />

              <div className="floating-card property-card">
                <div className="mini-icon">
                  <Home size={18} />
                </div>
                <div>
                  <strong>GreenView Apartments</strong>
                  <span>Nakuru, Kenya</span>
                </div>
                <CheckCircle2 className="verified" size={20} />
              </div>

              <div className="floating-card price-card">
                <span>Starting from</span>
                <strong>KSh 12,000</strong>
                <small>per month</small>
              </div>
            </div>
          </div>
        </section>

        <section className="search-section">
          <div className="search-heading">
            <span>QUICK SEARCH</span>
            <h2>Where do you want to live?</h2>
          </div>

          <div className="search-box">
            <div className="field">
              <MapPin size={20} />
              <div>
                <label>County</label>
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                >
                  <option value="">Select county</option>
                  <option>Nakuru</option>
                  <option>Nairobi</option>
                  <option>Bomet</option>
                  <option>Kericho</option>
                  <option>Kisumu</option>
                  <option>Mombasa</option>
                  <option>Uasin Gishu</option>
                </select>
              </div>
              <ChevronDown size={17} />
            </div>

            <div className="field">
              <Building2 size={20} />
              <div>
                <label>Area</label>
                <select defaultValue="">
                  <option value="">Select area</option>
                  <option>Nakuru Town</option>
                  <option>Kasarani</option>
                  <option>CBD</option>
                  <option>Milimani</option>
                  <option>Kaptembwo</option>
                  <option>Bodeni</option>
                </select>
              </div>
              <ChevronDown size={17} />
            </div>

            <a href="#apartments" className="search-button">
              <Search size={19} />
              Search Homes
            </a>
          </div>
        </section>

        <section className="stats">
          <div><strong>01</strong><span>Simple search</span></div>
          <div><strong>02</strong><span>Explore homes</span></div>
          <div><strong>03</strong><span>Connect directly</span></div>
          <div><strong>100%</strong><span>Built for Kenya</span></div>
        </section>

        <section id="apartments" className="section apartments-section">
          <div className="section-top">
            <div>
              <span className="section-label">EXPLORE HOMES</span>
              <h2>Places worth<br /><em>coming home to.</em></h2>
            </div>
            <p>
              Browse beautiful apartments and discover a home that fits your
              lifestyle, location and budget.
            </p>
          </div>

          <div className="apartment-grid">
            {apartments.map((apartment) => (
              <article className="apartment-card" key={apartment.name}>
                <div className="apartment-image">
                  <img loading="lazy" decoding="async" src={apartment.image} alt={apartment.name} />
                  <div className="image-shade" />
                  <span className="verified-badge">
                    <CheckCircle2 size={14} /> Verified
                  </span>
                  <button className="heart-button">♡</button>
                  <div className="location-badge">
                    <MapPin size={14} />
                    {apartment.location}
                  </div>
                </div>
                <div className="apartment-info">
                  <h3>{apartment.name}</h3>
                  <div className="apartment-bottom">
                    <div>
                      <small>From</small>
                      <strong>{apartment.price}</strong>
                      <small>/ month</small>
                    </div>
                    <a href="#contact">
                      View <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="how-section">
          <div className="how-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4ae2a09cf159?auto=format&fit=crop&w=700&q=70"
              alt="Beautiful apartment interior"
            />
            <div className="how-image-label">
              <Home size={18} />
              Your next chapter starts here.
            </div>
          </div>

          <div className="how-content">
            <span className="section-label">SIMPLE & FAST</span>
            <h2>Finding a home<br /><em>shouldn't be difficult.</em></h2>
            <p>
              JUMAA brings the entire apartment search experience together in
              one simple place.
            </p>

            <div className="steps">
              <div className="step">
                <span>01</span>
                <div>
                  <h3>Search</h3>
                  <p>Choose your county, subcounty and preferred area.</p>
                </div>
              </div>
              <div className="step">
                <span>02</span>
                <div>
                  <h3>Explore</h3>
                  <p>View photos, locations, details and available units.</p>
                </div>
              </div>
              <div className="step">
                <span>03</span>
                <div>
                  <h3>Connect</h3>
                  <p>Contact the landlord or property owner directly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="download-section">
          <div className="download-copy">
            <span className="section-label">JUMAA MOBILE APP</span>
            <h2>Your next home<br /><em>is in your pocket.</em></h2>
            <p>
              Search apartments wherever you are. JUMAA is designed around the
              way Kenyans actually search for homes.
            </p>

            <div className="feature-list">
              <div><CheckCircle2 /> Location-based search</div>
              <div><CheckCircle2 /> Apartment photos & details</div>
              <div><CheckCircle2 /> Direct owner contact</div>
            </div>

            <a href="#contact" className="primary-button">
              <Download size={18} />
              Download JUMAA
            </a>
          </div>

          <div className="phone-showcase">
            <div className="phone-glow" />
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-top">
                  <span>JUMAA</span>
                  <MapPin size={16} />
                </div>
                <h4>Find your<br /><span>next home.</span></h4>
                <div className="phone-search">
                  <Search size={15} />
                  Search location
                </div>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"
                  alt="Apartment"
                />
                <div className="phone-property">
                  <strong>GreenView Apartments</strong>
                  <span>Nakuru • From KSh 12,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="owners" className="owners-section">
          <div className="owners-content">
            <span className="section-label">FOR PROPERTY OWNERS</span>
            <h2>Have apartments<br /><em>to rent?</em></h2>
            <p>
              Put your property in front of people actively searching for
              their next home.
            </p>

            <div className="owner-features">
              <div><Building2 /> Register your apartment</div>
              <div><Home /> Add photos and property details</div>
              <div><Users /> Manage available units</div>
              <div><MessageCircle /> Connect with potential tenants</div>
            </div>

            <a href={`tel:+254${PHONE.slice(1)}`} className="outline-button">
              Contact JUMAA <ArrowRight size={17} />
            </a>
          </div>

          <div className="owners-visual">
            <div className="owner-panel">
              <div className="panel-top">
                <span>PROPERTY DASHBOARD</span>
                <span className="live"><i /> LIVE</span>
              </div>
              <div className="panel-property">
                <img src={apartments[0].image} alt="" />
                <div>
                  <strong>GreenView Apartments</strong>
                  <span>Nakuru, Kenya</span>
                </div>
              </div>
              <div className="panel-stats">
                <div><strong>32</strong><span>Units</span></div>
                <div><strong>18</strong><span>Available</span></div>
                <div><strong>247</strong><span>Views</span></div>
              </div>
              <div className="panel-line" />
              <div className="panel-row"><span>Property status</span><b>Active</b></div>
              <div className="panel-row"><span>Listing visibility</span><b>Public</b></div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="section-center">
            <span className="section-label">WHY JUMAA</span>
            <h2>Built around the way<br /><em>you search for a home.</em></h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <MapPin />
              <span>01</span>
              <h3>Local search</h3>
              <p>Find properties using counties, subcounties and areas you actually know.</p>
            </div>
            <div className="why-card featured">
              <ShieldCheck />
              <span>02</span>
              <h3>Trusted information</h3>
              <p>See clear property details and owner information before making a decision.</p>
            </div>
            <div className="why-card">
              <Smartphone />
              <span>03</span>
              <h3>Easy to use</h3>
              <p>A simple experience designed for your phone and everyday home hunting.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <span className="section-label">GET IN TOUCH</span>
            <h2>Ready to find<br /><em>your next home?</em></h2>
            <p>
              Have a question, want to advertise your apartment, or need help
              using JUMAA? Contact us directly.
            </p>
          </div>

          <div className="contact-actions">
            <a href={`tel:+254${PHONE.slice(1)}`} className="contact-card">
              <span><Phone /></span>
              <div><small>Call Us</small><strong>Talk to JUMAA</strong></div>
              <ArrowRight />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="contact-card">
              <span><MessageCircle /></span>
              <div><small>WhatsApp</small><strong>Chat with us</strong></div>
              <ArrowRight />
            </a>
            <a href={`mailto:${EMAIL}`} className="contact-card">
              <span><Mail /></span>
              <div><small>Email Us</small><strong>Email JUMAA</strong></div>
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="brand">
              <span className="brand-mark"><Home size={19} /></span>
              JUMAA
            </a>
            <p>Making it easier for Kenyans to find apartments and their next home.</p>
            <div className="socials">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle />
              </a>

              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span className="social-letter">f</span>
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span className="social-letter">◎</span>
              </a>

              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
                <span className="social-letter">𝕏</span>
              </a>

              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <span className="social-letter">◉</span>
              </a>

              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#apartments">Apartments</a>
            <a href="#how">How It Works</a>
            <a href="https://github.com/g4-star/Jumaa-web/releases/download/v1.0.0/JUMAA-Android.apk" download>Download App</a>
          </div>

          <div className="footer-column">
            <h4>For Owners</h4>
            <a href="#owners">List Your Apartment</a>
            <a href="#contact">Contact JUMAA</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href={`tel:+254${PHONE.slice(1)}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Kenya</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 JUMAA. All rights reserved.</span>
          <span>Find your next home.</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

export default App;
