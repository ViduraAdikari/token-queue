import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type GridHeadingLabelProps = {
  text: string
}

const GridHeadingLabel: React.FC<GridHeadingLabelProps> = (props: GridHeadingLabelProps) => {

  const {text} = props;

  return (
    <Box sx={{
      bgcolor: theme => theme.palette.secondary.dark,
      flexBasis: 1,
      flexGrow: 1,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography sx={{
        textTransform: 'uppercase',
        textAlign: "center",
        fontSize: {lg: '1.5em', xl: '2em'},
        color: '#f1f1f1',
      }}>
        {text}
      </Typography>
    </Box>

  )
};

export default GridHeadingLabel;