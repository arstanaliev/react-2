import React from 'react';
import logo from "../../../components/images/mb1 1.svg"

const Logos = () => {
    return (
       <section id="logos">
        <div className="container">
            <div className="logos">
                <div className="block">
                    <h1>1234</h1>
                    <h4>Логотипов создано</h4>
                </div>
                <div className="block">
                    <h1>321</h1>
                    <h4>Элементов фирменного стиля</h4>
                </div>
                <div className="block">
                    <h1>345</h1>
                    <h4>Страниц брендбука</h4>
                </div>
                <div className="block">
                    <h1>688</h1>
                    <h4>Довольных клиентов</h4>
                </div>
            </div>
            <div className="proverka">
                <img src={logo} alt="" />
                <div className="proverka-text">
                    <h2>Проверка на <br />
                     уникальность</h2>
                     <p>
                     Подтверждаем уникальность разработанного <br />
                      логотипа в системе Роспатент. По вашему запросу. <br /> <br />
                      Логотип не должен напоминать что-то уже <br />
                       существующее и знакомое. <br /> <br />
                       Уникальность идеи — основная составляющая процесса разработки<br />
                     логотипа. Ведь только уникальный, необычный дизайн логотипа <br />
                     запоминается потребителям, Вашим потенциальным клиентам <br />
                     и партнерам
                     </p>
                     <div className="provBtns">
                        <button>Заказать концультацию</button>
                        <button>Подробнее</button>
                     </div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Logos;