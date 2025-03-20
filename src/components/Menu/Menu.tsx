import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Buns,
  Hamburger,
  Hearts,
  List,
  ListItem,
  ListType,
  MenuContainer,
  Patty,
  HeartImg,
} from "./Menu.styles";
import { useTranslation } from "react-i18next";
import * as amplitude from "@amplitude/analytics-browser";

const Menu = ({}) => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<string>("#details");

  const { t } = useTranslation();

  // onscroll, check where user is on the page
  useEffect(() => {
    const handleScroll = () => {
      // console.log("\n\n\n\n\n\n")
      // console.log("window.scrollY", window.scrollY);

      const centerY = -100;

      const detailsY = document.getElementById("details")?.offsetTop;
      const rsvpY = document.getElementById("rsvp")?.offsetTop;
      const scheduleY = document.getElementById("schedule")?.offsetTop;
      const accomodationsY =
        document.getElementById("accomodations")?.offsetTop;

      // console.log("detailsY", detailsY)
      // console.log("rsvpY", rsvpY)
      // console.log("scheduleY", scheduleY)
      // console.log("accomodationsY", accomodationsY)

      const detailsDiff = (detailsY || 0) - (window.scrollY + centerY);
      const rsvpDiff = (rsvpY || 0) - (window.scrollY + centerY);
      const scheduleDiff = (scheduleY || 0) - (window.scrollY + centerY);
      const accomodationsDiff =
        (accomodationsY || 0) - (window.scrollY + centerY);

      // console.log("detailsDiff", detailsDiff)
      // console.log("rsvpDiff", rsvpDiff)
      // console.log("scheduleDiff", scheduleDiff)
      // console.log("accomodationsDiff", accomodationsDiff)

      const minDiff = Math.min(
        detailsDiff < 0 ? Infinity : detailsDiff,
        rsvpDiff < 0 ? Infinity : rsvpDiff,
        scheduleDiff < 0 ? Infinity : scheduleDiff,
        accomodationsDiff < 0 ? Infinity : accomodationsDiff
      );

      // console.log("minDiff", minDiff)

      if (minDiff === detailsDiff) {
        // console.log("details")
        setAnchor("#details");
      } else if (minDiff === rsvpDiff) {
        // console.log("rsvp")
        setAnchor("#rsvp");
      } else if (minDiff === scheduleDiff) {
        // console.log("schedule")
        setAnchor("#schedule");
      } else if (minDiff === accomodationsDiff) {
        // console.log("accomodations")
        setAnchor("#accomodations");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showSecretDinner, setShowSecretDinner] = useState(
    !!localStorage.getItem("showSecretDinner")
  );

  const routes: {
    anchor: string;
    label: string;
    hearts?: {
      version: number;
      $height?: number;
      $top?: number;
      $right?: number;
      $left?: number;
      $bottom?: number;
    };
  }[] = [
    {
      anchor: "#details",
      label: "details",
      hearts: {
        version: 2,
        $height: 25,
        $top: -9,
        $right: 0,
      },
    },
    {
      anchor: "#rsvp",
      label: "rsvp",
      hearts: {
        version: 1,
        $height: 22,
        $top: -2,
        $left: -13,
      },
    },
    {
      anchor: "#schedule",
      label: "schedule",
      hearts: {
        version: 4,
        $height: 14,
        $top: -3,
        $right: 0,
      },
    },
    {
      anchor: "#accomodations",
      label: "accomodations",
      hearts: {
        version: 1,
        $height: 22,
        $top: -2,
        $left: -13,
      },
    },
  ];

  // showSecretDinner &&
  //   routes.push({
  //     anchor: "#welcome-evening",
  //     label: t("pages.secretDinner.path"),
  //     hearts: {
  //       version: 1,
  //       $height: 22,
  //       $top: -2,
  //       $left: -13,
  //     },
  //   });

  // Show welcome-evening permanently if user navigates to it
  // useEffect(() => {
  //   if (anchor === "/welcome-evening") {
  //     localStorage.setItem("showSecretDinner", "true");
  //     setShowSecretDinner(true);
  //   }
  // }, [anchor]);

  const handleClick = () => {
    setOpen(false);
    // window.scrollTo(0, 0);
    // amplitude.track("Click", { button: "Menu", anchor });
  };

  return (
    <MenuContainer open={open}>
      <HeartImg />
      <Hamburger color="inherit" onClick={() => setOpen(!open)}>
        <Buns>
          <Patty open={open} />
          <Patty open={open} />
          <Patty open={open} />
        </Buns>
      </Hamburger>

      <List open={open}>
        {routes.map((route, i) => {
          const selected = anchor === route.anchor;
          return (
            <ListItem key={i} href={route.anchor} onClick={handleClick}>
              <ListType selected={selected}>{route.label}</ListType>
            </ListItem>
          );
        })}
      </List>
    </MenuContainer>
  );
};

export default Menu;
