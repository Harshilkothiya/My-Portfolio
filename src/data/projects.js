import sport from "../assets/sc.webp";
import datavis from "../assets/datavis.webp";
import rul from "../assets/RUL.webp";
import farm from "../assets/farm.webp";
import ipl from "../assets/ipl.webp";
import hotel1 from "../assets/hotel1.webp";
import bangalore from "../assets/home.webp";
import smartdoc from "../assets/smartdoc.webp";

const sars = "/aggri2.png";

export const projects = [
  {
    image: sars,
    title: "SAR Image Colorization",
    description: "Uses GANs to convert grayscale Synthetic Aperture Radar (SAR) images into visually meaningful RGB images, improving interpretability for analysis, surveillance, and disaster management.",
    link: "https://github.com/Harshilkothiya/SAR-Image-Colorization",
    demo: "",
    tags: ["GAN", "PyTorch", "Image Processing", "Remote Sensing"]
  },
  {
    image: smartdoc,
    title: "SmartDocs-AI",
    description: "AI chatbot for document Q&A with memory-powered multi-turn conversations using multi-agent RAG.",
    link: "https://github.com/Harshilkothiya/SmartDocs-AI?tab=readme-ov-file",
    demo: "",
    tags: ["LangChain", "Qdrant", "OpenAI", "React"]
  },
  {
    image: rul,
    title: "Remaining Useful Life of Jet Engine",
    description: "Deep learning project utilizing sequence models to predict the RUL of turbofan engines based on sensor data.",
    link: "https://github.com/Harshilkothiya/Remaining-Useful-Life-RUL-of-Jet-Engine.git",
    demo: "",
    tags: ["PyTorch", "LSTMs", "Pandas", "Scikit-Learn"]
  },
  {
    image: farm,
    title: "FarmSmart Crop Recommendation",
    description: "Intelligent framing solution optimizing crop management through data-driven insights and feature engineering.",
    link: "https://github.com/Harshilkothiya/FarmSmart-Crop-Recommendation",
    demo: "",
    tags: ["Machine Learning", "Python", "FastAPI"]
  },
  {
    image: hotel1,
    title: "Hotel Booking App",
    description: "A full-stack MERN application for booking hotels with real-time availability and user authentication.",
    link: "https://github.com/Harshilkothiya/My-Hotel",
    demo: "",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    image: ipl,
    title: "IPL Win Probability",
    description: "Machine learning model predicting the win probability of IPL teams based on live match state variables.",
    link: "https://github.com/Harshilkothiya/IPL-win-probability",
    demo: "",
    tags: ["Scikit-Learn", "XGBoost", "Python"]
  },
  {
    image: bangalore,
    title: "Bangalore Home Price Prediction",
    description: "Predictive model for property price estimation based on location and real-estate features with deployed endpoint.",
    link: "https://github.com/Harshilkothiya/Bangalore-Home-Price-Prediction",
    demo: "",
    tags: ["Regression", "Flask", "Pandas"]
  },
  {
    image: sport,
    title: "Sports Celebrity Image Classification",
    description: "Custom CNN architecture to classify sports celebrities using cropped face datasets and image augmentation.",
    link: "https://github.com/Harshilkothiya/Sports-Celebrity-Image-Classification",
    demo: "",
    tags: ["TensorFlow", "OpenCV", "CNNs"]
  },
  {
    image: datavis,
    title: "Data Visualization",
    description: "Interactive dashboard visualizing road accidents and crime rates in India to highlight regional risk factors.",
    link: "https://github.com/Harshilkothiya/Data-visualization",
    demo: "",
    tags: ["Power BI", "Data Analytics"]
  }
];
