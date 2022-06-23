import React from 'react';
import GridRow from "../../cartons/labels/GridRow";
import {IGridRow} from "../../../../types/uiTypes";

type AssignedTokensInServiceProps = {
  rows: IGridRow[]
}

const AssignedTokensInService: React.FC<AssignedTokensInServiceProps> = (props: AssignedTokensInServiceProps) => {

  const {rows} = props;

  const renderRows = () => {
    return rows.map((row: IGridRow) => <GridRow key={row.token} row={row}/>);
  }

  return (
    <React.Fragment>
      {renderRows()}
    </React.Fragment>
  )
};

export default AssignedTokensInService;