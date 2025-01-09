export default function formatData(data) {
  const stringPrice = data.short_screenshots[1].id.toString();
  const splittedPrice = stringPrice.split("");
  const price = splittedPrice.reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  });

  return {
    title: data.name,
    quantity: 1,
    totalPrice: price,
    originalPrice: price,
    id: data.id,
    store: data.store,
    esrbRating: data.esrb_rating,
    rating: data.rating,
    platform: data.parent_platform,
    bgImage: data.background_image,
    screenShots: data.short_screenshots,
    releaseData: data.release,
    genres: data.genres,
  };
}
