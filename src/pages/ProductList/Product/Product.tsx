import React from "react";
import { Link } from "react-router-dom";
import { path } from "src/constants/path";

const Product = () => {
  return (
    <Link to={path.home}>
      <div className="overflow-hidden rounded-sm bg-white shadow transition-all duration-200 hover:translate-y-[-0.09rem] hover:shadow-md">
        <div className="relative w-full pt-[100%]">
          <img
            src="https://cf.shopee.vn/file/ea0f159f3f4c713abcf56b5ba73840b9_tn"
            alt=""
            className="absolute top-0 left-0 h-full w-full bg-white object-cover"
          />
        </div>
        <div className="overflow-hidden p-2">
          <div className="min-h-[2rem] text-xs line-clamp-2">
            [HÀNG HIỆU] Thắt Lưng Da Nam Khóa Tự Động Cao Cấp Dây Nịt Nam Mặt Xoay Chính Hãng , Phong Cách Hàn Quốc -
            v77men
          </div>
          <div className="mt-3 flex items-center gap-x-1">
            <div className="max-w-[50%] truncate text-gray-500 line-through">
              <span className="text-xs">₫</span>
              <span>5.000</span>
            </div>
            <div className="truncate text-primary">
              <span className="text-xs">₫</span>
              <span>2.000</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end gap-x-2">
            <div className="flex items-center">
              <div className="relative">
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x={0}
                    y={0}
                    className="h-3 w-3 fill-yellow-300 text-yellow-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="h-3 w-3 fill-current text-gray-300"
                >
                  <polygon
                    points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-x-1 text-sm">
              <span>5.66k</span>
              <span>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;