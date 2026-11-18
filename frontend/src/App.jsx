
import PostLikes from "./exercises/Daisy10688/PostLikes";
import TodoList from "./exercises/Daisy10688/TodoList";
import ContactForm from "./exercises/Daisy10688/ContactForm";
import Toggle from "./exercises/Daisy10688/Toggle";
import Counter from "./exercises/Daisy10688/Counter";
import ConditionalRendering from "./exercises/Daisy10688/ConditionalRendering";
import CardExercise from "./exercises/Daisy10688/Card";
import UserList from "./exercises/Daisy10688/UserList";
import ButtonExercise from "./exercises/Daisy10688/Button";
import GreetingExercise from "./exercises/Daisy10688/Greeting";
import Header from "./components/Header";
import DaisyIntro from "./exercises/Daisy10688/Intro";
import SyandaIntro from "./exercises/Syanda2020/Intro";

function App() {
  return (
    <div>
      <Header />

      <DaisyIntro />

      <SyandaIntro />
      <GreetingExercise />
      <ButtonExercise />
      <UserList />
      <CardExercise />
      <ConditionalRendering />
      <Counter />
      <Toggle />
      <ContactForm />
      <TodoList />
      <PostLikes />
    </div>
  );
}

export default App;