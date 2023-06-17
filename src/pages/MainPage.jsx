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
const handleSearch = (e) => {
    if (e.target.value === "Все") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((p) => p.name.toLowerCase().includes(e.target.value.toLowerCase())));
      }
}

const renderProjects = () => {
    if (filteredProjects.length > 0) {
        return (<div className="flex flex-wrap gap-[4vw] justify-between">
        {filteredProjects.map((p) => (
          <Link to={`/${p.id}`} key={p.id}>
            <div className="w-[45vw] h-[35vw] border border-black px-[2vw] py-[2vw] rounded-[2vw] hover:bg-teal-100 hover:underline">
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
      </div>)
    } else {
        return (
            <div className="text-bold text-[3vw] pt-[10vw] pb-[20vw]">Ничего не найдено</div>
        )
    }
}
  return (
    <div className="pt-[8vw] px-[2vw] pb-[4vw]">
      <div className="text-left text-[3vw] font-bold mb-[2vw] flex justify-between">
        <p>Активные проекты:</p>
        <div className="text-[1vw] text-center self-center flex">
          города:
          <select
            className="ml-[1vw] mr-[1vw] border border-black rounded-xl px-[0.5vw] py-[0.2vw]"
            onChange={handleFilter}
            defaultValue={"Все"}
          >
            <option value={"Все"}>Все</option>
            <option value={"Сочи"}>Сочи</option>
            <option value={"Ростов-на-Дону"}>Ростов-на-Дону</option>
            <option value={"Краснодар"}>Краснодар</option>
            <option value={"Таганрог"}>Таганрог</option>
          </select>
          <p className="mr-[1vw] self-center">поиск</p>
          <input className="outline-none border border-black px-[0.5vw] py-[0.2vw] rounded-xl" onChange={handleSearch} />
        </div>
      </div>
      {renderProjects()}
    </div>
  );
};

export default MainPage;
