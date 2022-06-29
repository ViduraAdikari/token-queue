import {useEffect, useState} from "react";
import {IToken} from "../../types/types";
import axios from "axios";
import {TOKEN_REQUESTS} from "../../const/values";
import {IGuest} from "../../store/types/tokenQueueReducerTypes";

export const usePostNewTokenRequest = (isRequested: boolean, serviceID: string, user: IGuest):
  [boolean, IToken | null] => {
  const [isRequestPosted, setIsRequestPosted] = useState(false);
  const [issuedToken, setIssuedToken] = useState<IToken | null>(null);

  useEffect(() => {
    setIsRequestPosted(false);

    if (isRequestPosted || !isRequested) {
      return;
    }

    axios.post(TOKEN_REQUESTS.requestToken.replace(/:service/, serviceID),
      {time: new Date().getTime(), user: user}).then(res => {
      const newToken: IToken = res.data.token;
      setIssuedToken(newToken);
      setIsRequestPosted(true);
    }).catch(err => {
      alert(err);
    });
  }, [isRequested]);

  return [isRequestPosted, issuedToken];
}
