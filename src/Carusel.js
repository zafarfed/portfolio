import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Carusel() {
    return (
        <div style={{display: 'block', padding: '0'}}>

            <Carousel className={'p-0'}>
                <Carousel.Item interval={1500} className={' p-5'}>
                    <h1 className={'head'}>Обо мне</h1>
                    <div className="row">
                        <div className={'col-md-12'}>
                            Я Зарипов Зафарбек родился в 12-февраля 2001г.
                            Республика Каракалпакстан город Беруний.
                            Интерес к программировании было ещё со школьных времен,
                            точнее я интересовался создавать сайты и интернет-магазины.

                        </div>



                    </div>

                </Carousel.Item>

                <Carousel.Item interval={1500} className={' p-5'}>
                    <h1 className={'head'}>Хобби и интересы</h1>

                    <div className="row">
                        <div className="col-md-3  text-center">
                            <p className={'icon'}><i className="fas fa-futbol icon-item"></i></p>
                            <p>Спорт</p>
                        </div>

                        <div className="col-md-3  text-center">
                            <p className={'icon'}><i className="fas fa-headphones icon-item"></i></p>
                            <p>Музыка</p>
                        </div>

                        <div className="col-md-3  text-center">
                            <p className={'icon'}><i className="fas fa-film icon-item"></i></p>
                            <p>Кино</p>
                        </div>

                        <div className="col-md-3  text-center">
                            <p className={'icon'}><i className="fas fa-laptop-code icon-item"></i></p>
                            <p>Кодинг</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={1500} className={' p-5'}>
                    <h1 className={'head'}>Образование</h1>
                   <div className="row">
                       <div className={'col-md-6 '}>
                           Образование : средняя-специальная.
                           <br/>
                           Студент : "PDP-IT Academy" в 2020г.
                           <br/>
                           Знаю : HTML, Css, JavaScript, Bootstrap, React JS
                           <br/>
                           Цель : Применять то что знаю в реальных проектах и стать Senior React разработчиком
                           <br/>
                           Опыт работы : еще нет
                       </div>
                       <div className={'col-md-6 text-center'}>
                           <p><i className="fab fa-instagram instagram"> </i>/zafarfed</p>
                           <p><i className="fab fa-facebook facebook"> </i>/zafarstyle</p>
                           <p><i className="fab fa-twitter twitter"> </i>/zafarfed</p>
                           <p><i className="fab fa-telegram telegram"> </i>/zafarfed</p>
                           <p><i className="fab fa-github github"> </i>/zafarfed</p>
                       </div>
                   </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Carusel;