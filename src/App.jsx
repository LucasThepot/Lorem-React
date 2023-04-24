import "./App.css"; // Import de App.css qui contiendra tout notre style

import Content from "./components/Content";

const App = () => {
  const lorem = "Lorem";

  return (
    <>
      <Content />
    </>
  );
};

// J'exporte mon composant App pour pouvoir l'importer dans main.jsx
export default App;
