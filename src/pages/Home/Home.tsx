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
  DividerImg,
  CarImg,
  SoonImg,
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
          Grammy + Grampy's Farm
        </Typography>

        <a
          href="https://maps.app.goo.gl/gJMAMtnQL2Ex87H78"
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Typography variant="body1">
            2037 RUE Duvernay,
            <br />
            Sherbrooke QC J1H 0A6
          </Typography>
        </a>

        <DividerImg />

        <Typography variant="body1" style={{ marginBottom: 24 }}>
          September 06, 2025
          <br />
          at 4:30 pm
        </Typography>
      </div>

      <div id="rsvp">
        <RsvpButton variant="outlined">
          <Typography style={{ fontSize: 40 }}>RSVP</Typography>
        </RsvpButton>
      </div>

      <div id="schedule" style={{ textAlign: "center", paddingTop: 75 }}>
        <Typography variant="body2" style={{ marginBottom: 48 }}>
          Schedule
        </Typography>
        <ScheduleImg />
      </div>

      <div
        id="accomodations"
        style={{ textAlign: "center", padding: 20, paddingTop: 75, paddingBottom: 100 }}
      >
        <Typography variant="body2" style={{ marginBottom: 24 }}>
          Accomodations
        </Typography>
        <Typography variant="body1" style={{ marginBottom: 24 }}>
          We have not reserved a block of rooms,
          <br /> so feel free to stay wherever you'd like!
        </Typography>
        <Typography variant="body1" style={{ marginBottom: 24 }}>
          Here are some nearby suggestions:
        </Typography>
        <DividerImg />
        <div style={{ display: "flex", justifyContent: "center", gap: 50, flexWrap: "wrap", marginBottom: 100 }}>
          <div style={{ textAlign: "left", flexShrink: 0}}>
            <Typography variant="body2">OTL Gouverneur</Typography>
            <div>
              <CarImg style={{ marginRight: 10 }} />
              <Typography variant="body2" variantMapping={{ body2: "span" }}>
                8 mins
              </Typography>
            </div>
          </div>

          <div style={{ textAlign: "left", flexShrink: 0 }}>
            <Typography variant="body2">Delta hotel</Typography>
            <div>
              <CarImg style={{ marginRight: 10 }} />
              <Typography variant="body2" variantMapping={{ body2: "span" }}>
                9 mins
              </Typography>
            </div>
          </div>

          <div style={{ textAlign: "left", flexShrink: 0 }}>
            <Typography variant="body2">Île de Garde B&B</Typography>
            <div>
              <CarImg style={{ marginRight: 10 }} />
              <Typography variant="body2" variantMapping={{ body2: "span" }}>
                11 mins
              </Typography>
            </div>
          </div>                    
        </div>

        <SoonImg />
      </div>

    </HomeContainer>
  );
};

export default Home;
