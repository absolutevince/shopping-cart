export default function formatData(data) {
  return {
    title: data.name,
    id: data.id,
    store: data.store,
    esrbRating: data.esrb_rating,
    ratings: data.ratings,
    platform: data.parent_platform,
    bgImage: data.background_image,
    screenShots: data.short_screenshots,
    releaseData: data.release,
    genres: data.genres,
  };
}
