import React, { useEffect, useState } from "react";

const LiveSession = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    // نسحب الرابط من localStorage (بصفة مؤقتة)
    const savedLink = localStorage.getItem("liveClassLink");
    if (savedLink) {
      setLink(savedLink);
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">الحصة المباشرة</h2>
      {link ? (
        <div>
          <p className="mb-2">الرابط موجود، إضغط للدخول للحصة:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            الدخول للحصة
          </a>
        </div>
      ) : (
        <p className="text-red-600">ما فماش رابط حالي للحصة.</p>
      )}
    </div>
  );
};

export default LiveSession;
