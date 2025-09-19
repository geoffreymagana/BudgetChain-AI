
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Loader2,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { generateDetailedReport, getPortfolioInsights } from "@/app/actions";
import { ReportModal } from "./report-modal";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import ReactMarkdown from "react-markdown";

const suggestedPrompts = [
    "How can I optimize my gas fees?",
    "Analyze the risk in my portfolio.",
    "What are some staking opportunities?",
    "Summarize my portfolio's performance last month."
]

const AIInsights = () => {
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [isInsightsLoading, setIsInsightsLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [insights, setInsights] = useState<string | null>(null);

  const handleGenerateReport = async () => {
    setIsReportLoading(true);
    setReport(null);
    setError(null);
    try {
      const result = await generateDetailedReport();
      if (result.success) {
        setReport(result.report);
        setIsModalOpen(true);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
    } catch (e) {
      setError('Failed to generate report.');
    } finally {
      setIsReportLoading(false);
    }
  };

  const handleGenerateInsights = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInsightsLoading(true);
    setInsights(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    try {
        const result = await getPortfolioInsights(formData);
        if (result.success) {
            setInsights(result.insights);
        } else {
            setError(result.error || "An unknown error occurred.");
        }
    } catch (e) {
        setError("Failed to generate insights.");
    } finally {
        setIsInsightsLoading(false);
    }
  }

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
  }

  return (
    <>
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-primary" />
            AI Insights
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Ask Gemini AI anything about your portfolio.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleGenerateInsights} className="space-y-4">
             <div className="grid gap-2">
                <Textarea 
                    name="query"
                    placeholder="e.g., How can I improve my portfolio's diversification?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex flex-wrap items-center gap-2">
                    {suggestedPrompts.map(prompt => (
                        <Button key={prompt} type="button" size="sm" variant="outline" className="text-xs" onClick={() => handlePromptClick(prompt)}>
                           {prompt}
                        </Button>
                    ))}
                </div>
             </div>
             <Button type="submit" className="w-full text-primary-foreground hover:bg-primary/90" disabled={isInsightsLoading}>
                {isInsightsLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                    </>
                ) : (
                   "Generate Insights"
                )}
             </Button>
          </form>

            {error && <p className="text-destructive text-xs mt-2">{error}</p>}
            
           {insights && (
                <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle>Portfolio Insights</AlertTitle>
                    <AlertDescription>
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown
                                components={{
                                    a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                                    strong: ({node, ...props}) => <strong className="font-bold text-primary" {...props} />,
                                }}
                            >{insights}</ReactMarkdown>
                        </div>
                    </AlertDescription>
                </Alert>
            )}
          
          <div className="pt-4 border-t">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium mb-1">Monthly Portfolio Review</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get a comprehensive AI analysis of your performance and recommendations.
              </p>
              <Button size="sm" className="w-full text-primary-foreground hover:bg-primary/90" onClick={handleGenerateReport} disabled={isReportLoading}>
                {isReportLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Detailed Report"
                )}
              </Button>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground text-center pt-2">
            AI insights are for informational purposes only. Always do your own research.
          </div>
        </CardContent>
      </Card>
      {report && (
        <ReportModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          report={report}
        />
      )}
    </>
  );
};

export default AIInsights;
