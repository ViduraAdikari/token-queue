import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {amber} from "@mui/material/colors";

type CellLabelProps = {
  text: string | number
  isNew?: boolean
}

const CellLabel: React.FC<CellLabelProps> = (props: CellLabelProps) => {

  const {text, isNew} = props;

  return (
    <Box sx={{
      bgcolor: theme => !isNew ? theme.palette.primary.light : amber[400],
      flexBasis: '50%',
      flexGrow: 3,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
    }}>
      <Typography sx={{
        textTransform: 'uppercase',
        textAlign: "center",
        flex: '1',
        fontSize: {lg: '2.5em', xl: '4em'},
        fontWeight: 700,
        color: '#f1f1f1',
      }}>
        {text}
      </Typography>
    </Box>
  )
};

export default CellLabel;