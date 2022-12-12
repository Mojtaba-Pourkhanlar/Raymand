import { Box, Typography, useTheme } from "@mui/material";

export const CustomBox = ({ name, title }) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box display="flex" alignItems="center" my="20px">
      <Typography variant="h5" color={colors.grey.main}>
        {name}{" "}
      </Typography>
      <Typography variant="h4" mx="15px">
        {" "}
        {title}
      </Typography>
    </Box>
  );
};
