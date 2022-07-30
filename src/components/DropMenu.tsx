import { FC } from 'react'

interface IDropMenuProps {
	isDrop: boolean
	setIsDrop: (bool: boolean) => void
}

const DropMenu: FC<IDropMenuProps> = ({ isDrop, setIsDrop }) => {
	const switchClasses = ['fa', 'switch-btn']
  const dropClasses = ['drop-menu']
  isDrop ? switchClasses.push('fa-times') : switchClasses.push('fa-bars')
  isDrop ? dropClasses.push('drop') : dropClasses.push('')

	return (
		<>
			<div className={dropClasses.join(' ')}>
        <a onClick={() => setIsDrop(!isDrop)} target="_blank" className="drop-menu-btn" href="https://marta-ng.ru/mini-site/">Служба поддержки</a>
        <a onClick={() => setIsDrop(!isDrop)} target="_blank" className="drop-menu-btn" href="/audio-katalog/">Официальный сайт</a>
        <a onClick={() => setIsDrop(!isDrop)} target="_blank" className="drop-menu-btn" href="https://t.me/marta_ng/">ТЕЛЕГРАМ</a>
        <a onClick={() => setIsDrop(!isDrop)} target="_blank" className="drop-menu-btn" href="https://zen.yandex.ru/marta_ng">Яндекс-Дзен</a>
        <a onClick={() => setIsDrop(!isDrop)} target="_blank" className="drop-menu-btn" href="http://marta-ng.com/zhenskii_journal/">Женский Журнал</a>
      </div>
			<div className="drop-menu-wrapper">
				<div className="drop-menu-img">
					<img src={require('../assets/images/sidebar-img.png')} alt="" />
				</div>
				<div className="drop-switch">
					<i 
            className={switchClasses.join(' ')} 
            aria-hidden="true"
            onClick={() => setIsDrop(!isDrop)}
          ></i>
				</div>
			</div>
		</>
	)
}

export default DropMenu
