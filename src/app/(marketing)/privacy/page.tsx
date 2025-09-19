
export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
              <h1>Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <p>
                Welcome to BudgetChain AI ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you register with the application.</li>
                <li><strong>Public Blockchain Data:</strong> We access publicly available data associated with the wallet addresses you provide. This includes transaction history, token balances, and on-chain activities. We do not and cannot access your private keys or seed phrases.</li>
                <li><strong>Usage Data:</strong> Information our servers automatically collect when you access the app, such as your IP address, browser type, and the pages you have viewed.</li>
              </ul>

              <h2>2. Use of Your Information</h2>
              <p>
                Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Generate portfolio analysis and AI-driven insights.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
                <li>Notify you of updates to the application.</li>
                <li>Respond to your comments and questions and provide customer service.</li>
              </ul>

              <h2>3. Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. We may share information we have collected about you in certain situations:
              </p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis and email delivery.</li>
              </ul>
              
              <h2>4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your information. While we have taken reasonable steps to secure the information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>5. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p>
                    BudgetChain AI<br/>
                    123 Crypto Lane, Metaverse City<br/>
                    <a href="mailto:privacy@budgetchain.ai">privacy@budgetchain.ai</a>
                </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
