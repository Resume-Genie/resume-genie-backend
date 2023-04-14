import { ReactComponent as SkillsMeter } from "../../image/icon/SkillsMeter.svg";

export default function SKIllS(props) {
  const Print = (props) => {
    const temp = props.level;
    const times = [];
    for (var i = 0; i < temp; i++) {
      times.push({
        id: i,
      });
    }

    return (
      <>
        {times.map((content) => (
          <div key={content.id} className="mr-5">
            <SkillsMeter />
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="w-[540px]">
      <h2 className="text-[40px] font-bold">SKILLS</h2>
      {props.data.map((element, index) => {
        return (
          <div key={index} className="flex items-center mt-5">
            <p className="bg-[#979ca5] text-white rounded-lg px-3 py-1 text-[18px]">
              {element.skill}
            </p>

            <div className="flex w-[400px] ml-auto">
              <Print level={element.level} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
