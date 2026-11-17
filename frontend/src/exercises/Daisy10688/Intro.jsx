function Intro() {
  const name = "Daisy";
  const currentDate = new Date().toLocaleDateString();
  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 12
      ? "Good morning!"
      : currentHour < 18
        ? "Good afternoon!"
        : "Good evening!";

  return (
    <div>
      <h1>Hello, I'm {name}!</h1>

      <p>
        I'm a Public Health student at Kenyatta University, interested in
        environmental health and improving community well-being.
      </p>

      <p>
        I'm also learning web development and building my skills in JavaScript
        and React.
      </p>

      <p>
        I enjoy exploring how technology can be used to solve problems and
        make a positive difference in people's lives.
      </p>

      <p>Today's date is: {currentDate}</p>

      <h2>{greeting}</h2>
    </div>
  );
}

export default Intro;