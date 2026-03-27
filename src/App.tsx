import './App.css'
import livingGallery from './assets/interiors/optimized/living-gallery-1600.jpg'
import lounge from './assets/interiors/optimized/lounge-1280.jpg'
import sofa from './assets/interiors/optimized/sofa-1280.jpg'

const trustedBrands = ['Samsonite', 'airbnb', 'Emirates', 'Unitedtravel']

const categoryTabs = ['Villa', 'Apartments', 'Mansion', 'Cottage']

const previewCards = [
  {
    image: lounge,
    title: 'Sky Flat',
    location: 'Blue Coast, Victoria Island',
  },
  {
    image: sofa,
    title: 'Harbor Flat',
    location: 'Maple Drive, Lekki Phase 1',
  },
]

const stayCards = [
  {
    image: lounge,
    rating: '4.5',
    eyebrow: 'EASYHOME LAYOUT PACK',
    title: 'Best option to stay here for your summer vacations',
    hostLabel: 'Meet the Host',
    price: '$140/night',
    priceNote: 'including all taxes',
    details: [
      { label: 'Beds/Bedrooms', value: '1 king + 2' },
      { label: 'Total Rooms', value: '1 king + 2' },
      { label: 'Bathrooms', value: '3 attached' },
      { label: 'Internet', value: '100Mbps' },
      { label: 'Covered Parking', value: 'Yes two' },
    ],
    amenities: [
      {
        title: 'Cleanliness',
        copy: 'Freshly prepared rooms with a crisp, hotel-ready finish.',
      },
      {
        title: 'Amenities',
        copy: 'Reliable utilities, concierge access, and calm shared spaces.',
      },
    ],
  },
  {
    image: livingGallery,
    rating: '4.8',
    eyebrow: 'EASYHOME LAYOUT PACK',
    title: 'Best option to stay here for your summer vacations',
    hostLabel: 'Meet the Host',
    price: '$180/night',
    priceNote: 'including all taxes',
    details: [
      { label: 'Beds/Bedrooms', value: '2 king + 2' },
      { label: 'Total Rooms', value: '2 king + 2' },
      { label: 'Bathrooms', value: '4 attached' },
      { label: 'Internet', value: '120Mbps' },
      { label: 'Covered Parking', value: 'Yes two' },
    ],
    amenities: [
      {
        title: 'Cleanliness',
        copy: 'Daily upkeep, polished interiors, and tidy guest-ready corners.',
      },
      {
        title: 'Amenities',
        copy: 'Fast Wi-Fi, secure parking, and investment-friendly hosting support.',
      },
    ],
  },
]

function App() {
  return (
    <main className="site-page" id="top">
      <div className="site-frame">
        <header className="site-header">
          <a className="brand-lockup" href="#top" aria-label="EasyHome">
            <img className="brand-icon" src="/brand-mark.png" alt="EasyHome logo" />
            <div className="brand-copy">
              <span className="brand-wordmark">
                <span className="brand-word brand-word--easy">Easy</span>
                <span className="brand-word brand-word--home">Home</span>
              </span>
              <span className="brand-tagline">
                ...smart land investment &amp; inflation tracking platform.
              </span>
            </div>
          </a>
        </header>

        <section className="hero-section">
          <div className="hero-copy">
            <div className="rating-chip">
              <span className="rating-chip__icon" aria-hidden="true">
                &#9733;
              </span>
              <div className="rating-chip__copy">
                <strong>4.5 Rating</strong>
                <span>by top hosts, tenants</span>
              </div>
            </div>

            <h1>
              Find out the
              <br />
              Best stay.
            </h1>

            <p>
              Your easiest space to compare beautiful homes, discover smarter stays, and move with
              clear property insight from the first click.
            </p>

            <div className="hero-actions">
              <a className="button-link button-link--solid button-link--large" href="#accommodation">
                Install App
              </a>
            </div>

            <div className="trusted-row">
              <span className="trusted-row__label">Trusted by</span>
              <div className="trusted-row__brands" aria-label="Trusted brands">
                {trustedBrands.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-media">
            <img
              src={livingGallery}
              alt="Living room with framed gallery wall and warm sofa"
              width="1600"
              height="900"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="showcase-grid">
          {previewCards.map((card) => (
            <article className="showcase-card" key={card.title}>
              <div className="showcase-card__media">
                <img
                  src={card.image}
                  alt={card.title}
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
                <span className="showcase-card__arrow" aria-hidden="true">
                  &#8599;
                </span>
              </div>
              <div className="showcase-card__meta">
                <strong>{card.title}</strong>
                <span>{card.location}</span>
              </div>
            </article>
          ))}

          <article className="feature-panel">
            <span className="section-kicker">EASYHOME LAYOUT PACK</span>
            <h2>Best option to stay here for your summer vacations</h2>
            <a className="feature-panel__link" href="#accommodation">
              Explore More
              <span aria-hidden="true">&#8594;</span>
            </a>
          </article>
        </section>

        <section className="accommodation-section" id="accommodation">
          <div className="section-heading">
            <span className="section-kicker section-kicker--muted">ACCOMMODATION LAYOUT PACK</span>
            <h2>accommodation</h2>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Accommodation categories">
            {categoryTabs.map((tab, index) => (
              <button
                key={tab}
                className={`category-tab${index === 0 ? ' category-tab--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={index === 0}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="stay-stack">
            {stayCards.map((stay) => (
              <article className="stay-card" key={`${stay.price}-${stay.rating}`}>
                <div className="stay-card__photo">
                  <img
                    src={stay.image}
                    alt={stay.title}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="stay-card__score">
                    <span aria-hidden="true">&#9733;</span>
                    {stay.rating}
                  </div>
                </div>

                <div className="stay-card__summary">
                  <span className="section-kicker">{stay.eyebrow}</span>
                  <h3>{stay.title}</h3>
                  <a href="#top">
                    {stay.hostLabel}
                    <span aria-hidden="true">&#8594;</span>
                  </a>
                </div>

                <div className="stay-card__pricing">
                  <div className="price-block">
                    <strong>{stay.price}</strong>
                    <span>{stay.priceNote}</span>
                  </div>

                  <dl className="detail-grid">
                    {stay.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="stay-card__services">
                  {stay.amenities.map((item) => (
                    <div className="service-item" key={item.title}>
                      <span className="service-item__icon" aria-hidden="true">
                        &#10003;
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}

                  <a className="button-link button-link--solid button-link--full" href="#top">
                    Book Now!
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
