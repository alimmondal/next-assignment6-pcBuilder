import {
  ArrowRightOutlined,
  DollarOutlined,
  ProfileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
const MonitorCategory = ({ monitors }) => {
  const { Meta } = Card;
  return (
    <div>
      <h1>Monitor Category</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        {monitors?.map((products) => (
          <Col key={products.id} style={{ margin: "10px 0" }} span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={products?.image_url}
                  width={200}
                  height={250}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={products?.title} />
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
                  {products?.rating}
                </span>
                <span>
                  <DollarOutlined />
                  {products?.price}
                </span>
                <span>
                  <ProfileOutlined />
                  {products?.status}
                </span>
              </p>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Category: {products?.category}
              </p>
              <Link href={`/productDetails/${products?.id}`}>
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
    </div>
  );
};

export default MonitorCategory;
