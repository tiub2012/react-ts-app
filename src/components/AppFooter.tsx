import { FC } from 'react';

const AppFooter: FC = () => {
  return (
    <footer>
      <div className="max960">
        <div className="row">
          <div className="footer-item left">
            <span>Бесплатный звонок по России <a href="tel:8 800 350 79 63">8 800 350 79 63</a> </span>
            <span>MARTA-NG ©Все права защищены</span>
          </div>
          <div className="footer-item right">
            <a className="footer__item-img z" href="https://zen.yandex.ru/marta_ng/"></a>
            <a className="footer__item-img youtube1" href="https://www.youtube.com/channel/UCcAXS8DjSnp1k1l_Q2f4JEQ"></a>
            <a className="footer__item-img telegram" href="https://t.me/marta_ng/"></a>
            <a className="footer__item-img logo5" href="http://marta-ng.com/zhenskii_journal/"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;