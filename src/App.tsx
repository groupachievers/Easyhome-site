import { useState } from 'react'
import './App.css'
import heroBuilding from './assets/generated/hero-building.svg'
import homeBanana from './assets/generated/home-banana.svg'
import homeEko from './assets/generated/home-eko.svg'
import homeParkview from './assets/generated/home-parkview.svg'
import livingGallery from './assets/interiors/optimized/living-gallery-1600.jpg'
import lounge from './assets/interiors/optimized/lounge-1280.jpg'
import sofa from './assets/interiors/optimized/sofa-1280.jpg'
import vase from './assets/interiors/vase.jpg'

const trustedBrands = ['Samsonite', 'airbnb', 'Emirates', 'Unitedtravel']

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

type StayCard = {
  image: string
  rating: string
  eyebrow: string
  title: string
  hostLabel: string
  price: string
  priceNote: string
  details: Array<{ label: string; value: string }>
  amenities: Array<{ title: string; copy: string }>
}

type AccommodationCategory = {
  id: string
  label: string
  eyebrow: string
  headline: string
  description: string
  highlights: string[]
  stays: StayCard[]
}

const accommodationCategories: AccommodationCategory[] = [
  {
    id: 'villa',
    label: 'Villa',
    eyebrow: 'Private Villa Collection',
    headline: 'Roomy villas with private outdoor space and family-ready layouts.',
    description:
      'Designed for longer stays in calmer neighborhoods, these picks lean into garden access, larger shared spaces, and a more private arrival experience.',
    highlights: ['Private compounds', 'Garden or pool access', 'From $280/night'],
    stays: [
      {
        image: homeParkview,
        rating: '4.9',
        eyebrow: 'EASYHOME VILLA EDIT',
        title: 'Parkview Crest Villa',
        hostLabel: 'View the floor plan',
        price: '$320/night',
        priceNote: 'private garden and breakfast service',
        details: [
          { label: 'Beds/Bedrooms', value: '4 bedrooms' },
          { label: 'Total Rooms', value: '2 lounges + patio' },
          { label: 'Bathrooms', value: '4.5 ensuite' },
          { label: 'Internet', value: '250Mbps fiber' },
          { label: 'Covered Parking', value: '3 vehicles' },
        ],
        amenities: [
          {
            title: 'Private Compound',
            copy: 'Gated entry, quieter frontage, and enough outdoor room for extended family stays.',
          },
          {
            title: 'Family Hosting',
            copy: 'Daily cleaning, airport pickup coordination, and a stocked kitchen before check-in.',
          },
        ],
      },
      {
        image: livingGallery,
        rating: '4.7',
        eyebrow: 'EASYHOME VILLA EDIT',
        title: 'Gallery Garden Villa',
        hostLabel: 'Meet the villa team',
        price: '$280/night',
        priceNote: 'pool deck and concierge support',
        details: [
          { label: 'Beds/Bedrooms', value: '3 bedrooms' },
          { label: 'Total Rooms', value: 'family room + terrace' },
          { label: 'Bathrooms', value: '3 ensuite' },
          { label: 'Internet', value: '180Mbps fiber' },
          { label: 'Covered Parking', value: '2 vehicles' },
        ],
        amenities: [
          {
            title: 'Outdoor Living',
            copy: 'An airy lounge, shaded deck, and enough room for slow afternoons or weekend hosting.',
          },
          {
            title: 'Concierge Access',
            copy: 'Security coordination, housekeeping support, and fast issue response during your stay.',
          },
        ],
      },
    ],
  },
  {
    id: 'apartments',
    label: 'Apartments',
    eyebrow: 'City Apartment Picks',
    headline: 'Practical apartment stays close to work hubs, nightlife, and quick errands.',
    description:
      'This set is tuned for shorter city stays, easy commute routes, and compact spaces that still feel polished and move-in ready.',
    highlights: ['Business-ready Wi-Fi', 'Quick move-in stays', 'From $118/night'],
    stays: [
      {
        image: lounge,
        rating: '4.6',
        eyebrow: 'EASYHOME APARTMENT EDIT',
        title: 'Skyline One Apartment',
        hostLabel: 'See apartment tour',
        price: '$140/night',
        priceNote: 'city-facing balcony and fast Wi-Fi',
        details: [
          { label: 'Beds/Bedrooms', value: '2 bedrooms' },
          { label: 'Total Rooms', value: 'open lounge + dining' },
          { label: 'Bathrooms', value: '2 full baths' },
          { label: 'Internet', value: '150Mbps fiber' },
          { label: 'Covered Parking', value: '1 reserved slot' },
        ],
        amenities: [
          {
            title: 'Commute Friendly',
            copy: 'Set near major routes, business districts, and delivery-friendly retail corridors.',
          },
          {
            title: 'Move-In Ready',
            copy: 'Reliable utilities, tidy finishing, and all the basics already set up for short stays.',
          },
        ],
      },
      {
        image: homeEko,
        rating: '4.4',
        eyebrow: 'EASYHOME APARTMENT EDIT',
        title: 'Eko Corner Apartment',
        hostLabel: 'Check move-in options',
        price: '$118/night',
        priceNote: 'compact, central, and work-ready',
        details: [
          { label: 'Beds/Bedrooms', value: '1 bedroom' },
          { label: 'Total Rooms', value: 'studio lounge setup' },
          { label: 'Bathrooms', value: '1 full bath' },
          { label: 'Internet', value: '100Mbps fiber' },
          { label: 'Covered Parking', value: 'Shared secure lot' },
        ],
        amenities: [
          {
            title: 'City Access',
            copy: 'Shorter travel times, reliable ride-hailing pickup points, and neighborhood essentials nearby.',
          },
          {
            title: 'Efficient Layout',
            copy: 'A smaller footprint that still keeps the stay bright, tidy, and straightforward to maintain.',
          },
        ],
      },
    ],
  },
  {
    id: 'mansion',
    label: 'Mansion',
    eyebrow: 'Premium Mansion Stays',
    headline: 'Large-format homes for events, VIP hosting, and premium group weekends.',
    description:
      'These options prioritize arrival experience, dramatic common areas, and enough room for bigger groups without losing privacy.',
    highlights: ['Statement arrival', 'Large reception rooms', 'From $540/night'],
    stays: [
      {
        image: heroBuilding,
        rating: '5.0',
        eyebrow: 'EASYHOME MANSION EDIT',
        title: 'Harbour Crown Mansion',
        hostLabel: 'See mansion highlights',
        price: '$650/night',
        priceNote: 'grand reception halls and waterfront access',
        details: [
          { label: 'Beds/Bedrooms', value: '6 bedroom suites' },
          { label: 'Total Rooms', value: '3 lounges + cinema' },
          { label: 'Bathrooms', value: '6.5 designer baths' },
          { label: 'Internet', value: '300Mbps dedicated' },
          { label: 'Covered Parking', value: '6 vehicles' },
        ],
        amenities: [
          {
            title: 'Event Ready',
            copy: 'Built for receptions, formal dinners, and guest-heavy weekends without crowding the main house.',
          },
          {
            title: 'Premium Service',
            copy: 'On-call support, guest access coordination, and polished presentation from entry to suite.',
          },
        ],
      },
      {
        image: sofa,
        rating: '4.8',
        eyebrow: 'EASYHOME MANSION EDIT',
        title: 'Gallery Manor Residence',
        hostLabel: 'Explore private suite',
        price: '$540/night',
        priceNote: 'formal lounge and executive hosting setup',
        details: [
          { label: 'Beds/Bedrooms', value: '5 bedroom suites' },
          { label: 'Total Rooms', value: '2 lounges + library' },
          { label: 'Bathrooms', value: '5.5 ensuite' },
          { label: 'Internet', value: '220Mbps fiber' },
          { label: 'Covered Parking', value: '4 vehicles' },
        ],
        amenities: [
          {
            title: 'Executive Lounge',
            copy: 'Reception-ready seating, more formal styling, and enough space for meetings or private dinners.',
          },
          {
            title: 'Quiet Suites',
            copy: 'Large sleeping quarters with more separation from the entertainment and hosting zones.',
          },
        ],
      },
    ],
  },
  {
    id: 'cottage',
    label: 'Cottage',
    eyebrow: 'Cozy Cottage Corners',
    headline: 'Compact, lower-cost stays with softer interiors and slower pacing.',
    description:
      'Built around comfort and calm, these cottage options suit couples, solo guests, and weekend resets that do not need a huge footprint.',
    highlights: ['Quiet zones', 'Cozy interiors', 'From $84/night'],
    stays: [
      {
        image: homeBanana,
        rating: '4.5',
        eyebrow: 'EASYHOME COTTAGE EDIT',
        title: 'Banana Grove Cottage',
        hostLabel: 'See garden layout',
        price: '$96/night',
        priceNote: 'quiet weekend retreat with porch seating',
        details: [
          { label: 'Beds/Bedrooms', value: '1 queen suite' },
          { label: 'Total Rooms', value: 'lounge + breakfast nook' },
          { label: 'Bathrooms', value: '1 full bath' },
          { label: 'Internet', value: '80Mbps fiber' },
          { label: 'Covered Parking', value: '1 vehicle' },
        ],
        amenities: [
          {
            title: 'Slow Mornings',
            copy: 'A calmer layout with outdoor seating, softer landscaping, and less city noise around you.',
          },
          {
            title: 'Weekend Simplicity',
            copy: 'Compact services, easy upkeep, and a lower-cost option that still feels intentional and warm.',
          },
        ],
      },
      {
        image: vase,
        rating: '4.3',
        eyebrow: 'EASYHOME COTTAGE EDIT',
        title: 'Courtyard Nook Cottage',
        hostLabel: 'Preview the cozy interior',
        price: '$84/night',
        priceNote: 'compact stay with warm finishing touches',
        details: [
          { label: 'Beds/Bedrooms', value: '1 bedroom' },
          { label: 'Total Rooms', value: 'lounge corner + kitchenette' },
          { label: 'Bathrooms', value: '1 bath' },
          { label: 'Internet', value: '60Mbps Wi-Fi' },
          { label: 'Covered Parking', value: 'Shared courtyard' },
        ],
        amenities: [
          {
            title: 'Warm Finishes',
            copy: 'A more intimate layout with softer decor, better natural texture, and a calmer guest rhythm.',
          },
          {
            title: 'Budget Friendly',
            copy: 'Keeps the stay affordable without stripping out the essentials that make it feel comfortable.',
          },
        ],
      },
    ],
  },
]

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(accommodationCategories[0].id)
  const activeCategory =
    accommodationCategories.find((category) => category.id === activeCategoryId) ??
    accommodationCategories[0]
  const apkDownloadUrl =
    import.meta.env.VITE_APK_URL ??
    'https://github.com/groupachievers/Easyhome-site/releases/download/easyhome-apk/Easyhome.apk'

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
              <a
                className="button-link button-link--solid button-link--large"
                href={apkDownloadUrl}
                download="Easyhome.apk"
              >
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
            {accommodationCategories.map((category) => (
              <button
                key={category.id}
                id={`category-tab-${category.id}`}
                className={`category-tab${activeCategory.id === category.id ? ' category-tab--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeCategory.id === category.id}
                aria-controls={`category-panel-${category.id}`}
                tabIndex={activeCategory.id === category.id ? 0 : -1}
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            className="category-panel"
            id={`category-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`category-tab-${activeCategory.id}`}
          >
            <div className="category-spotlight">
              <div className="category-spotlight__copy">
                <span className="section-kicker">{activeCategory.eyebrow}</span>
                <h3>{activeCategory.headline}</h3>
                <p>{activeCategory.description}</p>
              </div>

              <div
                className="category-spotlight__stats"
                aria-label={`${activeCategory.label} highlights`}
              >
                {activeCategory.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>

            <div className="stay-stack">
              {activeCategory.stays.map((stay) => (
                <article className="stay-card" key={`${activeCategory.id}-${stay.price}-${stay.rating}`}>
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
          </div>
        </section>
      </div>
    </main>
  )
}

export default App