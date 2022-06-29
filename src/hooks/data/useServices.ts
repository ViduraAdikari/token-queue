import {useEffect, useState} from "react";
import {TOKEN_REQUESTS} from "../../const/values";
import {IService} from "../../types/types";
import axios from "axios";

export const useServices = () => {
  const [remoteServices, setRemoteServices] = useState<IService[] | null>(null);

  useEffect(() => {
    axios.get(TOKEN_REQUESTS.services).then(res => {
      const services: IService[] = res.data.services;
      setRemoteServices(services);
    })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return remoteServices;
}