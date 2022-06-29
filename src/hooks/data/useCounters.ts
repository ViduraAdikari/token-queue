import {useEffect, useState} from "react";
import {TOKEN_REQUESTS} from "../../const/values";
import {ICounter} from "../../types/types";
import axios from "axios";

export const useCounters = () => {
  const [remoteCounters, setRemoteCounters] = useState<ICounter[] | null>(null);

  useEffect(() => {
    axios.get(TOKEN_REQUESTS.counters).then(res => {
      const counters: ICounter[] = res.data.counters;
      setRemoteCounters(counters);
    })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return remoteCounters;
}