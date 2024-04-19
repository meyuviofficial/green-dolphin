import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <Avatar className="w-32 h-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-8">
        Hello, I'm Yuvi !
      </h1>
      <div className="max-w-full px-96 mt-8">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I'm a Site Reliability Engineer with 5 years of experience in the
          field of DevOps and Cloud Computing. I have worked on various cloud
          platforms like AWS, Azure, and GCP. I have experience in managing and
          deploying applications on Kubernetes and Docker. I have worked on
          various CI/CD tools like Jenkins, GitLab CI, and GitHub Actions. I
          have experience in Infrastructure as Code tools like Terraform and
          CloudFormation. I have experience in monitoring tools like Prometheus,
          Grafana, and ELK Stack.
        </p>
      </div>
    </div>
  );
}
