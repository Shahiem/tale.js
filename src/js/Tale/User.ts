export default interface User {
  id?: number;
  name: string;
  photo: string;
  stories: { type: string; date: string; time: string; url: string; }[];
}
