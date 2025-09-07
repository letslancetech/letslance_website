import { Navigate, useLocation, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import { useState } from "react";
import { Service } from "../../interfaces/Data";
import useFetch from "../../hooks/useFetch";
import Highlights from "./components/Highlights11";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProject from "./components/FeaturedProject";
import HowWeWork from "./components/HowWeWork";
import Footer from "../HomePage/components/footer";
import GetInTouch from "./components/GetInTouch";
import Blockchain from "./BlockchainDevelopment/Blockchain";
import React from "react";
import AiSolution from "./Aisolution";
import CustomSoftware from "./CustomSoftwareDevelopment";
import WebApplication from "./WebApplicationDevelopment";
import EcommerceDevelopment from "./EcommerceDevelopment";
import MobileAppDevelopment from "./MobileAppDevelopment";
import SoftwareTesting from "./SoftwareTesting";
import UiUxDesign from "./UiUxDesign";
import DedicatedDevelopment from "./DedicatedDevelopment";
import SoftwareProductDevelopment from "./SoftwareProductDevelopment";

export default function ServicePage() {
  const { id } = useParams();
  const serviceId = Number(id);
  const location = useLocation();
  const [service, setService] = useState<Service | null>(null);

  if (!serviceId) return <Navigate to="/" />;

  useFetch<Service[]>("/data/services.json", {
    callback: (data) => {
      setService(data.find((i) => i.id === serviceId) || null);
    },
    dependancies: [location],
  });

  if (!service) return null;

  switch (serviceId) {
    case 1:
      return <CustomSoftware />;
    case 2:
      return <WebApplication />;
    case 5:
      return <EcommerceDevelopment />;
    case 6:
      return <MobileAppDevelopment />;
    // case 5:
    //   return <DedicatedDevelopment service={service} />;
    // case 6:
    //   return <SoftwareProductDevelopment service={service} />;
    case 8:
      return <UiUxDesign />;
    case 7:
      return <SoftwareTesting />;
    case 10:
      return <Blockchain service={service} />;
    case 9:
      return <AiSolution />;

    default:
      return <Navigate to="/" />;
  }
}
