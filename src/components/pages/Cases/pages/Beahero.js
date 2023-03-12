import mainImage from "../../../../assets/images/portfolio/beahero_image.png"

export const Beahero = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Доработка сайта Бытьгероем.рф<br />+ создание бота поддержки</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main">
                        <b>Суть проекта:</b><br />
                        Благотворительный проект для помощи людям с онкологическими заболеваниями.
                    </p>
                    <br />
                    <p className="case-info-main">
                        <b>Цель проекта:</b><br />
                        Необходимо было разработать нативный чат-бот для навигации по сайту и поддержки пользователей, доработать структуру сайта и создать новые блоки.
                    </p>
                </div>
                <div className="case-image horizontal">
                    <img src={mainImage} alt="iPhone" />
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">JS(React)</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">1 месяц</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">200 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: <a href="https://бытьгероем.рф" target="_blank" rel="noreferrer"><b>бытьгероем.рф</b></a>
                </p>
            </div>
        </div>
    )
} 