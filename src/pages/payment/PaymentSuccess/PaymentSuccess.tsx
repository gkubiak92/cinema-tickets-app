import React from "react";
import "./styles.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { resetReservationData } from "redux/reservation/actions";
import { IMappedDispatch } from "./typpes";
import { useHistory } from "react-router-dom";

const PaymentSuccess = ({ resetReservationData }: IMappedDispatch) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
    resetReservationData();
  };
  return (
    <div className="payment-success-container">
      <FontAwesomeIcon icon={faCheckCircle} size="4x" />
      <h1>Successful payment</h1>
      <CustomButton type="button" block onClick={handleClick}>
        Go to home
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  resetReservationData,
};

export default connect(null, mapDispatchToProps)(PaymentSuccess);
