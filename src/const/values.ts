const SERVER_URL = process.env.REACT_APP_API_URI || 'http://localhost:4300';

export const BackgroundColors = {
  MintLeaf: '#00b894',
  BrightYellow: '#fdcb6e',
  RobinsEggBlue: '#00cec9',
  ExodusFruit: '#6c5ce7',
  SizzlingRed: '#f53b57',
  YueGuangLanBlue: '#1e3799',
  ReefEncounter: '#079992',
  IceLandPoppy: '#fa983a',
  Dupain: '#60a3bc',
  VeryBerry: '#B53471',
  TurkishAqua: '#006266',
  RadiantYellow: '#F79F1F',
}

export const DRAWER_WIDTH = 240;

//if 4 leading zeros will be added to make the display look four digits
export const TOKEN_DISPLAY_LENGTH = 4;

export const TOKEN_CONDITIONS: string = `You have to obtain a new token if you were not present at the counter when 
it was displayed.`;

export const ERROR_UNABLE_TO_FIND_SERVICE = 'unable to find the service';

export const TOKEN_REQUESTS = {
  services: SERVER_URL + '/services',
  counters: SERVER_URL + '/counters',
  counter: SERVER_URL + '/:counter',
  requestToken: SERVER_URL + '/token/:service',
  assignedTokens: SERVER_URL + '/tokens/:service',
  tokenServed: SERVER_URL + '/:counter'
}