import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Modal from './Modal';
import './App.css';

function App() {
  const [content, setContent] = useState(undefined);
  const [open, setOpen] = useState(false);

  const showModal = (content) => {
    setContent(content);
    setOpen(true);
  };

  const onCancel = () => setOpen(false);

  useEffect(() => {
    console.log(`I'll show "${open ? content : 'no'}" modal`);
  }, [open, content])

  return (
    <div className="App">
      <Header />

      <Main openModal={showModal} />

      <Modal
        visible={open}
        onCancel={onCancel}
      />

      <Footer />
    </div >
  );
}

export default App;
