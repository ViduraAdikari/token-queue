import React from 'react';
import Paper from "@mui/material/Paper";
import {Button, Typography} from "@mui/material";

type ServiceCardProps = {
  icon: React.ReactNode
  title: string
  id: string
  onClick: (id: string) => void
}

const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps) => {

  const {icon, title, id} = props;

  return (
    <Button sx={{p: 0, width: '100%'}} onClick={() => props.onClick(id)}>
      <Paper elevation={3} sx={{
        py: 5,
        bgcolor: '#00b894',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        cursor: 'pointer',
        borderRadius: '10px',
        '& svg': {
          fontSize: '4em'
        }
      }}>
        {icon}
        <Typography component='h3' sx={{
          mt: 4,
          fontSize: '1.5em',
          fontWeight: 600,
        }}>
          {title}
        </Typography>
      </Paper>
    </Button>
  )
};

export default ServiceCard;