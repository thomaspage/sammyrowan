import { Button, Typography } from "@mui/material";
import {
  ScheduleContainer,
  HomeContainer,
  Place,
  Time,
  Title,
  LoversImg,
  SubTitle,
  FarmImg,
  TitleImg,
  ArrowImg,
  RsvpButton,
  ScheduleImg,
} from "./Home.styles";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Home = ({}) => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <LoversImg />

      <TitleImg />

      <Typography style={{ marginBottom: 24 }} variant="body2">
        Scroll to RSVP!
      </Typography>

      <ArrowImg />

      <div id="details" style={{ textAlign: "center" }}>
        <FarmImg style={{ marginBottom: 24 }} />

        <Typography variant="body2" style={{ marginBottom: 24 }}>
          Our wedding will be held at
          <br />
          Grammy + Grampy’s Farm
        </Typography>

        <a
          href="https://maps.app.goo.gl/gJMAMtnQL2Ex87H78"
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Typography variant="body1" style={{ marginBottom: 24 }}>
            2037 RUE Duvernay,
            <br />
            Sherbrooke QC J1H 0A6
          </Typography>
        </a>

        <Typography variant="body1" style={{ marginBottom: 24 }}>
          September 06, 2025
          <br />
          at 4:30 pm
        </Typography>
      </div>

      <div id="rsvp">
        <RsvpButton variant="outlined">
          <Typography style={{fontSize: 40}}>RSVP</Typography>
        </RsvpButton>
      </div>

      <div id="schedule" style={{ textAlign: "center", paddingTop: 75 }}>
        <Typography variant="body2" style={{ marginBottom: 48 }}>Schedule</Typography>
        <ScheduleImg />
      </div>

      <div id="accomodations" style={{ textAlign: "center", paddingTop: 75, paddingBottom: 500 }}>
        <Typography variant="body2" style={{ marginBottom: 24 }}>Accomodations</Typography>
        <Typography variant="body1" style={{ marginBottom: 24 }}>
          We have not reserved a block of rooms,<br /> so feel free to stay wherever you'd like!
        </Typography>
        <Typography variant="body1">
          Here are some nearby suggestions:
        </Typography>
      </div>
    </HomeContainer>
  );
};

export default Home;
