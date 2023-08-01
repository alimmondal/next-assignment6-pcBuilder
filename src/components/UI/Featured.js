import monitor from "@/assets/images/banner-images/h4.jpeg";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div>
      <div className="">
        <div className="" style={{ textAlign: "center", margin: "20px 0" }}>
          <h1>Featured Category</h1>
          <h3>Get Your Desired Product from Featured Category!</h3>
        </div>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        <Col style={{ margin: "10px 0" }} span={6}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col rstyle={{ margin: "10px 0" }} span={6}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} span={6}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} className="gutter-row" span={6}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" span={6} style={{ margin: "10px 0" }}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} className="gutter-row" span={6}>
          <Link href="/monitor">
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
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
