function Footer(){
    return(
        <div className={' col-md-12 bg-white p-3'}>
            <div className="row">
                <div className="col-md-6">
                    <h4>© 2023 Иван Тихонов. Сайт создан на Wix.com</h4>
                </div>
                <div className="col-md-6" style={{display:'flex'}}>
                    <p><i className="fab fa-instagram instagram"> </i>/zafarfed</p>
                    <p><i className="fab fa-facebook facebook"> </i>/zafarstyle</p>
                    <p><i className="fab fa-twitter twitter"> </i>/zafarfed</p>
                    <p><i className="fab fa-telegram telegram"> </i>/zafarfed</p>
                    <p><i className="fab fa-github github"> </i>/zafarfed</p>
                </div>
            </div>
        </div>
    )
}export default Footer;