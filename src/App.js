import './App.css';
import Carusel from "./Carusel";
import Footer from "./Footer";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 header">
                    <p className={'logo'}>Главная</p>
                </div>

                <div className={'col-md-12 window'}>
                    <div className="name">
                        <p>Зафар Зарипов</p>
                        <span>Front-End Программист</span>
                    </div>
                </div>

                <div className="col-md-12 wrapper">
                    <div className="row">
                        <div className="col-md-3 image">
                        </div>
                    </div>


                    <div className="col-md-12 carusel">
                        <Carusel/>
                    </div>
                </div>

                <div className="col-md-12 skills text-center ">
                    <p> Иностранные языки</p>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 skill-1">
                                <p>Английский язык</p>
                                <p>Intermediate (B1)</p>
                            </div>
                            <div className="col-md-6 skill-2">
                                <p>Руссий язык</p>
                            </div>
                            <div className="col-md-6 skill-2">
                                <p>Казахский язык</p>
                            </div>
                            <div className="col-md-6 skill-1">
                                <p>Турецкий язык</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 contacts text-center p-2">
                            <h1>Контакты</h1>
                            <p><b>Телефон : </b> +998 99 950 45 50</p>
                            <p><b>Email : </b> Zafarstyle@mail.ru</p>
                            <p><b>Адрес : </b>Нурмакон м. Ташкент</p>
                        </div>
                        <div className="col-md-6 letter text-center p-2">
                            <h1>Напиши мне</h1>
                            <input style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid black',
                                padding: '5px',
                                margin: '10px',
                                outline:'none'
                            }} placeholder={'Имя'}/>
                            <input style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid black',
                                padding: '5px',
                                margin: '10px',
                                outline:'none'
                            }} placeholder={'Эл.Почта'}/>
                            <br/>
                            <input style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid black',
                                padding: '5px',
                                width: '400px',
                                outline:'none'
                            }} placeholder={'Телефон'}/>
                            <textarea style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid black',
                                padding: '5px',
                                width: '400px',
                                outline:'none'
                            }} placeholder={'Довавьте сообщение...'}/>
                            <br/>
                            <button className={'btn btn-outline-danger'}>Отправить</button>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
