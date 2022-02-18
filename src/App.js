import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Modal from './Modal';
import './App.css';

function App() {
  const [content, setContent] = useState(undefined);
  const [open, setOpen] = useState(false);

  const showModal = (section) => {
    setContent(section);
    setOpen(true);
  };

  const onCancel = () => setOpen(false);

  return (
    <div className="App">
      <Header />

      <Main openModal={showModal} />

      <Modal
        visible={open}
        content={content}
        onCancel={onCancel}
      />

      <Footer />
    </div >
  );
}

export default App;
