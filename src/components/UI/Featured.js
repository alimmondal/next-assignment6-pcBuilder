import monitor from "@/assets/images/banner-images/h4.jpeg";
import {
  ArrowRightOutlined,
  DollarOutlined,
  ProfileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1>Featured Category</h1>
          <h3>Get Your Desired Product from Featured Category!</h3>
        </div>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        <Col className="gutter-row" span={4}>
          {/* <Link href={"/"}> */}
          <Card
            hoverable
            cover={
              <Image
                src={monitor}
                width={200}
                height={200}
                responsive
                alt="news image"
              />
            }
          >
            <h1>Monitor</h1>
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
                rating
              </span>
              <span>
                <DollarOutlined />
                price
              </span>
              <span>
                <ProfileOutlined />
                status
              </span>
            </p>

            <Link href={"/news"}>
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
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
