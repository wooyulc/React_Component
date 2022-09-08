import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Logo from './components/Logo/Logo'
import logo from './components/Logo/logo.png'

function App() {
  return (
    <>
      <Logo url={logo}/>
      <span>
        <Header title='step1' text='Choose Screen Orientation'></Header>
      </span>
      <span>
        <Button text='Click to Start'></Button>
      </span>
    </>
  );
}

export default App;
