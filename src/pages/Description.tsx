import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { appSlice } from '../store/reducers/AppSlice'

const Description: FC = () => {
	const navigate = useNavigate()
	const { data, index } = useAppSelector((state) => state.appReducer)
	const { setDynamicSubtitle, setDynamicTitle } = appSlice.actions
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setDynamicTitle(data.data[index].title))
		dispatch(setDynamicSubtitle(data.data[index].subTitle))
		window.scrollTo(0, 0)
		const reg = /<br class="_br">|<br>|<br class="show_500">/g
    const newTitle = data.data[index].title.replaceAll(reg, '')
		document.title = newTitle
	}, [])

	const textHTML = () => ({ __html: data.data[index].text })

	return (
		<div className="page description">
			<div className="max">
				<img
					src={require(`../assets/images/back.png`)}
					alt="back.png"
					title="НАЗАД"
					className="back"
          onClick={() => navigate('/')}
				/>
				<div className="row row-description">
					<div className="description-content d1">
						<div dangerouslySetInnerHTML={textHTML()}></div>
						<div className="blockquote">
							Формат сеанса: <strong>{data.data[index].typeText}</strong><br />
							Продолжительность:{' '}<strong>{data.data[index].durationText}.</strong>
						</div>
					</div>
					<div className="description-img d2">
						<div className="inner-description-img">
							<div
								className="description-img-fon"
								style={{
									backgroundImage: `url(${data.data[index].imgFon})`,
								}}
							></div>
							<p className="description-img-text">
								Марта Николаева-Гарина,<br />
								гипнотерапевт
							</p>
						</div>
					</div>
				</div>

				<span
					className="button"
					onClick={() => navigate('/' + data.data[index].type)}
				>
					НАЧАТЬ
				</span>
			</div>
		</div>
	)
}

export default Description
