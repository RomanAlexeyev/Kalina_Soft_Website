import mainImage from "../../../../assets/images/portfolio/maranbet_image.png"

export const Maranbet = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Maranbet</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>Maranbet</b> – платформа для онлайн-беттинга на спортивные события с оплатой в криптовалюте.</p>
                </div>
                <div className="case-image">
                    <img src={mainImage} alt="iPad" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p><b>Цель проекта:</b><br /><br />
                        Создание онлайн-платформы для любителей ставок на спортивные события посредством нативного криптовалютного токена проекта MARAN.

                        Заказчик обратился для полномасштабной доработки проекта, т.к. предыдущие исполнители не смогли довести его до минимально рабочего состояния – желаемый функционал отсутствовал, архитектура самого проекта была создана некорректно (не отвечала требованиям к нагрузке, скорости работы и полноте отображаемых данных), отсутствовала интеграция с блокчейном и т.д.
                    </p>
                </div>
                <div className="case-sub-info-item">
                    <b>Список проделанных работ:</b><br /><br />
                    <ul>
                        <li>
                            Проработка архитектуры и безопасности;
                        </li>
                        <li>
                            Увеличение пропускной способности сайта;
                        </li>
                        <li>
                            Разработка личного кабинета пользователя;
                        </li>
                        <li>
                            Подключение необходимых API-сервисов для отображения данных по событиям (спортивные мероприятия, коэффициенты, вся дополнительная информация);
                        </li>
                        <li>
                            Интеграция с сервисом Metamask;
                        </li>
                        <li>
                            Разработка смарт-контракта в сети ERC-20;
                        </li>
                        <li>
                            Проработка карточек событий, поиска, календаря и т.д.;
                        </li>
                        <li>
                            Разработка мобильной версии платформы
                        </li>
                    </ul>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">MySQL, Redis, RabbitMQ, Nginx, Kubernetes</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">PHP, Vue.js</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">продукт в стадии разработки</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">4 500 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: <a href="https://maranbet.com" target="_blank" rel="noreferrer"><b>maranbet.com</b></a>
                </p>
            </div>
        </div>
    )
} 