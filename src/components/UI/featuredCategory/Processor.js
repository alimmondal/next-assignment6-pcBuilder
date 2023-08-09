import { Button, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProcessorCategory = ({ processor }) => {
  return (
    <div>
      <h1>Processor Category:</h1>
      {processor?.map((product) => (
        <Col key={product.id}>
          <div
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              margin: "3% 10%",
              padding: "2%",
              //   width: "70%",
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
                  src={product.image_url}
                  width={200}
                  height={200}
                  responsive
                  alt="news image"
                />
                {/* <FiMonitor size={80} /> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    alignItems: "start",
                    gap: "0.5em",
                  }}
                >
                  <p>{product.title}</p>
                  <p>Category: {product.category}</p>
                  <p>Rating: {product.rating}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span style={{ padding: "0 5%" }}>
                  Price: $ {product.price}
                </span>
                <Link href={"/monitor"}>
                  <Button>Add</Button>
                </Link>
                <Link href={"/monitor"}>
                  <Button>View details</Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </div>
  );
};

export default ProcessorCategory;
