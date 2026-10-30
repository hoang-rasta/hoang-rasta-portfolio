import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  certificates,
  education,
  experiences,
  skills,
  skillsAndTools,
  summaryPoints,
  type SkillIconName,
} from "@/data/cvData";
import ScrollContainer from "./ScrollContainer";

const marqueeSkills = [...skillsAndTools, ...skillsAndTools];

const iconMap: Record<SkillIconName, LucideIcon> = {
  code: Code2,
  server: Layers3,
  database: Layers3,
  cloud: Layers3,
  project: Code2,
  users: UsersRound,
};

export default function MainContent() {
  return (
    <ScrollContainer>
      <section
        id="home"
        data-section="home"
        className="section-reveal flex min-h-[calc(100vh-4rem)] flex-col justify-center border-b border-white/10 p-7 sm:p-12 lg:min-h-full lg:p-16"
        aria-labelledby="intro-title"
      >
        <div>
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            <span className="h-px w-8 bg-neon" aria-hidden="true" />
            Exploring code galaxies, one system at a time
          </div>
          <h2
            id="intro-title"
            className="max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-lilac sm:text-6xl lg:text-[68px]"
          >
            Software Engineer building{" "}
            <span className="bg-gradient-to-r from-primary to-neon bg-clip-text text-transparent">
              reliable systems.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
            Full-stack developer focused on enterprise applications, cloud
            integrations, and maintainable solutions across healthcare and
            logistics.
          </p>
        </div>
      </section>

      <section
        id="about"
        data-section="about"
        className="section-reveal border-b border-white/10 p-6 sm:p-10 lg:p-14"
        aria-labelledby="about-title"
      >
        <SectionHeading
          icon={Code2}
          eyebrow="01 / Summary"
          title="A practical builder with a systems mindset."
          id="about-title"
        />
        <ul className="max-w-3xl space-y-4 text-base leading-8 text-zinc-400">
          {summaryPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neon"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-lilac transition-colors hover:border-neon/40 hover:bg-white/[0.06]"
              >
                <Icon className="h-4 w-4 text-neon" aria-hidden="true" />
                {skill.name}
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="resume"
        data-section="resume"
        className="section-reveal border-b border-white/10 p-6 sm:p-10 lg:p-14"
        aria-labelledby="resume-title"
      >
        <SectionHeading
          icon={BriefcaseBusiness}
          eyebrow="02 / Resume"
          title="Experience"
          id="resume-title"
        />
        <div className="relative ml-1 space-y-10 border-l border-neon/30 pl-5 sm:pl-7">
          {experiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.period}`}
              className="relative grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10"
            >
              <span
                className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-midnight bg-neon shadow-[0_0_0_3px_rgba(195,171,243,0.18)] sm:-left-[34px]"
                aria-hidden="true"
              />
              <div className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                {experience.period}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-lilac">
                  {experience.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neon">
                  {experience.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                  {experience.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-3 h-1 w-1 shrink-0 rounded-full bg-neon"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="education"
        data-section="education"
        className="section-reveal border-b border-white/10 p-6 sm:p-10 lg:p-14"
        aria-labelledby="education-title"
      >
        <SectionHeading
          icon={GraduationCap}
          eyebrow="03 / Education"
          title={education.school}
          id="education-title"
        />
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row">
          <div>
            <p className="text-sm text-neon">{education.period}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-lilac">
              {education.degree}
            </h3>
          </div>
          <GraduationCap className="h-8 w-8 text-neon/60" aria-hidden="true" />
        </div>
      </section>

      <section
        id="certificates"
        data-section="certificates"
        className="section-reveal border-b border-white/10 p-6 sm:p-10 lg:p-14"
        aria-labelledby="certificates-title"
      >
        <SectionHeading
          icon={Award}
          eyebrow="04 / Certificates"
          title="Professional Certifications"
          id="certificates-title"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <a
              key={certificate.code}
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-neon/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-lilac">
                    {certificate.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    {certificate.code}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-neon transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-auto text-sm font-medium text-neon">
                View credential
              </p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="skills"
        data-section="skills"
        className="section-reveal p-6 sm:p-10 lg:p-14"
        aria-labelledby="skills-title"
      >
        <SectionHeading
          icon={Code2}
          eyebrow="05 / Skills & Tools"
          title="Technologies I work with."
          id="skills-title"
        />
        <div
          className="skills-marquee overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-3"
          aria-label="Skills and tools"
          role="list"
        >
          <div className="skills-marquee__track flex w-max gap-3 hover:[animation-play-state:paused]">
            {marqueeSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                role="listitem"
                className="flex w-[220px] shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-lilac transition-all hover:-translate-y-0.5 hover:border-neon/50 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] p-2">
                  <Image
                    src={skill.iconUrl}
                    alt=""
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                    aria-hidden="true"
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollContainer>
  );
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  id,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neon">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-lilac sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
