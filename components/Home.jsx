import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import useCounter from "../hooks/useCounter";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 600);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Debounced search value:", debouncedSearch);
      // yahan API call hoti
    }
  }, [debouncedSearch]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: 400,
        }}
      >
        {/* Counter Section */}
        <Typography variant="h5" textAlign="center" mb={2}>
          Counter App
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          textAlign="center"
          mb={3}
        >
          {count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Button
            variant="contained"
            color="success"
            onClick={increment}
            startIcon={<AddIcon />}
          >
            Inc
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={decrement}
            startIcon={<RemoveIcon />}
          >
            Dec
          </Button>

          <Button
            variant="outlined"
            onClick={reset}
            startIcon={<RestartAltIcon />}
          >
            Reset
          </Button>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Search Section */}
        <Typography variant="h6" mb={1}>
          Search (Debounced)
        </Typography>

        <TextField
          fullWidth
          label="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Typography mt={2}>
          Typing: <b>{search}</b>
        </Typography>

        <Typography mt={1} color="secondary">
          Debounced: <b>{debouncedSearch}</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
