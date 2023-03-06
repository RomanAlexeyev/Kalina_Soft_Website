import mainImage from "../../../../assets/images/portfolio/web3pace_bot_image.png"

export const Web3SpaceBot = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Аналитический бот для стартапа Web3Space</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>Telegram-бот Web3Space</b> – это аналитическая платформа, позволяющая буквально за пару кликов получить всю информацию, необходимую для оценки тысяч проектов в сфере криптовалют и блокчейна.</p>
                    <div className="case-info-sub">
                        Реализованный функционал:
                        
                        <ul>
                            <li>Сбор данных с более чем 50 различных ресурсов, обработка, хранение и выдача в зависимости от заданных настроек фильтрации</li>
                            <li>Интеграция с системами оплаты Paymaster, Tinkoff, Robokassa</li>
                            <li>Подключение админ-панели, позволяющей отслеживать различные метрики и управлять ботом</li>
                        </ul>
                    </div>
                </div>
                <div className="case-image">
                    <img src={mainImage} alt="iPhone with telegram bot" />
                </div>
            </div>
        </div>
    )
} 