// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function index() {

//   return (
//     <>
//    <div className="p-10 bg-slate-200">
//    <Link to="/login">
//                     {/* <img src={logo_light} alt="" /> */}
//     <h3>Hello </h3>

//                   </Link>
//    </div>
//     </>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function Index() {
  const [userInput, setUserInput] = useState("");
  const [file, setFile] = useState(null);
  const [assistantContent, setAssistantContent] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAskQuestion = async () => {
    try {
      const formData = new FormData();
      formData.append("user_input", userInput);
      formData.append("file", file);
  
      const response = await axios.post(
        "http://localhost:5001/api/chat",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // In đối tượng response.data ra console để kiểm tra cấu trúc
      console.log("Response from Flask:", response.data);
  
      // Kiểm tra xem có trường "json_response_data" trong đối tượng response.data hay không
      if (response.data && response.data.json_response_data) {
        // ... (phần còn lại của mã)
      } else {
        console.error("Invalid response format from Flask: Missing 'json_response_data'");
      }
    } catch (error) {
      console.error("Error asking question:", error);
    }
  };
  
  return (
    <>
      <div className="p-10 bg-slate-200">
        <input
          type="text"
          placeholder="Ask a question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />

        <button onClick={handleAskQuestion}>Ask</button>

        {/* Hiển thị nội dung từ Flask */}
        {assistantContent && (
          <div>
            <h4>Assistant Content:</h4>
            <pre>{assistantContent}</pre>
          </div>
        )}
      </div>
    </>
  );
}
