import { Job } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

function SingleJob({ job }: { job: Job }) {
  return (
    <Link href={`/job?id=${job.id}`}>
      <article className="relative bg-card pt-12 pb-9 px-8 rounded-xl flex gap-[2.75rem] flex-col justify-between">
        <Image
          src={job.logo}
          height={50}
          width={50}
          className="w-[50px] h-[50px] object-cover absolute left-8 top-0 translate-y-[-50%]"
          alt={"logo"}
        ></Image>
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <span>{job.postedAt}</span>
            <span className="w-1 h-1 rounded-[50%] bg-secondary-4"></span>
            <span>{job.contract}</span>
          </div>
          <h4 className="text-xl">{job.position}</h4>
          <p>{job.company}</p>
        </div>
        <span className="font-bold text-sm text-primary">{job.location}</span>
      </article>
    </Link>
  );
}
export default SingleJob;
