import { aboutStudioReveal } from "../animations/about-studio/aboutStudio.js";
import { ourServicesReveal } from "../animations/our-services/ourServices.js";
import { ourPortfolioReveal } from "../animations/our-portfolio/ourPortfolio.js";
import { ourPricingReveal } from "../animations/our-pricing/ourPricing.js";
import { pricingCardsHover } from "../animations/our-pricing/pricingCardsHover.js";

export function addScrollListener(breakpoint) {
  const hero = document.querySelector(".hero");
  const aboutStudioSection = document.querySelector(".about-studio-section");
  const aboutStudioMoreContainer = document.querySelector(
    ".about-studio-more-container"
  );
  const ourServicesSection = document.querySelector(".our-services-section");
  const ourPortfolioSection = document.querySelector(".our-portfolio-section");
  window.addEventListener("scroll", () => {
    let scrollYPosition = scrollY;
    console.log(scrollYPosition);
    switch (breakpoint) {
      case "xs-1":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-1");
        }
        if (
          scrollYPosition >= aboutStudioSection.offsetTop &&
          !aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        } else if (
          scrollYPosition >=
            aboutStudioSection.offsetTop +
              aboutStudioSection.offsetHeight / 3 &&
          aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        }
        if (scrollYPosition >= ourServicesSection.offsetTop) {
          ourServicesReveal("xs", "services");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop + ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "planning");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            ourServicesSection.offsetHeight / 2 -
            ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "management");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            (ourServicesSection.offsetHeight / 2 +
              ourServicesSection.offsetHeight / 6)
        ) {
          ourPortfolioReveal("xs");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal("xs");
        }
        break;
      case "xs-2":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-2");
        }
        if (
          scrollYPosition >= aboutStudioSection.offsetTop &&
          !aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        } else if (
          scrollYPosition >=
            aboutStudioSection.offsetTop +
              aboutStudioSection.offsetHeight / 3 &&
          aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        }
        if (scrollYPosition >= ourServicesSection.offsetTop) {
          ourServicesReveal("xs", "services");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop + ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "planning");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            ourServicesSection.offsetHeight / 2 -
            ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "management");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            (ourServicesSection.offsetHeight / 2 +
              ourServicesSection.offsetHeight / 6)
        ) {
          ourPortfolioReveal("xs");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal("xs");
        }
        break;
      case "xs-3":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xs-3");
        }
        if (
          scrollYPosition >= aboutStudioSection.offsetTop &&
          !aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        } else if (
          scrollYPosition >=
            aboutStudioSection.offsetTop +
              aboutStudioSection.offsetHeight / 4 &&
          aboutStudioMoreContainer.classList.contains(
            `reveal-text-${breakpoint}`
          )
        ) {
          ourServicesReveal("xs", "design");
        }
        if (scrollYPosition >= ourServicesSection.offsetTop) {
          ourServicesReveal("xs", "services");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop + ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "planning");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            ourServicesSection.offsetHeight / 2 -
            ourServicesSection.offsetHeight / 8
        ) {
          ourServicesReveal("xs", "management");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop +
            (ourServicesSection.offsetHeight / 2 +
              ourServicesSection.offsetHeight / 6)
        ) {
          ourPortfolioReveal("xs");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal('xs')
        }
        break;

      case "sm":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          ourServicesReveal("sm");
        }
        if (
          scrollYPosition >=
          aboutStudioSection.offsetTop + aboutStudioSection.offsetHeight / 2
        ) {
          ourPortfolioReveal("sm");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal('sm')
        }
        break;
      case "md":
        if (scrollYPosition >= hero.offsetHeight / 5) {
          ourServicesReveal("md");
        }
        if (
          scrollYPosition >=
          aboutStudioSection.offsetTop + aboutStudioSection.offsetHeight / 2
        ) {
          ourPortfolioReveal("md");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal('md')
        }
        break;
      case "lg":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("lg");
        }
        if (scrollYPosition >= hero.offsetHeight) {
          ourServicesReveal("lg");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop + ourServicesSection.offsetHeight / 2
        ) {
          ourPortfolioReveal("lg");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal('lg')
        }
        break;
      case "xl":
        if (scrollYPosition >= hero.offsetHeight / 2) {
          aboutStudioReveal("xl");
        }
        if (scrollYPosition >= hero.offsetHeight) {
          ourServicesReveal("xl");
        }
        if (
          scrollYPosition >=
          ourServicesSection.offsetTop + ourServicesSection.offsetHeight / 2
        ) {
          ourPortfolioReveal("xl");
        }
        if (
          scrollYPosition >=
          ourPortfolioSection.offsetTop + ourPortfolioSection.offsetHeight / 2
        ) {
          ourPricingReveal('xl')
          pricingCardsHover()
        }
        break;
    }
  });
}
