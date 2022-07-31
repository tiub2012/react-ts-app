import { FC, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './assets/css/styles.css'
import './assets/css/media.css'
import DropMenu from './components/DropMenu'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'
import Book from './pages/Book'
import Audio from './pages/Audio'
import Video from './pages/Video'
import MainMenu from './pages/MainMenu'
import Description from './pages/Description'
import { useAppSelector } from './hooks/redux'

const App: FC = () => {
	const navigate = useNavigate()
	const { isShowHeader } = useAppSelector((state) => state.appReducer)
  const [isDrop, setIsDrop] = useState<boolean>(false)

	useEffect(() => {
	  navigate('/')
	}, [])

	return (
		<div className="app">
			<div className="app-wrapper">
				<div className='app-content'>
          <DropMenu 
						isDrop={isDrop}
						setIsDrop={setIsDrop}
					/>
          {isShowHeader && <AppHeader />}
					<main>
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="/description" element={<Description />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/video" element={<Video />} />
              <Route path="/book" element={<Book />} />
            </Routes>
          </main>
					<AppFooter />
          <div 
						className="overlay" 
						onClick={() => setIsDrop(!isDrop)}
						style={{display: isDrop ? 'block' : 'none'}}
					></div>
				</div>
				<AppSidebar />
			</div>
		</div>
	)
}

export default App


