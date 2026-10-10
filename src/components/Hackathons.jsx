import { useState } from "react";
import { FaTrophy, FaCalendarAlt, FaMicrochip, FaCube, FaBrain, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
// @ts-ignore
import hackathonImg from "../assets/hackathon.jpeg";

function Hackathons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="hackathons" className="hackathons">
      <h1>Hackathon Experience</h1>

      <div className="hackathonContainer">
        <article className="hackathonCard">
          <div className="hackathonBanner">
            <FaTrophy className="hackathonTrophyIcon" aria-hidden="true" />
            <span>🏆 Finalist – Smart India Hackathon (SIH 2026)</span>
          </div>

          <div className="hackathonLayout">
            <div className="hackathonInfo">
              <div className="hackathonMeta">
                <span className="hackathonYearBadge">
                  <FaCalendarAlt aria-hidden="true" />
                  SIH 2026
                </span>
                <span className="hackathonVenueBadge">
                  PSNA College of Engineering & Technology
                </span>
                <span className="hackathonStatusBadge">
                  Shortlisted for Grand Finale
                </span>
              </div>

              <h2 className="hackathonTitle">
                Intra-College Hackathon (Smart India Hackathon)
              </h2>

              <p className="hackathonDescription">
                Engineered a comprehensive <strong>beehive monitoring system</strong> integrating 
                <strong> IoT, AI, and blockchain technology</strong>; established transparent honey-batch 
                traceability, which improved consumer trust and operational efficiency.
              </p>

              <div className="hackathonPillars">
                <div className="pillarItem">
                  <FaMicrochip className="pillarIcon" aria-hidden="true" />
                  <div>
                    <strong>IoT Monitoring</strong>
                    <p>Sensors tracking temperature, humidity, and acoustic hive signals in real-time.</p>
                  </div>
                </div>

                <div className="pillarItem">
                  <FaBrain className="pillarIcon" aria-hidden="true" />
                  <div>
                    <strong>AI Intelligence</strong>
                    <p>Automated anomaly detection to detect colony stress and health dynamics early.</p>
                  </div>
                </div>

                <div className="pillarItem">
                  <FaCube className="pillarIcon" aria-hidden="true" />
                  <div>
                    <strong>Blockchain Traceability</strong>
                    <p>Immutable ledger records ensuring tamper-proof batch verification from hive to shelf.</p>
                  </div>
                </div>
              </div>

              <div className="hackathonTags">
                <span className="hackathonTag">#IoT</span>
                <span className="hackathonTag">#ArtificialIntelligence</span>
                <span className="hackathonTag">#Blockchain</span>
                <span className="hackathonTag">#SIH2026</span>
                <span className="hackathonTag">#Traceability</span>
              </div>
            </div>

            <div className="hackathonMedia">
              <div className="hackathonMediaBackdrop" aria-hidden="true" />
              <div 
                className="hackathonImageWrapper" 
                onClick={() => setModalOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="Click to view SIH 2026 result announcement poster"
                onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
              >
                <img
                  src={hackathonImg}
                  alt="Internal Smart India Hackathon 2026 Results - Shortlisted Teams Announcement"
                  className="hackathonImage"
                  loading="lazy"
                />
                <div className="hackathonImageOverlay">
                  <span className="zoomHint">
                    <FaExternalLinkAlt aria-hidden="true" />
                    Click to View Full Poster
                  </span>
                </div>
              </div>
              <p className="hackathonImageCaption">
                Internal Smart India Hackathon 2026 Results – PSNACET
              </p>
            </div>
          </div>
        </article>
      </div>

      {modalOpen && (
        <div 
          className="hackathonModalOverlay" 
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="hackathonModalContent" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modalCloseBtn" 
              onClick={() => setModalOpen(false)}
              aria-label="Close poster preview"
            >
              <FaTimes />
            </button>
            <img 
              src={hackathonImg} 
              alt="Internal Smart India Hackathon 2026 Results - Full View" 
              className="modalPosterImage" 
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hackathons;
