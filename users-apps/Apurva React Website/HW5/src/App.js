import './App.css';
import './website.css';
import Header from './Components/header.js';
import Header2 from './Components/header_under.js';
import Description from './Components/description.js';
import Image from './Components/image.js';

export default function App() {
  return (
    <>
      <Header />
      <Description />
      <Image />
      <Header2 />
    </>
  );
}