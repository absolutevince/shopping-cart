export default function formatDataToCard(data) {
  return {
    title: data.name,
    id: data.id,
    store: data.store,
    esbRating: data.esb_rating,
    ratings: data.ratings,
    platform: data.parent_platform,
    bgImage: data.background_image,
    screenShots: data.short_screenshots,
  };
}
