"use client"
import React, { useState } from 'react';
import Card from "../components/Card";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export interface SliderItem {
  image: string;
  title: string;
  desc: string;
}

const Slider: React.FC = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  let mySlider: SliderItem[] = [
    { image: "image5", title: "PDF to Word", desc: "Easilt convert PDF to Word documnet." },
    { image: "image6", title: "PDF to PPT", desc: "Convert PDF to Powerpoint onilne." },
    { image: "image7", title: "PDF to Excel", desc: "Convert PDF to xls for free." },
    { image: "image8", title: "PDF to JPG", desc: "Convert PDF files to set of optimized JPG,PNG,BMP,G..." },
    { image: "image9", title: "PDF to TXT", desc: "Convert you PDF to TXT, and extact your text from your PDF." },
    { image: "image10", title: "PDF to RTF", desc: "Convert PDF to RTF online and free." },
    { image: "image11", title: "PDF to Pages", desc: "Convert PDF to Pages on Mac and Windows/" },
    { image: "image12", title: "PDF to HTML", desc: "Convert your PDF documents to HTML web page." },
    { image: "image13", title: "PDF to DXF", desc: "The best online tool to convert PDF to DXF online." },
    { image: "image14", title: "PDF to EPUB", desc: "Convert PDF file to EPUB ebook." },
    { image: "image15", title: "OCR", desc: "Convert your scanned PDFs and images to editable Word..." },
  ];

  const totalPages = Math.ceil(mySlider.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = mySlider.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <h2 className="px-32 pt-16 pb-8 text-4xl font-bold">Convert from PDF</h2>
      <div className="flex w-full px-32 gap-6 relative">
        {visibleItems.map((item, index) => (
          <Card key={index} bookmark={item} />
        ))}
        {totalPages > 1 && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{ fontSize: '50px', padding: '95px', color: '#888888'}}
            >
              <IoArrowBackCircleOutline />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 fontSize-16"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{ fontSize: '50px', padding: '95px', color: '#888888'}}
            >
              <IoArrowForwardCircleOutline />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;