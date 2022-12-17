import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../Components/Message";
import { addToCart, removeFromCart } from "../Action/cartAction";

function CartScreen({ match, location, history }) {
  const ProductId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //   console.log(qty);
  const dispatch = useDispatch();
  useEffect(() => {
    if (ProductId) {
      dispatch(addToCart(ProductId, qty));
    }
  }, [dispatch, ProductId, qty]);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const removeFromCarthandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  console.log(cart, "cart");
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h3>Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <Message>
              your Cart is Empty<Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.image} fluid rounded />
                    </Col>
                    <Col md={3} className="flex items-center">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2} className="flex items-center">
                      ${item.price}
                    </Col>
                    <Col md={2} className="flex items-center">
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) => {
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          );
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2} className="flex items-center">
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCarthandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className="my-5">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>
                  Subtotal(
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  )items
                </h4>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartScreen;
