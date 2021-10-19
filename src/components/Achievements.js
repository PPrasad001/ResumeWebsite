import classes from "./Achievements.module.css";

function Achievements() {
  return (
    <section id="achievements" className={classes.achievements}>
      <div className={classes.achievementsDiv}>
        <ul>
          <li>
            Have submitted ideas for Innovation campaigns in the company's
            portal
          </li>
          <li>
            Participated in Inter-Corporate Quiz Competitions hosted in
            brainbout.in and reached the finals in three of the Quizzes
          </li>
          <li>Won first place in the freshers mini-project team competition</li>
          <li>
            Conducted brainstorming sessions to encourage team members for
            innovation.
          </li>
        </ul>
      </div>
      <div className={classes.achievementsTitle}>
        <div>Achievements</div>
      </div>
    </section>
  );
}

export default Achievements;
