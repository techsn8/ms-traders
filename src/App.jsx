
import React, { useState } from "react";
import "./App.css";

const products = [
  {
    name: "Premium Rice",
    category: "RICE",
    description:
      "Quality rice selections for everyday meals, families, and bulk buyers.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Daily Essentials",
    category: "RICE",
    description:
      "Explore rice options suitable for homes, retailers, and food businesses.",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Cookware",
    category: "KITCHEN",
    description:
      "Practical cookware for everyday cooking and modern kitchens.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kitchen Essentials",
    category: "KITCHEN",
    description:
      "Useful kitchen products for households, shops, and businesses.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = ""; // Add business number with country code

  const contactLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello MS Traders, I would like to know more about your products."
      )}`
    : "#contact";

  return (
    <div className="site-wrapper">
      <div className="topbar">
        Quality Products <span>•</span> Better Homes
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="MS Traders home">
          <div className="brand-mark">
            <span>MS</span>
            <i>✦</i>
          </div>
          <div className="brand-copy">
            <strong>MS TRADERS</strong>
            <small>RICE & KITCHEN PRODUCTS</small>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["Home", "Products", "About Us", "Wholesale", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a className="nav-cta" href={contactLink}>
            Enquire Now ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span /> YOUR EVERYDAY ESSENTIALS PARTNER
            </div>

            <h1>
              Quality for
              <br />
              Every <span>Home.</span>
            </h1>

            <p className="hero-description">
              Discover rice and kitchen essentials selected for everyday
              living. Serving households, retailers, and wholesale buyers
              with a commitment to quality and dependable service.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button button-primary">
                Explore Products <span>↗</span>
              </a>
              <a href="#wholesale" className="button button-outline">
                Wholesale Enquiry
              </a>
            </div>

            <div className="hero-points">
              <span>✓ Retail & Wholesale</span>
              <span>✓ Everyday Essentials</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1100&q=85"
                alt="A selection of everyday grocery essentials"
              />
              <div className="image-label">
                <span className="label-icon">✦</span>
                <div>
                  <strong>Made for Everyday Living</strong>
                  <small>Rice & kitchen essentials</small>
                </div>
              </div>
            </div>
            <div className="hero-decoration" />
            <div className="floating-badge">
              <span>MS</span>
              <small>YOUR TRUSTED<br />TRADING PARTNER</small>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <span className="benefit-icon">◇</span>
            <div>
              <strong>Quality-Focused</strong>
              <small>Products for everyday needs</small>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">▤</span>
            <div>
              <strong>Retail & Wholesale</strong>
              <small>Options for different buyers</small>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">⌂</span>
            <div>
              <strong>Home & Business</strong>
              <small>Essentials for every kitchen</small>
            </div>
          </div>
        </section>

        <section className="products section" id="products">
          <div className="section-heading">
            <span className="section-kicker">WHAT WE OFFER</span>
            <h2>Everyday essentials, <span>made simple.</span></h2>
            <p>
              Explore our product categories for your home, shop, or business.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-number">
                    0{index + 1}
                  </span>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a
                    href={`${contactLink === "#contact" ? "#contact" : contactLink}`}
                    className="text-link"
                  >
                    Enquire about products <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about-us">
          <div className="about-visual">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85"
                alt="Kitchen space with cooking essentials"
                loading="lazy"
              />
            </div>
            <div className="about-stamp">
              <span>MS</span>
              <small>TRADERS</small>
            </div>
          </div>

          <div className="about-content">
            <span className="section-kicker">A LITTLE ABOUT US</span>
            <h2>Bringing everyday essentials closer to you.</h2>
            <p>
              MS Traders is focused on rice and kitchen products for
              households and businesses. Our goal is to make finding
              everyday essentials straightforward, with friendly service
              for individual customers and bulk buyers alike.
            </p>
            <p>
              Whether you are shopping for your home or sourcing products
              for your business, we welcome your enquiry.
            </p>
            <a href="#contact" className="button button-primary">
              Get to Know Us <span>↗</span>
            </a>
          </div>
        </section>

        <section className="wholesale" id="wholesale">
          <div className="wholesale-inner">
            <div>
              <span className="section-kicker">FOR BUSINESS BUYERS</span>
              <h2>
                Looking for a reliable
                <br />
                <span>trading partner?</span>
              </h2>
              <p>
                Retailers, shop owners, hotels, and bulk buyers are welcome
                to discuss product availability and wholesale requirements.
              </p>
            </div>
            <a href="#contact" className="button button-gold">
              Discuss Your Requirements <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-heading">
            <span className="section-kicker">LET'S CONNECT</span>
            <h2>How can we help you?</h2>
            <p>Contact us for product details, pricing, or bulk enquiries.</p>
          </div>

          <div className="contact-card">
            <div className="contact-intro">
              <div className="contact-logo">MS</div>
              <h3>MS Traders</h3>
              <p>Rice & Kitchen Products</p>
              <p className="contact-note">
                Tell us what you need. We will be happy to hear from you.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <span>01</span>
                <div>
                  <small>PHONE / WHATSAPP</small>
                  <strong>Add your business number</strong>
                </div>
              </div>
              <div className="contact-detail">
                <span>02</span>
                <div>
                  <small>EMAIL</small>
                  <strong>Add your business email</strong>
                </div>
              </div>
              <div className="contact-detail">
                <span>03</span>
                <div>
                  <small>LOCATION</small>
                  <strong>Add your business location</strong>
                </div>
              </div>
              <a href={contactLink} className="button button-primary contact-button">
                Contact MS Traders ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-brand">MS TRADERS<span>.</span></a>
        <p>Rice & Kitchen Products · Quality Products, Better Homes</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} MS Traders. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
