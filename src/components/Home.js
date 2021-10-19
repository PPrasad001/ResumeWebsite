import classes from "./Home.module.css";

function Home() {
  return (
    <section id="home" className={classes.homeDiv}>
      <h1 className={classes.name}>Pavan Prasad B S</h1>
      <h2 className={classes.role}>Front-end Engineer</h2>
    </section>
  );
}

export default Home;
