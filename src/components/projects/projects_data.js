export const projects_data = [
  {
    title: "Escape from Alcatraz",
    description:
      "Come out of your cell, dodge guards and dogs and run for your freedom",
    video: createYoutubeLink("5nLdsNTnmOw"),
    thumb: "assets/escape_from_alcatraz_thumbnail.png",
    stack: ["assets/javascript.svg", "assets/p5js.svg"],
    source: "https://github.com/Nantakud/escape_alcatraz",
    visit: null,
    id: 0,
  },
  {
    title: "Movie Zone",
    description:
      "A platform for a movies renting services. It provides several searching criteria, and, only for registered members, a wide selection of titles to rent. Admins have a dedicated section, with CRUD and report features.",
    video: createYoutubeLink("V8J72q64AUw"),
    thumb: "assets/movie_zone_thumbnail.png",
    stack: ["assets/php.svg", "assets/javascript.svg"],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: "http://infotech.scu.edu.au/~fvacca10/movie_zone/",
    id: 1,
  },
  {
    title: "Order Manager",
    description:
      "A wordpress plugin that allows to manage each step in a fast-food order cycle. It has dedicated interfaces for different team members and an handy click'n'collect button for the customer",
    video: createYoutubeLink("97rvh_S_uOI"),
    thumb: "assets/order_manager_thumbnail.png",
    stack: ["assets/php.svg", "assets/javascript.svg"],
    source: "https://github.com/Nantakud/order_manager",
    visit: "https://live-rooster-clickncollect.pantheonsite.io/",
    id: 2,
  },
  {
    title: "React Quiz",
    description:
      "Test your knowledge! 10 always different questions, fetched from an external api",
    video: createYoutubeLink("X-rAdkydkXA"),
    thumb: "assets/react_quiz_thumbnail.png",
    stack: ["assets/react.svg", "assets/sass.svg"],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: null,
    id: 3,
  },
  {
    title: "Fix that Bug",
    description:
      "Help a poor developer to catch all bugs before they run away and he gets fired!",
    video: createYoutubeLink("Tza2gUvNtq8"),
    thumb: "assets/fix_that_bug_thumbnail.png",
    stack: ["assets/javascript.svg", "assets/phaser.svg"],
    source: "https://github.com/Nantakud/fix_that_bug_game",
    visit: "https://francesco-vacca.itch.io/fix-that-bug",
    id: 4,
  },
  {
    title: "Media rating",
    description:
      "An hybrid app, created as a platform for simple CRUD operation on a database",
    video: createYoutubeLink("8YdKJHFF1rQ"),
    thumb: "assets/rate_media_thumbnail.png",
    stack: ["assets/typescript.svg", "assets/angular.svg", "assets/ionic.svg"],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: null,
    id: 5,
  },
];

function createYoutubeLink(id) {
  return (
    "https://www.youtube.com/embed/" +
    id +
    "?playlist=" +
    id +
    "&autoplay=1&mute=1&loop=1&controls=0"
  );
}
