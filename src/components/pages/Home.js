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
        </>
    )
}