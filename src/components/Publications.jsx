import { FaAward, FaBookOpen, FaCalendarAlt, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
// @ts-ignore
import bestPaperImg from "../assets/best-paper.jpeg";

const publications = [
  {
    id: "agentic-ai",
    title: "Runtime Security Policy Enforcement for Preventing Unauthorized Tool use in Agentic AI",
    conference: "Presented at ICIT4GS – 2026",
    venue: "Fatima College, Madurai",
    year: "2026",
    isAward: true,
    awardText: "Best Paper Award",
    image: bestPaperImg,
    imageCaption: "Receiving the Best Paper Award at ICIT4GS – 2026, Fatima College, Madurai",
    abstract:
      "Investigates dynamic runtime policy enforcement mechanisms to prevent rogue or unauthorized tool execution within autonomous agentic AI workflows, ensuring zero-trust containment and secure execution boundaries.",
    tags: ["Agentic AI", "AI Security", "Policy Enforcement", "Zero-Trust"],
  },
  {
    id: "adaptinet",
    title: "AdaptiNet: Quantum-Inspired Federated Framework for Volatile Social Media Management and Digital Media Analysis",
    conference: "Presented at INCOCOM 2026",
    venue: "NPR Group of Institutions",
    year: "2026",
    isbn: "ISBN: 978-81-996222-8-9",
    isAward: false,
    abstract:
      "Proposes AdaptiNet, a decentralized quantum-inspired federated learning architecture engineered for robust real-time digital media intelligence and volatile social data stream analysis while preserving data privacy.",
    tags: ["Quantum-Inspired Computing", "Federated Learning", "Social Media Analytics", "Distributed Systems"],
  },
];

function Publications() {
  return (
    <section id="publications" className="publications">
      <h1>Research & Publications</h1>

      <div className="publicationsGrid">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className={`publicationCard ${pub.isAward ? "featuredAwardCard" : ""}`}
          >
            {pub.isAward && (
              <div className="awardBanner">
                <FaAward className="awardTrophyIcon" aria-hidden="true" />
                <span>🏆 {pub.awardText}</span>
              </div>
            )}

            <div className={`pubContentLayout ${pub.image ? "withMedia" : "withoutMedia"}`}>
              <div className="pubInfo">
                <div className="pubMeta">
                  <span className="pubYearBadge">
                    <FaCalendarAlt aria-hidden="true" />
                    {pub.year}
                  </span>
                  <span className="pubConferenceBadge">{pub.conference}</span>
                  {pub.isbn && <span className="pubIsbnBadge">{pub.isbn}</span>}
                </div>

                <h2 className="pubTitle">{pub.title}</h2>

                <div className="pubVenue">
                  <FaMapMarkerAlt className="venueIcon" aria-hidden="true" />
                  <span>{pub.venue}</span>
                </div>

                <p className="pubAbstract">{pub.abstract}</p>

                <div className="pubTags">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="pubTag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {pub.image && (
                <div className="pubMediaContainer">
                  <div className="pubMediaBackdrop" aria-hidden="true" />
                  <div className="pubImageWrapper">
                    <img
                      src={pub.image}
                      alt="Best Paper Award Ceremony"
                      className="pubAwardImage"
                      loading="lazy"
                    />
                    <div className="pubImageOverlay">
                      <span className="awardSticker">🏆 Best Paper</span>
                    </div>
                  </div>
                  {pub.imageCaption && (
                    <p className="pubImageCaption">{pub.imageCaption}</p>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
