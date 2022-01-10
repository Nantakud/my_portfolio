export const projects_data = [
  {
    title: "Escape from Alcatraz",
    description:
      "An action videogame. Come out of your cell, dodge guards and dogs and run for your freedom",
    video: createYoutubeLink("5nLdsNTnmOw"),
    thumb: "assets/escape_alcatraz/thumbnail.png",
    stack: ["assets/stack/javascript.svg", "assets/stack/p5js.svg"],
    source: "https://github.com/Nantakud/escape_alcatraz",
    visit: null,
    details: {
      detail1: {
        text: "Built paying extreme attention and consideration on UX. I has a dedicated help section, where the player can get confidence with commands.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Coded in JavaScript, it leverages a light library called P5, which offers countless possibilities to draw on the canvas and create graphic effects.",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
    id: 0,
  },
  {
    title: "Movie Zone",
    description:
      "A platform for a movies renting services. It provides several searching criteria, and, only for registered members, a wide selection of titles to rent. Admins have a dedicated section, with CRUD and report features.",
    video: createYoutubeLink("V8J72q64AUw"),
    thumb: "assets/movie_zone/thumbnail.png",
    stack: ["assets/stack/php.svg", "assets/stack/javascript.svg"],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: "http://infotech.scu.edu.au/~fvacca10/movie_zone/",
    details: {
      detail1: {
        text: "No frameworks or libraries have been used to complete the project, not even for AJAX calls or user authentication. While using only vanilla JS and PHP has been time-consuming and definitely not recommended in production, it helped me develop solid fundamentals in the two languages.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente eius? Officia velit architecto ullam alias molestiae est quas perferendis!",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
    id: 1,
  },
  {
    title: "Order Manager",
    description:
      "A wordpress plugin that allows to manage each step in a fast-food order cycle. It has dedicated interfaces for different team members and an handy click'n'collect button for the customer",
    video: createYoutubeLink("97rvh_S_uOI"),
    thumb: "assets/order_manager/thumbnail.png",
    stack: ["assets/stack/php.svg", "assets/stack/javascript.svg"],
    source: "https://github.com/Nantakud/order_manager",
    visit: "https://live-rooster-clickncollect.pantheonsite.io/",
    details: {
      detail1: {
        text: "Lorem ipsum dolor sit amet.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente eius? Officia velit architecto ullam alias molestiae est quas perferendis!",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
    id: 2,
  },
  {
    title: "React Quiz",
    description:
      "Test your knowledge! 10 always different questions, fetched from an external api",
    video: createYoutubeLink("X-rAdkydkXA"),
    thumb: "assets/react_quiz/thumbnail.png",
    stack: ["assets/stack/react.svg", "assets/stack/sass.svg"],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: null,
    details: {
      detail1: {
        text: "Lorem ipsum dolor sit amet.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente eius? Officia velit architecto ullam alias molestiae est quas perferendis!",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
    id: 3,
  },
  {
    title: "Fix that Bug",
    description:
      "Help a poor developer to catch all bugs before they run away and he gets fired!",
    video: createYoutubeLink("Tza2gUvNtq8"),
    thumb: "assets/fix_that_bug/thumbnail.png",
    stack: ["assets/stack/javascript.svg", "assets/stack/phaser.svg"],
    source: "https://github.com/Nantakud/fix_that_bug_game",
    visit: "https://francesco-vacca.itch.io/fix-that-bug",
    details: {
      detail1: {
        text: "Lorem ipsum dolor sit amet.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente eius? Officia velit architecto ullam alias molestiae est quas perferendis!",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
    id: 4,
  },
  {
    title: "Media rating",
    description:
      "An hybrid app, created as a platform for simple CRUD operation on a database",
    video: createYoutubeLink("8YdKJHFF1rQ"),
    thumb: "assets/rate_media/thumbnail.png",
    stack: [
      "assets/stack/typescript.svg",
      "assets/stack/angular.svg",
      "assets/stack/ionic.svg",
    ],
    source: "https://github.com/Nantakud/my_portfolio/commits/main",
    visit: null,
    details: {
      detail1: {
        text: "Lorem ipsum dolor sit amet.",
        url: "assets/handshake.png",
        alt: "vediamo se funziona",
      },
      detail2: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente eius? Officia velit architecto ullam alias molestiae est quas perferendis!",
        url: "assets/adventure.svg",
        alt: "stiamo provando",
      },
    },
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
