import {useEffect, useState} from "react";
import axios from "axios";
import {TOKEN_REQUESTS} from "../../const/values";

export const usePostServedToken = (isRequested: boolean, counterID: string, servedTokenNumber: number | null) => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isRequested || !servedTokenNumber) {
      return;
    }

    axios.post(TOKEN_REQUESTS.tokenServed.replace(/:counter/, counterID),
      {token: servedTokenNumber}).then(res => {
      const message: string = res.data;
      setResponseMessage(message);
    }).catch(err => {
      alert(err);
    });
  }, [isRequested]);

  return responseMessage;
}
