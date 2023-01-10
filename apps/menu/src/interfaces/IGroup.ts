import { Record } from "pocketbase";
import IDish from "./IDish";

interface ICategory extends Record {
  name: string;
}

export default ICategory;
