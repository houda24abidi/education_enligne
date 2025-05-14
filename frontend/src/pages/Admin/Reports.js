import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reports.css";

function Reports() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch reports from backend
  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setReportData(response.data);
      } catch (err) {
        setError("Erreur lors de la récupération des rapports");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="reports">
      <h2>📊 Tableau de bord des rapports</h2>
      {loading && <p>Chargement des rapports...</p>}
      {error && <p className="error">{error}</p>}
      <div className="report-cards">
        {reportData.map((report) => (
          <div className="report-card" key={report.id}>
            <div className="icon">{report.icon}</div>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <span className="value">{report.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
