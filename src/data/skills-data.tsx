import { FaAws, FaDocker, FaGolang, FaPython } from "react-icons/fa6";
import {
  SiAnsible,
  SiAzuredevops,
  SiAzurefunctions,
  SiAzurepipelines,
  SiHelm,
  SiKubernetes,
  SiPacker,
  SiPowershell,
  SiTerraform,
} from "react-icons/si";
import { LiaLinux } from "react-icons/lia";
import { DiWindows } from "react-icons/di";
import { ShellIcon } from "lucide-react";
import { VscAzure } from "react-icons/vsc";

const skills_data = [
  {
    name: "Python",
    icon: <FaPython className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "GoLang",
    icon: <FaGolang className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Terraform",
    icon: (
      <SiTerraform className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
    ),
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Kubernetes",
    icon: (
      <SiKubernetes className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
    ),
  },
  {
    name: "Helm",
    icon: <SiHelm className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Packer",
    icon: <SiPacker className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Powershell",
    icon: (
      <SiPowershell className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
    ),
  },
  {
    name: "Azure Functions",
    icon: (
      <SiAzurefunctions
        className="w-24 h-24 p-4"
        style={{ color: "#f87171" }}
      />
    ),
  },
  {
    name: "Azure DevOps",
    icon: (
      <SiAzuredevops className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
    ),
  },
  {
    name: "Azure Pipelines",
    icon: (
      <SiAzurepipelines
        className="w-24 h-24 p-4"
        style={{ color: "#f87171" }}
      />
    ),
  },
  {
    name: "AWS",
    icon: <FaAws className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Azure",
    icon: <VscAzure className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Linux",
    icon: <LiaLinux className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Windows",
    icon: <DiWindows className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Shell",
    icon: <ShellIcon className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
  {
    name: "Ansible",
    icon: <SiAnsible className="w-24 h-24 p-4" style={{ color: "#f87171" }} />,
  },
];

export default skills_data;
