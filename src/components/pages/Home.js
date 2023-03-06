import heroImage from "../../assets/images/hero_image.png"
import pdfIcon from "../../assets/images/pdf_file_icon.svg"

export const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-title">
                    <h1><b>Простые</b> решения<br />для <b>сложных</b> процессов</h1>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Laptop with floating elements" />
                </div>
                <div className="hero-buttons">
                    <button className="hero-button mr-4">Связаться с нами</button>
                    <button className="hero-button pdf-button">
                        Скачать презентацию<br />
                        <span>о компании в формате PDF</span>
                        <img className="pdf-icon" src={pdfIcon} alt="PDF file icon" />
                    </button>
                </div>
            </div>
            <div className="info-fields">
                <h2 className="section-title">Наши направления работы</h2>
                <div className="info-field-elements">
                    <div className="info-field-element convex">
                        <h3>Разработка ПО</h3>
                        <p>Разрабатываем программное обеспечения для автоматизации производственных и бизнес-процессов</p>
                    </div>
                    <div className="info-field-element convex">
                        <h3>Оптимизация действующих проектов</h3>
                        <p>Помогаем доработать и улучшить текущий функционал, а так же оптимизировать работу проекта</p>
                    </div>
                    <div className="info-field-element convex">
                        <h3>Разрабатываем персональные -ERP и -CRM системы</h3>
                        <p>Поможем начать эффективно управлять бизнесом благодаря автоматизации большинства процессов</p>
                    </div>
                    <div className="info-field-element convex">
                        <h3>Создаем полноценные web-приложения</h3>
                        <p>Создаем сайты и web-приложения для стартапов и бизнеса с нуля</p>
                    </div>
                </div>
            </div>
            <div className="info-fields">
                <h2 className="section-title">Наши преимущества</h2>
                <div className="info-field-elements">
                    <div className="info-field-element convex">
                        <p>Находим индивидуальный подход к каждому клиенту исходя из его запросов</p>
                    </div>
                    <div className="info-field-element convex">
                        <p>Открыто и честно ведем все процессы разработки проектов</p>
                    </div>
                    <div className="info-field-element convex">
                        <p>Нацелены на долгосрочное сотрудничество и поддержку продукта</p>
                    </div>
                    <div className="info-field-element convex">
                        <p>Помогаем с бизнес-процессами и всегда делимся личным опытом</p>
                    </div>
                </div>
            </div>
        </>
    )
}