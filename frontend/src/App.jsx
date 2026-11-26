import Greeting from "./exercises/Daisy10688/Greeting";
import Button from "./exercises/Daisy10688/Button";
import Counter from "./exercises/Daisy10688/Counter";
import Toggle from "./exercises/Daisy10688/Toggle";
import UserForm from "./exercises/Daisy10688/UserForm";
import SharedLikes from "./exercises/Daisy10688/SharedLikes";
import DaisyIntro from "./exercises/Daisy10688/Intro";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Button />
      <Counter />
      <Toggle />
      <UserForm />
      <SharedLikes />
      <DaisyIntro />
    </div>
  );
}

export default App;
