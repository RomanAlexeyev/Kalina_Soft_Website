import mainImage from "../../../../assets/images/portfolio/questionnaire_image.png"

export const Questionnaire = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Платформа для проведения опросов</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main">Запрос заказчика – создание единой платформы для проведения внутрикорпоративных опросов.</p>

                    <p className="case-info-main">Сервис должен генерировать опросы, в которые заказчик может загружать на голосование до 500 изображений, которые в дальнейшем будут использоваться в производимой продукции, а также выставлять требования к тому, сколько раз загружаемые изображения должны сравниваться между собой. Результаты опросов должны выдаваться в виде таблицы, по которым можно визуально отследить популярность того или иного изображения.</p>

                    <p className="case-info-main">ПО изначально рассчитано на 100 пользователей с возможностью дальнейшего увеличения пропускной способности.</p>

                    <p className="case-info-main">Как результат – у заказчика появится удобный инструмент оценки потенциальной продукции перед ее отправкой в производство.</p>
                </div>
                <div className="case-image horizontal">
                    <img src={mainImage} alt="interface" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p>
                        <b>Задача:</b><br />
                        Создание опросника для команды проекта для регулярной оценки сюжетов потенциальной продукции + предоставление наглядных отчетов об опросах.
                    </p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">Postgres, Redis, RabbitMQ, Kubernetes</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">PHP, JS(React), Python(FastAPI), Golang</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">5 месяцев</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">4 500 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: мобильное приложение в разработке, дата сдачи проекта – <b>июнь 2023 года</b>
                </p>
            </div>
        </div>
    )
} 