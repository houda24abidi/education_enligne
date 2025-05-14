import React, { useState } from "react";

const LiveClass = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const [submittedLink, setSubmittedLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedLink(meetingLink);
    localStorage.setItem("liveClassLink", meetingLink);

  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إدارة الدروس المباشرة</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2 font-semibold">رابط الحصة المباشرة:</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
          placeholder="https://meet.google.com/..."
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          نشر الرابط
        </button>
      </form>

      {submittedLink && (
        <div className="mt-4">
          <p className="font-semibold">الرابط المنشور:</p>
          <a href={submittedLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            {submittedLink}
          </a>
          
        </div>
        
      )}
      
    </div>
  );
};

export default LiveClass;
