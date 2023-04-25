import "./App.css"; // Import de App.css qui contiendra tout notre style
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <Content
        name="Lorem"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          neque reprehenderit explicabo illum commodi voluptatibus dolores in
          vero! Mollitia quos corporis voluptatum cupiditate sint eligendi
          libero dolorem incidunt dolorum rem."
      />
      <Content
        name="Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          doloribus molestiae quidem perferendis sint ipsam, officiis commodi
          saepe qui accusantium veniam accusamus ex soluta obcaecati expedita in
          velit voluptate eveniet eaque, nisi laborum possimus veritatis vel.
          Neque quidem nostrum distinctio facilis perspiciatis eligendi quis
          ducimus temporibus sequi similique beatae voluptates quos obcaecati
          dolorem soluta doloribus quas possimus, dolores quaerat laboriosam
          quisquam expedita culpa. Tempore illo commodi rem distinctio nisi
          officiis perspiciatis molestiae, dolorem repellendus culpa libero iure
          accusamus dolor sed doloribus delectus. Sequi pariatur natus, omnis
          ipsa eveniet earum recusandae minima fuga dignissimos neque nam,
          aspernatur consequatur tempora alias illo?"
      />
    </>
  );
};

// J'exporte mon composant App pour pouvoir l'importer dans main.jsx
export default App;
