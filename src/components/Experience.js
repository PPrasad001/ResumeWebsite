import classes from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={classes.experience}>
      <div className={classes.experienceDiv}>
        <div className={classes.work}>Unisys India | July,2019 - Present</div>
        <ul>
          <li>
            Experienced in front end development using HTML, CSS and JavaScript
          </li>
          <li>Worked on front end development using the React framework</li>
          <li>Worked on migrating vanilla JavaScript projects to React</li>
          <li>
            Worked on agile methodologies with responsibility of understanding
            and adding new features, along with improving the existing features
            of product.
          </li>
          <li>
            Responsible for transmitting knowledge to new joinees and other
            required Teams
          </li>
        </ul>
      </div>
      <div className={classes.experienceTitle}>
        <div>Experience</div>
      </div>
    </section>
  );
}

export default Experience;
