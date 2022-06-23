import {IService, IToken} from "../types/types";

export const SAMPLE_PRINT_TOKEN: IToken = {
  serviceID: "2",
  tokenNumber: 208,
  time: new Date()
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

export const SAMPLE_ASSIGNED_TOKENS: IToken[] = [
  {
    serviceID: '3',
    counterID: '7',
    tokenNumber: 75,
    time: new Date(),
  },

  {
    serviceID: '2',
    counterID: '3',
    tokenNumber: 101,
    time: new Date(),
  },
  {
    serviceID: '1',
    counterID: '1',
    tokenNumber: 90,
    time: new Date(),
  },
  {
    serviceID: '1',
    counterID: '2',
    tokenNumber: 91,
    time: new Date(),
  },
  {
    serviceID: '2',
    counterID: '4',
    tokenNumber: 102,
    time: new Date(),
  },
  {
    serviceID: '2',
    counterID: '6',
    tokenNumber: 106,
    time: new Date(),
  },
  {
    serviceID: '2',
    counterID: '5',
    tokenNumber: 103,
    time: new Date(),
  },
];

