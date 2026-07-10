import { useLocation } from "react-router-dom";

const courses = [
  {
    id: 1,
    title:
      "Mitigating biases in facial analysis systems through the incorporation of label diversity",
    tags: ["Article", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    time: "15 min",
  },
  {
    id: 2,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
  {
    id: 3,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
  {
    id: 4,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
  {
    id: 5,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
  {
    id: 6,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
  {
    id: 7,
    title: "Evaluation Metrics in Machine Learning Classification",
    tags: ["Article", "ML"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    time: "8 min",
  },
];

function Cards() {

    const query = new URLSearchParams(useLocation().search).get("q");

    const filteredCourses = courses.filter((course) => {
        if (!query) return true;

        const searchWords = query.toLowerCase().split(" ");

        const text = (
            course.title + " " + course.tags.join(" ")
        ).toLowerCase();

        return searchWords.some((word) => text.includes(word));
    });

  return (


    <div className="flex flex-col items-center gap-6 mt-10">
      {filteredCourses.map((course) => (
        <div
          key={course.id}
          className="group relative w-[500px] h-[300px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
        >
          {/* Background Image */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/40" />

          {/* Content */}
          <div className="absolute bottom-0 p-4 text-white w-full transition-opacity duration-300 opacity-90 group-hover:opacity-100">
            <h2 className="text-sm font-medium leading-tight">
              {course.title}
            </h2>

            <div className="flex justify-between items-center mt-3">
              {/* Tags */}
              <div className="flex gap-2">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/20 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Time */}
              <span className="text-xs opacity-80">
                {course.time}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;