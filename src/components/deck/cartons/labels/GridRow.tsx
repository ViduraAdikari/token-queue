import React, {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import CellLabel from "../../elements/labels/CellLabel";
import {addLeadingZeros} from "../../../../util/util";
import {TOKEN_DISPLAY_LENGTH} from "../../../../const/values";
import {IGridRow} from "../../../../types/uiTypes";

export type GridRowProps = {
  row: IGridRow
}

const GridRow: React.FC<GridRowProps> = (props: GridRowProps) => {

  const {row} = props;

  const [isNewAssign, setIsNewAssign] = useState(row.isNew);

  useEffect(() => {
    setIsNewAssign(row.isNew);
  }, [row]);

  useEffect(() => {
    if (!isNewAssign) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsNewAssign(false);
      clearTimeout(timeout);
    }, 2000);
  }, [isNewAssign]);

  const tokenFormatted: string = addLeadingZeros(row.token, TOKEN_DISPLAY_LENGTH);

  return (
    <Stack direction="row" spacing={1} sx={{
      flexGrow: 1,
      flexBasis: 1,
    }}>
      <CellLabel text={tokenFormatted} isNew={isNewAssign}/>
      <CellLabel text={row.counter} isNew={isNewAssign}/>
    </Stack>
  )
};

export default GridRow;