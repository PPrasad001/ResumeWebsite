import classes from "./Education.module.css";

function Education() {
  return (
    <section id="education" className={classes.education}>
      <div className={classes.educationTitle}>
        <div>Education</div>
      </div>
      <div className={classes.educationDiv}>
        <ul>
          <li>
            <h4>BMS College of Engineering</h4>
            <p>B.E in Computer Science & Engineering | 9.37 CGPA</p>
          </li>
          <li>
            <h4>Vijaya Composite PU College</h4>
            <p>12th, PCME | 89.5 %</p>
          </li>
          <li>
            <h4>M G School for Excellence</h4>
            <p>10th, MG School For Excellence | 92.16%</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
