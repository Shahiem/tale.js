export default interface User {
  'name': string;
  'photo': string;
  'stories': { type: string; date: string; time: string; url: string; }[];
}
