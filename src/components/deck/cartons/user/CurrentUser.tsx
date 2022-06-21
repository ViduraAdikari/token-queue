import React from 'react';
import {useAppSelector} from "../../../../store/hooks/hooks";
import {IGuest} from "../../../../store/types/tokenQueueReducerTypes";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "../../elements/avatars/Avatar";
import NameLabel from "../../elements/labels/NameLabel";

const CurrentUser: React.FC = () => {
  const guest: IGuest | null = useAppSelector(state => state.tokenQueue.guest);

  if (!guest) {
    return <React.Fragment/>;
  }

  return (
    <Stack sx={{my: 3}} spacing={1}>
      <Typography variant="overline">Current user (you):</Typography>

      <Stack direction="row" spacing={2}>
        {guest.avatar && <Avatar avatarIcon={guest.avatar}/>}
        <NameLabel text={guest.phone}/>
      </Stack>

    </Stack>
  )
};

export default CurrentUser;