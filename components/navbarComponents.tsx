import Image from "next/image";
import Link from "next/link";

export default function NavbarComponent({
  name,
  image,
  color,
}: {
  name: string;
  image: string;
  color: string;
}) {
  return (
    <Link
      href={`/software/${name.toLowerCase()}`}
      className={`w-[90%] h-[80px] border-4 border-[--color] shrink-0 rounded-lg flex flex-row items-center justify-start gap-4`}
      style={{ "--color": color } as React.CSSProperties}
    >
      <Image src={image} width={50} height={50} alt={name} className="pl-5" />
      <p className="font-semibold text-[30px]">{name}</p>
    </Link>
  );
}
