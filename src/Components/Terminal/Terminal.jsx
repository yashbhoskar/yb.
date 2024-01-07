import "./Terminal.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCommand = (command) => {
    const newOutput = [...output];
    let newCommandHistory = [...commandHistory];
    newCommandHistory.push(command);

    switch (command.toLowerCase()) {
      case "about":
        newOutput.push(
          "I'm a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam incidunt placeat mollitia cumque doloremque magni cupiditate dicta laborum labore sit aut alias voluptatum nihil asperiores adipisci impedit possimus veritatis.I'm a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam incidunt placeat mollitia cumque doloremque magni cupiditate dicta laborum labore sit aut alias voluptatum nihil asperiores adipisci impedit possimus veritatis.I'm a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam incidunt placeat mollitia cumque doloremque magni cupiditate dicta laborum labore sit aut alias voluptatum nihil asperiores adipisci impedit possimus veritatis.I'm a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam incidunt placeat mollitia cumque doloremque magni cupiditate dicta laborum labore sit aut alias voluptatum nihil asperiores adipisci impedit possimus veritatis."
        );
        break;
      case "contact":
        newOutput.push("You can reach me at example@email.com.");
        break;
      case "projects":
        newOutput.push("Here are some of my projects:");
        newOutput.push("- Project 1");
        newOutput.push("- Project 2");
        break;
      case "theme":
        newOutput.push("Changing theme is not supported yet.");
        break;
      case "clear":
        setOutput([]);
        setInput("");
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
        break;
    }
    // setOutput(newOutput);
    setCommandHistory((prevHistory) => [
      ...prevHistory,
      { command, output: newOutput },
    ]);
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div className="App-terminal">
      <div className="terminal">
        <div className="terminal-header"> Terminal</div>
        <div className="terminal-body">
          <Row className="terminal-text">
            <Col md={8}>
              {`
░███       ░████                                             ░████                              
░░███ ░░███                                                ░░███                          
 ░░███  ███        ██████         █████     ░████████       
    ░░█████      ░░░░░███    ███░░      ░███     ░███     
      ░░███             ███████ ░░█████    ░███    ░███    
        ░███            ███░░███  ░░░░███ ░███     ░███             
        █████   ░░████████   ██████     ████      ███            
       ░░░░░         ░░░░░░░░   ░░░░░░    ░░░░   ░░░░░             `}
              <br />
              Welcome to my terminal portfolio. Type a command to get started!
              <p>- - - - -</p>
              For a list of available commands, type <strong>help</strong>.
            </Col>
            {/* <Col md={4} className="ascii-image">
              {`
              ##################################################
              ##################################################
              ############%%*++;;;;;;;;               +*%######################
              ##########%++:,,::;;:,,,,                            .,,:*%###################
              ##########*::::,,,,,,::::,                                     :::::*S#################
              ##########?:,.,,,...,:::,,                                        ,,,,,,;S################
              #########%,........,,,,,,,                                        .,...,,*################
              ########S:.........,,,,,,,                                           ..,.,,,+################
              ########*.,:::;;:,..,,,,,,                                           ,,,,,,;S################
              ########?:,,:::::,...,:,,,                                         :,,,:;S#################
              ########+..,,,,,.,...,:::,                                     ,,,,;%##################
              ######%,.............,:::,                                       ,,.,?###################
              ######S*:,,,.......,,::::,                                       .,,,S###################
              #######S;;;:::,..,,::::::,                                     ...:####################
              ########?:,,,::,,:;::::::,                                    ...:####################
              ########S:::::;:;::::::,,.                                   ...,S###################
              ########?::;:::::::::,,...                                     ....+?##################
              ########S+;;::;+;,,.......                                     ..,,..*#################
              ##########SSSS##%:.,,....,                           ,,,...:#################
              ##############S+,,,..,,,,,                                .....,,:?S##############
              ############S?+;,,..,,,...                                         .,,,,,...,;+?S##########
              #########S%*:,..,,..,,.,.,                                                    ,,...........,;+*?S#####
              ######%*;,......,,,,......                                                                  ..................,:?###
              ####%;,.........,.,,......                                                                         .....................;##
              ###?,.,...........,.......                                                                             ...........,..........*#
              ##%,.,..........,,,,......                                                                              ..........,,..........:#
              `}
            </Col> */}
          </Row>
          {commandHistory.map((entry, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col md={8}>
                  <div className="terminal-line">
                    <span>
                      yashbhoskar<i>@</i>Portfolio:&nbsp;<i>~$</i>
                      <i>&nbsp; &nbsp;{entry.command}</i>
                    </span>
                  </div>
                  {entry.output.map((line, outputIndex) => (
                    <div
                      key={outputIndex}
                      className="terminal-line terminal-command-output"
                    >
                      {line}
                    </div>
                  ))}
                </Col>
              </Row>
            </React.Fragment>
          ))}
          {/* {commandHistory.map((command, index) => (
            <div key={index} className="terminal-line">
              <span>yashbhoskar@Portfolio:&nbsp;~$ <strong>{command}</strong></span>
            </div>
          ))}
          {output.map((line, index) => (
            <Row
              key={index}
              className={`terminal-line ${
                index > 0 ? "terminal-command-output" : ""
              }`}
            >
              <Col md={8}>
                {">"} &nbsp; {line}
              </Col>
            </Row>
          ))} */}
          <div className="terminal-input">
            <span>yashbhoskar@Portfolio:&nbsp;~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
