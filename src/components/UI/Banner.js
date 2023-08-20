import viper from "@/assets/images/banner-images/h2.jpeg";
import perk from "@/assets/images/banner-images/h4.jpeg";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import styles from "../../styles/banner.module.css";

const Banner = () => (
  <Carousel effect="fade" autoplay className={styles.container}>
    {/* slider-1 */}
    <div>
      <Row className={styles.rowContainer}>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1>
            LET&apos;S BUILD
            <br />
            YOUR COMPUTER
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> FEBRUARY 28, 2023
            </span>
            <span>
              <CommentOutlined /> NO COMMENTS
            </span>
            <span>
              <ProfileOutlined /> HOBBY
            </span>
          </p>

          <p>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Buying <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          className={styles.contentStyle}
        >
          <Image src={perk} alt="drawing_image" className={styles.SImage} />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row className={styles.rowContainer}>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1>
            LET&apos;S BUILD
            <br />
            YOUR PC
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> MARCH 30, 2023
            </span>
            <span>
              <CommentOutlined /> 5 COMMENTS
            </span>
            <span>
              <ProfileOutlined /> NATURE
            </span>
          </p>

          <p>
            A spread opened patient and compulsively one placed seagull goodness
            python owing snapped yikes equitable when much the much Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Buying <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          className={styles.contentStyle}
        >
          <Image
            src={viper}
            alt="eagle_image"
            style={{ grayScale: "-1" }}
            className={styles.SImage}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
