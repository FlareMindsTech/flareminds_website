import React from "react";
import { useParams } from "react-router-dom";
import ServicePageTemplate from "../components/layout/ServicePageTemplate";

export default function ServiceDetail() {
  const { slug } = useParams();
  return <ServicePageTemplate slug={slug} />;
}
