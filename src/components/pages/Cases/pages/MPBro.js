export const MPBro = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">MPBro</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main"><b>MPBro</b> – это программный комплекс для решения повседневных задач поставщика маркетплейсов, среди которых:</p>
                </div>
                {/* <div className="case-image">
                    <img src={mainImage} alt="iPad" />
                </div> */}
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <ol>
                        <li>
                            Товарная аналитика (отслеживание ликвидных и неликвидных товаров, определение объема будущих закупок)
                        </li>
                        <li>
                            Финансовая аналитика: анализ объема логистики, комиссии, выявление штрафов, расчет итоговой прибыли
                        </li>
                        <li>
                            Отслеживание сроков и корректности приемки поставок
                        </li>
                        <li>
                            Печать стикеров для товаров, коробов и паллетов при совершении поставок и маркировке
                        </li>
                        <li>
                            Управление контентом товаров (задание заголовков, описаний, свойств, в том числе массовое)
                        </li>
                        <li>
                            Разграничение доступов и введение ролей для пользователей
                        </li>
                        <li>
                            Интерактивные дашборды и виджеты
                        </li>
                    </ol>
                </div>
                <div className="case-sub-info-item">
                    <p><b>Цель проекта:</b><br /><br />
                        Оптимизировать всю работу по управлению и аналитике торговой деятельности поставщиков на маркетплейсы Wildberries и Ozon с учетом особенностей ведения такого бизнеса, т.к. торговые кабинеты маркетплейсов Wildberries и Ozon и уже реализованные аналитические решения не отвечали требованиям заказчика по полноте отображаемых данных, их корректности и удобству работы.

                        Для заказчика было критически важно проработать вопрос скорости подгрузки и обработки данных. Для этой цели была проведена обширная работа по созданию микросервисной архитектуры проекта, а также оптимизация запросов к базе данных.
                    </p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">MySQL, Redis, RabbitMQ, Clickhouse,DBT, Airflow, Kubernetes, Airbyte</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">PHP, JS(React), Python(FastAPI), Golang</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">2.5 года</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">15 000 000+ рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: <a href="https://mpbro.ru" target="_blank" rel="noreferrer"><b>mpbro.ru</b></a>
                </p>
            </div>
        </div>
    )
} 