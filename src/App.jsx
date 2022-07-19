import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/contact/Contact";
import "./style.css"

const App = () => {
  return <div className="d-app">
<Intro />
<About />
<ProjectList />
<Contact />

  </div>;

};

export default App;