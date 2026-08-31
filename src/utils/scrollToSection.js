const scrollToSection = (id, setActiveSection, setMenuOpen) => {

  const section = document.getElementById(id);

  if (!section) return;

    setActiveSection(id)

  // Desktop
  if (window.innerWidth >= 1024) {

    const mainScroll = document.getElementById("main-scroll");

    if (!mainScroll) return;

    const sectionRect = section.getBoundingClientRect();
    const mainRect = mainScroll.getBoundingClientRect();

    const targetPosition =
      mainScroll.scrollTop +
      sectionRect.top -
      mainRect.top;

    mainScroll.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

  } else {

    // Mobile / Tablet
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }

  setMenuOpen?.(false);
};

export default scrollToSection;