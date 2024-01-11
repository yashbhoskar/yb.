import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";

function ProjectCards(props) {
  const companyI = "Automaton AI Infosystem";
  return (
    <Card className="project-card-view">
      <Card.Img className="card-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Footer>
        {props.ghLink && (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {!props.isBlog && !props.demoLink && !props.ghLink &&(
          <><p className="company-name"><FaRegCircleQuestion /> Project is associated with <b className="purple company-name"> {companyI} </b></p></>
        )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
