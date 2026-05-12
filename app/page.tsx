import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-black">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-28">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Portfolio
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
          Laura Loaiza
        </h1>

        <h2 className="text-2xl md:text-4xl mb-8 text-gray-700 leading-tight max-w-4xl">
          Frontend Developer focused on interactive and data-driven web
          experiences
        </h2>

        <p className="text-xl max-w-3xl leading-9 text-gray-600 mb-10">
          I build frontend experiences that make information easier to
          understand through interactive design and clean user interfaces.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-white font-medium"
          >
            View Projects
          </a>

          <a
            href="https://github.com/laurasofia544"
            target="_blank"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/laura-loaiza-b01023349/"
            target="_blank"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-8">About</h3>

        <p className="text-lg leading-8 text-gray-700 max-w-3xl">
          I am an IT student developing my skills in frontend development,
          interactive design, and data visualization. My current work focuses
          on building clean and user-friendly web experiences using React,
          Next.js, and TypeScript. I am especially interested in projects that
          help present complex information in a clearer and more engaging way.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>

        <div className="grid gap-8">
          {/* MAIN PROJECT */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-3">
              Frontend Development / Database Application
            </p>

            <h4 className="text-3xl font-bold mb-4">
              Makeup Product Database Application
            </h4>

            <p className="text-gray-700 leading-8 mb-6 max-w-3xl">
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-8 border border-gray-200">
                <Image
                  src="/images/makeup-project.png"
                  alt="Makeup project"
                  fill
                  className="object-cover"/>
              </div>
              A full-stack makeup product application that allows users to
              browse, review, and interact with makeup products through a
              responsive frontend interface. The project demonstrates frontend
              development concepts such as routing, API integration, dynamic
              rendering, and user interaction while connecting to backend
              database functionality.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "JavaScript", "APIs", "Node.js", "MongoDB"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/laurasofia544/IT302-lsl8-Project"
                target="_blank"
                className="rounded-full bg-black px-5 py-3 text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* SECONDARY PROJECTS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* PROJECT 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-3">
                Frontend Dashboard / Skill Analysis
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Frontend Resume Skill Match Dashboard
              </h4>

              <p className="text-gray-700 leading-7 mb-6">
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-gray-200">
                  <Image
                    src="/images/dashboard-project.png"
                    alt="Dashboard project"
                    fill
                    className="object-cover"/>
                </div>
                A frontend dashboard that compares resume text with job
                descriptions to identify matched skills, missing skills, and
                overall alignment with frontend development roles. The project
                demonstrates frontend logic, data presentation, and automated
                testing.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "TypeScript", "Testing"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://frontend-skill-dashboard.vercel.app/"
                  target="_blank"
                  className="rounded-full bg-black px-5 py-3 text-white"
                >
                  Live Site
                </a>

                <a
                  href="https://github.com/laurasofia544/frontend-skill-dashboard"
                  target="_blank"
                  className="rounded-full border border-gray-300 px-5 py-3"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-3">
                Data Visualization / Scrollytelling
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Wages vs. Inflation Scrollytelling
              </h4>

              <p className="text-gray-700 leading-7 mb-6">
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-gray-200">
                  <Image
                    src="/images/wages-project.png"
                    alt="Wages project"
                    fill
                    className="object-cover"/>
                  </div>
                An interactive data visualization project exploring wage growth
                and inflation through charts and scrollytelling techniques. The
                project focuses on presenting complex economic information
                through frontend interaction and visual storytelling.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Next.js", "Recharts", "Data Visualization"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-10">Skills</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "API Integration",
            "Responsive Design",
            "Data Visualization",
            "Recharts",
            "Automated Testing",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white border border-gray-300 px-5 py-3 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* AI WORKFLOW */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-8">AI Workflow</h3>

        <p className="text-lg leading-8 text-gray-700 max-w-3xl">
          Throughout this project, I used AI tools as part of my professional
          workflow to help research frontend roles, refine project ideas,
          improve writing, debug code, and organize the portfolio structure. AI
          supported the process, but I made the final design and development
          decisions myself.
        </p>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-8">Contact & Links</h3>

        <div className="flex flex-col gap-4 text-lg">
          <a
            href="https://github.com/laurasofia544"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/laura-loaiza-b01023349/" target="_blank" className="underline">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}