import {
  ArrowRightOutlined,
  DollarOutlined,
  ProfileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const FeatureProduct = ({ featureProducts }) => {
  const { Meta } = Card;
  return (
    <>
      <div
        // className={styles.FProductHeader}
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        <h1 style={{ fontSize: "40px" }}>FEATURED PRODUCTS</h1>
        <h3 style={{ textAlign: "center" }}>
          Check & Get Your Desired Product!
        </h3>
      </div>

      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        {featureProducts?.map((product) => (
          <Col
            key={product.id}
            style={{ margin: "10px 0" }}
            className="gutter-row"
            lg={{
              span: 6,
            }}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image_url}
                  width={200}
                  height={250}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={product?.title} />
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
                <span>
                  <StarOutlined />
                  {product?.rating}
                </span>
                <span>
                  <DollarOutlined />
                  {product?.price}
                </span>
                <span>
                  <ProfileOutlined />
                  {product?.status}
                </span>
              </p>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                {product?.category}
              </p>
              <Link href={`/product/${product?._id}`}>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0",
                    fontSize: "12px",
                  }}
                >
                  Keep Buying <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeatureProduct;
