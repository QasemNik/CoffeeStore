import "@/styles/Product.module.css";

import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";

const Product = ({ product, comments }) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params: id } = context;

  const productResponse = await fetch(
    `http://localhost:4000/menu/${id}`
  );
  const productData = await productResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const comments = await commentsResponse.json();

  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

export default Product;
