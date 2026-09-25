import { products as fallbackProducts } from "@/lib/placeholder-data";

const projectId = "wpunbou3";
const dataset = "product";
const apiVersion = "2026-09-25";

const productsQuery = `*[
  _type == "product" &&
  defined(slug.current) &&
  status != "hidden"
] | order(displayOrder asc, _createdAt desc) {
  _id,
  "slug": slug.current,
  "name": title,
  price,
  description,
  "category": category->slug.current,
  "categoryLabel": category->title,
  "image": images[0].asset->url,
  "imageAlt": images[0].alt,
  isFeatured,
  isNewArrival,
  status
}`;

function normalizeCategory(category) {
  if (category === "kids-jewellery") return "kids";
  return category;
}

function formatPrice(price) {
  if (typeof price !== "number") return price;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function normalizeSanityProduct(product) {
  return {
    ...product,
    category: normalizeCategory(product.category),
    price: formatPrice(product.price),
    image: product.image || "/images/necklace_category.png",
  };
}

export async function getProducts() {
  try {
    const url = new URL(
      `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`,
    );
    url.searchParams.set("query", productsQuery);

    const response = await fetch(url, {
      next: { revalidate: 60, tags: ["products"] },
    });

    if (!response.ok) throw new Error(`Sanity returned ${response.status}`);

    const payload = await response.json();
    const sanityProducts = Array.isArray(payload.result)
      ? payload.result.map(normalizeSanityProduct)
      : [];

    const productsBySlug = new Map(
      fallbackProducts.map((product) => [product.slug, product]),
    );

    sanityProducts.forEach((product) => productsBySlug.set(product.slug, product));
    return Array.from(productsBySlug.values());
  } catch (error) {
    console.error("Unable to load Sanity products. Using the local catalogue.", error);
    return fallbackProducts;
  }
}

