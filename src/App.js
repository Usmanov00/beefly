import './App.css';
import logo from './assets/images/logo.png'
import airplane from './assets/images/5776896.png'
import visa from './assets/images/visa.png'
import whatsapp from './assets/images/whatsapp-svgrepo-com (1).svg'
import instagram from './assets/images/instagram.png'

function App() {
  return (
    <div className="background">
      <div className="container">
        <img src={logo} alt="" className="img"/>
        <div className="header">
          <div className="title"><i className='bx bx-timer'></i><h5> Горящие туры </h5></div>
          <div className="title title-img"><img src={airplane} alt="airplane"/><h5> Авиабилеты </h5></div>
          <div className="title title-img"><img src={visa} alt="airplane"/><h5> Визы </h5></div>
          <div>🏠Адреса и 📲контакты г.Бишкек</div>
        </div>
        <div className="container-text">
        </div>
        {/*<section className="container">*/}
        {/*  <div className="container_enlaces">*/}
        {/*    <a href="https://wa.me/+996709750585" className="enlaces w-full whatsapp"><p>Написать менеджеру по авиабилетам (Сауле)</p><i className='bx bxl-whatsapp'></i></a>*/}
        {/*    <a href="https://instagram.com/beeflykg?igshid=YmMyMTA2M2Y=" className="enlaces w-full instagram"><p>Instagram</p><i className='bx bxl-instagram'></i></a>*/}
        {/*  </div>*/}
        {/*  <div className="container_enlaces">*/}
        {/*    <a href="#" className="enlaces w-full whatsapp"><p>WhatsApp</p><i className='bx bxl-whatsapp'></i></a>*/}
        {/*  </div>*/}
        {/*</section>*/}
        <div className="links">
          <ul>
            <li className="itemsCenter itemsInBox itemColor w-full">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996709750585" className="link"> WhatsApp менеджеру по авиабилетам
                <p>Сауле</p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full instagram">
              <img src={instagram} alt="" width={30}/>
              <a href="https://instagram.com/beeflykg?igshid=YmMyMTA2M2Y=" className="link">
                <p>Instagram</p>
              </a>
            </li>

            {/*<li><a href="https://go.2gis.com/26o5mz"*/}
            {/*       className="link">Орто-Сай (Адресс на карте)*/}
            {/*  <span><br/>Все для салонов красоты</span>*/}
            {/*</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
      <div className="footer">
        @copyright
      </div>
    </div>

  );
}

export default App;

