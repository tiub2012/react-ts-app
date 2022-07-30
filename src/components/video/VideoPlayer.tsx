import { FC, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Volume from '../volume/Volume'
import styles from './VideoPlayer.module.css'

const VideoPlayer: FC = () => {
	const { data, index } = useAppSelector((state) => state.appReducer)
	const [isPlay, setIsPlay] = useState(false)
	const video = useRef<HTMLVideoElement>(null)
	const scaleBar = useRef<HTMLDivElement>(null)
	const volumeBar = useRef<HTMLDivElement>(null)
	const [isMuted, setIsMuted] = useState(true)
	const [duration, setDuration] = useState(0)
	const [progress, setProgress] = useState(0)
	const [progressInfo, setProgressInfo] = useState<String>('')
	const [infoBlockView, setInfoBlockView] = useState('none')
	const [infoBlockLeft, setInfoBlockLeft] = useState(0)
	const [volumePercent, setVolumePercent] = useState(20)
	const [tempVolumePercent, setTempVolumePercent] = useState(20)
	const volumeRects: boolean[] = [
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
	]

	useEffect(() => {
		video.current?.addEventListener('timeupdate', progressUpdata)
		video.current?.addEventListener('loadedmetadata', init)
		video.current?.addEventListener('end', end)
	}, [duration])

	const end = () => {
		if (video.current) {
			video.current.currentTime = 0
			setIsPlay(false)
			setProgress(0)
		}
	}
	const init = () => {
		if (video.current?.duration) {
			setDuration(video.current?.duration)
		}
	}
	const play = () => {
		video.current?.play()
		setIsPlay(true)
	}
	const pause = () => {
		video.current?.pause()
		setIsPlay(false)
	}
	const onClickVolume = (e: React.MouseEvent<HTMLDivElement>) => {
		if (volumeBar.current) {
			const width = volumeBar.current.offsetWidth
			const offsetX = e.nativeEvent.offsetX
			const percent = (100 * offsetX) / width
			setVolumePercent((volumeRects.length * percent) / 100)
			setTempVolumePercent((volumeRects.length * percent) / 100)
			if (video.current) {
				if (!isMuted) {
					video.current.muted = false
					setIsMuted(true)
				}
				video.current.volume = percent / 100
			}
		}
	}
	const progressUpdata = () => {
		const currentTime = video.current?.currentTime
		if (currentTime) {
			setProgress((100 * currentTime) / duration)
		}
	}
	const setTime = (t: number, d: number): string => {
		const digit = (n: number): string => (n < 10 ? `0${n}` : `${n}`)
		const sec = digit(Math.floor(t % 60))
		const min = digit(Math.floor((t / 60) % 60))
		const hr = digit(Math.floor(t / 3600) % 60)

		if (d < 3600) {
			return min + ':' + sec
		} else {
			return hr + ':' + min + ':' + sec
		}
	}
	const mute = () => {
		if (video.current) {
			setIsMuted(!isMuted)
			isMuted ? setVolumePercent(0) : setVolumePercent(tempVolumePercent)
			video.current.muted = isMuted
		}
	}
	const rewind = (e: React.MouseEvent<HTMLDivElement>) => {
		if (scaleBar.current) {
			const width = scaleBar.current.offsetWidth
			const offsetX = e.nativeEvent.offsetX
			setProgress((100 * offsetX) / width)
			if (video.current) {
				video.current.pause()
				video.current.currentTime = duration * (offsetX / width)
				if (isPlay) video.current.play()
			}
		}
	}
	const onScaleOver = () => {
		if (document.documentElement.clientWidth > 800) {
			setInfoBlockView('block')
		}
	}
	const onScaleLeave = () => {
		setInfoBlockView('none')
	}
	const onScaleMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (scaleBar.current) {
			const width = scaleBar.current.offsetWidth
			const offsetX = e.nativeEvent.offsetX
			const percent = (100 * offsetX) / width
			const progress = (duration / 100) * percent
			setInfoBlockLeft(e.nativeEvent.offsetX - 19)
			setProgressInfo(setTime(progress, progress))
		}
	}
	const fullscreenVideo = () => {
		if (video.current) {
			video.current.requestFullscreen()
		}
	}

	return (
		<div className={styles['video-player']}>
			<div className={styles['video-top']}>
				<video
					ref={video}
					src={data.data[index].source}
					poster={data.data[index].poster}
				></video>
				{isPlay || (
					<div className={styles['play-button']}>
						<i className="fa fa-play-circle-o" onClick={() => play()}></i>
					</div>
				)}
				<div onClick={fullscreenVideo} className={styles['fullscreen']}>
					<i className="fa fa-arrows-alt" aria-hidden="true"></i>
				</div>
			</div>
			<div className={styles['video-bottom']}>
				<div className={styles['left-player']}>
					<div className={styles['inner-left-player']}>
						{isPlay ? (
							<i className="fa fa-pause-circle-o" onClick={() => pause()}></i>
						) : (
							<i className="fa fa-play-circle-o" onClick={() => play()}></i>
						)}
					</div>
				</div>
				<div className={styles['center-player']}>
					<div className={styles['inner-center-player']}>
						<div className={styles['center-player-top']}>
							<div
								className={styles['scale-bar']}
								ref={scaleBar}
								onClick={rewind}
								onMouseOver={onScaleOver}
								onMouseMove={onScaleMove}
								onMouseLeave={onScaleLeave}
							>
								<div
									className={styles['fill-scale-bar']}
									style={{ width: `${progress}%` }}
								>
									<div
										className={styles['fill-scale-info-block']}
										style={{
											display: infoBlockView,
											left: `${infoBlockLeft}px`,
										}}
									>
										<div className={styles['scale-info-block']}>
											{progressInfo}
										</div>
										<div className={styles['scale-info-triangle']}></div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles['center-player-bottom']}>
							<div className={styles['left-bottom']}>
								{setTime(video.current?.currentTime || 0, duration)} /{' '}
								{setTime(duration, duration)}
							</div>
							<div className={styles['right-bottom']}>
								<Volume
									mute={mute}
									ref={volumeBar}
									isMuted={isMuted}
									volumeRects={volumeRects}
									volumePercent={volumePercent}
									onClickVolume={onClickVolume}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['right-player']}>
					<div className={styles['inner-rigth-player']}>
						<a
							target="_blank"
							className="fa fa-download"
							href={data.data[index].source}
						></a>
					</div>
				</div>
				<span className={styles.flare}></span>
			</div>
		</div>
	)
}

export default VideoPlayer
