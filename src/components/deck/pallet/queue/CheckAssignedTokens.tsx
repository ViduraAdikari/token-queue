import React, {useEffect} from 'react';
import {useAssignedTokens} from "../../../../hooks/data/useAssignedTokens";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {setAssignedTokens, setIsCheckingAssignedTokens} from "../../../../store/reducers/tokenQueueReducer";

type CheckAssignedTokensProps = {
  serviceID: string
}

const CheckAssignedTokens: React.FC<CheckAssignedTokensProps> = (props: CheckAssignedTokensProps) => {
  const {serviceID} = props;

  const isCheckingTokens: boolean = useAppSelector(state => state.tokenQueue.isCheckingTokens);

  const dispatch = useAppDispatch();

  const {isRequested, checkedServiceID, assignedTokens} = useAssignedTokens(serviceID, isCheckingTokens);

  useEffect(() => {
    if (!isRequested) {
      return;
    }

    dispatch(setIsCheckingAssignedTokens({isRequested: true}));
  }, [isRequested]);

  useEffect(() => {
    if (assignedTokens === undefined) {
      return;
    }

    dispatch(setAssignedTokens({serviceID: serviceID, tokens: assignedTokens}));
  }, [assignedTokens]);

  return null;
};

export default CheckAssignedTokens;