import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

const Book: FC = () => {
	const navigate = useNavigate()
	const { data, index } = useAppSelector((state) => state.appReducer)
  const path = !data.data[index].through ? '/description' : '/'
	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<div className="page media media-min">
			<div className="max">
				<div className="media-row book">
					<img
						src={require(`../assets/images/back.png`)}
						alt="back.png"
						title="НАЗАД"
						className="back dop-back-1"
						onClick={() => navigate(path)}
					/>
					<img src={data.data[index].imageBook} alt="" className="book-img" />
					<a target={'_blank'} className="button" href={data.data[index].source}>
						НАЧАТЬ
					</a>
				</div>
			</div>
		</div>
	)
}

export default Book
