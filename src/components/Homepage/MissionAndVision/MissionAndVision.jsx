import React from "react";
import { Typography } from "@mui/material";
import { Zoom } from "react-awesome-reveal";
import styles from "./MissionAndVision.module.css";

function MissionAndVission() {
  return (
    <div className={`container d-flex gap-3 justify-content-between`}>
      <div>
        <Zoom>
          <div className={`card ${styles.advMVCard}`}>
            <div className="card-body">
              <Typography className="card-title fs-4">
                <strong>Mission</strong>
              </Typography>
              <Typography className="card-text fw-bold">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Typography>
            </div>
          </div>
        </Zoom>
      </div>
      <div>
        <Zoom>
          <div className={`card ${styles.advMVCard}`}>
            <div className="card-body">
              <Typography className="card-title fs-4">
                <strong>Vision</strong>
              </Typography>
              <Typography className="card-text fw-bold">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Typography>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default MissionAndVission;
