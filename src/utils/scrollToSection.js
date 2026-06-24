const scrollToSection = (id) => {
  debugger;
  const section = document.getElementById(id);

   console.log(section);
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scrollToSection;