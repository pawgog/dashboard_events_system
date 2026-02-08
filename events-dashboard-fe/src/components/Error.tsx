import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ErrorComponent = ({ message }: { message?: string }) => (
  <div className="flex min-h-screen items-center justify-center px-4">
    <Alert className="w-full max-w-lg border-destructive/80 bg-destructive/5 text-destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="text-destructive/80">
        {message ||
          "There was a problem processing your request. Please try again."}
      </AlertDescription>
    </Alert>
  </div>
);

export default ErrorComponent;
