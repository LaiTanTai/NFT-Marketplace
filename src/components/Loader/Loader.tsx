import React, { CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#8F23C2",
    width: `100px`, // Đặt chiều rộng mới
    height: `100px`, // Đặt chiều cao mới (nếu muốn có kích thước khác nhau)
};
  
const Loader: React.FC = () => {
    return (
        <div className="sweet-loading">
          <RingLoader
                color={"#8F23C2"} // Màu sắc
                loading={true} // Trạng thái loading
                size={100}
                cssOverride={override}
            />
        </div>
    )
}
export default Loader;