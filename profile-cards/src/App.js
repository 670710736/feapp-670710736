import { Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Movies from './page/movie';
import About from './page/about';
import Navbar from './components/navbar';
import Footer from './components/footer';
import MovieDetail from './page/moviedetail';
function App() {
    return (
        <div className='flex-1'>
            <Navbar />
            <main className='flex-1'>
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/movies" element={<Movies />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
                </Routes>
            </main>
            <footer />
        </div>
    );
}

export default App;