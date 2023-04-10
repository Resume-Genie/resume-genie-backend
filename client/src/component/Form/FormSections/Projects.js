import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Projects = (props) => {
  const [addProject, setAddProject] = useState([]);

  const Template = () => (
    <section className="rounded p-4 mb-4 bg-[var(--light)] relative">
      {addProject.length > 0 && (
        <button
          type="button"
          className="rotate-45 w-6 absolute top-2 right-3 z-10"
        >
          <img src={cross} alt="" />
        </button>
      )}

      <div className="user-box relative">
        <input
          type="text"
          name=""
          required
          className="w-full text-base text-black mb-8 bg-transparent py-[10px] border-none border-[var(--text)] outline-none"
        />

        <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[14px]">
          Project Name
        </label>
      </div>

      <FormInput
        type={['month', 'month']}
        label={['Start date', 'End date']}
        htmlFor={['resume-project-start', 'resume-project-end']}
        placeholder={['', '']}
      />

      <div>
        <label
          htmlFor="resume-project-summary"
          className="block mb-2 text-[16px]"
        >
          What did you do?
        </label>

        <textarea
          type="text"
          id="resume-project-summary"
          htmlFor="resume-project-summary"
          placeholder="Your Summary"
          className="border-solid border-[#F0F0F0] rounded-[5px] border w-full text-[16px] p-3 h-36"
        />
      </div>
    </section>
  );

  useEffect(() => {
    setAddProject([<Template key={addProject.length + 1} />]);
  }, []);

  const handleAddProject = () => {
    setAddProject([...addProject, <Template key={addProject.length + 1} />]);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addProject}

        <Button
          type="button"
          text="Add project"
          className="p-2 mt-4"
          onClick={handleAddProject}
        />
      </form>
    </>
  );
};

export default Projects;