import MovieCard from "../components/moviecard";
import MovieGallery from "../components/moviegallery";
import { movies } from "../data/data";
// import MovieGallery from "../components/moviegallery";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ Home</p>
      <h2 className="mt-2 text-2xl font-bold text-start-800">หนังแนะนำ</h2>
      <div  className="mx-auto mt-8 max-w-5xl">
        {movies.slice(0,3).map((m) =>(
          <MovieCard key={m.id} title={m.title} year={m.title}/>
        ))}
      </div>
      <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
      <div className="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;