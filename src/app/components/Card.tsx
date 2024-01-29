import React from "react";
import Image from 'next/image';
import crop from '../../../public/assets/crop.svg';
import edit from '../../../public/assets/edit.svg';
import replace from '../../../public/assets/replace.svg';
import rotate from '../../../public/assets/rotate.svg';
import word from '../../../public/assets/from_pdf/pdf-word.svg'
import ppt from '../../../public/assets/from_pdf/pdf-ppt.svg'
import excel from '../../../public/assets/from_pdf/pdf-excel.svg'
import jpg from '../../../public/assets/from_pdf/pdf-jpg.svg'
import txt from '../../../public/assets/from_pdf/pdf-txt.svg'
import rtf from '../../../public/assets/from_pdf/pdf-rtx.svg'
import page from '../../../public/assets/from_pdf/pdf-page.svg'
import html from '../../../public/assets/from_pdf/pdf-html.svg'
import dxf from '../../../public/assets/from_pdf/pdf-dxf.svg'
import epub from '../../../public/assets/from_pdf/pdf-epub.svg'
import ocr from '../../../public/assets/from_pdf/pdf-ocr.svg'
import fromword from '../../../public/assets/to_pdf/word-pdf.svg'
import fromppt from '../../../public/assets/to_pdf/ppt-pdf.svg'
import fromexcel from '../../../public/assets/to_pdf/excel-pdf.svg'
import fromjpg from '../../../public/assets/to_pdf/jpg-pdf.svg'
import fromtxt from '../../../public/assets/to_pdf/txt-pdf.svg'



interface Bookmark {
  image: string;
  title: string;
  desc: string;
}

interface CardProps {
  bookmark: Bookmark;
}

const getImageSrc = (image: string) => {
  switch (image) {
    case "image1": return crop;
    case "image2": return edit;
    case "image3": return replace;
    case "image4": return rotate;
    case "image5": return word;
    case "image6": return ppt;
    case "image7": return excel;
    case "image8": return jpg;
    case "image9": return txt;
    case "image10": return rtf;
    case "image11": return page;
    case "image12": return html;
    case "image13": return dxf;
    case "image14": return epub;
    case "image15": return ocr;
    case "image16": return fromword;
    case "image17": return fromppt;
    case "image18": return fromexcel;
    case "image19": return fromjpg;
    case "image20": return fromtxt;
     return "";
  }
};

const Card: React.FC<CardProps> = ({ bookmark }) => {
  const imageSrc = getImageSrc(bookmark.image);

  return (
    <div className="flex flex-col justify-center box-content h-44 w-60 py-6 px-4 border rounded-2xl
    hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {imageSrc && (
      <Image src={imageSrc} alt={`${bookmark.image} Image`} width={70} height={70} />
      )}
      <h1 className="text-xl font-bold my-2">{bookmark.title}</h1>
      <p className="text-gray-400">{bookmark.desc}</p>
    </div>
  );
};

export default Card;
