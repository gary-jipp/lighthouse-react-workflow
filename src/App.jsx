import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import Header from './components/Header';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header />
      <LoginPage />
      <MainPage />
    </div>
  );
}