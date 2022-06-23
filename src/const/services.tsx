import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupsIcon from '@mui/icons-material/Groups';

export type IconTypes = 'document' | 'payment' | 'meet';

type IconMap<T> = {
  [key in IconTypes]: T
}

const serviceIconMap: IconMap<React.ReactNode> = {
  document: <ArticleIcon/>,
  payment: <AccountBalanceWalletIcon/>,
  meet: <GroupsIcon/>
}

export {serviceIconMap};