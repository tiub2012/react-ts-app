import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AudioPlayer from '../components/audio/AudioPlayer'
import { useAppSelector } from '../hooks/redux'

const Audio: FC = () => {
	const { data, index } = useAppSelector((state) => state.appReducer)
	const navigate = useNavigate()
	const path = !data.data[index].through ? '/description' : '/'

	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<div className="page media">
			<div className="max">
				<div className="media-row">
					<img
						src={require(`../assets/images/back.png`)}
						alt="back.png"
						title="НАЗАД"
						className="back dop-back-1"
						onClick={() => navigate(path)}
					/>
					<div className="row">
						<div className="recomendation-content d3">
							<div className="recomendation-txt dop">
								<strong className="dop-2">РЕКОМЕНДАЦИЯ:</strong>
							</div>
							<div className="recomendation-line"></div>
							<img
								src={require('../assets/images/uhi.png')}
								alt="РЕКОМЕНДАЦИЯ"
								className="uhi"
							/>
							<div className="recomendation-txt">
								<strong>
									<span className="dop-2">Для наилучшего эффекта</span>
									<br />
									<span className="asb">принимай сеанс в наушниках</span>
								</strong>
							</div>
						</div>
						<div className="recomendation-img d4">
							<div className="inner-recomendation-img"></div>
						</div>
					</div>
					<AudioPlayer />
				</div>
			</div>
		</div>
	)
}

export default Audio
