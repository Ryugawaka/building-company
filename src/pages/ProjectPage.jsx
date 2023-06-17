import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../mocks/projects";

const ProjectPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const project = projects.filter((p) => p.id === params.id);

  useEffect(() => {
    project.length < 1 && navigate("error/404");
  });

  if (project.length < 1) {
    return <div></div>;
  }

  return (
    <div className="pt-[8vw] pb-[5vw] px-[2vw] flex flex-col">
      <p className="text-[2vw] font-bold text-center mb-[2vw]">
        {project[0].name}
      </p>
      <img
        className="w-[90vw] rounded-[3vw] mb-[2vw] self-center"
        src={project[0].image}
        alt={"projectImage"}
      />
      <div className="flex justify-between">
        <div className="border border-black rounded-lg w-[60vw] px-[1vw] py-[0.5vw] text-[1.2vw]">
          {project[0].description}
        </div>
        <div className="text-[1.5vw] font-semibold text-left">
          <p className="mb-[2vw]">Город {project[0].city}</p>
          <p>Цены от {project[0].price}т.р.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
