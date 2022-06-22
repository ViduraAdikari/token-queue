import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupsIcon from '@mui/icons-material/Groups';
import {IService} from "../types/uiTypes";

export type IconTypes = 'document' | 'payment' | 'meet';

type IconMap<T> = {
  [key in IconTypes]: T
}

const serviceIconMap: IconMap<React.ReactNode> = {
  document: <ArticleIcon/>,
  payment: <AccountBalanceWalletIcon/>,
  meet: <GroupsIcon/>
}

export const AVAILABLE_SERVICES: IService[] = [
  {
    id: '1',
    icon: 'document',
    title: 'Document Services'
  },
  {
    id: '2',
    icon: 'payment',
    title: 'Billing / Payments'
  },
  {
    id: '3',
    icon: 'meet',
    title: 'Consultation'
  },
];

export {serviceIconMap};