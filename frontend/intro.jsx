function Intro() {
  const now = new Date();
  const hour = now.getHours();
  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let message;
  if (hour < 12) {
    message = "Good morning! Have a lovely day ahead.";
  } else if (hour < 18) {
    message = "Good afternoon! Keep at it.";
  } else {
    message = "Good evening! Time to wind down.";
  }

return (
    <section>
      <h1>J Mulia Syanda</h1>
      <p>I am a Jackie of all trades</p>
      <p>I am currently loving learning all that goes into our software before we interact with it as users.</p>
      <p>My goal is to fully understand data and and Machine Learning.</p>
      <p>Today is {today}</p>
      <p>{message}</p>
    </section>
  );
}

export default Intro;