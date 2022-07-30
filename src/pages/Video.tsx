import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoPlayer from '../components/video/VideoPlayer'
import { useAppSelector } from '../hooks/redux'

const Video: FC = () => {
	const { data, index } = useAppSelector((state) => state.appReducer)
	const navigate = useNavigate()
	const path = !data.data[index].through ? '/description' : '/'
	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<div className="page media media-video">
			<div className="max">
				<div className="media-row">
					<img
						src={require(`../assets/images/back.png`)}
						alt="back.png"
						title="НАЗАД"
						className="back dop-back-1"
						onClick={() => navigate(path)}
					/>

          <VideoPlayer />

				</div>
			</div>
		</div>
	)
}

export default Video
