import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/">
      <div className="fixed w-full top-0 left-0 bg-[#333] p-4 text-white">
        <div>ﾁｮｯﾄ何切る！？</div>
      </div>
    </Link>
  );
};
