import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Divider } from "antd";
import Link from "next/link";
import { BsFillCpuFill, BsFillMouseFill, BsMotherboard } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GiComputerFan, GiProcessor } from "react-icons/gi";

const PcBuilder = () => {
  return (
    <div style={{}}>
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
            {/* <Image
              src={viper}
              width={100}
              height={100}
              responsive
              alt="news image"
            /> */}
            <FiMonitor size={80} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>Monitor</p>
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
            <BsFillCpuFill size={80} />
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
            <BsMotherboard size={70} />
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
            <GiComputerFan size={80} />
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
            <GiProcessor size={80} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>Ram</p>
              <div
                style={{
                  height: "17px",
                  background: "lightgray",
                  width: "15em",
                }}
              ></div>
            </div>
          </div>
          <Link href={"/ram"}>
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
            <BsFillMouseFill size={80} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
                gap: "0.5em",
              }}
            >
              <p>Gaming Mouse</p>
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
