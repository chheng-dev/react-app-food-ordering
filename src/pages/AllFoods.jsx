import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Col, Container, Row } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

 const AllFoods = () => {
  const [searchTtem, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);


  const searchedProducts = products.filter(item => {
    if (searchTtem === "") return item;
    if(item.title.toLocaleLowerCase().includes(searchTtem.toLocaleLowerCase())) return item;
  })

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProducts.slice(visitedPage, visitedPage + productPerPage);

  const pagCount = Math.ceil(searchedProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    onPageActive(selected);
  }


  const onPageActive = (page) => {
    console.log("Active page is:", page + 1); // page is zero-indexed
};

  return (
    <Helmet title='All Foods'>
      <CommandSection title='All Foods' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="search__widget d-flex justify-content-between align-items-center">
                <input type="text" 
                  placeholder="I'm looking for..." 
                  value={searchTtem}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' className="mb-4">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="hight-price">Hight Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {
              displayPage.filter(item => {
                if (searchTtem === "") return item;
                if(item.title.toLocaleLowerCase().includes(searchTtem.toLocaleLowerCase())) return item;
              }).map((item)=>(
                <Col lg="3" md="4" sm='6' xs='6' key={item.id} className="mb-4">
                {""}
                <ProductCard item={item} />
                </Col>
              ))
            }

            <div>
              <ReactPaginate 
                pageCount={pagCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                activeClassName="activePage"
                containerClassName="paginationsButton"
              />
            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
 }

 export default AllFoods;