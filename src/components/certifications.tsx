import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiLinuxfoundation } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function Certifications() {
  return (
    <div
      id="certifications"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-sky-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        CERTIFICATIONS
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4 text-center">
        Certifications are very hard to obtain and good to flex. Here are some
        !!
      </p>
      <div className="grid grid-cols-1 auto-rows-max md:grid-cols-3 gap-8 px-48 min-h-max">
        <div>
          <Card className="drop-shadow-lg hover:drop-shadow-2xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center hover:text-sky-600">
                Certified Kubernetes Application Developer (CKAD)
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                Linux Foundations, JUN 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center">
              <SiLinuxfoundation className="w-16 h-16 self-center" />
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  This certification is for Kubernetes engineers, cloud
                  engineers and other IT professionals responsible for building,
                  deploying, and configuring cloud native applications with
                  Kubernetes.
                </li>
                <li>
                  CKAD has been developed by The Linux Foundation and the Cloud
                  Native Computing Foundation (CNCF), to help expand the
                  Kubernetes ecosystem through standardized training and
                  certification.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Kubernetes</Badge>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="drop-shadow-lg hover:drop-shadow-2xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center hover:text-sky-600">
                Microsoft Azure Developer Associate (AZ - 204)
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                Microsoft Azure, Jan 2022
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center">
              <VscAzure className="w-16 h-16 self-center" />
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  This certification tests your proficiency all phases of
                  development, including requirements gathering, design,
                  development, deployment, security, maintenance, performance
                  tuning, and monitoring.
                </li>
                <li>
                  It focusses on the development of Azure compute solutions,
                  Azure storage, PaaS solutions, Azure security, and Azure
                  monitoring.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Azure</Badge>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="drop-shadow-lg hover:drop-shadow-2xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center hover:text-sky-600">
                Microsoft Azure Fundamentals (Az-900)
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                Microsoft Azure, Jan 2022
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center">
              <VscAzure className="w-16 h-16 self-center" />
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  This certification tests your foundational knowledge of cloud
                  concepts in general and Microsoft Azure in particular. This
                  certification is a common starting point in a journey towards
                  a career in Azure.
                </li>
                <li>
                  It focusses on your knowledge on Cloud concepts of Azure like
                  Networking, Compute and Storage. It also focusses on key areas
                  like Infrastructure management, Database Management and
                  Software Development.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Azure</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
