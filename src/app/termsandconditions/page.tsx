'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side - Branding */}
      <div className="w-1/2 relative h-full flex flex-col border-r border-[#343434] items-center justify-center bg-black p-25">
        {/* Logo Image */}
        <div className="w-full h-1/3.5 flex items-center justify-center">
          <Image
            src="/authPages/BagelLogo.svg"
            alt="Bagel Logo"
            width={600}
            height={240}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Heading Below Image */}
        <h1 className="mt-6 text-left text-xl md:text-xl lg:text-4xl font-bold text-neutral-gray dark:text-cream leading-tight">
          Provision Cloud Infrastructure,{" "}
          <span className="text-[#F5CB5C]">The Easy Way</span>
        </h1>
        <p className="mt-4 text-md md:text-md text-neutral-gray/80 dark:text-cream/80 leading-relaxed text-left max-w-prose">
          Bagel - the easiest way for developers to manage Terraform infrastructure with confidence.
        </p>
      </div>

      {/* Right Side - Terms Content */}
      <div className="w-1/2 bg-[#000000] flex flex-col p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => router.push('/signup')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-3xl font-light">Terms and Conditions</h2>
        </div>

        {/* Terms Content - Scrollable */}
        <div className="flex-1 overflow-y-auto pr-4 text-gray-300 space-y-6">
          <div className="text-sm text-gray-400 mb-4">
            <strong>Last Updated: October 21, 2025</strong>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">1. ACCEPTANCE OF TERMS</h3>
            <p className="leading-relaxed">
              These Terms and Conditions (&quot;Terms&quot;) govern your use of Bagel (the &quot;Software&quot;), an open-source infrastructure deployment platform. By downloading, installing, accessing, or using the Software, you (&quot;User&quot; or &quot;you&quot;) agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Software.
            </p>
            <p className="leading-relaxed mt-2">
              Bagel is provided by [Your Legal Entity Name] (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2. LICENSE AND OPEN SOURCE</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">2.1 License Grant</h4>
            <p className="leading-relaxed mb-3">
              The Software is licensed under the GNU Affero General Public License v3.0 (&quot;AGPL-3.0&quot;). Your use of the Software is subject to the terms of the AGPL-3.0, which is incorporated herein by reference. The full text of the AGPL-3.0 is available at: <span className="text-[#CD9C20]">https://www.gnu.org/licenses/agpl-3.0.html</span>
            </p>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">2.2 License Compliance</h4>
            <p className="leading-relaxed mb-2">You acknowledge and agree that:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The Software is provided under the AGPL-3.0 license terms</li>
              <li>You must comply with all obligations under the AGPL-3.0</li>
              <li>Any modifications or derivative works must also be licensed under AGPL-3.0</li>
              <li>If you run a modified version of the Software on a server and let other users communicate with it, you must provide those users with access to the modified source code</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2 mt-3">2.3 Open Source Nature</h4>
            <p className="leading-relaxed">
              The Software is open source. We make no guarantees regarding the availability, functionality, or support of the Software. You use the Software entirely at your own risk.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">3. SELF-HOSTED AND LOCAL DEPLOYMENT</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">3.1 Local Deployment</h4>
            <p className="leading-relaxed mb-2">Bagel is designed to be self-hosted and deployed locally on your own infrastructure. You are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>The installation, configuration, and operation of the Software</li>
              <li>Your infrastructure, servers, networks, and computing resources</li>
              <li>All data processed, stored, or transmitted through your deployment</li>
              <li>Security of your deployment environment</li>
              <li>Compliance with all applicable laws in your use of the Software</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">3.2 No Company Infrastructure</h4>
            <p className="leading-relaxed">
              We do <strong>NOT</strong> provide hosting services, cloud infrastructure, or managed services. The Software runs entirely on your infrastructure.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">4. NO DATA COLLECTION OR STORAGE BY COMPANY</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">4.1 Data Responsibility</h4>
            <p className="leading-relaxed mb-2">
              <strong className="text-red-400">CRITICAL:</strong> We do <strong>NOT</strong> collect, access, store, process, or transmit any of your data, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Infrastructure code or Terraform configurations</li>
              <li>GitHub credentials or repository data</li>
              <li>Deployment logs or metadata</li>
              <li>Usage analytics or telemetry</li>
              <li>Personal information or user data</li>
              <li>Any data processed by your instance of the Software</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">4.2 Your Data Control</h4>
            <p className="leading-relaxed mb-3">
              All data remains exclusively within your local environment and infrastructure. You have complete control and ownership of all data. We have no access to, visibility into, or responsibility for any data in your deployment.
            </p>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">4.3 Third-Party Integrations</h4>
            <p className="leading-relaxed">
              If you choose to integrate the Software with third-party services (e.g., GitHub, cloud providers), your use of those services is governed by their respective terms of service and privacy policies. We are not responsible for any third-party services or their data handling practices.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. DISCLAIMER OF WARRANTIES</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">5.1 &quot;AS IS&quot; Provision</h4>
            <p className="leading-relaxed mb-2">
              <strong>THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>SECURITY</li>
              <li>ACCURACY</li>
              <li>RELIABILITY</li>
              <li>AVAILABILITY</li>
              <li>ERROR-FREE OPERATION</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">5.2 No Guarantees</h4>
            <p className="leading-relaxed mb-2">
              <strong>WE MAKE NO WARRANTY THAT:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>The Software will meet your requirements</li>
              <li>The Software will be uninterrupted, timely, secure, or error-free</li>
              <li>Results obtained from use of the Software will be accurate or reliable</li>
              <li>Any errors in the Software will be corrected</li>
              <li>The Software is compatible with your systems or infrastructure</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">5.3 Risk Acknowledgment</h4>
            <p className="leading-relaxed mb-2">You acknowledge that:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use of the Software is entirely at your own risk</li>
              <li>You are solely responsible for any damage to your systems or data</li>
              <li>Infrastructure deployment carries inherent risks including data loss, service disruption, and security vulnerabilities</li>
              <li>We provide no guarantee of support, maintenance, or updates</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">6. LIMITATION OF LIABILITY</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">6.1 Maximum Liability</h4>
            <p className="leading-relaxed mb-2">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR CONTRIBUTORS BE LIABLE FOR ANY:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>LOSS OF PROFITS, REVENUE, DATA, OR USE</li>
              <li>BUSINESS INTERRUPTION</li>
              <li>COST OF SUBSTITUTE SERVICES</li>
              <li>SECURITY BREACHES OR UNAUTHORIZED ACCESS</li>
              <li>INFRASTRUCTURE FAILURES OR OUTAGES</li>
              <li>DATA LOSS OR CORRUPTION</li>
            </ul>
            <p className="leading-relaxed mb-3">
              ARISING OUT OF OR RELATED TO THESE TERMS OR USE OF THE SOFTWARE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">6.2 Zero Liability Cap</h4>
            <p className="leading-relaxed mb-3">
              <strong>BECAUSE WE PROVIDE NO HOSTING, SERVICES, OR INFRASTRUCTURE AND COLLECT NO DATA OR FEES, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SOFTWARE SHALL BE ZERO ($0).</strong>
            </p>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">6.3 Essential Purpose</h4>
            <p className="leading-relaxed">
              You acknowledge that this limitation of liability is an essential element of the agreement between you and us, and that we would not provide the Software without these limitations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">7. USER RESPONSIBILITIES</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">7.1 Compliance</h4>
            <p className="leading-relaxed mb-2">You are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Ensuring your use of the Software complies with all applicable laws, regulations, and industry standards</li>
              <li>Obtaining all necessary permissions, licenses, and approvals</li>
              <li>Implementing appropriate security measures</li>
              <li>Backing up your data and configurations</li>
              <li>Testing deployments in non-production environments</li>
              <li>Monitoring and maintaining your deployment</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">7.2 Security</h4>
            <p className="leading-relaxed mb-2">
              You acknowledge that infrastructure deployment and automation tools can pose security risks. You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Securing your deployment environment</li>
              <li>Managing access controls and credentials</li>
              <li>Implementing network security measures</li>
              <li>Regularly updating and patching systems</li>
              <li>Conducting security audits and assessments</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">7.3 Prohibited Uses</h4>
            <p className="leading-relaxed mb-2">You agree <strong>NOT</strong> to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use the Software for any illegal or unauthorized purpose</li>
              <li>Use the Software in a manner that could damage, disable, or impair the Software</li>
              <li>Attempt to gain unauthorized access to any systems or networks through the Software</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon any third-party intellectual property rights</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">8. NO SUPPORT OR MAINTENANCE</h3>
            
            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">8.1 No Obligation</h4>
            <p className="leading-relaxed mb-2">We have no obligation to provide:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Technical support or customer service</li>
              <li>Maintenance, updates, or patches</li>
              <li>Bug fixes or error correction</li>
              <li>Documentation or training</li>
              <li>Compatibility updates</li>
              <li>Security updates</li>
            </ul>

            <h4 className="text-lg font-medium text-[#F5CB5C] mb-2">8.2 Community Support</h4>
            <p className="leading-relaxed">
              Support may be available through community channels (forums, GitHub issues, etc.), but we make no guarantees regarding response times, resolution, or availability of community support.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">CONTACT INFORMATION</h3>
            <p className="leading-relaxed">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-2 text-[#CD9C20]">
              <p>The Bagel Project</p>
              <p>https://thebagelproject.dev/</p>
            </div>
          </section>

          <section className="border-t border-gray-700 pt-6">
            <h3 className="text-xl font-semibold text-white mb-3">ACKNOWLEDGMENT</h3>
            <p className="leading-relaxed mb-2">
              <strong>BY USING THE SOFTWARE, YOU ACKNOWLEDGE THAT:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You have read and understood these Terms</li>
              <li>You agree to be bound by these Terms</li>
              <li>You understand the Software is provided &quot;AS IS&quot; with no warranties</li>
              <li>You understand we have NO access to your data and NO liability for your use</li>
              <li>You are solely responsible for your deployment and use of the Software</li>
              <li>You accept all risks associated with using infrastructure deployment tools</li>
            </ul>
          </section>

          <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-700 mt-8">
            <p><strong>Copyright © 2025 Bagel. Licensed under AGPL-3.0.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}