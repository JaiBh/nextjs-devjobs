import { Button } from "@/components/ui/button";
import { jobs } from "@/utils/jobs";
import Image from "next/image";
import Link from "next/link";

function page({ searchParams }: { searchParams: { id: string } }) {
  const job = jobs.filter((job) => job.id == Number(searchParams.id))[0];
  if (!job) {
    return <p>error</p>;
  }
  return (
    <>
      <section className="relative bg-card rounded-xl flex justify-center section-center-sm mt-[-1rem] md:mt-[-2rem] md:grid md:grid-cols-[auto,_1fr]">
        <div
          className={`max-md:absolute max-md:top-0 max-md:left-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%] rounded-bl-xl`}
        >
          <Image
            src={job.logo}
            height={50}
            width={50}
            alt={"logo"}
            className="w-[50px] h-[50px] object-cover md:hidden"
          ></Image>
          <Image
            src={job.logo}
            height={140}
            width={140}
            alt={"logo"}
            className="h-[140px] w-[140px] object-cover hidden md:block"
          ></Image>
        </div>
        <div className="pt-12 pb-8 md:px-10 grid gap-6 md:flex md:items-center md:justify-between">
          <div className="grid max-md:text-center gap-2">
            <h3>{job.company}</h3>
            <p>{`${job.company}.com`}</p>
          </div>
          <Button
            asChild
            className="capitalize bg-primary-1/20 hover:bg-primary-1/30 text-primary-1 font-bold dark:bg-secondary-1/10 dark:hover:bg-secondary-1/20 dark:text-secondary-1"
          >
            <Link href={"/"}>company site</Link>
          </Button>
        </div>
      </section>
      <section className="section-center-sm mt-4 bg-card rounded-xl px-6 py-10 grid gap-6 md:p-12">
        <div className="grid max-sm:gap-12 md:flex md:justify-between md:items-center">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <span>{job.postedAt}</span>
              <span className="w-1 h-1 rounded-[50%] bg-secondary-4"></span>
              <span>{job.contract}</span>
            </div>
            <h1>{job.position}</h1>
            <h4 className="text-primary-1">{job.location}</h4>
          </div>
          <Button className="font-bold capitalize">apply now</Button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </p>
        <div className="grid gap-4">
          <h3>Requirements</h3>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </p>
          <ul className="grid gap-2">
            <li className="grid grid-cols-[auto,_1fr] gap-8">
              <span className="w-1 h-1 rounded-[50%] bg-primary-1 mt-3"></span>
              <span>Morbi interdum mollis sapien. Sed</span>
            </li>
            <li className="grid grid-cols-[auto,_1fr] gap-8">
              <span className="w-1 h-1 rounded-[50%] bg-primary-1 mt-3"></span>
              <span>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </span>
            </li>
            <li className="grid grid-cols-[auto,_1fr] gap-8">
              <span className="w-1 h-1 rounded-[50%] bg-primary-1 mt-3"></span>
              <span>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </span>
            </li>
            <li className="grid grid-cols-[auto,_1fr] gap-8">
              <span className="w-1 h-1 rounded-[50%] bg-primary-1 mt-3"></span>
              <span>Morbi interdum mollis sapien. Sed</span>
            </li>
          </ul>
        </div>
        <div className="grid gap-4">
          <h3>What You Will Do</h3>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <ul className="grid gap-2">
            <li className="flex items-center gap-8">
              <span className="text-primary-1 font-bold">1</span>
              <span>Morbi interdum mollis sapien. Sed</span>
            </li>
            <li className="flex items-center gap-8">
              <span className="text-primary-1 font-bold">2</span>
              <span>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </span>
            </li>
            <li className="flex items-center gap-8">
              <span className="text-primary-1 font-bold">3</span>
              <span>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </span>
            </li>
            <li className="flex items-center gap-8">
              <span className="text-primary-1 font-bold">4</span>
              <span>Morbi interdum mollis sapien. Sed</span>
            </li>
          </ul>
        </div>
      </section>
      <footer className="mt-16 bg-card py-6">
        <div className="section-center-sm grid md:flex md:items-center md:justify-between">
          <div className="hidden md:grid gap-1">
            <h3>{job.position}</h3>
            <p>{job.company}</p>
          </div>
          <Button className="capitalize font-bold">apply now</Button>
        </div>
      </footer>
    </>
  );
}
export default page;
