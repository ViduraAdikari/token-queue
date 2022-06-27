import {ICounter, IService, IToken} from "../types/types";

export const SAMPLE_PRINT_TOKEN: IToken = {
  id: '208',
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
    id: '75',
    serviceID: '3',
    counterID: '7',
    tokenNumber: 75,
    time: new Date(),
  },

  {
    id: '101',
    serviceID: '2',
    counterID: '3',
    tokenNumber: 101,
    time: new Date(),
  },
  {
    id: '90',
    serviceID: '1',
    counterID: '1',
    tokenNumber: 90,
    time: new Date(),
  },
  {
    id: '91',
    serviceID: '1',
    counterID: '2',
    tokenNumber: 91,
    time: new Date(),
  },
  {
    id: '102',
    serviceID: '2',
    counterID: '4',
    tokenNumber: 102,
    time: new Date(),
  },
  {
    id: '106',
    serviceID: '2',
    counterID: '6',
    tokenNumber: 106,
    time: new Date(),
  },
  {
    id: '103',
    serviceID: '2',
    counterID: '5',
    tokenNumber: 103,
    time: new Date(),
  },
];

export const SAMPLE_COUNTERS: ICounter[] = [
  {
    id: '1',
    serviceID: '1',
    servingToken: null,
    isServing: true,
  },
  {
    id: '2',
    serviceID: '1',
    servingToken: null,
    isServing: true,
  },
  {
    id: '3',
    serviceID: '2',
    servingToken: null,
    isServing: true,
  },
  {
    id: '4',
    serviceID: '2',
    servingToken: null,
    isServing: true,
  },
  {
    id: '5',
    serviceID: '2',
    servingToken: null,
    isServing: true,
  },
  {
    id: '6',
    serviceID: '2',
    servingToken: null,
    isServing: true,
  },
  {
    id: '7',
    serviceID: '3',
    servingToken: null,
    isServing: true,
  },

];












