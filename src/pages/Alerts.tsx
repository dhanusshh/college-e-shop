import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/axios";

const Alerts = () => {
  const [alerts, setAlerts] =
    useState<any[]>([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {

const response =
  await API.get("/alerts", {
  });

setAlerts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const markAsRead = async (
    id: string
  ) => {
    try {
      await API.put(
        `/alerts/${id}/read`
      );

      fetchAlerts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAlert = async (
    id: string
  ) => {
    try {
      await API.delete(
        `/alerts/${id}`
      );

      fetchAlerts();
    } catch (error) {
      console.log(error);
    }
  };

  const getAlertClass = (
    type: string
  ) => {
    switch (type) {
      case "sale":
        return "alert-success";

      case "purchase":
        return "alert-primary";

      case "trade":
        return "alert-warning";

      case "message":
        return "alert-info";

      default:
        return "alert-secondary";
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4">
          Alerts
        </h2>

        {alerts.length === 0 ? (
          <div className="card shadow p-4 text-center">

            <h4>
              No Alerts Available
            </h4>

            <p className="text-muted">
              You're all caught up.
            </p>

          </div>
        ) : (
          alerts.map(
            (alert: any) => (
              <div
                key={alert._id}
                className={`alert ${getAlertClass(
                  alert.type
                )}`}
              >
                <div className="d-flex justify-content-between align-items-center">

                  <div>

                    <strong>
                      {alert.message}
                    </strong>

                    <br />

                    <small>
                      Type:{" "}
                      {alert.type}
                    </small>

                    {!alert.isRead && (
                      <span className="badge bg-danger ms-2">
                        New
                      </span>
                    )}

                  </div>

                  <div className="d-flex gap-2">

                    {!alert.isRead && (
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() =>
                          markAsRead(
                            alert._id
                          )
                        }
                      >
                        Mark Read
                      </button>
                    )}

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        deleteAlert(
                          alert._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            )
          )
        )}

      </div>

      <Footer />
    </>
  );
};

export default Alerts;