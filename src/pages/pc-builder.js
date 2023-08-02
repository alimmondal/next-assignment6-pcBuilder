import viper from "@/assets/images/banner-images/h2.jpeg";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Divider } from "antd";
import Image from "next/image";
import Link from "next/link";

const PcBuilder = ({ featureProducts }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          margin: "5% 20%",
          padding: "3% 5%",
          // width: "70%",
        }}
      >
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>CPU Cooler</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>
          <Link href={"/monitor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>CPU/ Processor</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>

          <Link href={"/processor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>Motherboard</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>

          <Link href={"/motherboard"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>CPU Cooler</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>

          <Link href={"/processor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>Storage</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>

          <Link href={"/storage"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
        <div
          className=""
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>CPU Cooler</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>

          <Link href={"/processor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      featureProducts: data,
    },
    revalidate: 5,
  };
};
