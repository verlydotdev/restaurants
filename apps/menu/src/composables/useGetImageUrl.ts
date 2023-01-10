import IDish from "../interfaces/IDish";

export function useGetImageUrl(dish: IDish) {
  const config = useRuntimeConfig();
  const baseUrl = `${config.public.pocketbase.url}/api/files`;

  return `${baseUrl}/${dish.collectionId}/${dish.id}/${dish.image}`;
}
