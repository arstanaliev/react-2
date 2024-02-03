import React from 'react';
import set from "../../../components/images/set-logo.svg"
import comp from "../../../components/images/comp-logo.svg"
import seo from "../../../components/images/seo-logo.svg"
import sms from "../../../components/images/sms-logo.svg"

const Servis = () => {
    return (
        <section id='servis'>
            <div className="container">
                <div className="servis">
                    <div className="set">
                        <img src={set} alt="" />
                        <p>
                        Используем популярные <br /> технологии
                        </p>
                    </div>
                    <div className="set">
                        <img src={comp} alt="" />
                        <p>
                        Адаптивный дизайн <br />— по умолчанию
                        </p>
                    </div>
                    <div className="set">
                        <img src={seo} alt="" />
                        <p>
                        Настраиваем SEO для сайта
                        </p>
                    </div>
                    <div className="set">
                        <img src={sms} alt="" />
                        <p>
                        Техническая поддержка на 2 <br /> месяца бесплатно
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servis;