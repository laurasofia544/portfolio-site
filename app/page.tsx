import Image from "next/image";

const projects = [
  {
    title: "Makeup Product Database Application",
    type: "Frontend / Database App",
    image: "/images/makeup-project.png",
    description:
      "A full-stack application that allows users to browse, review, and interact with makeup products.",
    tools: ["React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/laurasofia544/IT302-lsl8-Project",
    live: "",
  },
  {
    title: "Frontend Resume Skill Match Dashboard",
    type: "Dashboard / Skill Analysis",
    image: "/images/dashboard-project.png",
    description:
      "Compares resume text with job descriptions to identify matched skills, missing skills, and overall alignment.",
    tools: ["React", "TypeScript", "Testing"],
    github: "https://github.com/laurasofia544/frontend-skill-dashboard",
    live: "https://frontend-skill-dashboard.vercel.app/",
  },
  {
    title: "Wages and Inflation Data Visualization",
    type: "Data Visualization",
    image: "/images/wages-project.png",
    description:
      "An interactive data visualization project exploring wage growth and inflation through scrollytelling.The project was revised to improve visual clarity, structure, and presentation quality for inclusion in a professional portfolio.",
    tools: ["Next.js", "Recharts", "Data Viz"],
    github: "https://github.com/laurasofia544/Student-Reality-Lab-Loaiza",
    live: "https://student-reality-lab-loaiza2.vercel.app/",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GitHub",
  "API Integration",
  "Responsive Design",
  "Data Visualization",
  "Automated Testing",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11110f] text-[#f6efe6]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#11110f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="#" className="text-xl font-semibold">
            Laura Loaiza
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>

            <a
              href="https://www.linkedin.com/in/laura-loaiza-b01023349/"
              target="_blank"
              className="rounded-xl bg-[#f6dcbc] px-5 py-3 font-medium text-black hover:bg-[#ffe6c8]"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-14 px-8 py-24 md:grid-cols-[1fr_0.75fr] md:items-center">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#f6c98d]">
            Frontend Developer
          </p>

          <h1 className="mb-8 max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight md:text-7xl">
            Building interactive web experiences that make an impact.
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-9 text-white/75">
            I design and build clean, user-focused interfaces that turn complex
            information into clear and engaging digital experiences.
          </p>
          <p className="mb-8 max-w-2xl text-base uppercase tracking-[0.2em] text-white/40">
            Designed for hiring managers, creative tech teams, and frontend-focused opportunities.
          </p>
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-[#f6dcbc] px-6 py-4 font-medium text-black hover:-translate-y-1 hover:bg-[#ffe6c8] hover:shadow-xl">
              View My Work →
            </a>

            <a
              href="https://github.com/laurasofia544"
              target="_blank"
              className="rounded-xl border border-white/25 px-6 py-4 font-medium text-white hover:-translate-y-1 hover:border-white hover:bg-white/5"  >
              GitHub
            </a>
          </div>

          <div className="flex gap-5 text-sm text-white/60">
            <a href="https://github.com/laurasofia544" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/laura-loaiza-b01023349/" target="_blank">
              LinkedIn
            </a>
            <a href="mailto:laurasofia544@gmail.com">Email</a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#211d18] p-8 shadow-2xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6dcbc] text-2xl text-black">
              ✦
            </div>
            <h2 className="text-xl font-semibold text-[#f6dcbc]">
              What I Do
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {[
              "Frontend Development",
              "Interactive Interfaces",
              "Data Visualization",
              "User-Centered Design",
            ].map((item) => (
              <div key={item} className="py-5 text-lg text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="mt-12 grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-5xl font-serif text-[#f6dcbc]">3</p>
    <p className="mt-3 text-white/60">
      frontend projects shaped into portfolio-ready case studies
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-5xl font-serif text-[#f6dcbc]">1</p>
    <p className="mt-3 text-white/60">
      tested dashboard project with automated skill-matching logic
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-5xl font-serif text-[#f6dcbc]">Live</p>
    <p className="mt-3 text-white/60">
      deployed work connected through GitHub and Vercel
    </p>
  </div>
</div>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-white/10 px-8 py-20"
      >
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f6c98d]">
            About
          </p>
          <p className="max-w-4xl text-2xl leading-10 text-white/75">
            I am an IT student developing my skills in frontend development,
            interactive design, and data visualization. My work focuses on
            building clean and user-friendly web experiences using React,
            Next.js, and TypeScript. I want to work on frontend experiences that combine interface design,
            interaction, and data presentation to make digital products more intuitive
            and engaging.
          </p>
        </div>
        
      </section>
<section className="mx-auto max-w-7xl border-t border-white/10 px-8 py-20">
  <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#f6c98d]">
    How I Work
  </p>

  <div className="grid gap-6 md:grid-cols-3">
    <div>
      <h3 className="mb-3 font-serif text-3xl">Start with the user</h3>
      <p className="leading-7 text-white/65">
        I think about what someone needs to understand first, then organize the interface around that first impression.
      </p>
    </div>

    <div>
      <h3 className="mb-3 font-serif text-3xl">Make information usable</h3>
      <p className="leading-7 text-white/65">
        I focus on layout, hierarchy, and interaction so data or content feels easier to scan and act on.
      </p>
    </div>

    <div>
      <h3 className="mb-3 font-serif text-3xl">Use AI carefully</h3>
      <p className="leading-7 text-white/65">
        I use AI to plan, revise, and debug, but I make final decisions based on the goal of the project.
      </p>
    </div>
  </div>
</section>
      {/* PROJECTS */}
      <section
        id="projects"
        className="rounded-t-[2rem] bg-[#f6efe6] px-8 py-24 text-[#21160f]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#a85f3c]">
                Selected Projects
              </p>

              <h2 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
                Projects that show my skills and professional direction.
              </h2>
            </div>

            <a
              href="https://github.com/laurasofia544"
              target="_blank"
              className="rounded-xl bg-[#f6dcbc] px-6 py-4 font-medium text-black hover:-translate-y-1 hover:bg-[#ffe6c8] hover:shadow-xl"
            >
              View GitHub →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[#d2b79e] bg-[#fffaf3] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative mb-5 h-56 overflow-hidden rounded-xl border border-[#e0c9b2] bg-[#efe4d8]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#a85f3c]">
                  {project.type}
                </p>

                <h3 className="mb-4 font-serif text-3xl leading-tight">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-[#4c3a30]">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-[#d2b79e] bg-[#f6efe6] px-3 py-2 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="rounded-lg bg-[#21160f] px-4 py-2 text-sm text-white hover:-translate-y-1 hover:bg-black"                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-lg border border-[#d2b79e] px-4 py-2 text-sm hover:-translate-y-1 hover:bg-[#f6efe6]"                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="bg-[#f6efe6] px-8 py-20 text-[#21160f]"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#a85f3c]">
            Skills
          </p>

          <h2 className="mb-10 font-serif text-5xl">Tools I’m building with.</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-[#d2b79e] bg-[#fffaf3] px-5 py-3"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI WORKFLOW */}
      <section className="bg-[#f6efe6] px-8 py-20 text-[#21160f]">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#d2b79e] bg-[#fffaf3] p-10 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#a85f3c]">
            Workflow
          </p>

          <h2 className="mb-6 font-serif text-5xl">How I Used AI</h2>

          <p className="max-w-4xl text-lg leading-9 text-[#4c3a30]">
            I used AI tools as part of my workflow to research frontend roles,
            refine project ideas, improve writing, debug code, and organize the
            portfolio structure. AI supported research, revision, debugging, and planning 
            decisions throughout the project, but I revised the output and made final design and development decisions myself.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="bg-[#11110f] px-8 py-20 text-[#f6efe6]"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f6c98d]">
              Contact
            </p>

            <h2 className="font-serif text-5xl">Let’s connect.</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/laurasofia544"
              target="_blank"
              className="rounded-xl border border-white/20 px-5 py-3"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/laura-loaiza-b01023349/"
              target="_blank"
              className="rounded-xl border border-white/20 px-5 py-3"
            >
              LinkedIn
            </a>

            <a
              href="mailto:laurasofia544@gmail.com"
              className="rounded-xl bg-[#f6dcbc] px-5 py-3 text-black"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}