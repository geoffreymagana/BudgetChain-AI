
export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
              <h1>Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By using the BudgetChain AI application ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the Service.
              </p>

              <h2>2. The Service</h2>
              <p>
                BudgetChain AI provides a cryptocurrency portfolio tracking and analysis service. The Service aggregates publicly available blockchain data and uses AI models to generate insights. The Service is provided on an "as is" and "as available" basis.
              </p>
              
              <h2>3. No Financial Advice</h2>
              <p>
                The information provided by the Service, including any AI-generated insights or reports, is for informational purposes only. It does not constitute financial, investment, or legal advice. You should not make any financial decisions based on the information provided without conducting your own research and consulting with a qualified professional. You are solely responsible for your investment decisions.
              </p>

              <h2>4. User Accounts</h2>
              <p>
                You are responsible for safeguarding your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>

              <h2>5. Prohibited Activities</h2>
              <p>
                You agree not to use the Service for any unlawful purpose or to engage in any activity that could harm, disable, or overburden the Service.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall BudgetChain AI, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangibles, arising out of or in connection with your use of the Service.
              </p>
              
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>

               <h2>8. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>
                    BudgetChain AI<br/>
                    123 Crypto Lane, Metaverse City<br/>
                    <a href="mailto:legal@budgetchain.ai">legal@budgetchain.ai</a>
                </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
