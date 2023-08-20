import cooler from "@/assets/images/banner-images/cpuCooler.jpg";
import monitor from "@/assets/images/banner-images/fcMonitor6.jpg";
import motherboard from "@/assets/images/banner-images/fcMotherB.png";
import processor from "@/assets/images/banner-images/fcProcessor.jpg";
import ram from "@/assets/images/banner-images/fcRam.png";
import storage from "@/assets/images/banner-images/fcStore.png";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/featuredCategory.module.css";

const FeaturedCategory = () => {
  return (
    <div>
      <div className="">
        <div className={styles.fCH}>
          <h1>Featured Category</h1>
          <h3>Get Your Desired Product from Featured Category!</h3>
        </div>
      </div>
      <Row
        className={styles.fCategory}
        gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}
      >
        <Col
          style={{ margin: "10px 0" }}
          lg={{
            span: 6,
          }}
        >
          <Link href="/monitor">
            <Card
              hoverable
              cover={
                <Image
                  src={monitor}
                  width={200}
                  height={270}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Monitor</h1>
            </Card>
          </Link>
        </Col>
        <Col
          style={{ margin: "10px 0" }}
          lg={{
            span: 6,
          }}
        >
          <Link href="/processor">
            <Card
              hoverable
              cover={
                <Image
                  src={processor}
                  width={200}
                  height={270}
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
        <Col
          style={{ margin: "10px 0" }}
          lg={{
            span: 6,
          }}
        >
          <Link href="/motherboard">
            <Card
              hoverable
              cover={
                <Image
                  src={motherboard}
                  width={200}
                  height={270}
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
        <Col
          style={{ margin: "10px 0" }}
          lg={{
            span: 6,
          }}
        >
          <Link href="/storage">
            <Card
              hoverable
              cover={
                <Image
                  src={storage}
                  width={200}
                  height={270}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>Storage</h1>
            </Card>
          </Link>
        </Col>
        <Col
          lg={{
            span: 6,
          }}
          style={{ margin: "10px 0" }}
        >
          <Link href="/cooler">
            <Card
              hoverable
              cover={
                <Image
                  src={cooler}
                  width={200}
                  height={270}
                  responsive
                  alt="news image"
                />
              }
            >
              <h1 style={{ textAlign: "center", fontSize: "30px" }}>
                CPU cooler
              </h1>
            </Card>
          </Link>
        </Col>
        <Col
          style={{ margin: "10px 0" }}
          lg={{
            span: 6,
          }}
        >
          <Link href="/ram">
            <Card
              hoverable
              cover={
                <Image
                  src={ram}
                  width={200}
                  height={270}
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
