import { Typography } from "@mui/material";
import styled from "styled-components";

export const LayoutContainer = styled.div(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: 160,

    [theme.breakpoints.down("md")]: {
      paddingTop: 120,
      },

      [theme.breakpoints.down("sm")]: {
        paddingTop: 80,
        },      
}))

export const Title = styled(Typography).attrs({ variant: "h1" })(({ theme }) => ({

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));