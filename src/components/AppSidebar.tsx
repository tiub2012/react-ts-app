import { FC } from 'react';

const AppSidebar: FC = () => {
  return (
    <aside>
      <a href="https://marta-ng.com/audio-katalog/" className='aside-logo'>
        <img src={require('../assets/images/sidebar-img.png')} alt="logo" className="brand-logo"/>
      </a>
      <div className="aside-menu-wrapper">
        <a target="_blank" className="aside-menu-btn" href="/audio-katalog/">Официальный сайт</a>
        <a target="_blank" className="aside-menu-btn" href="https://t.me/marta_ng/">ТЕЛЕГРАМ</a>
        <a target="_blank" className="aside-menu-btn" href="https://zen.yandex.ru/marta_ng">Яндекс-Дзен</a>
        <a target="_blank" className="aside-menu-btn" href="http://marta-ng.com/zhenskii_journal/">Женский Журнал</a>
        <a target="_blank" className="aside-menu-btn" style={{borderTop: '1px dashed #c09d52'}} href="https://marta-ng.ru/mini-site/">техподдержка</a>
      </div>
    </aside>
  );
};

export default AppSidebar;