import './App.css';
import './website.css';
import Header from './components/header.js';
import Links from './components/links.js';
import Description from './components/description.js';
import Image from './components/image.js';

export default function App() {
  return (
    <>
      <Header />
      <Links />
      <Description />
      <Image />
    </>
  );
}
