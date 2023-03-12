import mainImage from "../../../../assets/images/portfolio/onco_bot_image.png"

export const OncoBot = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Telegram-бот для благотворительного проекта Онкологика</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>Онкологика</b> – то благотворительный проект для помощи людям с онкологическим заболеваниям.</p>
                </div>
                <div className="case-image">
                    <img src={mainImage} alt="iPhone" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p><b>Цель проекта:</b><br /><br />
                        Благотворительный фонд «Онкологика» обратился с просьбой разработать Telegram-бот, который станет альтернативой web-версии сайта в коммуникациях как с подопечными фонда, так и с теми, кто хочет пожертвовать средства на нужды проекта.<br />

                        Подопечным бот позволяет обращаться за психологической, материальной  и юридической помощью, заказать такси, равное и карьерное консультирование, а также связаться с операторами горячей линии. <br />

                        Желающие помочь могут зарегистрироваться в боте и произвести разовое пожертвование, а также подписаться
                        на рекуррентные платежи, получить отчет о целевом использовании пожертвованных средств и оставить заявку
                        на партнерство с фондом.
                    </p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">Python</p>
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
                    <p className="emphasized-item">благотворительный проект</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: <a href="https://t.me/Oncologica_bot" target="_blank" rel="noreferrer"><b>t.me/Oncologica_bot</b></a>
                </p>
            </div>
        </div>
    )
} 