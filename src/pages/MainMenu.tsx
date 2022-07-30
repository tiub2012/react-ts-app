import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { appSlice } from '../store/reducers/AppSlice'
import MenuButton from '../components/MenuButton'

const MainMenu: FC = () => {
	const navigate = useNavigate()
	const { data } = useAppSelector((state) => state.appReducer)
	const { setIndex, setDynamicSubtitle, setDynamicTitle } = appSlice.actions
	const dispatch = useAppDispatch()

	const linkTitleHTML = () => ({ __html: data.link.titleBtn })
	const linkSubitleHTML = () => ({ __html: data.link.subtitleBtn })

	useEffect(() => {
		dispatch(setDynamicTitle(data.title))
		dispatch(setDynamicSubtitle(data.subtitle))
		window.scrollTo(0, 0)
		document.title = 'Получите Ваш Заказ'
	}, [])

	const changePage = (idx: number) => {
		dispatch(setIndex(idx))
		const path = !data.data[idx].through
			? '/description'
			: '/' + data.data[idx].type
		navigate(path)
	}

	return (
		<div className="page">
			<div className="max menu">
				<div className="inner-menu">
					<div className="btn-wrapper-block">
						{data.data.map((btn, idx) => (
							<MenuButton
								index={idx}
								key={btn.title}
								img={btn.imgBtn}
								title={btn.titleBtn}
								changePage={changePage}
								subtitle={btn.subtitleBtn}
							/>
						))}

						<a href={data.link.link} className="menu-btn mt-dop">
							<div className="red-dop">Рекомендуется добавочно</div>
							<div className="menu-btn-left"></div>
							<div className="menu-btn-center linked"></div>
							<div className="menu-btn-right">
								<div className="text-block-797" dangerouslySetInnerHTML={linkTitleHTML()}></div>
								<div className="text-block-798" dangerouslySetInnerHTML={linkSubitleHTML()}></div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainMenu
