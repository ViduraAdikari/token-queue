import {ICounter, IService} from "../types/types";

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












