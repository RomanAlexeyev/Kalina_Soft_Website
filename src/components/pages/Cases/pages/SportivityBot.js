import mainImage from "../../../../assets/images/portfolio/sportivity_image.png"

export const SportivityBot = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Sportivity </h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>Sportivity</b> – интерактивный дневник наблюдений для анализа психоэмоционального состояния спортсменов на соревнованиях + самописная CRM-система для управления проектом и сбора внутренней аналитики.</p>
                </div>
                <div className="case-image">
                    <img src={mainImage} alt="iPhone with telegram bot" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p><b>Цель проекта:</b><br /><br />
                        Интерактивный дневник Sportivity позволяет пользователям (как профессиональным спортсменам-бильярдистам, так и игрокам-любителям) отслеживать свое психоэмоциональное состояние на разных этапах соревнований. Дневник выполнен в виде опросника, по результатам прохождения которого пользователь получает отчет за спортивное мероприятие с наглядным графиком, письменные рекомендации, а также инструменты для проработки сложностей и проблемных установок.
                        При желании пользователь может сравнить результаты любых ранее пройденных опросов между собой. Проект был очень хорошо принят аудиторией (русско- и англоязычной) на стадии тестирования.
                    </p>
                </div>
                <div className="case-sub-info-item">
                    <b>Функционал бота:</b><br /><br />
                    <ul>
                        <li>
                            Личный кабинет пользователя;
                        </li>
                        <li>
                            Интерактивный дневник в виде красочного WebApps-приложения для Telegram, после прохождения которого пользователь получает отчет с наглядным графиком;
                        </li>
                        <li>
                            Возможность сравнения нескольких ранее пройденных опросов;
                        </li>
                        <li>
                            Тренажеры для проработки психологических установок;
                        </li>
                        <li>
                            Рассылка статей по воронке, настраиваемой в CRM-системе проекта;
                        </li>
                        <li>
                            Выбор языка (русский/английский);
                        </li>
                        <li>
                            Возможность оплаты (интеграция платежных сервисов)
                        </li>
                    </ul>
                    <br />
                    <b>Функционал CRM-системы:</b><br /><br />
                    <ul>
                        <li>
                            База данных пользователей и пройденных ими опросов;
                        </li>
                        <li>
                            Инструменты внутренней аналитики (выгрузки, дашборды и т.д.);
                        </li>
                        <li>
                            Управление ролями доступа;
                        </li>
                        <li>
                            Проработка воронок рассылок;
                        </li>
                        <li>
                            Управление постингом контента
                        </li>
                    </ul>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">Postgres, Redis, Nginx, Docker Swarm</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">Python, PHP, JS(React)</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">3 месяца</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">720 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на Telegram-бот: <a href="https://t.me/sportivity_test_bot" target="_blank" rel="noreferrer"><b>t.me/sportivity_test_bot</b></a>
                </p>
            </div>
        </div>
    )
} 