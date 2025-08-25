import { GridLoader } from "react-spinners";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import items from "../data.js";

const itemsPerPage = 10;

export default function ProductListMUI() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedModel, setSelectedModel] = useState("watch");
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedModel, currentPage]);

  const filteredItems = items.filter((item) => item.model === selectedModel);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner" />
        <GridLoader size={20} color="#222" />
      </div>
    );
  }

  return (
    <>
      <div className="buttons">
        <button
          onClick={() => {
            setSelectedModel("watch");
            setCurrentPage(1);
          }}
        >
          Satovi
        </button>
        <button
          onClick={() => {
            setSelectedModel("smart-watch");
            setCurrentPage(1);
          }}
        >
          Pametni sat
        </button>
        <button
          onClick={() => {
            setSelectedModel("digital-watch");
            setCurrentPage(1);
          }}
        >
          Digitalni sat
        </button>
      </div>

      <div className="shopSite">
        {currentItems.map((product) => (
          <div
            className="item"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{ cursor: "pointer" }}
          >
            <div className="img">
              <img src={product.image} alt={product.subtitle} />
              <div className="heart">
                <i className="ri-heart-fill"></i>
              </div>
            </div>
            <div className="desc">
              <h3>{product.subtitle}</h3>
              <h5>{product.price} RSD</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Stack spacing={2} sx={{ marginTop: "2rem", alignItems: "center" }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            color="dark"
          />
        </Stack>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <div className="left-side">
              <img src={selectedProduct.image} alt={selectedProduct.subtitle} />
            </div>
            <div className="right-side">
              <h2>{selectedProduct.subtitle}</h2>
              <h4 className="price">{selectedProduct.price},00 RSD</h4>
              <div className="properties">
                <div className="property">
                  <i className="ri-copper-coin-line"></i>
                  <span>
                    Materijal kućišta: <h6>{selectedProduct.caseMaterial}</h6>
                  </span>
                </div>
                <div className="property">
                  <i className="ri-t-shirt-line"></i>
                  <span>
                    Materijal kaiša: <h6>{selectedProduct.bandMaterial}</h6>
                  </span>
                </div>
                <div className="property">
                  <i className="ri-time-line"></i>
                  <span>
                    Mehanizam: <h6>{selectedProduct.movement}</h6>
                  </span>
                </div>
                <div className="property">
                  <i className="ri-donut-chart-fill"></i>
                  <span>
                    Prečnik kućišta: <h6>{selectedProduct.caseDiameter}</h6>
                  </span>
                </div>
                <div className="property">
                  <i className="ri-expand-up-down-line"></i>
                  <span>
                    Debljina kućišta: <h6>{selectedProduct.caseThickness}</h6>
                  </span>
                </div>
                <div className="property">
                  <i className="ri-expand-left-right-fill"></i>
                  <span>
                    Dužina kaiša: <h6>{selectedProduct.bandLength}</h6>
                  </span>
                </div>
              </div>
              <p>{selectedProduct.description}</p>

              <div className="price-buy">
                <a
                  href="https://www.instagram.com/bxd_satovi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-btn"
                >
                  Kupovina
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
