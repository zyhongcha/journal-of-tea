export const theme = {
  accent: "#ffb73f",
  accentLight: "#ffd897",
  accentLighter: "#ffebc9",

  black: "#000000",
  white: "#fff",
  bg: "#F9F9F9",
  bgLighter: "#F9F9F9",
  textMain: "#505050",
  textLighter: "#444",
  gap: "18px",
  pageWidth: "1366px",
  articlePageWidth: "1024px",
  navbarHeight: "100px",

}

export const themeNavLinks = `
background-image: linear-gradient(${theme.textLighter}, ${theme.textLighter} ), linear-gradient(${theme.accent} , ${theme.accent});
background-size: 100% 2px, 0 2px;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
transition: background-size 150ms linear;
&:hover {
    background-size: 0 2px, 100% 2px;
}

  }

`

export const themeTitle = `
background-image: linear-gradient(${theme.accent} , ${theme.accent});
background-size: 0 3px;
background-position: 0 100%;
background-repeat: no-repeat;
transition: background-size 150ms linear;
&:hover {
    background-size: 100% 3px;
}

  }

`

