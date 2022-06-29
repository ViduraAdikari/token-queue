import React, {useRef} from 'react';
import {IToken} from "../../../../types/types";
import {AssignedTokensGroup, IGridRow} from "../../../../types/uiTypes";
import {groupByServiceID} from "../../../../util/util";
import AssignedTokensInService from "./AssignedTokensInService";
import Stack from "@mui/material/Stack";
import GridHeading from "../../cartons/labels/GridHeading";

type AssignedTokensProps = {
  tokens: IToken[]
}

//sort token numbers desc
const sortByTokenNum = (gridRowA: IGridRow, gridRowB: IGridRow) => {
  return gridRowA.token < gridRowB.token ? 1 : -1;
}

const AssignedTokens: React.FC<AssignedTokensProps> = (props: AssignedTokensProps) => {

  const {tokens} = props;

  const tokenNumbers: number[] = tokens.map((token: IToken) => token.tokenNumber);
  const previousTokens = useRef<number[]>(tokenNumbers);

  const groupedTokensByService: AssignedTokensGroup = groupByServiceID(tokens);

  const getRowsInGroup = (tokens: IToken[]): IGridRow[] => {
    return tokens.map((token: IToken) => {
      const row: IGridRow = {token: token.tokenNumber, counter: token.counterID || '',
      isNew: previousTokens.current.indexOf(token.tokenNumber) < 0 ? true : undefined};
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

    previousTokens.current = tokens.map((token: IToken) => token.tokenNumber);

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

export default AssignedTokens;