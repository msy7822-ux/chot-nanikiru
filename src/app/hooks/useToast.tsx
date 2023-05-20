import { toast } from "react-toastify";
export const useToast = () => {
  const notify = ({ text }: { text: string }) => toast(text ?? "");
  return { notify };
};
