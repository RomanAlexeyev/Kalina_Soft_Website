import mainImage from "../../../../assets/images/portfolio/mosaic_image.png"

export const Mosaic = () => {
    return (
        <div className="portfolio-case-wrapper">
            <h2 className="case-page-title">Приложения для генерации изображений по фотографии (Алмазная мозаика)</h2>
            <div className="case-info">
                <div className="case-text">
                    <p className="case-info-main">Заказчик – поставщик товаров для творчества (emblem-russia.ru) пришел с запросом разработать сервис, позволяющий  обрабатывать изображения таким образом, чтобы они могли использоваться в его продукции – Алмазной мозаике по загружаемым фотографиям. После загрузки изображения сервис производит его обработку и преобразует в шаблон для выкладки элементов мозаики.</p>
                </div>
                <div className="case-image fifty">
                    <img src={mainImage} alt="iPhone" />
                </div>
            </div>
            <div className="case-sub-info">
                <div className="case-sub-info-item">
                    <p>
                        <b>Задача:</b><br />
                        Разработать мобильное приложение для генерации изображений с подключением нейросети.
                        <br />
                        <br />
                        <b>Цель проекта:</b><br />
                        Усиление бренда и разработка собственного программного продукта для русскоговорящей аудитории.
                    </p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Использованные технологии:</b><br />
                    <p className="emphasized-item">Postgres, Redis</p>
                </div>
                <div className="case-text">
                    <b>Язык разработки:</b><br />
                    <p className="emphasized-item">PHP</p>
                </div>
            </div>
            <div className="case-info">
                <div className="case-text">
                    <b>Срок разработки проекта:</b><br />
                    <p className="emphasized-item">6 месяцев, продукт в стадии разработки</p>
                </div>
                <div className="case-text">
                    <b>Стоимость разработки:</b><br />
                    <p className="emphasized-item">3 500 000 рублей</p>
                </div>
            </div>
            <div className="case-contact-info">
                <p className="case-contact-info-item">
                    Ссылка на проект: мобильное приложение в разработке, дата сдачи проекта – <b>июль 2023 года</b>
                </p>
            </div>
        </div>
    )
} 