import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Calculator } from "@/src/component/calculator/calculator";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <div className="main">
      <div className="headercontainer">
      <Image src='/images/weight.png' width={100} height={100} className="icons" alt="logo"/>
      
    <h1 className="head">BMI Calculator</h1>
    </div>
  
    
    <Calculator></Calculator>
    </div>
  );
}
