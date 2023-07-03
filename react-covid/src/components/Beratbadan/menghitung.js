import React, { useState } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import "./BMICalculator.css";

function BMICalculator() {
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate BMI
    const tinggiMeter = tinggi / 100;
    const bmiResult = berat / (tinggiMeter * tinggiMeter);

    // Determine BMI status
    let statusResult;
    if (bmiResult < 18.5) {
      statusResult = "Kurus Banget";
    } else if (bmiResult < 24.9) {
      statusResult = "Ideal";
    } else if (bmiResult < 29.9) {
      statusResult = "kelebihan";
    } else {
      statusResult = "Overdosis";
    }

    // Update state with BMI result and status
    setBMI(bmiResult.toFixed(2));
    setStatus(statusResult);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="card-title">
            Menghitung Berat badan kamu dulu yuk
          </Card.Title>
          <Form onSubmit={handleSubmit} className="form">
            <Form.Group as={Row} controlId="name">
              <Form.Label column sm={4} className="form-tabel">
                Nama Lengkap :
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={4} className="form-tabel">
                Jenis Kelamin :
              </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="radio"
                  label="Laki-Laki"
                  name="gender"
                  value="laki-laki"
                  checked={gender === "laki-laki"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Perempuan"
                  name="gender"
                  value="perempuan"
                  checked={gender === "perempuan"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="berat">
              <Form.Label column sm={4} className="form-tabel">
                Berat Badan :
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  value={berat}
                  onChange={(e) => setBerat(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="tinggi">
              <Form.Label column sm={4} className="form-tabel">
                Tinggi Badan :
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  value={tinggi}
                  onChange={(e) => setTinggi(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 4 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>

          {bmi && (
            <div className="result">
              <h4>Hasil Perhitungan BMI</h4>
              <p>Nama Lengkap: {nama}</p>
              <p>Jenis Kelamin: {gender}</p>
              <p>Berat Badan: {berat} KG</p>
              <p>Tinggi Badan: {tinggi} CM</p>
              <p>BMI: {bmi}</p>
              <p>Status: {status}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default BMICalculator;
