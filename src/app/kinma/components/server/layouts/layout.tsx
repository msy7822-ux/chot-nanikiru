export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-5 px-10">
      <div>{children}</div>
    </div>
  );
};
