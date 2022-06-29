import {useEffect, useState} from "react";
import {TOKEN_REQUESTS} from "../../const/values";
import {ICounter} from "../../types/types";
import axios from "axios";

export const useCounter = (isRequested: boolean, counterID: string) => {
  const [remoteCounter, setRemoteCounter] = useState<ICounter | null>(null);

  useEffect(() => {
    if (!isRequested) {
      return;
    }

    axios.get(TOKEN_REQUESTS.counter.replace(/:counter/, counterID)).then(res => {
      const counter: ICounter = res.data.counter;
      setRemoteCounter(counter);
    })
      .catch(err => {
        console.error(err);
      })
  }, [isRequested]);

  return remoteCounter;
}