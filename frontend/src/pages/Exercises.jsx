import Greeting from "../exercises/Daisy10688/Greeting";
import Button from "../exercises/Daisy10688/Button";
import Counter from "../exercises/Daisy10688/Counter";
import Toggle from "../exercises/Daisy10688/Toggle";
import UserForm from "../exercises/Daisy10688/UserForm";
import SharedLikes from "../exercises/Daisy10688/SharedLikes";
import DaisyIntro from "../exercises/Daisy10688/Intro";
import Header from "../components/Header";

// Daisy's practice exercises live here, not in App.jsx.
export default function Exercises() {
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
