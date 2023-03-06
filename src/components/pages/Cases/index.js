import { Link } from "react-router-dom";

import web3spaceBotPreview from "../../../assets/images/portfolio/web3pace_bot_preview.png";
import immegrasPreview from "../../../assets/images/portfolio/immegras_preview.png";
import wbImmegrasPreview from "../../../assets/images/portfolio/wb_immegras_preview.png";

export const Cases = ({isPage}) => {
    return (
        <div>
            <h2 className={isPage ? "page-title" : "section-title mb-3"}>Наши проекты</h2>
            <div className="portfolio-container mb-3">
                <Link to="/cases/web3space_bot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Аналитический бот для стартапа Web3Space</div>
                    <div className="portfolio-case-image"><img src={web3spaceBotPreview} alt="iPhone" /></div>
                </Link>
                <Link to="/cases/web3space_bot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">CRM-системы для сайта Immergas</div>
                    <div className="portfolio-case-image"><img src={immegrasPreview} alt="Laptop" /></div>
                </Link>
                <Link to="/cases/web3space_bot" className="portfolio-case convex clickable">
                    <div className="portfolio-case-title">Система внутренней аналитики для поставщика на Wildberries и Immergas</div>
                    <div className="portfolio-case-image"><img src={wbImmegrasPreview} alt="Dashboard" /></div>
                </Link>
            </div>
        </div>
    )
}