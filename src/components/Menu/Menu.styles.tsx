import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { styled as styled2 } from "styled-components";
import { Button, Container, Typography } from "@mui/material";

export const MenuContainer = styled("div")<{ open: boolean }>(
  ({ theme, open }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,

    [theme.breakpoints.down("md")]: {
      pointerEvents: "none",
    },
  })
);

export const List = styled("div")<{ open: boolean }>(({ theme, open }) => ({
  flexGrow: 1,

  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingLeft: 25,
  paddingTop: 250,

  transition: "opacity 0.5s",

  userSelect: "none",

  [theme.breakpoints.down("md")]: {
    left: 0,
    right: 0,
    opacity: 0,
    position: "fixed",
    pointerEvents: "none",
    paddingLeft: 50,
    backgroundColor: "#fbc7bd",
    width: "100%",

    ...(open && {
      pointerEvents: "auto",
      opacity: 1,
    }),
    ...(!open && {
      transition: "opacity 0s",
    }),
  },
}));

export const ListItem = styled('a')(({theme}) => ({
  // padding: "5px 5px 5px 2px",
  textDecoration: "none",
  position: "relative",
  margin: "5px 0",
}));

export const Hamburger = styled(Button)(
  ({ theme }) => `
  pointer-events: auto;
  z-index: 1;
  min-width: 0px;
  position: fixed;
  top: 15px;
  left: 15px;

  ${theme.breakpoints.up("md")} {
    display: none;
  }

  
`
);

export const Buns = styled("div")(
  ({ theme }) => `

  height: 1.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;


`
);

export const Patty = styled("div")<{ open?: boolean, duration?: number }>(
  ({ theme, open, duration=0.25 }) => `

  height: 2px;
  flex-shrink: 0;
  margin: 2px 0;
  width: 20px;
  background-color: ${theme.palette.text.primary};
  border-radius: 5px;

  transition: margin ${duration}s ${duration}s, rotate ${duration}s, opacity 0s ${duration}s;

  ${open && `

    transition: margin ${duration}s, rotate ${duration}s ${duration}s, opacity 0s ${duration}s;

    &:nth-child(1) {
      margin: -2px 0px;
      rotate: 45deg;

    }
    &:nth-child(2) {
      margin: 0px;
      opacity: 0;

    }
    &:nth-child(3) {
      margin: -2px 0px;
      rotate: -45deg;

    }

  `}

`
);

export const ListType = styled2(Typography).attrs({
  variant: "body2",
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: "inline-block",
  // borderBottomWidth: 1,
  // borderBottomStyle: "solid",
  // borderBottomColor: "transparent",

  // color: theme.palette.text.primary,
  padding: "2px 12px 2px 2px",


  ...(selected && {
    color: theme.palette.text.primary,
    // underline

    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 7,
      left: 0,
      height: 2,
      width: "100%",
      backgroundColor: theme.palette.text.disabled,
      borderRadius: 1000,
    }
  }),

  // "&::after": {
  //   content: '""',
  //   display: "block",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   height: 1,
  //   transition: "opacity 0.3s",
  //   backgroundColor: theme.palette.text.primary,
  //   width: 0,
  //   opacity: 0,

  //   ...(selected && {
  //     width: "100%",
  //     opacity: 1,
  //   }),
  // },
}));

export const Hearts = styled2("img")<{
  $top?: number;
  $bottom?: number;
  $left?: number;
  $right?: number;
  $height?: number;
}>(({ theme, $height, $top, $bottom, $left, $right }) => ({
  position: "absolute",
  top: $top !== undefined ? $top : "unset",
  bottom: $bottom !== undefined ? $bottom : "unset",
  left: $left !== undefined ? $left : "unset",
  right: $right !== undefined ? $right : "unset",
  height: $height !== undefined ? $height : "unset",
}));

export const HeartImg = styled2("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/heart.png`,
})(({ theme }) => ({
  position: "fixed",
  top: 20,
  left: 20, 
  zIndex: 1,
  width: 50,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
