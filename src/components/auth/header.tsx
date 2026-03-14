export default function AuthHeader() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* Title & description */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Sign in
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your credentials below to continue.
        </p>
      </div>
    </div>
  );
}
