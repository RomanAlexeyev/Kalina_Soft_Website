import mainImage from "../../../../assets/images/portfolio/web3pace_bot_image.png"

export const Web3SpaceBot = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Web3Space</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>Web3Space</b> – прикладное ПО в виде Telegram-бота для автоматизированной аналитики проектов в сфере блокчейна и криптовалют + самописная CRM-система для управления проектом и сбора внутренней аналитики.</p>
                </div>
                <div className="case-image">
                    <img src={mainImage} alt="iPhone with telegram bot" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p><b>Цель проекта:</b><br /><br />
                        Telegram-бот Web3Space позволяет пользователю в пару кликов получать обширную информацию о проектах в сфере блокчейна и криптовалют – данные по проекту предоставляются в виде удобно скомпонованной таблицы, разбитой по направлениям анализа (финансового, технического и социального). Все собираемые по проекту данные анализируются через заложенный в продукт алгоритм, что значительно ускоряет и упрощает для пользователя собственный анализ проекта. Среди других популярных функций – создание динамического макета собственного инвестиционного портфеля, всевозможные кастомные рейтинги и удобные оповещения.
                    </p>
                </div>
                <div className="case-sub-info-item">
                    <b>Функционал бота:</b><br /><br />
                    <ul>
                        <li>
                            Парсинг данных из 50+ ресурсов, а также их дальнейшая обработка, хранение и удобная выдача десятков параметров по 20.000+  проектов в сфере блокчейна и криптовалют;
                        </li>
                        <li>
                            Собственная скоринг-система проектов;
                        </li>
                        <li>
                            Кастомные рейтинги по заданным параметрам с системой фильтрации;
                        </li>
                        <li>
                            Добавление проектов в Избранное и Портфель, а также выставление сигналов на движение их рыночной цены;
                        </li>
                        <li>
                            Нативные инструкции + обучающий блок;
                        </li>
                        <li>
                            Аналитика по инвестиционным фондам;
                        </li>
                        <li>
                            Локализация на английский язык;
                        </li>
                        <li>
                            3 версии продукта (Free, Light, Pro), отличающиеся по полноте выдаваемых данных;
                        </li>
                        <li>
                            Интеграция системы оплаты (Paymaster, Tinkoff, Robokassa);
                        </li>
                        <li>
                            Интеграция промокодов;
                        </li>
                        <li>
                            Связка с самописной CRM-системой, отслеживающей все необходимые метрики (пользовательское поведение, оплаты, активация промо кодов от блогеров и т.д.)
                        </li>
                    </ul>
                    <br />
                    <b>Функционал CRM-системы:</b><br /><br />
                    <ul>
                        <li>
                            Инструменты внутренней аналитики (выгрузки, дашборды и т.д.);
                        </li>
                        <li>
                            База данных клиентов
                        </li>
                    </ul>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">MongoDB, Redis, RabbitMQ, Nginx, Clickhouse, DBT, Airflow, Kubernetes</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">Python, GoLang</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">1,5 года</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">6 500 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Сайт проекта: <a href="https://bot.web3space.io" target="_blank" rel="noreferrer"><b>bot.web3space.io</b></a>
                </p>
                <p className="case-contact-info-item">
                    Аналитический бот: <a href="https://t.me/web3space_bot" target="_blank" rel="noreferrer"><b>t.me/web3space_bot</b></a>
                </p>
            </div>
        </div>
    )
} 