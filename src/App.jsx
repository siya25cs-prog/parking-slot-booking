import { useState } from "react";
import "./App.css";

function App() {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const slots = [
    "P-01",
    "P-02",
    "P-03",
    "P-04",
    "P-05",
    "P-06",
    "P-07",
    "P-08",
    "P-09",
    "P-10"
  ];

  function selectSlot(slot) {
    if (!bookedSlots.includes(slot)) {
      setSelectedSlot(slot);
      setMessage("");
    }
  }

  function bookSlot() {
    if (selectedSlot === "") {
      setMessage("Please select a parking slot.");
      return;
    }

    if (name === "" || vehicle === "" || date === "" || time === "") {
      setMessage("Please fill all the details.");
      return;
    }

    setBookedSlots([...bookedSlots, selectedSlot]);

    setMessage(
      "Booking confirmed for " +
        name +
        "! Slot " +
        selectedSlot +
        " is booked."
    );

    setSelectedSlot("");
    setName("");
    setVehicle("");
    setDate("");
    setTime("");
  }

  return (
    <div className="app">

      <header>
        <div className="brand">
          <div className="brand-icon">🚗</div>
          <div>
            <h1>ParkEase</h1>
            <p>Smart Parking Management</p>
          </div>
        </div>

        <div className="status">
          🟢 Parking Available
        </div>
      </header>

      <main>

        <section className="welcome">
          <div>
            <p className="label">WELCOME TO PARKEASE</p>
            <h2>Find your perfect parking spot.</h2>
            <p>
              Select an available parking slot and reserve it easily.
            </p>
          </div>

          <div className="big-car">🚘</div>
        </section>

        <section className="summary">

          <div className="card">
            <div className="card-icon">🅿️</div>
            <div>
              <p>Total Slots</p>
              <h3>{slots.length}</h3>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">✓</div>
            <div>
              <p>Available</p>
              <h3>{slots.length - bookedSlots.length}</h3>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">🔒</div>
            <div>
              <p>Booked</p>
              <h3>{bookedSlots.length}</h3>
            </div>
          </div>

        </section>

        <section className="parking">

          <p className="label">PARKING AREA</p>
          <h2>Select a Parking Slot</h2>

          <div className="legend">
            <span>🟢 Available</span>
            <span>🔵 Selected</span>
            <span>🔴 Booked</span>
          </div>

          <div className="slots">

            {slots.map((slot) => {

              const booked = bookedSlots.includes(slot);
              const selected = selectedSlot === slot;

              return (
                <button
                  key={slot}
                  type="button"
                  className={
                    "slot " +
                    (selected ? "selected " : "") +
                    (booked ? "booked" : "")
                  }
                  disabled={booked}
                  onClick={() => selectSlot(slot)}
                >
                  <span>🚗</span>
                  <strong>{slot}</strong>

                  <small>
                    {booked
                      ? "Booked"
                      : selected
                      ? "Selected"
                      : "Available"}
                  </small>
                </button>
              );
            })}

          </div>

        </section>

        <section className="booking">

          <div className="booking-info">

            <p className="label">RESERVATION</p>

            <h2>Booking Details</h2>

            <p>
              Enter your details below to reserve your selected
              parking slot.
            </p>

            <div className="selected-box">
              <span>Selected Parking Slot</span>
              <strong>
                {selectedSlot || "No slot selected"}
              </strong>
            </div>

          </div>

          <div className="form">

            <div className="field">
              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Vehicle Number</label>

              <input
                type="text"
                placeholder="e.g. MH 46 AB 1234"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              />
            </div>

            <div className="two-fields">

              <div className="field">
                <label>Date</label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Time</label>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

            </div>

            {message && (
              <div className="message">
                {message}
              </div>
            )}

            <button
              type="button"
              className="confirm"
              onClick={bookSlot}
            >
              Confirm Booking →
            </button>

          </div>

        </section>

      </main>

      <footer>
        © 2026 ParkEase • Smart Parking Slot Booking System
      </footer>

    </div>
  );
}

export default App;