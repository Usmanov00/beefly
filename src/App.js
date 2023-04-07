import './App.css';
import logo from './assets/images/2023-04-07 16.36.33.jpg'

function App() {
  return (
    <div className="background">
      <div className="container">

        <img src={logo} alt="" className="img"/>
        <div className="header">
          <h1> Горящие туры </h1>
          <h1> Авиабилеты </h1>
          <h1> Визы </h1>
        </div>
      </div>
      <div className="container-text">
      </div>
      <section className="container">
        <div className="container_enlaces">
          <a href="https://wa.me/+996709750585" className="enlaces w-full whatsapp"><p>Написать менеджеру по авиабилетам (Сауле)</p><i className='bx bxl-whatsapp'></i></a>
          <a href="https://instagram.com/beeflykg?igshid=YmMyMTA2M2Y=" className="enlaces w-full instagram"><p>Instagram</p><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="container_enlaces">
          <a href="#" className="enlaces w-full whatsapp"><p>WhatsApp</p><i className='bx bxl-whatsapp'></i></a>
        </div>
      </section>

    </div>
  );
}

export default App;

