import React from 'react';
import GridHeading from "../../cartons/labels/GridHeading";
import Stack from "@mui/material/Stack";
import {IToken} from "../../../../types/types";
import {SAMPLE_ASSIGNED_TOKENS} from "../../../../const/sampleData";
import AssignedTokensInService from "../../pallet/queue/AssignedTokensInService";
import {AssignedTokensGroup, IGridRow} from "../../../../types/uiTypes";
import {groupByServiceID} from "../../../../util/util";

//sort token numbers desc
const sortByTokenNum = (gridRowA: IGridRow, gridRowB: IGridRow) => {
  return gridRowA.token < gridRowB.token ? 1 : -1;
}

const DisplayQueue: React.FC = () => {

  const groupedTokensByService: AssignedTokensGroup = groupByServiceID(SAMPLE_ASSIGNED_TOKENS);

  const getRowsInGroup = (tokens: IToken[]): IGridRow[] => {
    return tokens.map((token: IToken) => {
      const row: IGridRow = {token: token.tokenNumber, counter: token.counterID || ''};
      return row;
    }).sort(sortByTokenNum);
  }

  // merge all group rows
  // groups are automatically sorted in the object because serviceIDs are "1", "2", "3"..
  const renderGroups = () => {
    let allRows: IGridRow[] = [];
    Object.entries(groupedTokensByService).map(([key, tokens]) => {
      allRows = allRows.concat(getRowsInGroup(tokens))
    });

    //for test highlight new assign
    allRows[0].isNew = true;

    return <AssignedTokensInService rows={allRows}/>;
  }

  return (
    <Stack spacing={1} sx={{
      pt: 3, pb: 1,
      mt: 1, px: 1,
      height: 'calc(100vh - 90px)',
    }}>
      <GridHeading/>

      <Stack spacing={1} sx={{flex: '1'}}>
        {renderGroups()}
      </Stack>
    </Stack>
  )
};

export default DisplayQueue;