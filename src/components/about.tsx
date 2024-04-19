import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-48">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center">
                ABOUT
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                WHO AM I?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                An Enthusiastic SRE with 4+ years of experience in the Platform
                Engineering space with experience on popular clouds like AWS and
                Azure and container orchestration tools like Kubernetes.
                Automated complex workflows, built enterprise grade solutions
                and maintained the compliance of Cloud Infrastructure in huge
                volumes that are reliable, native, scalable and cost-efficient.
              </p>
            </CardContent>
            <CardFooter>
              <Badge variant="default">AWS</Badge>
              <Badge variant="default">Azure</Badge>
              <Badge variant="default">Kubernetes</Badge>
              <Badge variant="default">Terraform</Badge>
              <Badge variant="default">CI/CD</Badge>
              <Badge variant="default">Security</Badge>
              <Badge variant="default">Helm</Badge>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold tracking-wider text-center">
                EXPERIENCE
              </CardTitle>
              <CardDescription className="font-semibold tracking-wider text-center">
                WHAT DO I DO?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>July 2019 - Feb 2022</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        {/* <div className="w-full md:w-1/2 rounded-lg shadow-md bg-white p-6 flex flex-col items-center"> */}
        {/* <div className="grid grid-flow-col gap-8 mt-16 w-2/3">
          <div>
            <Card className="">
              <CardHeader>
                <CardTitle className="font-bold tracking-wider text-center">
                  ABOUT ME
                </CardTitle>
                <CardDescription className="font-semibold tracking-wider text-center">
                  Let me explain who am I!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  An Enthusiastic SRE with 4+ years of experience in the
                  Platform Engineering space with experience on popular clouds
                  like AWS and Azure and container orchestration tools like
                  Kubernetes. Automated complex workflows, built enterprise
                  grade solutions and maintained the compliance of Cloud
                  Infrastructure in huge volumes that are reliable, native,
                  scalable and cost-efficient.
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What are my Skills?</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  );
}
