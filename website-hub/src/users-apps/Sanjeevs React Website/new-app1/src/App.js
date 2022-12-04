import './App.css';
import './website.css';
import Information from './components/information.js';
import Name from './components/name.js';
import Images from './components/image-table.js'
import Truth from './components/truth.js';

export default function App() {
  return (
    <>
      <Name />
      <Information />
      <Images />
      <Truth />
    </>
  );
}