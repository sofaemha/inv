import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AuthFooter() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        onClick={() => {
          router.push("/");
        }}
        className="w-fit hover:underline decoration-dashed underline-offset-5"
        variant="link"
      >
        Go Back
      </Button>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        By continuing, you acknowledge that <br /> you have read, understood,
        and agree to our <br />
        <Link
          href="/terms"
          className="underline decoration-dashed underline-offset-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Terms of Service
        </Link>
        &nbsp; and &nbsp;
        <Link
          href="/privacy"
          className="underline decoration-dashed underline-offset-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
