import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { PageTitle, ProjectCard } from "./components";
import { projects, services } from "./data";

const carouselImages = services.flatMap((service) =>
  [1, 2, 3, 4].map(
    (number) => `/assets/ImagesHero/${service.folder}/${service.prefix}-${number}.png`,
  ),
);

function Marquee() {
  const text = "Design for the Future · ";
  return (
    <Link className="marquee" to="/contact" aria-label="Design for the Future — contact Driels">
      <div className="marquee-track">
        <span>{text.repeat(6)}</span>
        <span aria-hidden="true">{text.repeat(6)}</span>
      </div>
    </Link>
  );
}

function ServicesCarousel() {
  const [category, setCategory] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const started = Date.now();
    const timer = window.setInterval(() => {
      const imageAtLeft = Math.floor((Date.now() - started) / 5000) % 16;
      setCategory(imageAtLeft >= 13 ? 3 : imageAtLeft >= 9 ? 2 : imageAtLeft >= 5 ? 1 : 0);
    }, 300);
    return () => window.clearInterval(timer);
  }, []);
  const service = services[category];
  return (
    <section className="carousel-section" aria-labelledby="service-carousel-title">
      <div className="carousel-copy" key={service.title}>
        <h2 id="service-carousel-title">{service.title}</h2>
        <p>{service.description}</p>
      </div>
      <div className="carousel-window">
        <div className="carousel-track">
          {[...carouselImages, ...carouselImages].map((src, index) => (
            <img key={`${src}-${index}`} src={src} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-label="Driels disciplines">
        <h1>Branding<br />Website<br />UXDesign<br />Future...</h1>
      </section>
      <Marquee />
      <section className="home-projects" aria-label="Selected projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} category={project.category} image={project.images[0]} slug={project.slug} />
        ))}
      </section>
      <ServicesCarousel />
    </>
  );
}

export function WorkPage() {
  return (
    <>
      <PageTitle>Works</PageTitle>
      <section className="work-list" aria-label="Projects">
        {projects.map((project) => (
          <Link className="work-row" key={project.slug} to={`/work/${project.slug}`}>
            <span className="work-category">{project.category}</span>
            <h2>{project.title}</h2>
            <img src={project.images[0]} alt="" />
          </Link>
        ))}
      </section>
    </>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  const sections = [
    ["Overview", project.overview],
    ["Problem", project.problem],
    ["Process", project.process],
  ];
  return (
    <>
      <PageTitle>{project.title}</PageTitle>
      <p className="project-category">{project.category}</p>
      <section className="project-copy">
        {sections.map(([title, copy], index) => (
          <article className={index % 2 ? "copy-block reverse" : "copy-block"} key={title}>
            <h2>{title}</h2><p>{copy}</p>
          </article>
        ))}
      </section>
      <div className="project-gallery">
        {project.images.map((image, index) => <img key={image} src={image} alt={`${project.title} project view ${index + 1}`} />)}
      </div>
      {project.slug === "bells-and-basil" ? (
        <section className="project-copy" style={{ paddingTop: 0 }}>
          <article className="copy-block reverse"><h2>Outcome</h2><p>{project.outcome}</p></article>
        </section>
      ) : (
        <article className="copy-block reverse outcome"><h2>Outcome</h2><p>{project.outcome}</p></article>
      )}
    </>
  );
}

export function ServicesPage() {
  const frameOrder = [services[0], services[1], services[3], services[2]];
  return (
    <>
      <PageTitle>Services</PageTitle>
      <section className="services-list">
        {frameOrder.map((service, index) => (
          <article className={index % 2 ? "service-card alternate" : "service-card"} key={service.title}>
            <div><h2>{service.title}</h2><p>{service.description}</p></div>
            <img src={service.icon} alt="" />
          </article>
        ))}
      </section>
      <Marquee />
    </>
  );
}

export function StudioPage() {
  return (
    <>
      <PageTitle>Studio</PageTitle>
      <section className="studio-intro">
        <p>Meet Niels van der Lee and Chris Heinrich, the creative minds behind DRIELS. Coming from the Netherlands and Germany, we bring together different backgrounds, perspectives and creative skills, united by a shared passion for design, visual storytelling and digital experiences.</p>
        <p>We founded DRIELS with the ambition to help brands express their identity in authentic, innovative and meaningful ways. From branding and photography to web development and videography, we combine creativity with strategic thinking to transform ideas into memorable visual experiences.</p>
        <p>We believe that every brand has a unique story worth telling. By working closely with our clients, exploring new possibilities and paying attention to the smallest details, we aim to create work that not only looks great but also connects with people and makes a lasting impression.</p>
      </section>
      <section className="founders">
        <article>
          <img src="/assets/Founders/DSC04873_ ChristophHeinrich_@_chrimo__270825_SOCIALMEDIA-2.jpg" alt="Chris Heinrich" />
          <div>
            <p>Chris Heinrich<br />*26 years old · Germany*<br />Co-Founder — Creative &amp; Visual Design</p>
            <p>Chris has a passion for visual storytelling, photography and creative design. With a strong eye for detail and aesthetics, he enjoys transforming ideas into meaningful visual experiences. His creative approach focuses on authenticity, originality and creating content that connects with people.</p>
          </div>
        </article>
        <article>
          <img src="/assets/Founders/IMG_8497.jpg" alt="Niels van der Lee" />
          <div>
            <p>Niels van der Lee<br />*21 years old · The Netherlands*<br />Co-Founder — Digital Design &amp; Brand Strategy</p>
            <p>Niels combines a creative mindset with an interest in branding, web design and entrepreneurship. He enjoys developing innovative concepts and translating them into engaging digital experiences. His approach brings together creativity, strategy and functionality to help brands build a distinctive identity.</p>
          </div>
        </article>
      </section>
    </>
  );
}

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) next.name = "Name is required.";
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Message is required.";
    setErrors(next);
    setStatus("idle");
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(data.entries(), ([key, value]) => [key, String(value)]),
        ).toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <section className="contact-layout">
        <div className="contact-details"><p>Munich, germany<br />2026</p><p>office hours<br />monday - friday<br />10 am - 13 am</p></div>
        <form name="contact" noValidate onSubmit={submit}>
          <input type="hidden" name="form-name" value="contact" />
          <label>Name (required)<input name="name" aria-invalid={Boolean(errors.name)} /></label>
          {errors.name && <span className="error">{errors.name}</span>}
          <label>Email<input name="email" type="email" aria-invalid={Boolean(errors.email)} /></label>
          {errors.email && <span className="error">{errors.email}</span>}
          <label>Project description<textarea name="message" aria-invalid={Boolean(errors.message)} /></label>
          {errors.message && <span className="error">{errors.message}</span>}
          <button className="submit-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && <p className="success" role="status">Thank you. Your message has been sent successfully.</p>}
          {status === "error" && <p className="error" role="alert">Something went wrong. Please try again.</p>}
        </form>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return <section className="not-found"><PageTitle>Not Found</PageTitle><Link to="/">Home</Link></section>;
}
