export default function formatData(data) {
  const stringPrice = data.short_screenshots[1].id.toString();
  const splittedPrice = stringPrice.split("");
  const totalPrice = splittedPrice.reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  });
  return {
    title: data.name,
    count: 1,
    price: totalPrice,
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
