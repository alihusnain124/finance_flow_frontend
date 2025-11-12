import React from "react";

const timelineData = [
  {
    year: "2014",
    title: "Announcement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
  },
  {
    year: "2016",
    title: "Announcement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
  },
  {
    year: "2018",
    title: "Announcement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
  },
  {
    year: "2022",
    title: "Announcement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
  },
];

const Timeline = () => {
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Timeline</h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-12  w-[60%] m-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-7">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full" />

              <h3 className="text-base font-bold">{item.year}</h3>
              <h4 className="text-xs uppercase tracking-wide font-semibold text-white/70 mb-2">
                {item.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed ">
                {item.description}
              </p>

              {index < timelineData.length - 1 && (
                <hr className="mt-6 border-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
