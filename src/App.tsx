import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
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
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            m: 1,
            borderRadius: 1,
            bgcolor: "background.paper",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Input"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ m: 1, width: "50ch" }}
          />
          <Button variant="contained" onClick={handleSubmit} sx={{ m: 1 }}>
            Submit
          </Button>
          {submittedText && (
            <Typography variant="h6" component="div" sx={{ color: "black" }}>
              Submitted Text: {submittedText}
            </Typography>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
