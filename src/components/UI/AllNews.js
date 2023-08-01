import {
  ArrowRightOutlined,
  DollarOutlined,
  ProfileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  return (
    <>
      <h1>#FEATURED PRODUCTS</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        {allNews?.map((news) => (
          <Col key={news.id} className="gutter-row" span={4}>
            {/* <Link href={"/"}> */}
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={200}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={news?.title} />
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
                  {news?.rating}
                </span>
                <span>
                  <DollarOutlined />
                  {news?.price}
                </span>
                <span>
                  <ProfileOutlined />
                  {news?.status}
                </span>
              </p>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                {news?.category}
              </p>
              <Link href={`/news/${news?.id}`}>
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
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
