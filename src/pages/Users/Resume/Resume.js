// import React from "react";
// import resume from "../../../Thumbnails/PDF/Resume.pdf";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css"; // Updated import path
// import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Updated import path

// const Resume = () => {
//   const pdfUrl = resume;
//   const newPlugin = defaultLayoutPlugin();

//   return (
//     <div className="sm:mt-0 mt-8">
//       <div className="w-full">
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//           <Viewer fileUrl={pdfUrl} plugins={[newPlugin]} />
//         </Worker>
//       </div>
//     </div>
//   );
// };

// export default Resume;

import React, { useState, useEffect } from "react";
import request from "../../../api";
import Loader from "../../../components/Loader/Loader";

const Resume = ({ firebasePdfUrl }) => {
  const [pdfContent, setPdfContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setLoading(true);
        const response = await request("/get/resume");
        setPdfContent(response.data.resume[0].resume);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPdf();
  }, [firebasePdfUrl]);

  return (
    <div className="sm:mt-0 mt-8">
      {!loading ? (
        <iframe
          src={pdfContent}
          title="PDF Viewer"
          width="100%"
          height="650px"
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Resume;
