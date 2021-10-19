import classes from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={classes.skills}>
      <div className={classes.skillsTitle}>
        <div>Skills</div>
      </div>
      <div className={classes.skillsDiv}>
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <th>Experience in Years</th>
            </tr>
            <tr>
              <td>HTML5</td>
              <td>2</td>
            </tr>
            <tr>
              <td>CSS3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Vanilla JS</td>
              <td>2</td>
            </tr>
            <tr>
              <td>ReactJS</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>Redux</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>Saas/Sccs</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>jQuery</td>
              <td>0.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Skills;
