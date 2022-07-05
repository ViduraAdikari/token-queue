import {useEffect, useState} from "react";
import {TOKEN_REQUESTS} from "../../const/values";
import {IToken} from "../../types/types";
import axios from "axios";

export const useAssignedTokens = (serviceID: string, isCheckingTokens: boolean) => {
  const [assignedTokens, setAssignedTokens] = useState<IToken[] | null | undefined>(undefined);
  const [isRequested, setIsRequested] = useState(false);

  const checkAssignedTokens = () => {
    if (isCheckingTokens) {
      return;
    }

    setIsRequested(true);

    axios.get(TOKEN_REQUESTS.assignedTokens.replace(/:service/, serviceID)).then(res => {
      const tokens: IToken[] = res.data.tokens;
      setAssignedTokens(tokens);
      setIsRequested(false);
    })
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    //check tokens for services one by one
    const timeout = setTimeout(() => {
      checkAssignedTokens();

      //check every [x] seconds
      interval = setInterval(() => {
        checkAssignedTokens();
      }, 5000);

    }, parseInt(serviceID) * 500);

    return () => {
      clearTimeout(timeout);
      interval && clearInterval(interval);
    }
  }, [serviceID]);

  return {isRequested, checkedServiceID: serviceID, assignedTokens};
}