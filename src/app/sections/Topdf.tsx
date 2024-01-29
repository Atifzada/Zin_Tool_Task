import React from 'react'
import Card from "../components/Card";

export interface slider {
    image: string;
    title: string;
    desc: string;
  }
  
  let mySlider: slider[] = [
    { image: "image16", title: "Word to PDF", desc: "The best word to PDF converter online." },
    { image: "image17", title: "PPT to PDF", desc: "Convert Powerpoint to PDF onilne." },
    { image: "image18", title: "Excel to PDF", desc: "Easily Convert Excel spreadsheet to PDF." },
    { image: "image19", title: "JPG to PDF", desc: "Convert JPG,PNG,BMP,GIF and TIFF images to PDF." },
    { image: "image20", title: "TXT to PDF", desc: "Convert you TXT to PDF online for free." },
  ];
  
const Topdf: React.FC = () =>  {
    return (
        <><h2 className="px-32 pt-16 pb-8 text-4xl font-bold">Convert to PDF</h2>
        <div className="flex w-full px-32 gap-6">
        {mySlider.map((item, index) => (
          <Card key={index} bookmark={item} />
        ))}
      </div></>
    );
}

export default Topdf
