import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-green-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        ABOUT ME
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-48">
        <div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center">
                Site Reliability Engineer
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                JAN 2023 - PRESENT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Developed and managed an enterprise grade solution
                  ("Kubernetes as a Service") for Shell using EKS and AKS which
                  involves key features like backup and recovery, autoscaling,
                  monitoring, security, networking and storage.
                </li>
                <li>
                  Built "Golden Images" for Windows and Linux using packer to
                  provide compliant images right out of the box for the platform
                  users.
                </li>
                <li>
                  Designed and implemented a "Cloud Agnostic" backup solution
                  for Kubernetes that involves automated backup and restore,
                  disaster recovery and reporting.
                </li>
                <li>
                  Built complex workflows using GitHub Actions for deploying
                  cloud infrastructures and Kubernetes objects and thereby
                  reducing the manual efforts and time by 80%.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Kubernetes</Badge>
              <Badge variant="default">Packer</Badge>
              <Badge variant="default">CI/CD</Badge>
              <Badge variant="default">Terraform</Badge>
              <Badge variant="default">Helm</Badge>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center">
                Technical Analyst Cloud
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                MARCH 2022 - DEC 2022
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Involved in the design for migration of Terraform Open-Source
                  edition to Terraform Enterprise edition which in turn helps
                  team to avoid a huge risk of Operational and Cost overhead.
                </li>
                <li>
                  Minimized the delivery time by 90%(approx.) by automating
                  manual tasks like Privileged Identity Management that helped
                  to save time and efforts for the Operations team.
                </li>
                <li>
                  Built a complete monitoring solution for the Cloud
                  Infrastructure resources with the help of native Azure
                  services like Azure Monitor and Azure Log Analytics Workspaces
                  to monitor the logs and metrics.
                </li>
                <li>
                  Worked closely with multiple other teams like IRM (Information
                  Risk Management) and CDT (Cyber Defense Team) to mitigate
                  vulnerabilities in design and code.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Terraform</Badge>
              <Badge variant="default">CI/CD</Badge>
              <Badge variant="default">Monitoring</Badge>
              <Badge variant="default">Security</Badge>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center">
                Software Engineer
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                JULY 2019 - FEB 2022
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Built an Enterprise Grade Cloud Solution ("Cloud as a
                  Service") Azure@Shell that focuses on creating a landing zone
                  to the Shell Internal Businesses, by providing Azure
                  Subscriptions and maintaining it throughout its lifecycle.
                </li>
                <li>
                  Authored multiple Azure Policies to maintain Cloud Security
                  Posture of Azure resources natively by applying restrictions
                  and configuration changes to Azure resources based on
                  requirement.
                </li>
                <li>
                  Developed REST APIs for various use cases with help of
                  PowerShell and C# using Azure Functions.
                </li>
                <li>
                  Built an Event-Driven Workflow with help of Azure EventGrid
                  and Azure Service Bus Queue that helped to minimize Cost when
                  compared to previous architecture.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Terraform</Badge>
              <Badge variant="default">CI/CD</Badge>
              <Badge variant="default">Serverless</Badge>
              <Badge variant="default">Event-Driven</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
