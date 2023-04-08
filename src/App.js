import './App.css';
import logo from './assets/images/logo.png'
import airplane from './assets/images/5776896.png'
import visa from './assets/images/visa.png'
import whatsapp from './assets/images/whatsapp-svgrepo-com (1).svg'
import instagram from './assets/images/instagram.png'
import location from './assets/images/location.png'

function App() {
  return (
    <div className="background">
      <div className="container">
        <img src={logo} alt="" className="img"/>
        <div className="header">
          <div className="title"><i className='bx bx-timer'></i><h5> Горящие туры </h5></div>
          <div className="title title-img"><img src={airplane} alt="airplane"/><h5> Авиабилеты </h5></div>
          <div className="title title-img"><img src={visa} alt="airplane"/><h5> Визы </h5></div>
        </div>
        <div className="container-text">
        </div>
        <div className="links">
          <ul>
            <li className="itemsCenter itemsInBox itemColor w-full">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996709750585" className="link"> WhatsApp менеджеру по авиабилетам
                <p><b>Сауле</b></p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996502750585" className="link"> WhatsApp менеджера по турам
                <p><b>Бексултан</b></p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://chat.whatsapp.com/CNZrHJbUX5O1TOuPYcrucu" className="link">Вступить в WhatsApp группу
                горящих <u>туров</u>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full instagram">
              <img src={instagram} alt="" width={30}/>
              <a href="https://instagram.com/beeflykg?igshid=YmMyMTA2M2Y=" className="link">
                <p>Instagram</p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full instagram">
              <img src={location} alt="" width={30}/>
              <a href="https://2gis.kg/bishkek/geo/70000001067955342" className="link">
                <p>Чуй/Советская (Адресс на карте)</p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full instagram">
              <img src={location} alt="" width={30}/>
              <a href="https://2gis.kg/bishkek/geo/70000001067955342" className="link">
                <p> Ахунбаева/Алматинская (Адресс на карте)</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <h1>Работаем круглосуточно 24/7</h1>
        {/*<div>🏠Адреса и 📲контакты г.Бишкек</div>*/}
      </div>
    </div>

  );
}

export default App;

