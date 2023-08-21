import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Divider } from "antd";
import Link from "next/link";
import { BsFillCpuFill, BsFillMouseFill, BsMotherboard } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GiComputerFan, GiProcessor } from "react-icons/gi";
import styles from "../styles/pc-builder.module.css";

const PcBuilder = () => {
  return (
    <div style={{}}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <FiMonitor size={80} />
            <div className={styles.category}>
              <p>Monitor</p>
              <div className={styles.divContainer}></div>
            </div>
          </div>
          <Link href={"/monitor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <BsFillCpuFill size={80} />
            <div className={styles.category}>
              <p>CPU/ Processor</p>
              <div className={styles.divContainer}></div>
            </div>
          </div>
          <Link href={"/processor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <BsMotherboard size={70} />
            <div className={styles.category}>
              <p>Motherboard</p>
              <div className={styles.divContainer}></div>
            </div>
          </div>
          <Link href={"/motherboard"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <GiComputerFan size={80} />
            <div className={styles.category}>
              <p>CPU Cooler</p>
              <div className={styles.divContainer}></div>
            </div>
          </div>
          <Link href={"/processor"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <GiProcessor size={80} />
            <div className={styles.category}>
              <p>Ram</p>
              <div className={styles.divContainer}></div>
            </div>
          </div>
          <Link href={"/ram"}>
            <Button>Choose</Button>
          </Link>
        </div>
        <Divider orientation="left"></Divider>

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <BsFillMouseFill size={80} />
            <div className={styles.category}>
              <p>Gaming Mouse</p>
              <div className={styles.divContainer}></div>
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

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://nextpcbuilder-server-production.up.railway.app/monitor"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      featureProducts: data,
    },
    // revalidate: 5,
  };
};
