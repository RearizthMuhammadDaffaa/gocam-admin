import { CameraAltOutlined, Person } from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px 20px",
      }}
    >
      <Typography variant="h3" padding={3}>
        Dashboard
      </Typography>
      <Stack sx={{ flexDirection: { md: "row", sm: "column" } }} gap="20px" height="100vh">
        <Link to="/dashboard/listkamera">
          <Paper
            sx={{
              padding: "20px",
            }}
          >
            <CameraAltOutlined
              sx={{
                width: "200px",
                height: "80px",
              }}
            />

            <Typography variant="h6" align="center">
              Kamera
            </Typography>
          </Paper>
        </Link>
        <Link to="/dashboard/UserRental">
          <Paper
            sx={{
              padding: "20px",
            }}
          >
            <Person
              sx={{
                width: "200px",
                height: "80px",
              }}
            />

            <Typography variant="h6" align="center">
              USER RENTAL
            </Typography>
          </Paper>
        </Link>
        <Link to="/dashboard/merk">
          <Paper
            sx={{
              padding: "20px",
            }}
          >
            {/* <Person
              sx={{
                width: "200px",
                height: "80px",
              }}
            /> */}

            <img 
            style={{
              width: "200px",
              height: "80px",
            }}
            src="data:image/png;base64,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"
            alt="" />

            <Typography variant="h6" align="center">
              MERK
            </Typography>
          </Paper>
        </Link>
      </Stack>
    </Container>
  );
};

export default Dashboard;
