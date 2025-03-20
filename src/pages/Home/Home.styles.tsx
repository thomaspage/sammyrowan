import { Button, Typography } from "@mui/material";
import { styled } from "styled-components";

export const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 700,

  [theme.breakpoints.down("md")]: {
    width: "unset",
  },

  
}));

export const ScheduleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Time = styled("div")({});
export const Place = styled("div")({});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "5rem",
  whiteSpace: "nowrap",
  transformOrigin: "bottom left",
  textTransform: "uppercase",
  textAlign: "center",
  position: "relative",
  lineHeight: "1.25em",

  // textShadow: `0px 0px 2px ${theme.palette.background.default}`,
  // WebkitTextStroke: `2px ${theme.palette.background.default}`,

  // transition: "font-size 0.5s",

  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },

  // "&::after": {
  //   content: '"ROWAN + SAMMY\'S"',
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   top: 0,
  //   left: 0,
  //   fontSize: "5rem",
  //   textAlign: "center",
    
  //   // backgroundColor: theme.palette.text.primary
  // }

}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  // fontSize: "6rem",
  // transformOrigin: "bottom left",
  textTransform: "uppercase",
  textAlign: "center",

  //   [theme.breakpoints.down("md")]: {
  //     paddingRight: "20%",
  //     fontSize: "3rem",
  //   },

  // transition: "transform 0.5s, margin-top 0.5s",

  // [theme.breakpoints.down("sm")]: {
  //   transform: "scale(0.6)",
  //   marginTop: "-8rem",
  // },

}));


export const LoversImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/lovers.png`,
})(({theme}) => ({
  width: 350,
  maxWidth: "100%",
  paddingRight: "5%",
  margin: "auto",
  marginBottom: -40,



  [theme.breakpoints.down("md")]: {
    width: 325,
    marginBottom: -30,
  },

  [theme.breakpoints.down("sm")]: {
    width: 250,
    marginBottom: -20,
  },

}));


export const FarmImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/farm.png`,
})(({theme}) => ({
  width: 400,
  maxWidth: "100%",
  margin: "auto",
  // marginBottom: -120,



  [theme.breakpoints.down("md")]: {
    width: 300,
    // marginBottom: -90,
  },

  [theme.breakpoints.down("sm")]: {
    width: 300,
    // marginBottom: -60,
  },

}));


export const TitleImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/title.png`,
})(({theme}) => ({
  width: 550,
  maxWidth: "100%",
  margin: "auto",
  marginBottom: 24,
  // marginBottom: -120,



  [theme.breakpoints.down("md")]: {
    width: 500,
    // marginBottom: -90,
  },

  [theme.breakpoints.down("sm")]: {
    width: 300,
    // marginBottom: -60,
  },
}));

export const ArrowImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/arrow.png`,
})(({theme}) => ({
  // width: 50,
  margin: "auto",
  marginBottom: 24,


  [theme.breakpoints.down("md")]: {
    width: 15,
    // marginBottom: -90,
  },

}));


export const RsvpButton = styled(Button)(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.palette.text.secondary,
  color: theme.palette.text.primary,
  fontSize: 40,
  borderRadius: 12,
  margin: "50px auto",  

  width: 350,

  maxWidth: "90vw",

  "&:hover": {
    backgroundColor: "#FFDAD2",
  },
}));


export const ScheduleImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/schedule.png`,
})(({theme}) => ({
  width: 400,
  maxWidth: "100%",

  [theme.breakpoints.down("md")]: {
    width: 350,
  },


}));

export const DividerImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/divider.png`,
})(({theme}) => ({
  width: 50,
  margin: 24
}));


export const CarImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/car.png`,
})(({theme}) => ({
  width: 50,

}));

export const SoonImg = styled("img").attrs({
  src: `${process.env.PUBLIC_URL}/img/soon.png`,
})(({theme}) => ({
  width: 550,
  maxWidth: "100%",
  margin: "auto",
  marginBottom: 24,
  // marginBottom: -120,



  [theme.breakpoints.down("md")]: {
    width: 500,
    // marginBottom: -90,
  },

  [theme.breakpoints.down("sm")]: {
    width: 300,
    // marginBottom: -60,
  },
}));