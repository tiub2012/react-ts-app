import { FC } from 'react'

interface IMenuButtonProps {
	img: string
	index: number
	title: string
	subtitle: string
	changePage: (idx: number) => void
}

const MenuButton: FC<IMenuButtonProps> = ({ img, index, subtitle, title, changePage }) => {
  const titleHTML = () => ({__html: title})
  const subtitleHTML = () => ({__html: subtitle})

	return (
		<div className="menu-btn" onClick={() => changePage(index)}>
			<div className="menu-btn-left-num">{index + 1}</div>
			<div
				className="menu-btn-center" 
				style={{backgroundImage: `url(${img})`}}
			></div>
			<div className="menu-btn-right">
				<div className="text-block-797" dangerouslySetInnerHTML={titleHTML()}></div>
				<div className="text-block-798" dangerouslySetInnerHTML={subtitleHTML()}></div>
			</div>
		</div>
	)
}

export default MenuButton
