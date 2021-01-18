export const theme = {
  accent: "#eea24b",
  accentLight: "#ffd897",
  accentLighter: "#ffebc9",

  black: "#000000",
  white: "#fff",
  bg: "#F9F9F9",
  bgLighter: "#F9F9F9",
  textMain: "#222",
  textLighter: "#444",
  gap: "18px",
  pageWidth: "1366px",
  articlePageWidth: "1024px",
  navbarHeight: "100px",

}

export const themeNavLinks = (baseColor = theme.textLighter, accentColor = theme.accent, lineThickness = "2") => { return  `
background-image: linear-gradient(${baseColor}, ${baseColor} ), linear-gradient(${accentColor} , ${accentColor});
background-size: 100% ${lineThickness}px, 0 ${lineThickness}px;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
transition: background-size 150ms linear;
&:hover {
    background-size: 0 ${lineThickness}px, 100% ${lineThickness}px;
}

  }

`}

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

