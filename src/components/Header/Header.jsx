import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import "../../styles/Header.css";

import { useDispatch, useSelector } from "react-redux";

import { cartUiActions } from "../../store/shipping-cart/cartUiSlice";

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef =  useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  }

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between"> 
          <div className="logo">
            <img src={logo} alt="logo"/>
            <h5>Tasty Treat</h5>
          </div>

          {/* ============== menu ============== */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((items, index) => (
                    <NavLink to={items.path} key={index}
                      className={navClass => navClass.isActive ? 'active__menu' : ''}>
                      { items.display }
                    </NavLink>
                  ))
                }
            </div>
          </div>  

          {/* ============== nav right icons ============== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i  className="ri-shopping-basket-line"/>
              <span className="cart__badge">{ totalQuantity }</span>
            </span>

            <span className="user">
              <Link to='/login'>
                <i className="ri-user-line"/>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header;