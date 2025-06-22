import {GithubLogo, SlackLogo, XLogo, YoutubeLogo} from "@phosphor-icons/react";

function Footer() {
    return (
        <footer
            className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12">
            <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
                <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
                    <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4">
                        <img
                            className="h-5 w-5 flex-none object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                        />
                        <span
                            className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Subframe
              </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <XLogo/>
                        <GithubLogo/>
                        <SlackLogo/>
                        <YoutubeLogo/>
                    </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
                    <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span
                  className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Product
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Features
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Integrations
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Pricing
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Docs
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Download
              </span>
                    </div>
                    <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span
                  className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Company
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                About us
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Blog
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Careers
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Customers
              </span>
                    </div>
                    <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span
                  className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Resources
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Community
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Contact
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Privacy Policy
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Terms of Service
              </span>
                    </div>
                    <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span
                  className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Developers
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                API
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Status
              </span>
                        <span
                            className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Github
              </span>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;