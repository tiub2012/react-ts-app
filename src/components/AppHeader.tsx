import { FC } from 'react'
import { useAppSelector } from '../hooks/redux';

const AppHeader: FC = () => {
  const { dynamicTitle, dynamicSubtitle } = useAppSelector((state) => state.appReducer)
  const dynamicTitleHTML = () => ({__html: dynamicTitle})
  const dynamicSubtitleHTML = () => ({__html: dynamicSubtitle})

  return (
    <header>
      <div className="max960">
        <div className="div-block-384">
          <div className="heading-97" dangerouslySetInnerHTML={dynamicTitleHTML()}></div>
          <div className="heading-97 _3434 _3423" dangerouslySetInnerHTML={dynamicSubtitleHTML()}></div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;