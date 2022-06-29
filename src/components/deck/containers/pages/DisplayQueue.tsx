import React from 'react';
import {useAppSelector} from "../../../../store/hooks/hooks";
import ErrorMessage from "../../elements/error/ErrorMessage";
import AssignedTokens from "../../pallet/queue/AssignedTokens";
import {IService, IToken} from "../../../../types/types";
import CheckAssignedTokens from "../../pallet/queue/CheckAssignedTokens";

const DisplayQueue: React.FC = () => {
  const tokens: IToken[] | null = useAppSelector(state => state.tokenQueue.assignedTokens);
  const services: IService[] | null = useAppSelector(state => state.tokenQueue.services);

  const renderCheckAssignedTokens = () => {
    if (!services) {
      return;
    }

    return services.map((service: IService) => <CheckAssignedTokens key={service.id} serviceID={service.id}/>);
  }

  return (
    <React.Fragment>
      {!tokens && <ErrorMessage message={'Waiting for customers!'}/>}
      {tokens && <AssignedTokens tokens={tokens}/>}

      {renderCheckAssignedTokens()}
    </React.Fragment>
  )
};

export default DisplayQueue;