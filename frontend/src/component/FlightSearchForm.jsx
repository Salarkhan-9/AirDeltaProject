import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./MyCSS.css";

const FlightSearchForm = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searchedDetails, setSearchedDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - perform search, API call, etc.
    const details = {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
    };
    setSearchedDetails(details);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="flight-search-form">
        <div className="row g-3 align-items-center">
          <div className="col">
            <Form.Label htmlFor="departureCity">Departure City</Form.Label>
            <Form.Select
              id="departureCity"
              aria-label="Departure City"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              <option value="">Select Departure City</option>
              <option value="Dubai">Dubai</option>
              <option value="London">London</option>
              <option value="Mecca">Mecca</option>
              <option value="Karachi">Karachi</option>
              <option value="Gwader">Gwader</option>
              <option value="Skardu">Skardu</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Peshawer">Peshawer</option>

              <option value="Medina">Medina</option>
              <option value="Gilgit">Gilgit</option>
              <option value="Doha">London</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Baku">Baku</option>
            </Form.Select>
          </div>
          <div className="col">
            <Form.Label htmlFor="arrivalCity">Arrival City</Form.Label>
            <Form.Select
              id="arrivalCity"
              aria-label="Arrival City"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            >
              <option value="">Select Arrival City</option>
              <option value="Dubai">Dubai</option>
              <option value="London">London</option>
              <option value="Mecca">Mecca</option>
              <option value="Karachi">Karachi</option>
              <option value="Gwader">Gwader</option>
              <option value="Skardu">Skardu</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Peshawer">Peshawer</option>

              <option value="Medina">Medina</option>
              <option value="Gilgit">Gilgit</option>
              <option value="Doha">London</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Baku">Baku</option>
            </Form.Select>
          </div>
          <div className="col">
            <Form.Label htmlFor="departureDate">Departure Date</Form.Label>
            <Form.Control
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div className="col">
            <Form.Label htmlFor="returnDate">Return Date</Form.Label>
            <Form.Control
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <Button variant="primary" type="submit">
              Search Flights
            </Button>
          </div>
        </div>
      </Form>

      {searchedDetails && (
        <Card className="search-details">
          <Card.Body>
            <Card.Title>Searched Details</Card.Title>
            <Card.Text>
              <p>Departure City: {searchedDetails.departureCity}</p>
              <p>Arrival City: {searchedDetails.arrivalCity}</p>
              <p>Departure Date: {searchedDetails.departureDate}</p>
              <p>Return Date: {searchedDetails.returnDate}</p>
            </Card.Text>
            <Alert variant="success">Flights are available!</Alert>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FlightSearchForm;
