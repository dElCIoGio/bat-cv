
import {Button} from "@/components/ui/button.tsx";
import {
    ArrowBendDownRight,
    Bell, ChartPieSlice,
    Code,
    LockSimpleOpen,
    Plus, Scales, SealCheck,
    Sparkle, Wrench
} from "@phosphor-icons/react";


function HomePage() {
    return (
        <div className="flex h-full w-full flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24">
                <div className="flex w-full flex-col items-start gap-12 px-6 py-6 mobile:px-0 mobile:py-0">
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className=" font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                          AI-powered assistant for the modern software team
                        </span>
                        <span className="font-['Inter'] text-[21px] font-[500] leading-[28px] text-subtext-color -tracking-[0.03em]">
                          Elevate your workflow with intelligent agents. Streamline coding,
                          debugging, and project management with AI.
                        </span>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                        <Button
                            onClick={() => {}}
                        >
                            Start coding smarter
                        </Button>
                        <Button
                            size="default"
                            onClick={() => {}}
                        >
                            Meet your AI assistants <ArrowBendDownRight/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <img
                    className="h-144 w-full flex-none object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
                />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
                <div className="flex w-full flex-col items-center justify-center gap-12">
                    <div className="flex w-full flex-col items-center gap-1">
            <span className="font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.03em]">
              Empowering the world&#39;s most innovative dev teams with AI.
            </span>
                        <span className="font-['Inter'] text-[23px] font-[500] leading-[28px] text-subtext-color -tracking-[0.03em]">
              From AI-first startups to Fortune 500 tech giants.
            </span>
                    </div>
                    <div className="w-full items-center justify-center gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-2">
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417548/shared/xstm8znaw99taqy2omsq.png"
                            />
                        </div>
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417549/shared/jtjkdxvy1mm2ozvaymwv.png"
                            />
                        </div>
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417555/shared/dkh8m7duzxhvdhs0hyxr.png"
                            />
                        </div>
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417531/shared/fwzpu385itsjirvkop07.png"
                            />
                        </div>
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417536/shared/vuaebacyjpqj2yprcwke.png"
                            />
                        </div>
                        <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-md px-6 py-6">
                            <img
                                className="h-10 flex-none object-cover grayscale contrast-200"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417532/shared/ofdixj8whhbrmgahq506.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center px-6 py-40 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
                <div className="flex w-full flex-col items-start gap-16">
                    <div className="flex w-full flex-wrap items-end gap-12">
            <span className="grow shrink-0 basis-0 font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
              Engineered for AI development
            </span>
                        <span className="grow shrink-0 basis-0 font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
              Our platform is built on the principles that define cutting-edge
              AI-powered development: intelligent assistance, rapid iteration,
              and uncompromising quality. Experience the future of coding, where
              AI amplifies human creativity.
            </span>
                    </div>
                    <div className="flex flex-wrap items-start gap-2">
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724705412/uploads/302/rc9vp0qjfzzptopfssad.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                  AI-driven code generation
                </span>
                                <Plus/>
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                  Intelligent project management
                </span>
                                <Plus/>
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724690087/uploads/302/w2ra2yihpofsdy1h4uhy.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                  Enhanced code review &amp; collaboration
                </span>
                                <Plus/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center px-6 pt-40 pb-20 bg-gradient-to-b from-neutral-50 to-transparent">
                <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-start gap-8">
                        <div className="flex w-full flex-col items-start gap-6">
                            <div className="flex items-center gap-2">
                                <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  AI-powered strategic planning
                </span>
                                <ArrowBendDownRight/>
                            </div>
                            <span className="w-full font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                Chart your product&#39;s future
              </span>
                        </div>
                        <div className="flex w-full flex-col items-start">
              <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
                {"Harness AI to align your team intelligence."}
              </span>
                            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                {
                    "Plan, manage, and track AI-driven insights and predictive analytics."
                }
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 overflow-hidden">
                <img
                    className="max-h-[576px] w-full flex-none"
                    src="https://res.cloudinary.com/subframe/image/upload/v1724705485/uploads/302/lynkyfusi4ab4z91o69c.png"
                />
            </div>
            <div className="flex w-full flex-col items-center px-6 pt-16 pb-24">
                <div className="flex w-full flex-wrap items-center justify-center border-t border-solid border-neutral-100">
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-8 border-r border-solid border-neutral-100 pr-12 py-12 mobile:px-6 mobile:py-6">
                        <div className="flex w-full flex-col items-start gap-1">
              <span className="w-full font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.03em]">
                AI-powered code analysis
              </span>
                            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                {
                    "Leverage machine learning to identify potential bugs, security vulnerabilities, and performance bottlenecks."
                }
              </span>
                        </div>
                        <img
                            className="h-72 w-full flex-none object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1724705499/uploads/302/jh06ubduyciizexxi4ep.png"
                        />
                    </div>
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-8 pl-12 py-12 mobile:px-6 mobile:py-6">
                        <div className="flex w-full flex-col items-start gap-1">
              <span className="w-full font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.03em]">
                Intelligent test generation
              </span>
                            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                {
                    "Automatically generate comprehensive test suites based on your code changes, ensuring robust coverage."
                }
              </span>
                        </div>
                        <img
                            className="h-72 w-full flex-none object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
                        />
                    </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-100" />
                <div className="flex w-full flex-wrap items-center justify-center gap-6 border-b border-solid border-neutral-100 py-16">
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center gap-8">
                        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
                          <span className="w-full whitespace-pre-wrap font-['Inter'] text-[24px] font-[500] leading-[28px] text-default-font -tracking-[0.03em]">
                                {"AI-assisted product ideation and roadmapping"}
                          </span>
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-600" />
                                    <span className="whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-brand-700 -tracking-[0.01em]">
                    {"Predictive market analysis"}
                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-300" />
                                    <span className="whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                    {"AI-generated feature suggestions"}
                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-6 w-1 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-300" />
                                    <span className="whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                    {"Smart resource allocation"}
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-6">
                        <img
                            className="h-112 grow shrink-0 basis-0 object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1724690075/uploads/302/ajop7v0t3y1bjmf9obyp.png"
                        />
                    </div>
                </div>
                <div className="flex w-full flex-wrap items-center gap-12 py-16">
                    <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <Sparkle/>
                            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                AI-driven insights
              </span>
                        </div>
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
              Uncover hidden patterns in your development process.
            </span>
                    </div>
                    <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <Bell/>
                            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Smart notifications
              </span>
                        </div>
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
              Receive context-aware alerts and reminders.
            </span>
                    </div>
                    <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <Code/>
                            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Code optimization
              </span>
                        </div>
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
              Automatically refactor and improve code quality.
            </span>
                    </div>
                    <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <ChartPieSlice/>
                            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Predictive analytics
              </span>
                        </div>
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
              Forecast project timelines and resource needs.
            </span>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center px-6 py-40 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
                <div className="flex w-full flex-col items-center justify-center gap-16">
                    <div className="flex w-full flex-wrap items-end gap-12">
                        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
                            <div className="flex items-center gap-2">
                                <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-success-400" />
                                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  AI-enhanced workflows
                </span>
                            </div>
                            <span className="w-full font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                Supercharge your collaboration
              </span>
                        </div>
                        <span className="grow shrink-0 basis-0 font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
              Amplify your team&#39;s capabilities with AI-powered integrations
              that seamlessly connect tools and teams, keeping everyone aligned
              and productive.
            </span>
                    </div>
                    <div className="flex w-full flex-wrap items-start gap-2">
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-80 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724705565/uploads/302/zltdyudg7ksbnmbba3dr.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-4 bg-default-background px-8 py-6">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                    AI-driven code review
                  </span>
                                    <span className="w-full font-['Inter'] text-[17px] font-[500] leading-[24px] text-default-font -tracking-[0.03em]">
                    Automate and enhance pull request reviews with AI
                  </span>
                                </div>
                                <Plus/>
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-80 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-4 bg-default-background px-8 py-6">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                    Intelligent task allocation
                  </span>
                                    <span className="w-full font-['Inter'] text-[17px] font-[500] leading-[24px] text-default-font -tracking-[0.03em]">
                    Optimize team productivity with task assignment
                  </span>
                                </div>
                                <Plus/>
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-80 w-full flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1724705587/uploads/302/pmtf0cxxfdalumkmlstj.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-4 bg-default-background px-8 py-6">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-subtext-color -tracking-[0.01em]">
                    Predictive analytics
                  </span>
                                    <span className="w-full font-['Inter'] text-[17px] font-[500] leading-[24px] text-default-font -tracking-[0.03em]">
                    Forecast project timelines and resource needs
                  </span>
                                </div>
                                <Plus/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full p-8 flex-col items-center justify-center py-40 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
                <div className="flex w-full flex-wrap items-center justify-center gap-24">
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6 py-12 mobile:px-6 mobile:py-12">
                        <div className="flex w-full flex-col items-start gap-6">
                            <div className="flex items-center gap-2">
                                <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-neutral-300" />
                                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Powered by AI
                </span>
                            </div>
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex w-full flex-col items-start gap-8">
                  <span className="w-full font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                    AI development ecosystem
                  </span>
                                    <span className="w-full whitespace-pre-wrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                    {
                        "Our platform's simplicity belies the sophisticated AI technologies working tirelessly beneath the surface, ensuring robustness, security, and unparalleled speed in every interaction."
                    }
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start gap-12 pb-12">
                            <div className="flex w-full items-start gap-12">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  AI-powered Engine
                </span>
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Leverages machine learning for high-performance, predictive
                  synchronization.
                </span>
                            </div>
                            <div className="flex w-full items-start gap-12">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  AI-enhanced security
                </span>
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Adapt to potential security threats, ensuring ironclad
                  protection.
                </span>
                            </div>
                            <div className="flex w-full items-start gap-12">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Adaptive AI scaling
                </span>
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Dynamically scales to meet the needs of teams from startups to
                  global enterprises.
                </span>
                            </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-wrap items-start gap-6 mobile:grid mobile:grid-cols-2">
                            <div className="flex min-w-[96px] grow shrink-0 basis-0 flex-col items-start gap-4">
                                <LockSimpleOpen/>
                                <span className="font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  AI-powered authentication
                </span>
                            </div>
                            <div className="flex min-w-[96px] grow shrink-0 basis-0 flex-col items-start gap-4">
                                <SealCheck/>
                                <span className="font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Predictive compliance
                </span>
                            </div>
                            <div className="flex min-w-[96px] grow shrink-0 basis-0 flex-col items-start gap-4">
                                <Scales/>
                                <span className="font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Smart load balancing
                </span>
                            </div>
                            <div className="flex min-w-[96px] grow shrink-0 basis-0 flex-col items-start gap-4">
                                <Wrench/>
                                <span className="font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  AI-assisted admin tools
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-wrap items-center gap-12 self-stretch">
                        <img
                            className="grow shrink-0 basis-0 self-stretch object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1724705603/uploads/302/lkclawjfmqbsplni4flw.png"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-6 border-b border-solid border-neutral-100 px-6 py-24 bg-gradient-to-t from-neutral-100 via-transparent">
                <div className="flex grow shrink-0 basis-0 flex-wrap items-end justify-center gap-16">
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-16">
                    <span className="w-full whitespace-pre-wrap font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                      {"AI today. \nFuture tomorrow."}
                    </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 mobile:items-center mobile:justify-start">
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => {}}
                        >
                            Start with AI
                        </Button>
                        <Button
                            size="lg"
                            onClick={() => {}}
                        >
                            Schedule demo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;