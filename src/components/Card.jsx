import "./card.Module.css";

//import images/portfolio";
export default function Card(props) {
  var skills = props.skills;
  console.log("skills", props.skills);
  return (
    <a className="linkall" href={props.link} target="_blank">
      <div className="cardMain">
        <div className="title">{props.descHead}</div>
        <br></br>
        <img className="image" src={props.image}></img>
        <div className="description">
          <div className="Description">{props.description}</div>
          <div>
            <div className="skillsHead"> Skills used/learned: </div>
            {skills.map((title) => {
              return <div key={title}>{title}</div>;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
