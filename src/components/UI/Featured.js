import monitor from "@/assets/images/banner-images/fcMonitor6.jpg";
import motherboard from "@/assets/images/banner-images/fcMotherB.png";
import power from "@/assets/images/banner-images/fcPower.png";
import processor from "@/assets/images/banner-images/fcProcessor.jpg";
import ram from "@/assets/images/banner-images/fcRam.png";
import storage from "@/assets/images/banner-images/fcStore.png";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = () => {
  return (
    <div>
      <div className="">
        <div className="" style={{ textAlign: "center", margin: "30px 0" }}>
          <h1 style={{ fontSize: "40px" }}>Featured Category</h1>
          <h3>Get Your Desired Product from Featured Category!</h3>
        </div>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        <Col style={{ margin: "10px 0" }} span={4}>
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
        <Col style={{ margin: "10px 0" }} span={4}>
          <Link href="/processor">
            <Card
              hoverable
              cover={
                <Image
                  src={processor}
                  width={200}
                  height={200}
                  responsive
                  alt="processor image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>
                Processor
              </h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} span={4}>
          <Link href="/motherboard">
            <Card
              hoverable
              cover={
                <Image
                  src={motherboard}
                  width={200}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>
                Motherboard
              </h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} span={4}>
          <Link href="/storage">
            <Card
              hoverable
              cover={
                <Image
                  src={storage}
                  width={200}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Storage</h1>
            </Card>
          </Link>
        </Col>
        <Col span={4} style={{ margin: "10px 0" }}>
          <Link href="/power-supply">
            <Card
              hoverable
              cover={
                <Image
                  src={power}
                  width={200}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>
                Power Supply
              </h1>
            </Card>
          </Link>
        </Col>
        <Col style={{ margin: "10px 0" }} span={4}>
          <Link href="/ram">
            <Card
              hoverable
              cover={
                <Image
                  src={ram}
                  width={200}
                  height={250}
                  responsive
                  alt="ram image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Ram</h1>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategory;
