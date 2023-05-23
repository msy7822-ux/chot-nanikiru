import { ColorRing } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#29711a", "#29711a", "#29711a", "#29711a", "#29711a"]}
      />
    </div>
  );
};
