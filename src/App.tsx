// App.tsx
import Box from "@mui/material/Box";
import RoutePlanner from "./RoutePlanner";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <RoutePlanner />
    </Box>
  );
}

export default App;
