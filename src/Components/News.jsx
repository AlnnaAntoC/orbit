import React, { useState } from "react";
import "./News.css";

const newsData = [
  {
    id: 1,
    title: "Nationwide Fiber Network Expansion Initiative",
    date: "15 Jan 2026",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "We have successfully accelerated our nationwide fiber optic expansion program, reinforcing high-capacity backbone infrastructure to support enterprise, government, and smart-city requirements. This initiative enhances bandwidth resilience, reduces latency, and enables future-ready digital ecosystems across critical regions.",
  },
  {
    id: 2,
    title: "Strategic Alliance with Global Telecom OEM",
    date: "28 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Through this strategic partnership, we strengthen our capability to deliver next-generation telecom solutions aligned with international compliance frameworks, operational excellence benchmarks, and long-term technology roadmaps.",
  },
  {
    id: 3,
    title: "Launch of Advanced ELV & Smart Systems Division",
    date: "05 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Our newly launched ELV and Smart Systems division focuses on intelligent surveillance, access control, automation, and integrated communication platforms designed for commercial and mission-critical environments.",
  },
  {
    id: 4,
    title: "Launch of Advanced ELV & Smart Systems Division",
    date: "05 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Our newly launched ELV and Smart Systems division focuses on intelligent surveillance, access control, automation, and integrated communication platforms designed for commercial and mission-critical environments.",
  },
  {
    id: 5,
    title: "Launch of Advanced ELV & Smart Systems Division",
    date: "05 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Our newly launched ELV and Smart Systems division focuses on intelligent surveillance, access control, automation, and integrated communication platforms designed for commercial and mission-critical environments.",
  },
  {
    id: 6,
    title: "Launch of Advanced ELV & Smart Systems Division",
    date: "05 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Our newly launched ELV and Smart Systems division focuses on intelligent surveillance, access control, automation, and integrated communication platforms designed for commercial and mission-critical environments.",
  },
  {
    id: 7,
    title: "Launch of Advanced ELV & Smart Systems Division",
    date: "05 Dec 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    content:
      "Our newly launched ELV and Smart Systems division focuses on intelligent surveillance, access control, automation, and integrated communication platforms designed for commercial and mission-critical environments.",
  },


];

const News = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="news-hero">
        <div className="news-hero-overlay">
          <h1>News & Insights</h1>
          <p>
            Strategic updates and technology-driven milestones shaping our
            enterprise growth.
          </p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news-section">
        <div className="news-subheading">All News</div>

        <div className="news-grid">
          {newsData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <article
                key={item.id}
                className={`news-card ${isActive ? "expanded" : ""}`}
                onClick={() =>
                  setActiveId(isActive ? null : item.id)
                }
              >
                <div
                  className="news-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="news-card-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>

                  <p>
                    {isActive
                      ? item.content
                      : `${item.content.substring(0, 120)}...`}
                  </p>

                  <span className="news-toggle">
                    {isActive ? "Collapse" : "Read More"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default News;
