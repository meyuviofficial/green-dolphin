import { VscAzure } from "react-icons/vsc";
import { SiLinuxfoundation } from "react-icons/si";

const cert_data = [
  {
    header: "Certified Kubernetes Application Developer (CKAD)",
    description: "JUN 2023",
    content: [
      "This certification is for Kubernetes engineers, cloud engineers and other IT professionals responsible for building, deploying, and configuring cloud native applications with Kubernetes.",
      "CKAD has been developed by The Linux Foundation and the Cloud Native Computing Foundation (CNCF), to help expand the Kubernetes ecosystem through standardized training and certification.",
    ],
    footer: "Kubernetes",
    icon: <SiLinuxfoundation className="w-16 h-16 self-center" />,
  },
  {
    header: "Microsoft Azure Developer Associate (AZ - 204)",
    description: "Jan 2022",
    content: [
      "This certification tests your proficiency all phases of development, including requirements gathering, design, development, deployment, security, maintenance, performance tuning, and monitoring.",
      "It focusses on the development of Azure compute solutions, Azure storage, PaaS solutions, Azure security, and Azure monitoring.",
    ],
    footer: "Azure",
    icon: <VscAzure className="w-16 h-16 self-center" />,
  },
  {
    header: "Microsoft Azure Fundamentals (Az-900)",
    description: "Jan 2022",
    content: [
      "This certification tests your foundational knowledge of cloud concepts in general and Microsoft Azure in particular. This certification is a common starting point in a journey towards a career in Azure.",
      "It focusses on your knowledge on Cloud concepts of Azure like Networking, Compute and Storage. It also focusses on key areas like Infrastructure management, Database Management and Software Development.",
    ],
    footer: "Azure",
    icon: <VscAzure className="w-16 h-16 self-center" />,
  },
];

export default cert_data;
