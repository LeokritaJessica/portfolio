import React from 'react'
import Gozero from '../Images/gozero.jpg'
import Thenate from "../Images/thenate.jpg";
import Eggcellent from "../Images/eggcelent.jpg"
import Todolist from "../Images/todolist.jpg"

const Project = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-1 place-items-center pb-10"
        id="#project"
      >
        <p className="text-purple-500 font-bold text-6xl">
          My Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="9"
            viewBox="0 0 46 9"
            fill="none"
          >
            <path d="M0 4.5H46" stroke="#400FCB" stroke-width="8" />
          </svg>
        </p>
      </div>

      <div className="project-container text-center">
        <div className="project-card">
          <img src={Gozero} alt="gozero" className="project-image" />
          <h3 className="font-bold py-2">GoZero</h3>
          <p className="text-sm px-1 pb-2 h-32">
            This is Project create with Pure Css and javascript. GoZero sells
            goods made of bamboo and aluminum that can be used continuously and
            can be recycled again
          </p>
          <hr className="my-2 mx-1" />
          <p className="text-sm py-2 cursor-pointer">
            <a
              href="https://gozero.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View here
            </a>
          </p>
        </div>

        <div className="project-card">
          <img src={Thenate} alt="gozero" className="project-image" />
          <h3 className="font-bold py-2">TheNate</h3>
          <p className="text-sm px-1 pb-2 h-32">
            This is project create with Pure css and javascript Thenate can
            change background to darkmode and responsive
          </p>
          <hr className="my-2 mx-1" />
          <p className="text-sm py-2 cursor-pointer">
            <a
              href="https://thenate.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View here
            </a>
          </p>
        </div>

        <div className="project-card">
          <img src={Eggcellent} alt="gozero" className="project-image" />
          <h3 className="font-bold py-2">Eggcellent</h3>
          <p className="text-sm px-1 pb-2 h-32">
            This project can create new task, delete task and strikethrough task
            if complete. Task in project will store in localstorage with
            javasript.
          </p>
          <hr className="my-2 mx-1" />
          <p className="text-sm py-2 cursor-pointer">
            <a
              href="https://eggcellents.netlify.app"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View here
            </a>
          </p>
        </div>

        <div className="project-card">
          <img src={Todolist} alt="gozero" className="project-image" />
          <h3 className="font-bold py-2">Todolist</h3>
          <p className="text-sm px-1 pb-2 h-32">
            This project can create new task, delete task and strikethrough task
            if complete. Task in project will store in localstorage with
            javasript.
          </p>
          <hr className="my-2 mx-1" />
          <p className="text-sm py-2 cursor-pointer">
            <a
              href="https://ownlist.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Project
