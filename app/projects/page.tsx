import Project from "./project";

export default function Projects() {
  return (
    <>
      <Project
        name={"Form App"}
        description={"Dynamic form, just like google form but better"}
        link={"https://form-app.notblong.io.vn"}
        backgroundImageUrl={"project1.png"}
      ></Project>
			<br />
			<Project
        name={"98Shell"}
        description={"Web-based terminal but in Windows 98"}
        link={"https://nine8-shell.onrender.com/"}
        backgroundImageUrl={"project3.png"}
      ></Project>
			<br />
			<Project
        name={"EzAlgorithm"}
        description={"Algorithm Visualizer - Ez to see Ez to learn 😎 - Written in Angular"}
        link={"https://notblong.github.io/ez-algorithm/"}
        backgroundImageUrl={"project4.png"}
      ></Project>
			<br />
    </>
  );
}
