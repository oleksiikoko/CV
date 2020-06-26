const initialState = {
  loading: false,
  items: [
    {
      projectName: "CV",
      description:
        "Цей проект є моєю візитною карткою. На даний момент це останній мій проект. В ньому я зосередив увагу, на чистоті коду, легкому розумінні, та модифікації.",
      links: [
        {
          iconId: "figma",
          name: "Maket",
          url:
            "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=0%3A1",
          color: "figma",
        },
        {
          iconId: "gitHub",
          name: "Code",
          url: "https://github.com/oleksiikoko/CV",
          color: "blue",
        },
        {
          iconId: "heroku",
          name: "Deploy",
          url: "http://localhost:3000/",
          color: "purple",
        },
      ],
    },
    {
      projectName: "Joke generator",
      description:
        "Joke generator using API <a href='https://api.chucknorris.io/'>. Проекти написаний на vanilla.js",
      links: [
        {
          iconId: "figma",
          name: "Maket",
          url:
            "https://www.figma.com/file/tXQ7qBjtlVZgaleoU4Yiqm/MSI-2020---Front-end-Development-Test?node-id=0%3A1",
          color: "figma",
        },
        {
          iconId: "gitHub",
          name: "Code",
          url: "https://github.com/oleksiikoko/Joke-Generator",
          color: "blue",
        },
        {
          iconId: "heroku",
          name: "Deploy",
          url: "https://mac-paw-internship.herokuapp.com/",
          color: "purple",
        },
      ],
    },
    {
      projectName: "GitHub search",
      description: "GitHub search page.",
      links: [
        {
          iconId: "gitHub",
          name: "Code",
          url: "https://github.com/oleksiikoko/GitHub-Search",
          color: "blue",
        },
        {
          iconId: "heroku",
          name: "Deploy",
          url: "https://better-me-test.herokuapp.com/",
          color: "purple",
        },
      ],
    },
    {
      projectName: "TicTacToe",
      description: "Mini game",
      links: [
        {
          iconId: "figma",
          name: "Maket",
          url: "https://www.figma.com/file/EBFJ5hHfV4CnJridemzPcU/TicTacToe",
          color: "figma",
        },
        {
          iconId: "gitHub",
          name: "Code",
          url: "https://github.com/oleksiikoko/TicTacToe",
          color: "blue",
        },
        {
          iconId: "heroku",
          name: "Deploy",
          url: "https://pet-tictactoe.herokuapp.com/",
          color: "purple",
        },
      ],
    },
    {
      projectName: "User Statistic",
      description: "Mini game",
      links: [
        {
          iconId: "figma",
          name: "Maket",
          url: "https://www.figma.com/file/LpWuCx7YkPctSdSVwAKflI/Untitled",
          color: "figma",
        },
        {
          iconId: "gitHub",
          name: "Code",
          url: "https://github.com/oleksiikoko/User-Statistics",
          color: "blue",
        },
      ],
    },
  ],
};

export const portfolioReducer = (state = initialState, action) => {
  console.log("fladskjf;adsljk");
  switch (action.type) {
    default:
      return state;
  }
};
