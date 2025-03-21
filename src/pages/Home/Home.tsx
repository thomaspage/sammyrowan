import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Radio,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
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
  GuestGroup,
  GuestsContainer,
  StyledRadioGroup,
  StyledForm,
} from "./Home.styles";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { GOOGLE_SCRIPT_URL, theme } from "../../App";
import CloseIcon from "@mui/icons-material/Close";
interface Guest {
  firstName: string;
  lastName: string;
  dietaryRestrictions: string;
  songRequest: string;
  notes: string;
}

const emptyGuest: Guest = {
  firstName: "",
  lastName: "",
  dietaryRestrictions: "",
  songRequest: "",
  notes: "",
};
const Home = ({}) => {
  const { t } = useTranslation();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const rsvpMessage = localStorage.getItem("rsvpMessage");

  const [completed, setCompleted] = useState<boolean>(!!rsvpMessage);
  const [loading, setLoading] = useState<boolean>(false);
  const [bringingGuest, setBringingGuest] = useState<boolean>(false);
  const [primaryGuest, setPrimaryGuest] = useState<Guest>(emptyGuest);
  const [secondaryGuest, setSecondaryGuest] = useState<Guest>(emptyGuest);
  const [attending, setAttending] = useState<boolean>(true);

  const handleFormCompletion = () => {
    const rsvpMessage = attending
      ? "rsvpMessageAttending"
      : "rsvpMessageNotAttending";
    localStorage.setItem("rsvpMessage", rsvpMessage);
    setCompleted(true);
    setRsvpOpen(false);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // Prevent page reload
    event.preventDefault();

    // Disable form
    setLoading(true);

    const data = {
      primaryGuest,
      secondaryGuest,
      attending,
      bringingGuest: bringingGuest && attending,
    };

    fetch(GOOGLE_SCRIPT_URL, {
      redirect: "follow",
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setLoading(false);
        handleFormCompletion();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        alert("There was an error submitting your RSVP. Please try again.");
      });
  };

  return (
    <HomeContainer>
      <LoversImg />

      <TitleImg style={{ marginBottom: 150 }} />
{/* 
      <Typography style={{ marginBottom: 24 }} variant="body2">
        Scroll to RSVP!
      </Typography>

      <ArrowImg /> */}

      <div id="details" style={{ textAlign: "center" }}>
        <FarmImg style={{ marginBottom: 24 }} />

        <Typography variant="body2" style={{ marginBottom: 12 }}>
          Our wedding will be held at
          Grammy + Grampy's Farm
        </Typography>

        <a
          href="https://maps.app.goo.gl/gJMAMtnQL2Ex87H78"
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Typography variant="body1">
            2037 RUE Duvernay,
            Sherbrooke QC J1H 0A6
          </Typography>
        </a>

        <DividerImg />

        <Typography variant="body1" style={{ marginBottom: 24 }}>
          September 06, 2025 
          <span style={{ color: "#FF503E"}}> at 4:30 pm</span>
        </Typography>
      </div>

      <div
        id="rsvp"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <RsvpButton
          variant="outlined"
          onClick={() => setRsvpOpen(true)}
          disabled={completed}
        >
          <Typography style={{ fontSize: 40 }}>RSVP</Typography>
        </RsvpButton>
          <Typography
            color="text.secondary"
            style={{ marginTop: -24, fontSize: 14 }}
            variant="body2"
          >
            {completed ? "Thanks for submitting your RSVP!" : "Before May 11 please!"}
          </Typography>
      </div>

      <div id="schedule" style={{ textAlign: "center", paddingTop: 75 }}>
        <Typography variant="body2" style={{ marginBottom: 48 }}>
          Schedule
        </Typography>
        <ScheduleImg />
      </div>

      <div
        id="accomodations"
        style={{
          textAlign: "center",
          padding: 20,
          paddingTop: 75,
          paddingBottom: 100,
        }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            flexWrap: "wrap",
            marginBottom: 100,
          }}
        >
          <div style={{ textAlign: "left", flexShrink: 0 }}>
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

      <Modal
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        BackdropProps={{
          style: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeProvider
          theme={{
            ...theme,
            typography: {
              ...theme.typography,
              body1: {
                ...theme.typography.body1,
                fontSize: 16,
                [theme.breakpoints.down("md")]: {
                  fontSize: 14,
                },
              },
            },
          }}
        >
          <div style={{ position: "relative", maxWidth: "100%" }}>
            <Paper
              style={{
                padding: 48,
                width: 700,
                maxWidth: "100%",
                maxHeight: "100vh",
                overflowY: "auto",
              }}
            >
              <IconButton
                style={{ position: "absolute", top: 5, right: 5 }}
                onClick={() => setRsvpOpen(false)}
              >
                <CloseIcon color="primary" />
              </IconButton>
              <StyledForm onSubmit={handleSubmit}>
                <FormControl sx={{ width: "100%", gap: 5 }} disabled={loading}>
                  <FormGroup>
                    <FormLabel style={{ marginBottom: 12 }}>
                      Can you make it?
                    </FormLabel>
                    <div
                      style={{
                        display: "flex",
                        gap: 20,
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        variant={attending ? "contained" : "outlined"}
                        color="primary"
                        disableElevation={true}
                        onClick={() => setAttending(true)}
                      >
                        Yes
                      </Button>

                      <Button
                        variant={!attending ? "contained" : "outlined"}
                        color="primary"
                        disableElevation={true}
                        onClick={() => setAttending(false)}
                      >
                        No
                      </Button>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel style={{ marginBottom: 12 }}>
                      Who's coming?
                    </FormLabel>
                    <div>
                      <Select
                        value={bringingGuest ? "true" : "false"}
                        onChange={(e) =>
                          setBringingGuest(e.target.value === "true")
                        }
                        size="small"
                      >
                        <MenuItem value={"false"}>Just me</MenuItem>
                        <MenuItem value={"true"}>Me and my +1</MenuItem>
                      </Select>
                    </div>
                  </FormGroup>
                  <GuestsContainer>
                    <GuestGroup>
                      <FormLabel>Your info</FormLabel>
                      <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        color="primary"
                        label={t("pages.rsvp.firstName")}
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            firstName: e.target.value,
                          })
                        }
                        value={primaryGuest.firstName}
                        fullWidth
                        required
                      />

                      <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        color="primary"
                        label={t("pages.rsvp.lastName")}
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            lastName: e.target.value,
                          })
                        }
                        value={primaryGuest.lastName}
                        fullWidth
                        required
                      />

                      <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        color="primary"
                        label={t("pages.rsvp.dietaryRestrictions")}
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            dietaryRestrictions: e.target.value,
                          })
                        }
                        value={primaryGuest.dietaryRestrictions}
                        fullWidth
                      />

                      <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        color="primary"
                        label="Song Request"
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            songRequest: e.target.value,
                          })
                        }
                        value={primaryGuest.songRequest}
                        fullWidth
                      />

                      <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        color="primary"
                        label="Other notes"
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            notes: e.target.value,
                          })
                        }
                        value={primaryGuest.notes}
                        fullWidth
                      />
                    </GuestGroup>

                    {bringingGuest && (
                      <GuestGroup>
                        <FormLabel>Guest Info</FormLabel>

                        <TextField
                          type="text"
                          size="small"
                          variant="standard"
                          color="primary"
                          label={t("pages.rsvp.firstName")}
                          onChange={(e) =>
                            setSecondaryGuest({
                              ...secondaryGuest,
                              firstName: e.target.value,
                            })
                          }
                          value={secondaryGuest.firstName}
                          fullWidth
                          required
                        />

                        <TextField
                          type="text"
                          size="small"
                          variant="standard"
                          color="primary"
                          label={t("pages.rsvp.lastName")}
                          onChange={(e) =>
                            setSecondaryGuest({
                              ...secondaryGuest,
                              lastName: e.target.value,
                            })
                          }
                          value={secondaryGuest.lastName}
                          fullWidth
                          required
                        />

                        <TextField
                          type="text"
                          size="small"
                          variant="standard"
                          color="primary"
                          label={t("pages.rsvp.dietaryRestrictions")}
                          onChange={(e) =>
                            setSecondaryGuest({
                              ...secondaryGuest,
                              dietaryRestrictions: e.target.value,
                            })
                          }
                          value={secondaryGuest.dietaryRestrictions}
                          fullWidth
                        />

                        <TextField
                          type="text"
                          size="small"
                          variant="standard"
                          color="primary"
                          label="Song Request"
                          onChange={(e) =>
                            setSecondaryGuest({
                              ...secondaryGuest,
                              songRequest: e.target.value,
                            })
                          }
                          value={secondaryGuest.songRequest}
                          fullWidth
                        />

                        <TextField
                          type="text"
                          size="small"
                          variant="standard"
                          color="primary"
                          label="Other notes"
                          onChange={(e) =>
                            setSecondaryGuest({
                              ...secondaryGuest,
                              notes: e.target.value,
                            })
                          }
                          value={secondaryGuest.notes}
                          fullWidth
                        />
                      </GuestGroup>
                    )}
                  </GuestsContainer>

                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 20,
                      position: "sticky",
                      bottom: 0,
                    }}
                  >
                    <Button
                      disabled={loading}
                      sx={{ width: 150, backgroundColor: "#fbc7bd" }}
                      variant="outlined"
                      color="primary"
                      type="submit"
                    >
                      {t("pages.rsvp.submit")}
                    </Button>
                    {loading && <CircularProgress size={20} />}
                  </div>
                </FormControl>
              </StyledForm>
            </Paper>
          </div>
        </ThemeProvider>
      </Modal>
    </HomeContainer>
  );
};

export default Home;
