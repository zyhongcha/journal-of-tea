export const theme = {
  accent: "#f5962a",
  accentLight: "#ffd897",
  accentLighter: "#ffebc9",

  black: "#000000",
  white: "#fff",
  bg: "#ddd",
  bgLighter: "#F9F9F9",
  textMain: "#222",
  textLighter: "#444",
  textLightest: "#eea24b",
  gap: "18px",
  pageWidth: "1366px",
  articlePageWidth: "808px",

}

export const themeNavLinks = (baseColor = theme.textLighter, accentColor = theme.accent, lineThickness = "2", transitionDuration = "150ms") => { return  `
background-image: linear-gradient(${baseColor}, ${baseColor} ), linear-gradient(${accentColor} , ${accentColor});
background-size: 100% ${lineThickness}px, 0 ${lineThickness}px;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
text-decoration:none;
transition: background-size ${transitionDuration} linear;
&:hover {
    background-size: 0 ${lineThickness}px, 100% ${lineThickness}px;
}

  }

`}

export const themeTitle = `
background-image: linear-gradient(${theme.accentLight} , ${theme.accentLight});
background-size: 0 3px;
background-position: 0 100%;
background-repeat: no-repeat;
transition: background-size 150ms linear;
&:hover {
    background-size: 100% 3px;
}

  }

`

