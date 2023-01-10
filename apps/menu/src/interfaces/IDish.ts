import IPocketbaseItem from "./IPocketbaseItem";

interface IDish extends IPocketbaseItem {
  id: string;
  name: string;
  image: string;
  description: string;
  isAvailable: boolean;
  categories: string[];
}

export default IDish;
