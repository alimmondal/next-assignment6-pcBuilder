import styles from "@/styles/Home.module.css";
import {
  DownOutlined,
  FacebookFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  MobileOutlined,
  ProfileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: <Link href="/processor">CPU / Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
      // icon: <SmileOutlined />,
      // disabled: true,
    },
    {
      key: "3",
      label: <Link href="/ram">Ram</Link>,
    },
    {
      key: "4",
      label: <Link href="/cooler">CPU Cooler</Link>,
    },
    {
      key: "5",
      label: <Link href="/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/monitor">Monitor</Link>,
    },
    {
      key: "5",
      label: <Link href="pc-builder">Others</Link>,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              SUN_TECH
            </Link>
          </h1>
        </div>

        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Category
                <DownOutlined style={{ marginRight: "10px" }} />
              </Space>
            </a>
          </Dropdown>
          <Link href="/">
            <items>
              <ProfileOutlined />
              Home
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
          <Link href="/pc-builder">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <Button>
                <MobileOutlined />
                PC Builder
              </Button>
            </items>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          SUN_TECH
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        SUN_TECH ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;
