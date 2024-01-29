import React from 'react'
import Card from "../components/Card";

export interface slider {
    image: string;
    title: string;
    desc: string;
  }
  
  let mySlider: slider[] = [
    { image: "image5", title: "PDF to Word", desc: "Easilt convert PDF to Word documnet." },
    { image: "image6", title: "PDF to PPT", desc: "Convert PDF to Powerpoint onilne." },
    { image: "image7", title: "PDF to Excel", desc: "Convert PDF to xls for free." },
    { image: "image8", title: "PDF to JPG", desc: "Convert PDF files to set of optimized JPG,PNG,BMP,G..." },
    { image: "image9", title: "PDF to TXT", desc: "Convert you PDF to TXT, and extact your text from your PDF." },
  ];
  
const Frompdf: React.FC = () =>  {
    return (
        <><h2 className="px-32 pt-16 pb-8 text-4xl font-bold">Convert from PDF</h2>
        <div className="flex w-full px-32 gap-6">
        {mySlider.map((item, index) => (
          <Card key={index} bookmark={item} />
        ))}
      </div></>
    );
}

export default Frompdf