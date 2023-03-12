import { Link } from "react-router-dom";

import web3spaceBotPreview from "../../../assets/images/portfolio/web3pace_bot_preview.png";
import sportivityPreview from "../../../assets/images/portfolio/sportivity_preview.png";
import maranbetPreview from "../../../assets/images/portfolio/maranbet_preview.png";
import mosaicsPreview from "../../../assets/images/portfolio/mosaics_preview.png";
import beaheroPreview from "../../../assets/images/portfolio/beahero_preview.png";
import oncobotPreview from "../../../assets/images/portfolio/onco_bot_preview.png";

// import immegrasPreview from "../../../assets/images/portfolio/immegras_preview.png";
// import wbImmegrasPreview from "../../../assets/images/portfolio/wb_immegras_preview.png";

export const Cases = ({ isPage }) => {
    return (
        <div>
            <h2 className={isPage ? "page-title" : "section-title mb-3"}>Наши проекты</h2>
            <div className="portfolio-container mb-3">
                <Link to="/cases/web3space_bot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">
                        Web3Space
                    </div>
                    <div className="portfolio-case-image"><img src={web3spaceBotPreview} alt="iPhone" /></div>
                </Link>
                <Link to="/cases/sportivity_bot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Sportivity</div>
                    <div className="portfolio-case-image"><img src={sportivityPreview} alt="iPhone" /></div>
                </Link>
                <Link to="/cases/maranbet" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Maranbet</div>
                    <div className="portfolio-case-image"><img src={maranbetPreview} alt="iPad" /></div>
                </Link>
                <Link to="/cases/mpbro" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">MPBro</div>
                    {/* <div className="portfolio-case-image"><img src={maranbetPreview} alt="iPad" /></div> */}
                </Link>
                <Link to="/cases/mosaic" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Алмазная мозаика</div>
                    <div className="portfolio-case-image"><img src={mosaicsPreview} alt="iPhone" /></div>
                </Link>
                <Link to="/cases/questionnaire" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Платформа для проведения опросов</div>
                    {/* <div className="portfolio-case-image"><img src={maranbetPreview} alt="iPad" /></div> */}
                </Link>
                <Link to="/cases/beahero" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Бытьгероем.рф</div>
                    <div className="portfolio-case-image"><img src={beaheroPreview} alt="iPhone" /></div>
                </Link>
                <Link to="/cases/oncobot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Онкологика</div>
                    <div className="portfolio-case-image"><img src={oncobotPreview} alt="iPhone" /></div>
                </Link>
            </div>
        </div>
    )
}