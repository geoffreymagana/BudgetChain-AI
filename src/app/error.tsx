
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12">
       <Card className="w-full max-w-md text-center">
        <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <TriangleAlert className="size-8 text-destructive" />
            </div>
            <CardTitle className="mt-4 text-3xl font-bold">Something went wrong!</CardTitle>
            <CardDescription>An unexpected error has occurred.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
                We apologize for the inconvenience. You can try to refresh the page or go back to the dashboard.
            </p>
            <Button onClick={() => reset()}>
                Try Again
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}
