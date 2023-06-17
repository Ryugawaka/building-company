import React, { useState } from "react";
import { projects } from "../mocks/projects";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (e) => {
    if (e.target.value === "Все") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.city === e.target.value));
    }
  };

  return (
    <div className="pt-[8vw] px-[2vw]">
      <div className="text-left text-[3vw] font-bold mb-[2vw] flex justify-between">
        <p>Активные проекты:</p>
        <div className="text-[1vw] text-center self-center">
          города:
          <select
            className="ml-[1vw]"
            onChange={handleFilter}
            defaultValue={"Все"}
          >
            <option value={"Все"}>Все</option>
            <option value={"Сочи"}>Сочи</option>
            <option value={"Ростов-на-Дону"}>Ростов-на-Дону</option>
            <option value={"Краснодар"}>Краснодар</option>
            <option value={"Таганрог"}>Таганрог</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-[4vw] justify-between">
        {filteredProjects.map((p) => (
          <Link to={`/${p.id}`} key={p.id}>
            <div className="w-[45vw] h-[35vw] border border-black px-[2vw] py-[2vw] rounded-[2vw] hover:bg-slate-300 hover:underline">
              <p className="text-left text-[1.5vw] font-semibold mb-[1vw]">
                {p.name}
              </p>
              <img
                className="self-center w-[40vw] h-[22.5vw] rounded-[1vw] mb-[2vw]"
                src={p.image}
                alt="projectImage"
              />
              <div className="flex justify-between text-[1vw] font-semibold">
                <p>{p.city}</p>
                <p>цены от {p.price}т.p.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
