import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'วัศพล', nickname: 'ฮัต',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'แมว'] },
  
  { id: 3, name: 'กษิดิษ', nickname: 'ฉิน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โค้ก', 'แมว'] },

  { id: 3, name: 'กิตติภูมิ', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'หมา'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;