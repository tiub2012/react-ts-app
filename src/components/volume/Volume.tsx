import { forwardRef } from 'react'
import styles from './Volume.module.css'

interface IVolumeProps {
	mute: () => void
	isMuted: boolean
	volumePercent: number
	volumeRects: boolean[]
	onClickVolume: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Volume = forwardRef<HTMLDivElement, IVolumeProps>((props, ref) => {
	return (
		<div className={styles['volume']}>
			<i className="fa fa-volume-off"></i>
			<div className={styles['volume-elements']}>
				{props.volumeRects.map((rect, indx) => (
					<div
						key={indx}
						className={`${styles['volume-item']}`}
						style={{
							backgroundColor:
								indx < props.volumePercent
									? `rgb(${indx * 8.5}, ${0}, ${0})`
									: 'rgb(140, 140, 140)',
							display: rect ? 'block' : 'none',
						}}
					></div>
				))}
			</div>
			<div className={styles['volume-cover']}>
				<div onClick={props.mute} className={styles['volume-cover-left']}>
					{props.isMuted || <div className={styles['slash']}></div>}
				</div>
				<div
					ref={ref}
					onClick={props.onClickVolume}
					className={styles['volume-cover-right']}
				></div>
			</div>
		</div>
	)
})

export default Volume
