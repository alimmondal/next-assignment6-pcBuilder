import RootLayout from "@/components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  // const { news} = useGetSingleNewsQuery()
  // const { Meta } = Card;
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Image
            src={product?.image_url}
            width={500}
            height={500}
            responsive
            alt="news image"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <h1 style={{ fontSize: "25px" }}>{product?.title}</h1>
          <span>
            <ProfileOutlined />
            {product?.author}
          </span>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "100%",
            }}
          ></div>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0",
              fontSize: "12px",
            }}
          >
            <span style={{ fontSize: "20px" }}>
              <CalendarOutlined />
              {product?.price}
            </span>
            <span style={{ fontSize: "20px" }}>
              <CommentOutlined />
              {product?.status}
            </span>
            <span style={{ fontSize: "20px" }}>
              <ProfileOutlined />
              {product?.category}
            </span>
          </p>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            <h3>Key Features:</h3>
            <ul className="">
              {product?.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <h3>Reviews: {product?.reviews}</h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/featured");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/featured/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
