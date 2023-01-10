import { Record } from "pocketbase";

interface IDish extends Record {
  id: string;
  name: string;
  image: string;
  description: string;
  isAvailable: boolean;
  categories: string[];
}

export default IDish;
