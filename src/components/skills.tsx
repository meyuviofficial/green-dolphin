import {
  BiLogoGoLang,
  BiSolidDownArrowCircle,
  BiWindows,
} from "react-icons/bi";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { FaAws, FaDocker, FaPython } from "react-icons/fa6";
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
import { DiAws, DiDocker, DiTerminal, DiWindows } from "react-icons/di";
import { ShellIcon } from "lucide-react";
import { VscAzure } from "react-icons/vsc";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-red-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        SKILLS
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4">
        This section takes you through the list of skills that I possessed over
        the years
      </p>
      <div className="grid grid-cols-4 gap-4 justify-center items-center mx-auto px-4 py-8">
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <FaPython className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <BiLogoGoLang
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiTerraform className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <FaDocker className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiAnsible className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiPacker className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiPowershell
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiKubernetes
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiHelm className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <LiaLinux className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiAzurefunctions
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiAzuredevops
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <DiTerminal className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <SiAzurepipelines
            className="w-24 h-24 p-4"
            style={{ color: "#f87171" }}
          />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <FaAws className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
        <div className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200">
          <VscAzure className="w-24 h-24 p-4" style={{ color: "#f87171" }} />
        </div>
      </div>
      <div>
        <Button asChild variant={"ghost"} className="mt-8 rounded-full">
          <Link href="#certifications">
            <BiSolidDownArrowCircle className="w-12 h-12 px-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
