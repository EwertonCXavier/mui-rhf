import { SxProps } from "@mui/material";

export const MainContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
};

export const CardContainer: SxProps = {
  borderRadius: "8px",
  height: "640px",
  width: "80%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#2B2738",
  padding: "2rem",
  gap: "32px",
};

export const StyledImageCard = {
  backgroundColor: "#eee",
  borderRadius: "8px",
  display: "flex",
  flex: 1,
  // width: "50%",
};
