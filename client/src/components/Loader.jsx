import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        flexDirection: "column",
      }}
    >
      <CircularProgress />
      <Typography fontSize="24px" my={3}>
        Please wait we are preparing a customized SOP for you.
      </Typography>
    </Box>
  );
}

export default Loader;
